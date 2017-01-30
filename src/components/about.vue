<template>
    <div class="main-container">
        <table class="main-table">

            <tr>
                <td class="top-border-50"><h2 class="font_2">БИОГРАФИЯ</h2></td>
                <td></td>
            </tr>
            <tr>
                <td>
                    <div class="left desc">

                        <p class="font_8">Добро пожаловать на мой сайт.</p>
                        <p class="font_8">Я занимаюсь изготовлением фотокниг и фотоальбомов, а также фотографирую деток в детских садах и в семейном кругу.&#8203; Живу и работаю в Санкт-Петербурге.</p>

                        <p class="font_8">Приглашаю на съемки, предлагаю&nbsp;творческие&nbsp;фотоальбомы с индивидуальным дизайном.</p>

                        <p class="font_8">&nbsp;</p>

                        <p class="font_7"><span style="font-style:italic">Отзывы клиентов:</span></p>

                        <p class="font_8"><span style="font-weight:bold">Лилия, о фотоальбоме для детского сада:</span></p>

                        <p class="font_8">- Маша, благодарю тебя за чудесные фотографии, такие яркие, живые, позитивные. Тебе удавалось на каждом празднике отразить самые удачные моменты, увидеть каждого ребенка, передать его характер! А выпускной альбом вообще вне конкуренции! Очень много сюжетных фотографий, индивидуальный подход к каждому ребенку.&nbsp;</p>

                       <p class="font_8"><span style="font-weight:bold">Александра, о фотосессии:</span></p>

                        <p class="font_8">- Было очень приятно с Вами работать! Все без напряга и как-то способствует раскрепощению: мне очень понравилось, как Вы общались с ребенком и предлагали идеи для фотографий, без напора, но в то же время чувствуешь себя в надежных руках. Спасибо большое за чудесные фото!</p>

                        <p class="font_8"><span style="font-weight:bold">Светлана, о фотоальбоме для детского сада:</span></p>

                        <p class="font_8">-&nbsp;Заказывали у Марии фотоальбом на выпускной в детский сад! Благодарю! Отработано быстро и качественно, к каждому ребёнку найден подход, все счастливые моменты и лица у нас на память навсегда!</p>
                    </div>
                </td>
                <td>
                    <div class="right"><img src="./images/skvo2.png"></div>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <ProFooter/>
                </td>
            </tr>
        </table>
    </div>
</template>
<style>
    .s1 h2 {
        margin: 0;
        line-height: normal;
        letter-spacing: normal;
    }

    .font_2 {
        font: normal normal bold 20px/1.4em play, sans-serif;
        color: #262626;
    }

    .font_7 {
        font: normal normal normal 16px/1.4em play,sans-serif;
        color: #262626;
    }

    .font_8 {
        font: normal normal normal 14px/1.4em play,sans-serif;
        color: #262626;
    }

    .main-table {
        text-align: center;
        width: 100%;
        border-collapse: collapse;
    }

    td {
        width: 50%;
    }

    .desc{
        width:96%;
        text-align: justify;
    }

    .top-border {
        border-top: 1px solid #000;
        height: 2px;
        width: 100%;
    }

    .top-border-50 {
        border-bottom: 1px solid #000;
        height: 2px;
        width: 50%;
        text-align: left;
    }
</style>
<script>

    import ProFooter from './ProFooter.vue'
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
            ProFooter
        }
    }
</script>