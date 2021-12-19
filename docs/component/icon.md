# Icon 图标

> 这里主要根据 [font-awesome](https://fontawesome.dashgame.com/#google_vignette) 提供的丰富图标集合

### 基本图标

> 设置图标类名，例如：eye phone wifi trash thumbs-up 等

<nb-icon style="margin:10px 20px;" type="eye"></nb-icon>
<nb-icon style="margin:10px 20px;" type="phone"></nb-icon>
<nb-icon style="margin:10px 20px;" type="wifi"></nb-icon>
<nb-icon style="margin:10px 20px;" type="trash"></nb-icon>
<nb-icon style="margin:10px 20px;" type="thumbs-up"></nb-icon>
<nb-icon style="margin:10px 20px;" type="link"></nb-icon>
<nb-icon style="margin:10px 20px;" type="save"></nb-icon>
<nb-icon style="margin:10px 20px;" type="undo"></nb-icon>
<nb-icon style="margin:10px 20px;" type="car"></nb-icon>
<nb-icon style="margin:10px 20px;" type="bug"></nb-icon>

::: details 点击查看代码

```vue
<nb-icon type="eye"></nb-icon>
<nb-icon type="phone"></nb-icon>
<nb-icon type="wifi"></nb-icon>
<nb-icon type="trash"></nb-icon>
<nb-icon type="thumbs-up"></nb-icon>
<nb-icon type="link"></nb-icon>
<nb-icon type="save"></nb-icon>
<nb-icon type="undo"></nb-icon>
<nb-icon type="car"></nb-icon>
<nb-icon type="bug"></nb-icon>
```

:::

### 动画图标

> 设置 spin

<nb-icon style="margin:10px 20px;" spin type="circle-o-notch"></nb-icon>
<nb-icon style="margin:10px 20px;" spin type="refresh"></nb-icon>
<nb-icon style="margin:10px 20px;" spin type="cog"></nb-icon>
<nb-icon style="margin:10px 20px;" spin type="spinner"></nb-icon>

::: details 点击查看代码

```vue
<nb-icon spin type="circle-o-notch"></nb-icon>
<nb-icon spin type="refresh"></nb-icon>
<nb-icon spin type="cog"></nb-icon>
<nb-icon spin type="spinner"></nb-icon>
```

:::

### 颜色图标

> 设置 color，支持 十六进制颜色、rgb、颜色名

<nb-icon style="margin:10px 20px;" color="green"  type="check"></nb-icon>
<nb-icon style="margin:10px 20px;" color="red" type="close"></nb-icon>
<nb-icon style="margin:10px 20px;" color="#b81d25" type="battery-quarter"></nb-icon>
<nb-icon style="margin:10px 20px;" color="#2aa515" type="battery-4"></nb-icon>
<nb-icon style="margin:10px 20px;" color="rgba(0,0,255)" type="bluetooth"></nb-icon>

::: details 点击查看代码

```vue
<nb-icon color="green" type="check"></nb-icon>
<nb-icon color="red" type="close"></nb-icon>
<nb-icon color="#b81d25" type="battery-quarter"></nb-icon>
<nb-icon color="#2aa515" type="battery-4"></nb-icon>
<nb-icon color="rgba(0,0,255)" type="bluetooth"></nb-icon>
```

:::

### 图标集合<br><br>

<style lang="css" scoped>
  .box{
      display:flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
  }
  .grid{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 5px;
    margin:15px 20px;
    text-align:center;
    width:100px;
  }
</style>

<script>
export default {
    data(){
        return{
            iconList:["user-o","user-circle-o","cog","grid","spinner",
                    "circle-o-notch","file","warning","bar-chart","jpy",
                    "arrow-right","arrow-left","arrow-up","arrow-down","arrows",
                    "chevron-right","chevron-left","chevron-up","chevron-down","hand-o-up",
                    "pause","backward","forward","play","stop",
                    "child","comments","check-square","commenting-o","cloud-upload",
                    "coffee","cubeward","diamond","envelope-o","exclamation",
                    "frown-o","gift","heartbeat","laptop","info-circleop",
                    "microphone","mobile-phone","music","magic","plus-circle",
                    "remove","send ","star-o","tags","taxi",
            ]
        }
    }
}
</script>

<div class="box">
    <div class="grid" v-for="item in iconList">
        <nb-icon :type="item"></nb-icon>
        <span>{{item}}</span>
    </div>
</div>

<br>
<br>
<br>

### Attributes

| 参数  | 说明         | 类型    | 可选值                                                                                   | 默认值   |
| ----- | ------------ | ------- | ---------------------------------------------------------------------------------------- | -------- |
| type  | 图标类名     | string  | eye/phone/wifi 等，更多[font-awesome](https://fontawesome.dashgame.com/#google_vignette) | —        |
| size  | 图标大小     | number  | 默认以 px 为单位                                                                         | 20（px） |
| color | 图标颜色     | string  | 十六进制 / rgba / 颜色名                                                                 | #2c3e50  |
| spin  | 图标是否旋转 | boolean | ——                                                                                       | false    |
