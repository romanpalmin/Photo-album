export default {
    menu: `<div class="main-container-outer">
                <div class="main-container-inner">
                    <div class="container">
                    <div class="name-header">
                        <span class="name">Мария </span>
                        <span class="family">Скворцова. </span>
                        <span class="designer">Фотограф. Дизайнер</span> 
                    </div>
                        <ul id="nav">                       
                            <li><router-link to="/about" >Обо мне</router-link></li>
                            <li><router-link to="/test" >Фотосессии</router-link></li>
                            <li><router-link to="/test" >Праздники</router-link></li>
                            <li><router-link to="/test" >Фотоальбомы</router-link></li>
                            <li><router-link to="/test" >Фото в детcком саду</router-link></li>
                            <li><router-link to="/" >Главная</router-link></li>                                                                                      
                        </ul>
                    </div>
                    <div class="content">
                        <router-view class="view"></router-view>
                    </div>
                 </div>
                 
                </div>
            </div>`
}