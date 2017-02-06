<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 float-left">
                    <template v-for="img in selectedImages">
                        <div class="float-left">
                            <div class="img-wrapper">
                                <img :src="img.urlSmall" @click="showCurrentDetails" :data-id="img.id">
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <modal v-if="showDetails" :url="newUrl"/>
    </div>
</template>
<style scoped lang="less">
    .container {
        position: relative;

        .float-left {
            float: left;
        }
        .img-wrapper {
            width: 96%;
            max-width: 200px;
            margin: 0 auto;
            padding: 10px;;
            img {
                cursor: pointer;
                width: 100%;
                height: auto;
            }
        }
    }


</style>
<script>
    import modal from './PA-ModalComponent.vue'
    export default{
        data(){
            return{
                imgSet: this.imagesSet,
                showDetails: false,
                parentName: '-',
                newUrl: ''
            }
        },
        props: ['imagesSet'],
        methods:{
            getLength: function(){
                return this.imgSet;
            },
            showCurrentDetails: function(evt){
                var id = evt.target.dataset.id;
                if (this.selectedImages && this.selectedImages.length > 0 ) {
                    for (let idx = 0; idx < this.selectedImages.length; idx++){
                        if (this.selectedImages[idx].id === +id){
                            this.newUrl = this.selectedImages[idx].urlBig;
                            this.showDetails = true;
                        }
                    }
                }
            }
        },
        computed: {
            selectedImages: function(){
                return this.imagesSet.items;
            }
        },
        components:{
            modal
        },
    }

</script>
