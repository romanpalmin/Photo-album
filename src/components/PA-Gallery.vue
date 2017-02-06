<template>
    <div>
        <div class="container" >
            <div class="row border-bottom">
                <div class="col-6 header">{{title}}</div>
                <div class="col-6 right ">
                    <span class="user-view">
                        Переключить вид:
                    <img class="checker" src="./images/slider-icon.png" width="25" height="25" alt="Слайдер" @click="changeShowType('slider')">
                    <img class="checker" src="./images/table-icon.png" width="25" height="25" alt="Таблица" @click="changeShowType('galery')">
                        <div class="palmira-class"><input type="checkbox"  class="palmira-checkbox"></div>
                    </span>
                </div>
                <div class="palmira-class"><input type="checkbox"  class="palmira-checkbox"></div>
            </div>
        </div>
        <template v-if=" showType === 'galery'">
            <Gallery v-bind:imagesSet='selectTopic' />
        </template>
        <template v-else-if="showType==='slider'">
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

        .header{
            font-weight: 700;
            font-size: larger;
        }

        .border-bottom {
            border-bottom: 1px solid #eeeee5;
            padding-bottom: 10px;
        }
        .user-view{
            line-height: 30px;
            vertical-align: middle;
            display: inline-flex;
            .checker{
                cursor: pointer;
            }
        }
    }


    .palmira-class {
        cursor: zoom-in;
        height: 25px;
        display: table-cell;
        vertical-align: bottom;
    }

    .vkorg-logout, .vkorg-on {
        display: none;
    }

    .palmira-checkbox:not(checked) {
        position: absolute;
        opacity: 0;
    }

    .palmira-checkbox:not(checked) + label {
        cursor: pointer;
        position: relative;
        padding: 0 0 0 60px;
    }

    .palmira-checkbox:not(checked) + label:before {
        content: '';
        position: absolute;
        top: -4px;
        left: 0;
        width: 50px;
        height: 26px;
        border-radius: 13px;
        background: #CDD1DA;
        box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2);
    }

    .palmira-checkbox:not(checked) + label:after {
        content: '';
        position: absolute;
        top: -2px;
        left: 2px;
        width: 22px;
        height: 22px;
        border-radius: 10px;
        background: #FFF;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        transition: all .2s;
    }

    .palmira-checkbox:checked + label:before {
        background: #9FD468;
    }

    .palmira-checkbox:checked + label:after {
        left: 26px;
    }

    .palmira-checkbox:focus + label:before {
        box-shadow: 0 0 0 3px rgba(255, 255, 0, 0.5);
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
