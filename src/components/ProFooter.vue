<template>
    <div class="container">
        <footer>
            <div class="copyright">(c)</div>
            <div class="email">email</div>
            <div class="phone">phone</div>
            <div class="social">social</div>
{{msg}}
        </footer>
    </div>
</template>
<style scoped lang="less">
    .container {
        width: 88%;

        footer {
            background-color: #d8ffee;
            height: 20px;
            width: 100%;
            margin: auto;
            text-align: center;
            padding-top: 2px;

            div {
                float: left;
                font-size: 1.2em;

                .copyright {
                    background-color: #2e2e2e;
                    width: 20%;
                }

                .email {
                    background-color: #2e2e2e;
                    width: 20%;
                }

            }
        }
    }
</style>
<script>
    export default{
        data(){
            return {
                msg: 'Футер'
            }
        }
    }


</script>
