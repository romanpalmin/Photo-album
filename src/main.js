require('src/assets/css/main.css');
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import MainContainer from './components/MainContainer.vue'
import tmpl from './utils/templates';

Vue.use(VueRouter);

const routes = [
    {name: 'start', path: '/', component: MainContainer},
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

