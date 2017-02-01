require('src/assets/css/main.css');
require('src/assets/css/simple-grid.min.css');
require('src/assets/css/template.css');
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import MainContainer from './components/MainContainer.vue'
import PaMain from './components/PA-Main.vue'
import PaAbout from './components/PA-About.vue'
import PaGalery from './components/Pa-Gallery.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import tmpl from './utils/templates';

Vue.use(VueRouter);

const routes = [
    {name: 'start', path: '/', component: PaMain},
    {name: 'about', path: '/about', component: PaAbout},
    {name: 'show', path: '/show', component: PaGalery},
    {name: 'showGallery', path: '/show/:id', component: PaGalery},
    {name: 'test', path: '/test', component: App}
];

var router = new VueRouter({
    routes,
    linkActiveClass: 'selected-menu'
});

new Vue({
    router,
    template: tmpl.menu
}).$mount('#app');

var btn = document.getElementById('btn-open-menu');
var toggleMenu = document.getElementById('toggleMenu');

btn.addEventListener('click', function () {
    if (toggleMenu.style.display === 'none') {
        toggleMenu.style.display = '';
    } else {
        toggleMenu.style.display = 'none'
    }
});