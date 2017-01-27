export default {
    menu: `<div class="main-container-outer">
                <div class="main-container-inner">
                    <div class="container">
                        <ul id="nav">
                            <li><router-link class="selected-menu" to="/" >Старт1</router-link></li>
                            <li><router-link to="/test" >Старт2</router-link></li>
                            <li><router-link to="/test" >Старт3</router-link></li>
                            <li><router-link to="/test" >Старт4</router-link></li>
                            <li><router-link to="/test" >Старт5</router-link></li>
                            <li><router-link to="/" >Старт6</router-link></li>
                        </ul>
                    </div>
                 </div>
                 <div class="content">
                    <router-view class="view"></router-view>
                 </div>
                </div>
            </div>`
}