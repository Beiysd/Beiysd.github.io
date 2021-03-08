# Antd-UI 组件的使用记录

## 3.x 版本

### 1.Popover 样式更改：

```js
<Popover
  overlayClassName={styles.ant_popover} //类名
  title="Title" //标题
  content={content} //内容
  trigger="hover" //触发方式
  visible={true} //手动控制显示
  onVisibleChange={this.onVisibleChange} //触发时的监听函数
>
  <Button type="primary">Hover me</Button>
</Popover>
```

## 4.x 版本
