<template>
    <div class="container frame">
        <div class="photo">
            <div class="img-wrapper">
                <div class="photo">
                    <img :src="imageUrl">
                    <div class="close-img" @click="closeImg">X</div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
    .img-wrapper {
        width: 96%;
        margin: 0 auto;
        padding: 20px;

        img {
            width: 100%;
        }
        .photo {
            opacity: 1;
            position: relative;
            .close-img {
                text-align: center;
                position: absolute;
                width: 80px;
                height: 80px;
                right: -25px;
                top: -25px;
                border-radius: 50%;
                cursor: pointer;
                background-color: #b0b6bb;
                display: table-cell;
                vertical-align: middle;
                line-height: 80px;
                font-size: 30pt;
                color: #ffffff;
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
        },
        props: ['imagesSet', 'imageId', 'imageUrl'],
        methods:{
            closeImg : function(){
                this.$parent.showType = 'galery';
            }
        }
    }

</script>
