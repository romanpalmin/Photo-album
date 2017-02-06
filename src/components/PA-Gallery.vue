<template>
    <div>
        <div class="container">
            <div class="row border-bottom">
                <div class="col-6 header">{{title}}</div>
                <div class="col-6 right ">
                    <span class="user-view">
                        <Checker labelTitle="Переключить вид"/>
                    </span>
                </div>
            </div>
        </div>
        <template v-if=" showType === 'galery'">
            <Gallery v-bind:imagesSet='selectTopic'/>
        </template>
        <template v-else-if="showType==='slider'">
            <Slider v-bind:imagesSet='selectTopic'/>
        </template>
        <template v-else-if="showType==='frame'">
            <OneFrame v-bind:imagesSet='imagesSet' v-bind:imageUrl='imageUrl'/>
        </template>
        <template v-else="showType === 'galery'">
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

        .header {
            font-weight: 700;
            font-size: larger;
        }

        .border-bottom {
            border-bottom: 1px solid #eeeee5;
            padding-bottom: 10px;
        }
        .user-view {
            line-height: 30px;
            vertical-align: middle;
            display: inline-flex;
            .checker {
                cursor: pointer;
            }
        }
    }

</style>
<script>
    import FooterComponent from './PA-Footer.vue'
    import Gallery from './PA-GalleryComponent.vue'
    import Slider from './PA-SliderComponent.vue'
    import OneFrame from './PA-Frame.vue'
    import Checker from './PA-CheckerComponent.vue'
    import images from './images'

    export default{
        data(){
            return{
                showType: 'galery',
                imagesSet: images,
                title: '',
                routeName: this.getCurrentPathName(),
                selectedTopic: this.selectTopic,
                checkerTitle: '',
                showFrames: true,
                imageUrl: ''
            }
        },
        watch:{
            selectedKey: function(){
                return 0;
            },
            showFrames: function(){
                if (this.showFrames){
                    this.showType = 'galery';
                }
                else {
                    this.showType = 'slider';
                }
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
            Slider,
            Checker,
            OneFrame
        }

    }



</script>
