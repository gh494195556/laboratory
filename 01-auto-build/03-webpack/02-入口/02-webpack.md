入口参数的写法有三种：

1. string
2. string[]
3. object

## 1. string

**webpack.config.js**

```
const config = {
  entry: 'src/index.js'
}
```

## 2. string[]

**webpack.config.js**

```
const config = {
  entry: ['src/index.js', 'src/main.js']
}
```

## 3. object

**webpack.config.js**

```
const config = {
  entry: {
    main: 'src/index.js'
  }
}
```
