# AntDesignLeftImageList

## 如何实现

1. 将 node_module 中 antd/es/list 的 List 组件拷贝出来；
2. 修改 index.js 和 item.js 的 import 方法，改变其路径，从 ../xx 改为 antd/es/xx;
3. 更换图片和主内容的位置，在 item.js 的下方代码，更换 main 和 extra 的前后位置即可；

```js
  var itemChildren = React.createElement(Tag, _extends({}, others, {
          // `li` element `onCopy` prop args is not same as `div`
          className: classNames("".concat(prefixCls, "-item"), className, _defineProperty({}, "".concat(prefixCls, "-item-no-flex"), !_this.isFlexMode()))
        }), itemLayout === 'vertical' && extra ? [React.createElement("div", {
          className: "".concat(prefixCls, "-item-extra-change"),
          key: "extra"
        }, extra), React.createElement("div", {
          className: "".concat(prefixCls, "-item-main-change"),
          key: "content"
        }, children, actionsContent),] : [children, actionsContent, cloneElement(extra, {
          key: 'extra'
        })]);
```

4. 调整样式，因为在拷贝过来的 style 文件中修改无法起效，更换上方代码中的 className，然后在 less/edit.less 中重写样式；
5. 采用 import List from '../component/list' 引入；

## 实现效果

### 修改后的样式，图片在左侧

![](https://markdown-pic-blackboxo.oss-cn-shanghai.aliyuncs.com/20200313223138.png)

已适配移动端：

![](https://markdown-pic-blackboxo.oss-cn-shanghai.aliyuncs.com/20200313223215.png)

### 原本的样式，图片在右侧

![](https://markdown-pic-blackboxo.oss-cn-shanghai.aliyuncs.com/20200313223043.png)