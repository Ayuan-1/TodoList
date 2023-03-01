//引入VUE
import Vue from 'vue'
// 引入app
import App from './App.vue'
Vue.config.productionTip = false


//创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
})