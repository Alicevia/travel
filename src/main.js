import Vue from 'vue'
import router from './router'
import App from './App'
import store from './store'
import fastClick from 'fastclick'

import './assets/styles/reset.css'
import './assets/styles/border.css'

fastClick.attach(document.body)
 
new Vue({
    el:'#app',
    router,
    store,
    template:'<App/>',
    components:{App}
})