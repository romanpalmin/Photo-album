<template>
    <div>
        <div>this is Main page</div>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="left-block img-container">
                        <img src='./images/1.jpg'>
                    </div>
                </div>
                <div class="col-6">
                    <div class="right-block img-container">
                        <img src='./images/2.jpg'>
                    </div>
                </div>
            </div>
        </div>
        <FooterComponent/>
    </div>
</template>
<style  scoped lang="less">
    .container{
        width:100%;
    }
    div.img-container {
        width: 100%;
        max-width: 555px;
        margin: 0 auto; /* центрируем основной контейнер */
        img {
            width: 100%; /* ширина картинки */
            height: auto; /* высота картинки */
        }
    }
</style>
<script>
    import FooterComponent from './PA-Footer.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            FooterComponent
        }
    }
</script>
