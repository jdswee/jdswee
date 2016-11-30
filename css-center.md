## CSS居中
### 水平居中
#### 多个块级元素
如果有两个或者更多的块级元素需要在被一行里水平居中，那么你最好设置他们不同的```display```属性来达到效果了。这里有两个例子：一个是设置为```inline-block```， 一个是设置为```flexbox```。  

HTML
```html
<main class="inline-block-center">
	<div>
		test1test2
	</div>
	<div>
		test1test2more
	</div>
	<div>
		test1test2
	</div>
</main>
<main class="flex-center">
	<div>
		test1test2
	</div>
	<div>
		test1test2more
	</div>
	<div>
		test1test2
	</div>
</main>
```

CSS 
```css
.inline-block-center {
	text-align: center;
	background-color: red;
}
.inline-block-center div {
	display: inline-block;
}
.flex-center {
	display: flex;
	justify-content: center;
}
```
### 垂直居中
#### 行内或者具有行内元素性质的元素（比如文字或者链接）
##### 单行
有时候行内元素或者文字显示为垂直居中，仅仅是因为它们的上下内边距相等：  

CSS
```css
.link {
	padding-top: 30px;
	padding-bottom: 30px;
}
```
如果```padding```出于某些原因不能用，并且你要使一些不换行的文字居中，这里有一个技巧，就是设置文字的```line-height```和```height```的值相等。

CSS
```css
.center-text-trick {
	height: 100px;
	line-height: 100px;
	white-space: nowrap;
}
```
##### 多行 
上边距和下边距相等也能让多行文字达到垂直居中的效果，但是如果这种方法不奏效的话，可能需要设置文字所在的元素为一个```table cell```，不管它直接是```table```还是你用CSS使这个元素表现的像一个```table cell```，```vertical-align```属性可以处理这种情况，它与我们通常所做的在行上处理元素对齐的方式不同：  

CSS
```css
.center-table {
  display: table;
  height: 250px;
  background: white;
  width: 240px;
  margin: 20px;
}
.center-table p {
  display: table-cell;
  margin: 0;
  background: black;
  color: white;
  padding: 20px;
  border: 10px solid white;
  vertical-align: middle;
}
```
如果没法用类table方式，可能你需要用```flexbox```。单个的```flex```子元素可以非常简单的被一个 ```flex```父元素垂直居中：
```css
.flex-center-vertically {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 400px;
}
```
请记住这个方法仅仅适用于父容器具有一个固定的额高度（px，%，等等），这也是为什么容器有一个高度。 

如果上面的方法都不能用，你可以试试 ”虚元素“ 技术：其中一个完整高度的伪元素放置在容器内，并与文本垂直对齐。

CSS
```css
.ghost-center {
	position: relative;
	height: 100px;
}
.ghost-center::before {
	content: " ";
	display: inline-block;
	height: 100%;
	width: 1%;
	vertical-align: middle;
}	
.ghost-center div {
	display: inline-block;
	vertical-align: middle;
}
```
#### 块级元素
##### 知道元素的高度
不知道元素的高度是比较常见的，有很多原因：如果宽度改变，文本回流会改变高度；文字样式改变会改变高度；文字数量改变会改变高度；一个固定比例的元素，比如图片，当重置尺寸的时候也会改变高度，等等。  
但如果你知道高度，你可以这样垂直居中元素：
```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  height: 100px;
  margin-top: -50px;
}
```
##### 元素高度未知
可以通过```transform```来达到目的：  

CSS
```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```
##### 使用flexbox 
CSS
```css
.parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```
### 垂直水平居中 
#### 元素有固定的宽和高 
用负的```margin```值使其等于宽度和高度的一半，当你设置了它的绝对位置为 50% 之后，就会得到一个很棒的跨浏览器支持的居中：  
CSS
```css
.parent {
  position: relative;
}
.child {
  width: 300px;
  height: 100px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -70px 0 0 -170px;
}
```
#### 元素的宽和高未知
如果你不知道元素的高度和宽度，你可以用```transform```属性，用```translate```设置 -50%（它以元素当前的宽和高为基础）来居中：  
CSS
```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}	
``` 
##### 使用flexbox 
为了让元素在```flexbox```两个方向都居中，你需要两个居中属性：  
CSS
```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}	
```