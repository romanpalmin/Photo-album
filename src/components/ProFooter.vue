<template>
    <div class="container">
        <footer>
            <div class="copyright">&copy 2016 «Мария Скворцова».</div>
            <div class="email">Email: <a href="umaria-skvo@yandex.ru">maria-skvo@yandex.ru</a>  </div>
            <div class="phone">phone</div>
            <div class="social">social</div>
        </footer>
    </div>
</template>
<style scoped lang="less">
    .container {
        min-width: 1024px;
        width: 100%;
        footer {
            white-space: nowrap;
            height: 20px;
            width: 100%;
            margin: auto;
                      padding-top: 2px;
            border-top: 2px solid black;

            div {
                a {
                    text-decoration: none;
                    color: black;
                }
                float: left;
                font-size: 1.2em;
                width:25%;
                .copyright {
                    text-align: left;
                }

                .social {
                    text-align: right;
                }

            }
            .social {
                text-align: right;
            }
            .copyright {
                text-align: left;
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
