<template>
    <div>

        <div class="main-content">

            <table class="main-table">
                <tr>
                    <td colspan="2" class="top-border"></td>
                </tr>
                <tr>
                    <td>
                        <div class="col col2" :style="changeStyleLeft"></div>
                    </td>
                    <td>
                        <div class="col col3" :style="changeStyleRight"></div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><ProFooter /></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<style scoped lang="less">
    .main-table{
        text-align: center;
        width: 100%;
        border-collapse: collapse;
    }

    td{
        text-align: right;
    }

    .top-border {
        border-top: 1px solid #000;
        height:2px;
        width:100%;
    }

    .main-content {
        width: 100%;
        height: 555px;
        padding-top: 50px;
        margin: auto;
        min-width: 1120px;
    }

    .col {
        width: 50%;
        min-width: 555px;
        max-width: 555px;
        height: 555px;;
        transition-property: background-position;

    }

    .col2 {
        float: right;
        background-color: #729b5c;
        background: #00ee00 url('./images/left-full.png');
        background-position: 0px -0px;
        transition-duration: 0.3s;
        background-repeat: no-repeat
    }

    .col3 {
        float: left;
        background-color: #78f4f6;
        background: #00ee00 url('./images/right-full.png');
        background-position: 0px -0px;
        transition-duration: 0.6s;
        background-repeat: no-repeat
    }
</style>
<script>
    import ProFooter from './ProFooter.vue'

    export default{
        data(){
            return {
                msg: 'hello vue',
                currentSliderLeft: 0,
                currentSliderRight: 0,
                currentPosition: 0
            }
        },
        methods: {
            changeKey: function () {
                let statesLeft = [0, -555, -1110, -1665, -2220, -1665, -1110, -555];
                let statesRight = [-2220, -1665, -1110, -555, 0, -555, -1110, -1665];
                this.currentSliderLeft = statesLeft[this.currentPosition];
                this.currentSliderRight = statesRight[this.currentPosition];
                this.currentPosition++;
                if (this.currentPosition >= statesLeft.length) {
                    this.currentPosition = 0;
                }
                console.log(this.currentSliderLeft);
                console.log(this.currentSliderRight);
            }

        },
        computed: {
            changeStyleLeft: function () {
                return 'background-position: 0px ' + this.currentSliderLeft + 'px;';
            },
            changeStyleRight: function () {
                return 'background-position: 0px ' + this.currentSliderRight + 'px;';
            }
        },
        mounted: function () {
            setInterval(this.changeKey, 5000)
        },
        components:{
            ProFooter
        }

    }


</script>
