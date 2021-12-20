# Input 输入框

### 基础用法<br><br>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: ''
    }
  }
}
</script>

<nb-input v-model="input1" placeholder="请输入内容"></nb-input>

:::details 点击查看代码

```vue
<nb-input v-model="input" placeholder="请输入内容"></nb-input>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    handlesearch(e) {
      console.log(e);
    },
  },
};
</script>
```

:::

### 禁用状态<br><br>

<nb-input v-model="input2" placeholder="请输入内容" disabled></nb-input>

:::details 点击查看代码

```vue
<nb-input v-model="input" placeholder="请输入内容" disabled></nb-input>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
};
</script>
```

:::

### 可清空<br><br>

<nb-input v-model="input3" placeholder="请输入内容" clearable></nb-input>

:::details 点击查看代码

```vue
<nb-input v-model="input" placeholder="请输入内容" clearable></nb-input>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
};
</script>
```

:::

### 密码框<br><br>

<nb-input v-model="input4" placeholder="请输入内容" show-password></nb-input>

:::details 点击查看代码

```vue
<nb-input v-model="input" placeholder="请输入内容" show-password></nb-input>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
};
</script>
```

:::

### 搜索框<br><br>

<nb-input v-model="input5" placeholder="请输入内容" show-search></nb-input>

:::details 点击查看代码

```vue
<nb-input
  v-model="input"
  placeholder="请输入内容"
  show-search
  @search="search"
></nb-input>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
};
</script>
```

:::

### Input Attributes

| 参数            | 说明                                 | 类型            | 可选值                | 默认值 |
| --------------- | ------------------------------------ | --------------- | --------------------- | ------ |
| type            | 类型                                 | string          | 原生 input 的 type 值 | text   |
| value / v-model | 绑定值                               | string / number | —                     | —      |
| maxlength       | 原生属性，最大输入长度               | number          | —                     | —      |
| minlength       | 原生属性，最小输入长度               | number          | —                     | —      |
| placeholder     | 输入框占位文本                       | string          | —                     | —      |
| clearable       | 是否可清空                           | boolean         | —                     | false  |
| show-password   | 是否显示切换密码图标                 | boolean         | —                     | false  |
| show-search     | 是否显示搜索图标                     | boolean         | —                     | false  |
| disabled        | 禁用                                 | boolean         | —                     | false  |
| name            | 原生属性                             | string          | —                     | —      |
| readonly        | 原生属性，是否只读                   | boolean         | —                     | false  |
| max             | 原生属性，设置最大值                 | number          | —                     | —      |
| min             | 原生属性，设置最小值                 | number          | —                     | —      |
| step            | 原生属性，设置输入字段的合法数字间隔 | —               | —                     | —      |
| autofocus       | 原生属性，自动获取焦点               | boolean         | true, false           | false  |
| form            | 原生属性                             | string          | —                     | —      |

### Input Events

| 事件名称 | 说明                                            | 回调参数                  |
| -------- | ----------------------------------------------- | ------------------------- |
| blur     | 在 Input 失去焦点时触发                         | (event: Event)            |
| focus    | 在 Input 获得焦点时触发                         | (event: Event)            |
| change   | 仅在输入框失去焦点或用户按下回车时触发          | (value: string \| number) |
| input    | 在 Input 值改变时触发                           | (value: string \| number) |
| clear    | 在点击由 `clearable` 属性生成的清空按钮时触发   | —                         |
| search   | 在点击由 `show-search` 属性生成的搜索按钮时触发 | —                         |
