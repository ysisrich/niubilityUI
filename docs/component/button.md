# Button 按钮

### 基础用法<br><br>

<nb-button  >默认按钮</nb-button>
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
<nb-button circle icon="nb-icon-check" type="success" ></nb-button>
<nb-button circle icon="nb-icon-message" type="warning" ></nb-button>
<nb-button circle icon="nb-icon-star-off" type="info" ></nb-button>
<nb-button circle icon="nb-icon-delete" type="danger"></nb-button>

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
<nb-button type="primary" icon="nb-icon-delete"></nb-button>
<nb-button type="primary" icon="nb-icon-search">搜索</nb-button>
<nb-button type="primary">上传<i class="nb-icon-upload nb-icon--right"></i></nb-button>

::: details 点击查看代码

```vue
<nb-button type="primary" icon="nb-icon-edit"></nb-button>
<nb-button type="primary" icon="nb-icon-share"></nb-button>
<nb-button type="primary" icon="nb-icon-delete"></nb-button>
<nb-button type="primary" icon="nb-icon-search">搜索</nb-button>
<nb-button type="primary">上传
    <i class="nb-icon-upload nb-icon--right"></i>
</nb-button>
```

:::

### Attributes

| 参数     | 说明         | 类型    | 可选值                                      | 默认值 |
| -------- | ------------ | ------- | ------------------------------------------- | ------ |
| type     | 类型         | string  | primary / success / warning / danger / info | —      |
| plain    | 是否朴素按钮 | boolean | —                                           | false  |
| round    | 是否圆角按钮 | boolean | —                                           | false  |
| circle   | 是否圆形按钮 | boolean | —                                           | false  |
| disabled | 是否禁用状态 | boolean | —                                           | false  |
| icon     | 图标类名     | string  | —                                           | —      |

### Events

| 参数  | 说明     | 类型     | 默认值 |
| ----- | -------- | -------- | ------ |
| click | 点击调用 | function | ---    |
