# niubility-ui

## 使用 npm 安装

```js
npm install niubility -S
```

### 全局引入

```js
import niubilityUi from "niubility-ui";
import "niubility-ui/dist/niubility-ui.css";
Vue.use(niubilityUi);
```

### 按需引入

```js
import { Button } from "../dist/niubility-ui1.umd.min";
import "../dist/niubility-ui1.css";
Vue.use(Button);
```

### 示例

```js
<nb-button type="primary" circle>
  主要按钮
</nb-button>
```

### 文档地址

See [UI 文档](https://ysisrich.github.io/niubilityUI/).

### Github 地址

See [Github](https://github.com/ysisrich/niubilityUI/tree/master).
