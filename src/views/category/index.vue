<template>
  <div class="category">
    <div class="cate-top">
      <el-button type="primary" class="cate-add" @click="addCategory">添加</el-button>
      <el-input v-model="input" class="cate-sousuo" placeholder="请输入栏目名称" clearable></el-input>
      <el-button type="primary" class="cate-find" @click="search">查询</el-button>
    </div>
    <div class="cate-bottom">
      <el-table :data="cateInfo" stripe style="width: 100%;">
        <el-table-column prop="id" label="编号" width="100px" align="center"></el-table-column>
        <el-table-column prop="name" label="栏目名称" width="250px" align="center"></el-table-column>
        <el-table-column prop="num" label="序号" width="250px" align="center"></el-table-column>
        <el-table-column prop="parentId" label="父栏目" width="230px" align="center"></el-table-column>
        <el-table-column label="操作" width="185px" align="center" color="lightblue" class="caozuo">
          <template slot-scope="scope">
            <a class="caozuo" @click="deleteById(scope.row)">删除</a>&nbsp;&nbsp;
            <a class="caozuo" @click="change(scope.row)">编辑</a>&nbsp;&nbsp;
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="cate-footer">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
    <!-- 添加/修改模态框 -->
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="myform">
        <el-form-item label="栏目名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="序号" :label-width="formLabelWidth" prop="num">
          <el-input v-model.number="form.num" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属栏目" :label-width="formLabelWidth" prop="parentId">
          <el-select v-model="form.parentId" placeholder="请选择所属栏目">
            <el-option :label="item" :value="item" v-for="item in categoryInfo" :key="item"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" style="margin-top:-50px">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="formSave('myform')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import qs from 'querystring'

export default {
  name: 'Category',
  data() {
    return {
      input: '',
      cateInfo: [],
      total: 0,
      currentPage1: 1,
      pageSize: 6,
      filterList1:[],
      dialogFormVisible: false,
      title: '添加产品信息',
      form: {
        name: '',
        num:'',
        parentId:''
      },
      //表单验证规则
      rules: {
        name: [
          { required: true, message: '请输入栏目名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        num: [
          { required: true, message: '请输入序号'},
          { type:"number"}
        ],
        parentId: [
          { required:true, message: '请选择所属栏目', trigger: 'change' }
        ]
      },
      formLabelWidth: '120px'
    }
  },
  computed:{
    categoryInfo: function(){
      var filterList=[];
      var set = new Set(this.filterList1);//将filterList1转换为set集合去重
      //console.log(set);
      filterList=Array.from(set);  //将集合再转换为数组
      //console.log(filterList);
      return filterList;
    }
  },
  created() {
    this.findAll();
    this.categoryFind();
  },
  methods: {
    //获取所属栏目数组
    categoryFind(){
      var self=this;
      this.$axios.get("/category/findAll").then((response)=>{
        response.data.data.forEach(function(item) {
          //if(item.parentId!=null){
            self.filterList1.push(item.parentId);
          //}
          //console.log(self.filterList1);
        });
      })
    },
    //给确定按钮绑定事件
    formSave(formName) {
      var self=this;
      //1.获取表单数据，表单验证
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');
          //2.发送请求
          self.$axios.post("/category/saveOrUpdate",qs.stringify(self.form)).then((response)=>{
            // console.log(response);
            if(response.data.status == 200){
              //保存成功
              this.$message({
                message: '保存成功',
                type: 'success'
              });
              self.findAll();
            }else{
              //保存失败
              this.$message.error('保存失败');
            }
            self.dialogFormVisible = false;
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    //添加功能
    addCategory(){
      this.dialogFormVisible=true;
      this.title="添加栏目信息";
      this.form={};
    },
    //编辑功能
    change(row){
      this.dialogFormVisible=true;
      this.title="修改栏目信息";
      this.form={
        id:row.id,
        name:row.name,
        num:row.num,
        parentId:row.parentId
      }
    },
    //查询功能
    search(){
      if(this.input){
        this.findAll(this.input);
      }else{
        this.findAll();
      }
    },
    findAll(name) {
      var currentPage1 = this.currentPage1 - 1;
      if(name){
        var data = {
          page: currentPage1,
          pageSize: this.pageSize,
          name:name
        }
      }else{
        var data = {
          page: currentPage1,
          pageSize: this.pageSize
        }
      }
      this.$axios.post('/category/query',qs.stringify(data)).then((response) => {
        //console.log(response);
        this.cateInfo = response.data.data.list;
        this.total = response.data.data.total;
      })
    },
    //分页查询封装函数
    handleSizeChange(val) {
      //console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      //console.log(`当前页: ${val}`);
      this.findAll();
    },
    //删除功能
    deleteById(row) {
      var self = this;
      this.$confirm('此操作将永久删除该产品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var id = row.id;
        self.$axios.get('/category/deleteById',{
          params: {
            id
          }
        }).then((response) => {
          if(response.data.status==200){
            //删除成功
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            self.findAll();
          }else{
            //删除失败
            this.$message.error(response.data.message);
          }
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
  }
}
</script>

<style lang="scss" scoped>
.cate-add{
  width: 56px;
  height: 32px;
  font-size: 12px;
  padding: 9px 15px;
  margin:15px;
}
.cate-sousuo{
  width: 200px;
  height: 40px;
  margin: 18px 10px;
}
.cate-find{
  width: 56px;
  height: 32px;
  font-size: 12px;
  padding: 9px 15px;
}
.cate-bottom{
  margin-left: 20px;
  margin-top: -10px;
}
.caozuo{
  display: inline-block;
  border: 1px solid white;
  color: #1890ff;
  font-size: 12px;
  margin-left: 10px;
}
.cate-footer{
  margin: 10px 20px;
}
</style>
