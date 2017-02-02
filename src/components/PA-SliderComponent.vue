<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <carousel :auto="3000" :watch-items="selectedImages">
                        <carousel-item v-for="(item, index) in selectedImages">
                            <p>CarouselItem{{index}}, URL is {{item.url}}</p>
                            <div class="img-wrapper"><img :src=item.url></div>
                        </carousel-item>

                        <div slot="before">Insert node before</div>
                        <div slot="after">Insert node after</div>
                    </carousel>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
    .img-wrapper {
        width: 96%;
        max-width: 600px;
        margin: 0 auto;
        padding: 10px;;
        img {
            cursor: pointer;
            width: 100%;
            height: auto;
        }
    }
</style>
<script>
    import { Carousel, CarouselItem } from 'vue-l-carousel'
    export default{
        data(){
            return{
                currentNumber: 0,
            }
        },
        props: ['imagesSet'],
        computed: {
            selectedImages: function(){
                var newList = [];
                var item;
                console.log(this.imagesSet.items);
                for (var i = 0; i < this.imagesSet.items.length; i++){
                    item = {'url': this.imagesSet.items[i].urlBig};
                    newList.push(item);
                }
                console.log(newList);
                return newList;
            }
        },

        watch: {
            selectedImages: function(){
                console.log('Данные изменились...');
            }
        },
        components: {
        'carousel': Carousel,
        'carousel-item': CarouselItem
        }
     }




</script>
