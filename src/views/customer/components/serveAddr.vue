<template>
    <div id="serveAddr">
        <el-table :data="address" stripe style="width: 100%;">
            <el-table-column prop="id" label="编号" width="170px" align="center"></el-table-column>
            <el-table-column prop="province" label="省" width="170px" align="center"></el-table-column>
            <el-table-column prop="city" label="市" width="170px" align="center"></el-table-column>
            <el-table-column prop="area" label="区/县" width="170px" align="center"></el-table-column>
            <el-table-column prop="address" label="街道" width="170px" align="center"></el-table-column>
            <el-table-column prop="telephone" label="手机号" width="170px" align="center"></el-table-column>
      </el-table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            address:[]
        }
    },
    created(){
        var self=this;
        this.$axios.get("/address/findByCustomerId",{
            params:{
                id:this.$route.query.id
            }
        }).then((response)=>{
            //console.log(response);
            self.address=response.data.data;
        })
    }
}
</script>
<style lang="scss" scoped>

</style>