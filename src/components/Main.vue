<template>
    <div class="main-container">
        <div class="inner-container">
            <table>
                <tr class="header">
                    <td>
                        <div class="main-container-outer">
                            <div class="main-container-inner">
                                <div class="container">
                                    <div class="name-header">
                                        <span class="name">Мария </span>
                                        <span class="family">Скворцова. </span>
                                        <span class="designer">Фотограф. Дизайнер</span>
                                    </div>
                                    <ul id="nav">
                                        <li>
                                            <router-link to="/">Обо мне</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/test">Фотосессии</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/test">Праздники</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/test">Фотоальбомы</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/test">Фото в детcком саду</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/">Главная</router-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="content">
                                    <router-view class="view"></router-view>
                                </div>
                            </div>

                        </div>

                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<style scoped lang="less">
    .main-container {

    }
</style>

<script>
    import ProFooter from './ProFooter.vue'

    export default{
        data(){
            return {
                msg: 'Футер'
            }
        },
        components:
            ProFooter

    }
</script>