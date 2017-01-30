<template>
    <div>
        <div class="main-content">
            <div class="col col2">1</div>
            <div class="col col3">1</div>
        </div>
    </div>
</template>
<style scoped lang="less">
    .main-content {
        width: 100%;
        height: 555px;
        padding-top: 50px;
        margin: auto;
        min-width: 1130px;
        .col {
            width: 50%;
            min-width: 555px;
            height: 555px;;
            float: left;
            &.col2 {
                background-color: #729b5c;
            }
            &.col3 {
                float: left;
                background-color: #78f4f6;
            }
        }
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
