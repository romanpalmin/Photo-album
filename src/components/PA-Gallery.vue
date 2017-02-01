<template>
    <div>
        <div class="container">
            <div class="row border-bottom" >
                <div class="col-3">this is Galery Page {{$route.params.id}}</div>
                 <div class="col-9 right ">Тип
                    <button class="slider" @click="changeShowType('slider')">Слайдер</button>
                    <button class="galery" @click="changeShowType('galery')">Галерея</button>
                </div>
            </div>
        </div>
        <template v-if=" showType === 'galery'">
            <Gallery v-bind:imagesSet='imagesSet' />
        </template>
        <template v-else-if="showType==='slider'">
            <p>Показываем Слайдер</p>
        </template>
        <template v-else>
            <Gallery v-bind:imagesSet='imagesSet' />
        </template>
        <FooterComponent/>
    </div>
</template>
<style scoped lang="less">
    .container {
        width: 100%;
        div.img-container {
            width: 96%;
            max-width: 555px;
            margin: 0 auto;
            img {
                width: 100%;
                height: auto;
            }
        }
        .border-bottom{
            border-bottom: 1px solid  #eeeee5;
            padding-bottom: 10px;
        }
    }


</style>
<script>
    import FooterComponent from './PA-Footer.vue'
    import Gallery from './PA-GalleryComponent.vue'
    import images from './images'

    export default{
        data(){
            return{
                showType: 'gallery',
                imagesSet: images,
                imgCount: 6
            }
        },

        components:{
            FooterComponent,
            Gallery
        },
        methods:{
            changeShowType: function(name){
                this.showType = name;
            }
        },
        mounted: function(){
            this.showType = 'gallery'
        }

    }






</script>
