<template>
    <div>
        <div class="container" >
            <div class="row border-bottom">
                <div class="col-3">{{title}}</div>
                <div class="col-9 right ">Тип
                    <button class="slider" @click="changeShowType('slider')">Слайдер</button>
                    <button class="galery" @click="changeShowType('galery')">Галерея</button>
                </div>
            </div>
        </div>
        <template v-if=" showType === 'galery'">
            <Gallery v-bind:imagesSet='selectTopic' />
        </template>
        <template v-else-if="showType==='slider'">
            <p>Показываем Слайдер</p>
            <Slider v-bind:imagesSet='selectTopic' />
        </template>
        <template v-else>
            <Gallery v-bind:imagesSet='imagesSet'/>
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
        .border-bottom {
            border-bottom: 1px solid #eeeee5;
            padding-bottom: 10px;
        }
    }


</style>
<script>
    import FooterComponent from './PA-Footer.vue'
    import Gallery from './PA-GalleryComponent.vue'
    import Slider from './PA-SliderComponent.vue'
    import images from './images'

    export default{
        data(){
            return{
                showType: 'galery',
                imagesSet: images,
                title: '',
                routeName: this.getCurrentPathName(),
                selectedTopic: this.selectTopic
            }
        },
        watch:{
            selectedKey: function(){
                return 0;
            }
        },
        computed:{
            selectTopic: function(){
                return this.imagesSet[this.getCurrentPathName()];
            },
            selectedKey: function(){
                this.title = images[this.getCurrentPathName()].name;
                return this.getCurrentPathName();
            }
        },

        methods:{
            changeShowType: function(name){
                this.showType = name;
            },
            getCurrentPathName: function(){
                return this.$route.params.id;
            },
            getTitle: function(){
                return this.imagesSet[this.routeName].name;
            }
        },
        mounted: function(){
            this.title = this.getTitle();
        },
        components:{
            FooterComponent,
            Gallery,
            Slider
        }

    }

</script>
