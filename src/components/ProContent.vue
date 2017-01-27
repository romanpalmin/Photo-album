<template>
    <div>
        <div class="main-content">this is template body {{msg}}</div>
    </div>
</template>
<style  scoped lang="less">
    .main-content{
        width:70%;
        background-color: #8080ff;
        height:200px;
        padding-top:60px;
        margin:auto;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
