<template>
    <div>
        <ProContent />
        <ProFooter />
    </div>
</template>
<style>

</style>
<script>
    import ProFooter from './ProFooter.vue'
    import ProHeader from './ProHeader.vue'
    import ProContent from './ProContent.vue'

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            ProFooter,
            ProHeader,
            ProContent
        }
    }
</script>
