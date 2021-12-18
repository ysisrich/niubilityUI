import Vue from 'vue'
import App from './App.vue'


// import NButton from './components/button/button.vue' 
// Vue.component(NButton.name,NButton)


// 全部引入
import niubilityUi from '../dist/niubility-ui.umd.min'
import '../dist/niubility-ui.css'
Vue.use(niubilityUi)
console.log(niubilityUi)



// 按需引入
// import {Button} from '../dist/niubility-ui1.umd.min'
// import '../dist/niubility-ui1.css'
// Vue.use(Button)
// console.log(Button)


Vue.config.productionTip = false


new Vue({
  render: h => h(App)
}).$mount('#app')
