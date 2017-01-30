<template>
    <div>
        <div class="main-content">
            <div class="col col2">
                <div id="slider1" class="inner" :style="changeStyle"></div>
            </div>
            <div class="col col3">1</div>
        </div>
    </div>
</template>
<style scoped lang="less">
    .main-content {
        width: 100%;
        height: 555px;
        padding-top: 50px;
        margin: auto;
        min-width: 1130px;
        .col {
            width: 50%;
            min-width: 555px;
            height: 555px;;
            float: left;
            &.col2 {
                background-color: #729b5c;
            }
            &.col3 {
                float: left;
                background-color: #78f4f6;
            }

            .inner {
                width: 50px;
                height: 50px;
                margin: 0 auto;
                background: #00ee00 url('./images/color.png');
                background-position: 0px -100px;

            }
            .inner {

                transition-property: background-position;
                transition-duration: 0.5s;
            }
        }
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue',
                currentSlider: 0,
                currentPosition: 0
            }
        },
        methods:{
            changeKey: function(){
                let states = [-50, -100, -150, -200, -250, -200, -150, -100];
                this.currentSlider = states[this.currentPosition];
                this.currentPosition++;
                if(this.currentPosition >= states.length){
                    this.currentPosition = 0;
                }
                console.log(this.currentSlider);
            }

        },
        computed:{
            changeStyle: function(){
                return 'background-position: 0px ' + this.currentSlider + 'px;';
            }
        },
        mounted: function(){
            setInterval(this.changeKey, 3000)
        }

    }





</script>
