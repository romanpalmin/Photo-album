require('src/assets/css/main.css');
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import MainContainer from './components/MainContainer.vue'
import tmpl from './utils/templates';

Vue.use(VueRouter);

const routes = [
    {name: 'start', path: '/', component: MainContainer},
    {name: 'test', path: '/test', component: App},
    {name: 'order', path: '/:lang/order', component: App},
    {name: 'shedule', path: '/:lang/shedule', component: App},
    {name: 'sidebar', path: '/:lang/menu/:id', component: App}
];

var router = new VueRouter({
    routes,
    linkActiveClass: 'selected-menu'
});

new Vue({
    router,
    template: tmpl.menu
}).$mount('#app');

