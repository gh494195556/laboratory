# 列表 Key

## 遍历渲染

没有 v-for 也没有 \*ngFor，由于 React 元素的存在，使得 React 的变成方式更加有一种一切都是 JavaScript 的感觉。

React 遍历元素需要用到 map，把原有的数组影射为 React 元素。

```
const lis = [1,2,3].map((v) => <li key={v}>{v}</li>);
```

可以认为 lis 现在是一个 React 元素的数组，他生成数组元素个数的 React 元素，最终渲染进 DOM。

> 代码：07-列表.html

当成功执行后会得到一个 warning:

```
Warning: Each child in a list should have a unique "key" prop.
```

## Key

虽然 warning 并不影响程序的执行，不过在使用这种类似遍历产生元素的场景时，每个遍历元素加上 Key 可以帮助 React 提升性能！

一个好的 Key 应该是一个不变的，可以代表列表当前元素的唯一值（当前 map 遍历作用于内唯一），他最好是 string 或 number 类型。

值得注意的是，尽量不要使用索引作为 key，特别是在列表涉及到排序功能时，元素的移动导致其索引也发生了改变，这让 React 无法确定是否应该更新元素。

在不指定 key 时，react 默认采用索引作为 key。

key 应该在 map 方法影射的 React 元素上指定。

props.key 是被保留的，不可以被读取。

**JSX 支持嵌入 map()**

1. 分离

```
const listItems = [1,2,3].map(v => <li key={v}>{v}</li>);
const uls = <ul>{listItems}</ul>;
```

2. 嵌入

```
const uls = (
  <ul>
    {[1, 2, 3].map((v) => (
      <li key={v}>{v}</li>
    ))}
  </ul>
);
```

根据不同的场景，选择不同的风格来编码吧。
