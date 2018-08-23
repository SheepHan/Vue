//引入一堆
import Vue from 'vue';
import VueRouter from 'vue-router';

//主体
import App from './components/app.vue';
import Home from './components/home.vue'

//安装插件
Vue.use(VueRouter); //挂载属性

//创建路由对象并配置路由规则
let router = new VueRouter({
    //routes
    routes: [
        //一个个对象
        { path: '/home', component: Home }

    ]
});

//new Vue 启动
new Vue({
    el: '#app',
    //让vue知道我们的路由规则
    router: router, //可以简写router
    render: c => c(App),
})