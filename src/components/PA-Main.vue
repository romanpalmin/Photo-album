<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <Slider v-bind:imagesSet='imagesSet'/>
                </div>
            </div>
        </div>
        <FooterComponent/>
    </div>
</template>
<style  scoped lang="less">
    .container{
        width:100%;
        text-align: center;
    }
    div.img-container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto; /* центрируем основной контейнер */
        img {
            width: 100%; /* ширина картинки */
            height: auto; /* высота картинки */
        }
    }
</style>
<script>
    import Slider from './PA-SliderComponent.vue'
    import FooterComponent from './PA-Footer.vue'
    import images from './main-images'
    export default{
        data(){
            return{
                imagesSet: images,
            }
        },
        computed:{
            selectTopic: function(){
                return this.imagesSet;
            }
        },
        components:{
            FooterComponent,
            Slider
        },
        mounted(){
            console.log(images);
        }
    }
</script>
