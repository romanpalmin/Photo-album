require('src/assets/css/main.css');
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import MainContainer from './components/MainContainer.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import tmpl from './utils/templates';

Vue.use(VueRouter);

const routes = [
    {name: 'start', path: '/', component: MainContainer},
    {name: 'about', path: '/about', component: About},
    {name: 'main', path: '/main', component: Main},
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

