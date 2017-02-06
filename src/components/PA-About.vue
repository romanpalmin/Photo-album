<template>
    <div>
        <div class='title'>БИОГРАФИЯ</div>
        <div class="container">
            <div class="row">
                <div class="col-7 justify">
                    <p class="font_8">Добро пожаловать на мой сайт.</p>

                        <p class="font_8">Я занимаюсь изготовлением фотокниг и фотоальбомов, а также фотографирую деток в детских садах и в семейном кругу.&#8203; Живу и работаю в Санкт-Петербурге.</p>


                        <p class="font_8">Приглашаю на съемки, предлагаю&nbsp;творческие&nbsp;фотоальбомы с индивидуальным дизайном.</p>


                        <p class="font_7"><span style="font-style:italic;">Отзывы клиентов:</span></p>


                        <p class="font_8"><span style="font-weight:bold;">Лилия, о фотоальбоме для детского сада:</span></p>

                        <p class="font_8">- Маша, благодарю тебя за чудесные фотографии, такие яркие, живые, позитивные. Тебе удавалось на каждом празднике отразить самые удачные моменты, увидеть каждого ребенка, передать его характер! А выпускной альбом вообще вне конкуренции! Очень много сюжетных фотографий, индивидуальный подход к каждому ребенку.&nbsp;</p>


                        <p class="font_8"><span style="font-weight:bold;">Александра, о фотосессии:</span></p>

                        <p class="font_8">- Было очень приятно с Вами работать! Все без напряга и как-то способствует раскрепощению: мне очень понравилось, как Вы общались с ребенком и предлагали идеи для фотографий, без напора, но в то же время чувствуешь себя в надежных руках. Спасибо большое за чудесные фото!</p>


                        <p class="font_8"><span style="font-weight:bold;">Светлана, о фотоальбоме для детского сада:</span></p>

                        <p class="font_8">-&nbsp;Заказывали у Марии фотоальбом на выпускной в детский сад! Благодарю! Отработано быстро и качественно, к каждому ребёнку найден подход, все счастливые моменты и лица у нас на память навсегда!</p>
                </div>
                <div class="col-5">
                    <div class="right-block img-container">
                        <img src='static/img/skvo2.png'>
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
