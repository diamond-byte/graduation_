<template>
    <div id="order_table">
        <el-table :data="orderTimeList" stripe style="width: 100%;">
            <el-table-column prop="id" label="订单编号" width="100px" align="center"></el-table-column>
            <el-table-column prop="orderTime" label="下单时间" width="250px" align="center"></el-table-column>
            <el-table-column prop="total" label="总价" width="180px" align="center"></el-table-column>
            <el-table-column prop="status" label="状态" width="180px" align="center"></el-table-column>
            <el-table-column prop="customerId" label="顾客ID" width="200px" align="center"></el-table-column>
            <el-table-column label="操作" width="100px" align="center" color="lightblue" class="caozuo">
                <template slot-scope="scope">
                    <a class="caozuo" @click="details(scope.row.id)">详情</a>&nbsp;&nbsp;
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            class="pageNum"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="pageSize"
            layout="total, prev, pager, next"
            :total="total">
        </el-pagination>
    </div>
</template>
<script>
import qs from 'querystring'

export default {
    data(){
        return {
            orderList:[],
            total: 1000,
            currentPage1: 1,
            pageSize: 6,
            tagName:''
        }
    },
    computed:{
        orderTimeList:function(){
            this.orderList.forEach((item)=>{
                item.orderTime=new Date(item.orderTime).toLocaleDateString();
                //console.log(item.orderTime);
            })
            return this.orderList;
        }
    },
    methods:{
        //详情按钮绑定事件
        details(id){
            this.$router.push({path:"/detail/index",query:{id}});
        },
        //选项卡切换
        sendItem(name){
            this.tagName=name;
            var self = this;
            var currentPage1 = this.currentPage1-1;
            console.log(name);
            if(name=="所有订单"){
                var data = {
                    page:currentPage1,
                    pageSize:this.pageSize,
                }
            }else{
                var data = {
                    page:currentPage1,
                    pageSize:this.pageSize,
                    status:name
                }
            }
            this.$axios.post("/order/queryPage",qs.stringify(data)).then((response)=>{
                self.orderList=response.data.data.list;
                this.total=response.data.data.total;
            })
        },
        //分页查询封装函数
        handleSizeChange(val) {
            //console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            //console.log(`当前页: ${val}`);
            this.currentPage1 = val;
            this.sendItem(this.tagName);
        }
    }
}
</script>
<style lang="scss" scoped>
.pageNum{
    margin: 10px;
}
</style>