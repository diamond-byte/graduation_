<template>
    <div id="orderInfo">
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
    </div>
</template>
<script>
export default {
    data(){
        return {
            orderList:[]
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
    created() {
        this.findAll();
    },
    methods:{
        //给详情按钮绑定事件
        details(id){
            //alert(id);
            this.$router.push({path:"/staffOrderdetail/index",query:{id}});
        },
        findAll() {
            this.$axios.get('/order/query',{
                params:{
                    id:this.$route.query.id
                }
            }).then((response) => {
                //console.log(response.data);
                this.orderList = response.data.data;
            });
        }
    }
}
</script>
<style lang="scss" scoped>

</style>