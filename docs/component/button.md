# Button 按钮

### 基础用法<br><br>

<nb-button >默认按钮</nb-button>
<nb-button type="primary" >主要按钮</nb-button>
<nb-button type="success" >成功按钮</nb-button>
<nb-button type="warning" >警告按钮</nb-button>
<nb-button type="info" >信息按钮</nb-button>
<nb-button type="danger">危险按钮</nb-button><br><br>

<nb-button plain  >朴素按钮</nb-button>
<nb-button plain type="primary" >主要按钮</nb-button>
<nb-button plain type="success" >成功按钮</nb-button>
<nb-button plain type="warning" >警告按钮</nb-button>
<nb-button plain type="info" >信息按钮</nb-button>
<nb-button plain type="danger">危险按钮</nb-button><br><br>

<nb-button round  >圆角按钮</nb-button>
<nb-button round type="primary" >主要按钮</nb-button>
<nb-button round type="success" >成功按钮</nb-button>
<nb-button round type="warning" >警告按钮</nb-button>
<nb-button round type="info" >信息按钮</nb-button>
<nb-button round type="danger">危险按钮</nb-button><br><br>

<nb-button circle icon="nb-icon-search"  ></nb-button>
<nb-button circle icon="nb-icon-edit" type="primary" ></nb-button>
<nb-button circle icon="nb-icon-trash" type="success" ></nb-button>
<nb-button circle icon="nb-icon-warning" type="warning" ></nb-button>
<nb-button circle icon="nb-icon-arrow-down" type="info" ></nb-button>
<nb-button circle icon="nb-icon-bug" type="danger"></nb-button>

::: details 点击查看代码

```vue
<nb-button>默认按钮</nb-button>
<nb-button type="primary">主要按钮</nb-button>
<nb-button type="success">成功按钮</nb-button>
<nb-button type="warning">警告按钮</nb-button>
<nb-button type="info">信息按钮</nb-button>
<nb-button type="danger">危险按钮</nb-button>

<nb-button plain>朴素按钮</nb-button>
<nb-button plain type="primary">主要按钮</nb-button>
<nb-button plain type="success">成功按钮</nb-button>
<nb-button plain type="warning">警告按钮</nb-button>
<nb-button plain type="info">信息按钮</nb-button>
<nb-button plain type="danger">危险按钮</nb-button>

<nb-button round>圆角按钮</nb-button>
<nb-button round type="primary">主要按钮</nb-button>
<nb-button round type="success">成功按钮</nb-button>
<nb-button round type="warning">警告按钮</nb-button>
<nb-button round type="info">信息按钮</nb-button>
<nb-button round type="danger">危险按钮</nb-button>

<nb-button circle icon="nb-icon-search"></nb-button>
<nb-button circle icon="nb-icon-edit" type="primary"></nb-button>
<nb-button circle icon="nb-icon-check" type="success"></nb-button>
<nb-button circle icon="nb-icon-message" type="warning"></nb-button>
<nb-button circle icon="nb-icon-star-off" type="info"></nb-button>
<nb-button circle icon="nb-icon-delete" type="danger"></nb-button>
```

:::

### 禁用状态<br><br>

<nb-button disabled  >默认按钮</nb-button>
<nb-button disabled type="primary" >主要按钮</nb-button>
<nb-button disabled type="success" >成功按钮</nb-button>
<nb-button disabled type="warning" >警告按钮</nb-button>
<nb-button disabled type="info" >信息按钮</nb-button>
<nb-button disabled type="danger">危险按钮</nb-button><br><br>

<nb-button disabled plain  >朴素按钮</nb-button>
<nb-button disabled plain type="primary" >主要按钮</nb-button>
<nb-button disabled plain type="success" >成功按钮</nb-button>
<nb-button disabled plain type="warning" >警告按钮</nb-button>
<nb-button disabled plain type="info" >信息按钮</nb-button>
<nb-button disabled plain type="danger">危险按钮</nb-button><br><br>

::: details 点击查看代码

```vue
<nb-button disabled>默认按钮</nb-button>
<nb-button disabled type="primary">主要按钮</nb-button>
<nb-button disabled type="success">成功按钮</nb-button>
<nb-button disabled type="warning">警告按钮</nb-button>
<nb-button disabled type="info">信息按钮</nb-button>
<nb-button disabled type="danger">危险按钮</nb-button>

<nb-button disabled plain>朴素按钮</nb-button>
<nb-button disabled plain type="primary">主要按钮</nb-button>
<nb-button disabled plain type="success">成功按钮</nb-button>
<nb-button disabled plain type="warning">警告按钮</nb-button>
<nb-button disabled plain type="info">信息按钮</nb-button>
<nb-button disabled plain type="danger">危险按钮</nb-button>
```

:::

### 图标按钮<br><br>

<nb-button type="primary" icon="nb-icon-edit"></nb-button>
<nb-button type="primary" icon="nb-icon-share"></nb-button>
<nb-button type="primary" icon="nb-icon-refresh"></nb-button>
<nb-button type="primary" icon="nb-icon-search">搜索</nb-button>
<nb-button type="primary">上传<i class="nb-icon-upload nb-icon--right"></i></nb-button>

::: details 点击查看代码

```vue
<nb-button type="primary" icon="nb-icon-edit"></nb-button>
<nb-button type="primary" icon="nb-icon-share"></nb-button>
<nb-button type="primary" icon="nb-icon-refresh"></nb-button>
<nb-button type="primary" icon="nb-icon-search">搜索</nb-button>
<nb-button type="primary">上传
    <i class="nb-icon-upload nb-icon--right"></i>
</nb-button>
```

:::

### 加载按钮<br><br>

<nb-button type="primary" loading></nb-button>
<nb-button type="primary" icon="nb-icon-circle-o-notch nb-icon-spin" ></nb-button>
<nb-button type="primary" loading>加载中</nb-button>

::: details 点击查看代码

```vue
<nb-button type="primary" loading></nb-button>
<nb-button
  type="primary"
  icon="nb-icon-circle-o-notch nb-icon-spin"
></nb-button>
<nb-button type="primary" loading>加载中</nb-button>
```

:::

### 动画按钮<br><br>

<script>
export default {
    data(){
        return{
            buttonAnimateList1:[
                { animate:"grow", type:"" },{ animate:"shrink", type:"primary" },{ animate:"pulse", type:"success" },{ animate:"pulse-grow", type:"warning" },{ animate:"pulse-shrink", type:"info" },{ animate:"push", type:"danger" },
            ],
            buttonAnimateList2:[
                { animate:"pop", type:"" },{ animate:"bounce-in", type:"primary" },{ animate:"bounce-out", type:"success" },{ animate:"rotate", type:"warning" },{ animate:"grow-rotate", type:"info" },{ animate:"float", type:"danger" },
            ],
            buttonAnimateList3:[
                { animate:"sink", type:"" },{ animate:"bob", type:"primary" },{ animate:"hang", type:"success" },{ animate:"skew", type:"warning" },{ animate:"skew-forward", type:"info" },{ animate:"skew-backward", type:"danger" },
            ],
            buttonAnimateList4:[
                { animate:"wobble-horizontal", type:"" },{ animate:"wobble-vertical", type:"primary" },{ animate:"wobble-top", type:"info" },{ animate:"buzz", type:"danger" },{ animate:"wobble-to-bottom-right", type:"success" },{ animate:"wobble-to-top-right", type:"warning" },{ animate:"wobble-bottom", type:"warning" },{ animate:"wobble-skew", type:"warning" },
                { animate:"buzz-out", type:"info" }
            ]
        }
    }
}
</script>

<nb-button style="margin:10px 15px 0px 0;" v-for="item in buttonAnimateList1" :animate="item.animate" :type="item.type">{{item.animate}}</nb-button>
<nb-button style="margin:10px 15px 0px 0;" v-for="item in buttonAnimateList2" :animate="item.animate" :type="item.type">{{item.animate}}</nb-button>
<nb-button style="margin:10px 15px 0px 0;" v-for="item in buttonAnimateList3" plain :animate="item.animate" :type="item.type">{{item.animate}}</nb-button>
<nb-button style="margin:10px 15px 0px 0;" v-for="item in buttonAnimateList4" plain round :animate="item.animate" :type="item.type">{{item.animate}}</nb-button>

::: details 点击查看代码

```vue
<nb-button animate="grow"></nb-button>
<nb-button animate="shrink" type="primary"></nb-button>
<nb-button animate="pulse" type="success"></nb-button>
<nb-button animate="pulse-grow" type="warning"></nb-button>
<nb-button animate="pulse-shrink" type="info"></nb-button>
<nb-button animate="push" type="danger"></nb-button>

<nb-button animate="pop"></nb-button>
<nb-button animate="bounce-in" type="primary"></nb-button>
<nb-button animate="bounce-out" type="success"></nb-button>
<nb-button animate="rotate" type="warning"></nb-button>
<nb-button animate="grow-rotate" type="info"></nb-button>
<nb-button animate="float" type="danger"></nb-button>

<nb-button plain animate="sink"></nb-button>
<nb-button plain animate="bob" type="primary"></nb-button>
<nb-button plain animate="hang" type="success"></nb-button>
<nb-button plain animate="skew" type="warning"></nb-button>
<nb-button plain animate="skew-forward" type="info"></nb-button>
<nb-button plain animate="skew-backward" type="danger"></nb-button>

<nb-button plain round animate="wobble-horizontal"></nb-button>
<nb-button plain round animate="wobble-vertical" type="primary"></nb-button>
<nb-button plain round animate="wobble-top" type="success"></nb-button>
<nb-button plain round animate="wobble-bottom" type="success"></nb-button>
<nb-button plain round animate="wobble-to-top-right" type="success"></nb-button>
<nb-button plain round animate="buzz" type="warning"></nb-button>
<nb-button plain round animate="wobble-skew" type="info"></nb-button>
<nb-button plain round animate="buzz-out" type="danger"></nb-button>
```

:::

<br>
<br>
<br>

### Attributes

| 参数     | 说明           | 类型    | 可选值                                        | 默认值 |
| -------- | -------------- | ------- | --------------------------------------------- | ------ |
| type     | 类型           | string  | primary / success / warning / danger / info   | —      |
| plain    | 是否朴素按钮   | boolean | —                                             | false  |
| round    | 是否圆角按钮   | boolean | —                                             | false  |
| circle   | 是否圆形按钮   | boolean | —                                             | false  |
| disabled | 是否禁用状态   | boolean | —                                             | false  |
| icon     | 图标类名       | string  | nb-icon-图标名 （Icon 图标）                  | false  |
| loading  | 是否加载中状态 | boolean | nb-icon-图标名 （Icon 图标）                  | —      |
| animate  | 按钮动画       | string  | 动画名：grow / shrink / pulse / pulse-grow 等 | —      |

### Events

| 参数  | 说明     | 类型     | 默认值 |
| ----- | -------- | -------- | ------ |
| click | 点击调用 | function | ---    |
