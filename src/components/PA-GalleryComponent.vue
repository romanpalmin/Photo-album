<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 float-left">
                    <template v-for="img in selectedImages">
                        <div class="float-left"> <div class="img-wrapper"><img :src="img.urlSmall"></div></div>
                    </template>
                </div>
            </div>
        </div>
        <div class="tester">Закрываем все</div>
    </div>
</template>
<style scoped lang="less">
    .container {
        position: relative;
        .tester{
            background-color: #2c3e50;
            opacity: 0.8;
            width: 96%;
            height: 93%;
            position: absolute;
            top: 0;

        }

        .float-left{
            float: left;
        }
        .img-wrapper{
            width: 96%;
            max-width: 200px;
            margin: 0 auto;
            padding: 10px;;
            img {
                width: 100%;
                height: auto;
            }
        }
    }


</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue',
                imgSet: this.imagesSet
            }
        },
        props: ['imagesSet'],
        methods:{
            getLength: function(){
                return this.imgSet;
            }
        },
        computed: {
            selectedImages: function(){
                var images = this.imagesSet[this.$route.params.id];
                return images ? images.items : [];
            }
        }
    }


</script>
