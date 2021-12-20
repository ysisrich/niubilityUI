// 整个包的入口
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册

import Icon from './icon/index.js'
import Button from './button/index.js'
import Input from './input/index.js'
import Switch from './switch/index.js'
import Dialog from './dialog/index.js'
import './fonts/font-awesome.scss'

import Emotion from './emotion/index.js'
import EmotionInput from './emotion-input/index.js'


// 存储组件列表
const components = [
  Icon,
  Button,
  Input,
  Switch,
  Dialog,

  Emotion,
  EmotionInput
]
const install = function (Vue) {
  // 全局注册所有的组件
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}

// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export  {
  Icon,
  Button,
  Input,
  Switch,
  Dialog,

  Emotion,
  EmotionInput
}

export default {
  install
}
