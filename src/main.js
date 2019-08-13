import Vue from 'vue'
import router from './router'
import App from './App'
import store from './store'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
 
Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)
 
new Vue({
    el:'#app',
    router,
    store,
    template:'<App/>',
    components:{App}
})