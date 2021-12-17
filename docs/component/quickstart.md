# 快速上手

本节将介绍如何在项目中使用 NiubilityUi

### 使用 vue-cli@3

我们为新版的 vue-cli 准备了相应的 你可以用它们快速地搭建一个基于 NiubilityUi 的项目。

### 引入 NiubilityUi

你可以引入整个 NiubilityUi，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 NiubilityUi。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from "vue";
import NiubilityUI from "niubility-ui";
import "../dist/niubility-ui.css";
import App from "./App.vue";

Vue.use(NiubilityUI);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
```

以上代码便完成了 Niubility 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from "vue";
import { Button, Select } from "niubility-ui";
import App from "./App.vue";

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: "#app",
  render: (h) => h(App),
});
```

完整组件列表和引入方式

```javascript
import Vue from "vue";
import { Dialog, Button } from "niubility-ui";

Vue.use(Dialog);
Vue.use(Button);
```