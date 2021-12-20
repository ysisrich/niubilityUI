# emotion 表情包

### 基础用法<br><br>

<nb-emotion :width="400" :height="200"></nb-emotion>

::: details 点击查看代码

```vue
<nb-emotion :width="400" :height="200" @click="handleClick"></nb-emotion>

<script>
export default {
  methods: {
    handleClick(emotion_content, emotion_url) {
      // #微笑;
      // <img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif">
      console.log(emotion_content, emotion_url);
    },
  },
};
</script>
```

:::

### Attributes

| 参数     | 说明           | 类型   | 可选值                     | 默认值    |
| -------- | -------------- | ------ | -------------------------- | --------- |
| width    | 表情包盒子宽度 | number | 默认以 px 为单位           | 400（px） |
| height   | 表情包盒子高度 | number | 默认以 px 为单位           | 200（px） |
| boxStyle | 盒子样式       | object | 可设置盒子阴影、边框半径等 |           |

### Events

| 参数  | 说明           | 类型     | 回调参数               |
| ----- | -------------- | -------- | ---------------------- |
| click | 点击表情包触发 | function | 表情包文字和表情包链接 |

### 表情包输入框<br><br>

<nb-emotion-input :value="input" placeholder="请输入内容" @send="send"></nb-emotion-input>

<script>
    export default {
        data(){
            return {
                input:'',
                html_emotion:''
            }
        },
         methods:{
             send(val){
                 this.html_emotion = val
             }
         }
    }
</script>

<br><br><br><br><br><br><br><br>

<div v-if="html_emotion && html_emotion.length">输出内容：<span v-html="html_emotion"></span></div>

::: details 点击查看代码

```vue
<nb-emotion-input
  v-model="input"
  :placeholder="placeholder"
  @send="send"
></nb-emotion-input>

<div v-if="html_emotion">输出内容：<span v-html="html_emotion"></span></div>

<script>
export default {
  data() {
    return {
      input: "",
      html_emotion: "",
      placeholder: "请输入内容",
    };
  },
  methods: {
    send(val) {
      this.html_emotion = val;
    },
  },
};
</script>
```

:::

### Attributes

| 参数            | 说明           | 类型            | 可选值 | 默认值 |
| --------------- | -------------- | --------------- | ------ | ------ |
| value / v-model | 绑定值         | string / number | —      | —      |
| placeholder     | 输入框占位文本 | string          | —      | —      |

### Events

| 参数 | 说明         | 类型     | 回调参数                    |
| ---- | ------------ | -------- | --------------------------- |
| send | 点击发送触发 | function | html 返回表单内容`html形式` |
