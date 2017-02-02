<template>
    <div>
        <div>БИОГРАФИЯ</div>
        <div class="container">
            <div class="row">
                <div class="col-7 justify">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac vulputate odio. Fusce euismod, arcu nec tincidunt convallis, metus felis interdum turpis, quis lobortis turpis nisi non quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas et augue mi. Praesent eget interdum purus. Curabitur sollicitudin elit cursus euismod faucibus. Sed nec neque metus. Duis ultricies libero volutpat lacus finibus hendrerit. Ut fermentum leo vitae est fermentum consequat. Nulla aliquet velit quam, ac pharetra velit vulputate eget. Donec gravida, augue vitae aliquam blandit, orci dolor ornare dui, nec maximus risus ante vel augue. Donec in lacus enim. Cras pharetra sollicitudin neque, vel condimentum est. Aliquam congue gravida efficitur. Sed gravida vel massa eget interdum. Maecenas euismod iaculis nunc.
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac vulputate odio. Fusce euismod, arcu nec tincidunt convallis, metus felis interdum turpis, quis lobortis turpis nisi non quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas et augue mi. Praesent eget interdum purus. Curabitur sollicitudin elit cursus euismod faucibus. Sed nec neque metus. Duis ultricies libero volutpat lacus finibus hendrerit. Ut fermentum leo vitae est fermentum consequat. Nulla aliquet velit quam, ac pharetra velit vulputate eget. Donec gravida, augue vitae aliquam blandit, orci dolor ornare dui, nec maximus risus ante vel augue. Donec in lacus enim. Cras pharetra sollicitudin neque, vel condimentum est. Aliquam congue gravida efficitur. Sed gravida vel massa eget interdum. Maecenas euismod iaculis nunc.

                </div>
                <div class="col-5">
                    <div class="right-block img-container">
                        <img src='./images/3.jpg'>
                    </div>
                </div>
            </div>
        </div>
        <FooterComponent/>
    </div>
</template>
<style scoped lang="less">
    .container{
        width:100%;
        div.img-container {
            width: 96%;
            max-width: 555px;
            margin: 0 auto;
            img {
                width: 100%;
                height: auto;
            }
        }
    }


</style>
<script>
    import FooterComponent from './PA-Footer.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            FooterComponent
        }
    }




</script>
