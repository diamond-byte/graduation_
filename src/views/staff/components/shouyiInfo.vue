<template>
    <div id="shouyiInfo">
        <el-table :data="shouyi" stripe style="width: 100%;">
            <el-table-column prop="id" label="订单编号" width="250px" align="center"></el-table-column>
            <el-table-column prop="money" label="金额" width="250px" align="center"></el-table-column>
            <el-table-column prop="description" label="描述" width="250px" align="center"></el-table-column>
            <el-table-column prop="transferAccounts" label="凭证" width="250px" align="center"></el-table-column>
       </el-table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            shouyi:[]
        }
    },
    created(){
        var self=this;
        this.$axios.get("/waiter/detailsShou",{
            params:{
                id:this.$route.query.id
            }
        }).then((response)=>{
            //console.log(response);
            self.shouyi=response.data.data;
        })
    }
}
</script>
<style lang="scss" scoped>

</style>