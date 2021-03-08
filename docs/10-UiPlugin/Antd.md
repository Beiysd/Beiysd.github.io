# Antd-UI 组件的使用记录

## 3.x 版本

https://3x.ant.design/docs/react/introduce-cn

### 1.Popover 样式更改：

```js
<Popover
  overlayClassName={styles.ant_popover} //类名
  placement="top" //所处相对位置
  title="Title" //标题
  content={content} //内容
  trigger="hover" //触发方式
  visible={true} //手动控制显示
  onVisibleChange={this.onVisibleChange} //触发时的监听函数
>
  <Button type="primary">Hover me</Button>
</Popover>
```

### 2.Propgress 背景色

```js
//Html
//or
//style
(
  <Progress
    type="circle" //圆形
    status="active" //进度条状态
    strokeColor={"#8FC7D9"} //进度条颜色
    trailColor={"#D9D9D9"} //进度条背景色
    format={"内容"}
  />
).ant -
  progress -
  circle -
  trail;
```

### 3.Input 输入框颜色统一更改

```js
:global(.ant-input:hover) {
  border-color: #999 !important;
}
:global(.ant-input:focus) {
  border-color: #999 !important;
  box-shadow: 0 0 6px 0 #999 !important;
}

:global(.ant-input-affix-wrapper:hover) {
  border-color: #999 !important;
}
:global(.ant-input:not(.ant-input-disabled)) {
  border-color: #999 !important;
}
```

## 4.x 版本
