import Vue from 'vue'
import App from './App.vue'


// 全局自定义指令
Vue.directive('color',function(el,binding){
  el.style.color=binding.value
})





Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
