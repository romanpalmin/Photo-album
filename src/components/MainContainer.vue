<template>
    <div>
        <ProContent />
    </div>
</template>
<style>

</style>
<script>

    import ProHeader from './ProHeader.vue'
    import ProContent from './ProContent.vue'

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            ProHeader,
            ProContent
        }
    }
</script>
