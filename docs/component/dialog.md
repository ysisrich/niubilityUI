# Dialog 对话框

### 基本用法<br><br>

<nb-button type="danger" @click="dialogVisiable = true">点击打开 Dialog</nb-button>
<nb-dialog title="tip" top="100px" width="30%" :visible.sync="dialogVisiable">
<template v-slot:title>
<span>提示</span>
</template>
<span>这是一段信息</span>
<template v-slot:footer>
<nb-button @click="dialogVisiable = false">取消</nb-button>
<nb-button type="primary" @click="dialogVisiable = false">确定</nb-button>
</template>
</nb-dialog>

<script>
export default {
    data(){
        return {
            dialogVisiable: false,
        }
    }
}
</script>

::: details 点击查看代码

```vue
<nb-button
  type="danger"
  @click="dialogVisiable = true"
>点击打开 Dialog</nb-button>
<nb-dialog title="tip" top="100px" width="30%" :visible.sync="dialogVisiable">
<template v-slot:title>
<span>提示</span>
</template>
<span>这是一段信息</span>
<template v-slot:footer>
<nb-button @click="dialogVisiable = false">取消</nb-button>
<nb-button type="primary" @click="dialogVisiable = false">确定</nb-button>
</template>
</nb-dialog>

<script>
export default {
  data() {
    return {
      dialogVisiable: false,
    };
  },
};
</script>
```

:::

### Attributes

| 参数                  | 说明                                                                         | 类型                                 | 可选值 | 默认值 |
| --------------------- | ---------------------------------------------------------------------------- | ------------------------------------ | ------ | ------ |
| visible               | 是否显示 Dialog，支持 .sync 修饰符                                           | boolean                              | —      | false  |
| title                 | Dialog 的标题，也可通过具名 slot （见下表）传入                              | string                               | —      | —      |
| width                 | Dialog 的宽度                                                                | string                               | —      | 50%    |
| fullscreen            | 是否为全屏 Dialog                                                            | boolean                              | —      | false  |
| top                   | Dialog CSS 中的 margin-top 值                                                | string                               | —      | 15vh   |
| modal                 | 是否需要遮罩层                                                               | boolean                              | —      | true   |
| modal-append-to-body  | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上 | boolean                              | —      | true   |
| append-to-body        | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true | boolean                              | —      | false  |
| lock-scroll           | 是否在 Dialog 出现时将 body 滚动锁定                                         | boolean                              | —      | true   |
| custom-class          | Dialog 的自定义类名                                                          | string                               | —      | —      |
| close-on-click-modal  | 是否可以通过点击 modal 关闭 Dialog                                           | boolean                              | —      | true   |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog                                             | boolean                              | —      | true   |
| show-close            | 是否显示关闭按钮                                                             | boolean                              | —      | true   |
| before-close          | 关闭前的回调，会暂停 Dialog 的关闭                                           | function(done)，done 用于关闭 Dialog | —      | —      |
| center                | 是否对头部和底部采用居中布局                                                 | boolean                              | —      | false  |
| destroy-on-close      | 关闭时销毁 Dialog 中的元素                                                   | boolean                              | —      | false  |

### Slot

| name   | 说明                    |
| ------ | ----------------------- |
| —      | Dialog 的内容           |
| title  | Dialog 标题区的内容     |
| footer | Dialog 按钮操作区的内容 |

### Events

| 事件名称 | 说明                        | 回调参数 |
| -------- | --------------------------- | -------- |
| open     | Dialog 打开的回调           | —        |
| opened   | Dialog 打开动画结束时的回调 | —        |
| close    | Dialog 关闭的回调           | —        |
| closed   | Dialog 关闭动画结束时的回调 | —        |
