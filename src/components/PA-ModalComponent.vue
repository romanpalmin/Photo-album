<template>
    <div>
        <div class="container modal">
            <div class="row">
                <div class="col-12 top12">
                    <div class="img-wrapper">
                        <div class="photo">
                            <img :src="currentUrlImg">
                            <div class="close-img" @click="closeImg">X</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
    .container {
        .modal {
            background-color: #2c3e50;
            opacity: 1;
            width: 96%;
            height: 90%;
            position: absolute;
            top: 0;
        }

        .top12{
            padding-top: 30px;
        }
        .img-wrapper {
            width: 96%;
            max-width: 400px;
            margin: 0 auto;
            padding: 3px;
            background-color: #eeeee5;
            img {
                width: 100%;
            }
            .photo {
                opacity: 1;
                position: relative;
                .close-img {
                    text-align: center;
                    position: absolute;
                    background-color: #eeeee5;
                    width: 24px;
                    height: 24px;
                    right: -12px;
                    top: -12px;
                    border-radius: 50%;
                    cursor: pointer;
                }
            }

        }
    }

</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue',
                currentUrlImg: this.url
            }
        },
        props: ['url'],
        calculate:{
            currentUrl : function(){
                return this.url;
            }
        },
        methods:{
            closeImg: function(){
                this.$parent.showDetails = false;
            }
        }
    }
</script>
