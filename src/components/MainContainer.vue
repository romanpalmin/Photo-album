<template>
    <div>
        <div><ProHeader/></div>
        <div><ProFooter/></div>
    </div>
</template>
<style>

</style>
<script>
    import ProFooter from './ProFooter.vue'
    import ProHeader from './ProHeader.vue'

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            ProFooter,
            ProHeader
        }
    }
</script>
