export default {
    menu: `
            <div class="container main">
                <div class="row sk-header">
                    <div class="col-12 sk-title">
                        <span class="name">Мария Скворцова. </span>
                        <span class="designer">Фотограф. Дизайнер</span> 
                    </div>
                </div>
                <div class="row sk-menu sk-full-screen">
                    <div class="col-2 menu selected-menu" ><router-link to="/main" >Главная</router-link></div>
                    <div class="col-2 menu"><router-link to="/show/first" >Детский сад</router-link></div>
                    <div class="col-2 menu"><router-link to="/show/second" >Фотоальбомы</router-link></div>
                    <div class="col-2 menu"><router-link to="/show/third" >Праздники</router-link></div>
                    <div class="col-2 menu"><router-link to="/show/next" >Фотосессии</router-link></div>
                    <div class="col-2 right menu"><router-link to="/about" >Обо мне</router-link></div>
                </div>
                
                <div class="row sk-small-screen-button">
                    <div class="col-12">
                        <div id="btn-open-menu"></div>
                    </div>
                </div>
                <div id="toggleMenu" class="row sk-small-screen sk-menu">
                    <div class="col-12 toggle-menu">
                        <router-link to="/" >Главная</router-link><br/>
                        <router-link to="/show/first" >Фото в детском саду</router-link><br/>
                        <router-link to="/show/second" >Фотоальбомы</router-link><br/>
                        <router-link to="/show/third" >Праздники</router-link><br/>
                        <router-link to="/show/next" >Фотосессии</router-link><br/>
                        <router-link to="/about" >Обо мне</router-link>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 sk-content"><router-view class="view"></router-view></div>
                </div>
            </div>`
}