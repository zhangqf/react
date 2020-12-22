# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## jsx支持所有aria-*HTML属性。

## 语义化的HTML 

### 语义化会被破坏时 使用Fragments来组合各个组件

## webpack分割代码包
    入口起点：使用entry配置手动地分离代码
    防止重复：使用Entry dependencies或者SplitChunksPlugin去重和分离chunk
    动态导入：通过模块的内联函数调用来分离代码
```js
 const path = require('path');
 
 module.exports = {
  - entry: './src/index.js',
  + mode: 'development',
  + entry: {
  +  index: './src/index.js',
  +  another: './src/another-module.js',
  +},
   output: {
  -  filename: 'main.js',
  +  filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };
````
配置多个出口文件
防止重复

在入口依赖中添加配置dependOn option选项 这样可以在多个chunk之间共享模块

```js
const path = require('path');
 
 module.exports = {
   mode: 'development',
   entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    another: {
      import: './src/another-module.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
   },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };
```

optimization.runtimeChunk 作用是为线上更新版本时，充分利用浏览器缓存，使用户感知的影响到最低。打包后只更改修改后的文件的哈希值文件。其他没修改过的使用缓存。

optimization.runtimeChunk:'single'表示为所有的chunk创建一个runtime bundle

## 错误边界（error Boundaries)

可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误，并且，它会渲染出备用 UI
错误边界的工作方式类似于JavaScript的catch{}，不同的地方在于错误边界只针对React组件。只有class组件才可以成为错误边界组件。大多数情况下，只需要声明一次错误边界组件，并在整个应用中使用。
错误边界仅可以捕获其组件的错误，无法捕获自身的错误，如果一个错误边界无法渲染错误信息，则错误会冒泡至最近的上层的错误边界。也类似于JavaScript中的catch{}的工作机制。


### 错误边界无法捕获处理器内部的错误

react不需要错误边界来捕获事件处理器中的错误，事件处理器不会再渲染期间出发。若需要事件处理器内部捕获错误 可以使用try/catch


## try/catch
 
 try/catch 仅能用于命令式代码 react组件时声明式的 


## Refs转发

ref转发时一项将ref自动地通过组件传递到其一子组件的技巧
```js
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// 你可以直接获取 DOM button 的 ref：
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

ref参数只能使用React.forwardRef定义组件时存在。常规函数和class组件不接受ref参数，且props中也不存在ref。
Ref转发不仅限于DOM组件，也可以在class组件实例中
#### 当在组件库中使用forwordRef时，应当其视为一个破坏性更改，并发布库的一个新的主版本。
因为库可能会有明显的不同行为，并且可能会导致依赖旧行为的应用的其他库崩溃。

React.forwardRef 接受一个渲染函数，其接收props和ref参数并返回一个React节点。

## Fragments

react中一个常见的模式是一个组件返回多个元素。Fragments允许你将子列表分组，而无需向DOM添加额外的节点
```js
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

### 高阶组件HOC
高阶组件(HOC)是React中用于复用组件逻辑的一种高级技巧。HOC自身不是reactApi的一部分，它是一种基于React的组合特性而形成的设计模式。 

>高级组件是参数为组件，返回值为新组件的函数
```js
const EnhancedComponent = higherOrderComponent(WrappedComponent)

```
组件时将props转换为UI,而高阶组件是将组件转换为另一个组件。

#### 使用 HOC 解决横切关注点问题

#### mixins
“如何在几个组件之间共享代码？” 是人们在学习React时首先要问的问题之一。我们的答案一直是使用组件组合来重复使用代码。您可以定义一个组件，并在其他几个组件中使用它。

>使用组合继承来构建声明性用户界面  多视图库采用类似于react组件模型

> 声明式渲染和自上而下的数据流

### 在react中使用jquery 
第三方库于react会产生冲突，避免冲突的最简单方式就是防止react组件更新，可以渲染无需更新的react元素，`<div/>`

添加一个ref到这个根DOM元素。在componentDidMount中，能够获取它的引用，这样就可以把它传递给jQuery插件了。为了防止react在挂在之后去触碰这个DOM，render（）函数返回一个空的`<div/>`  

React 事件系统  使用JSX语法时需要传入一个函数作为事件处理函数，而不是一个字符串

### 深入JSX
实际上，JSX仅仅只是React.createElement(component,props,...children)
```js
<MyButton color="blue" shadowSize={2}>
Click Me
</MyButton>
```

```js
React.createElement(
  MyButton,
  {color:'blue',shadowSize:2},
  'Click Me'
)
```
#### 指定React元素类型

JSX标签的第一部分指定了React元素的类型

大写字母开头的JSX标签意味着它们是React组件。这些标签会被编译为对命名变量的直接引用，所以，当使用JSX`<FOO />`表达式时，Foo必须包含在作用域内。

#### 在运行时选择类型

不能将通用表达式作为React元素类型。如果型通过通用表达式来（动态）决定元素类型，需要首先将他赋值给大写字母开头的变量。通常用于根据prop来渲染不同组件的情况。
```js
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // 正确！JSX 类型可以是大写字母开头的变量。
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}
```

#### JSX中的Props
有很多方式可以在JSX中指定props
##### Javascript 表达式作为Props
可以把包裹在{}中的Javascript表达式作为一个prop传递给JSX元素。
```js
<MyComponent foo={1 + 2 + 3 + 4} />
```

if语句及for循环不是javascript表达式，所以不能在jsx中直接使用。但是可以用在jsx以外的代码中。

```js
function NumberDescriber(props) {
  let description;
  if(props.number % 2 == 0){
    description = <strong>even</strong>
  }else{
    description = <i>odd</i>
  }
  return <div>{props.number} is an {description} number</div>;
}
```
##### 字符串字面量
可以将字符串字面量赋值给prop.
```js
<Mycomponent message="hello world"/>
<Mycomponent message={'hello world'} />
```
当将字符串字面量赋值给prop时，他的值是未转义的。
```js
<Mycomponent message="&lt;3"/>
<Mycomponent message={'<3'} />
```
##### Props 默认值为"True"
如果没有给prop赋值，它默认值是true。
```js
<MyTextBox autocomplete />
<MyTextBox autocomplete={true}/>
```
##### 属性展开
如果你已经有了一个 props 对象，你可以使用展开运算符 ... 来在 JSX 中传递整个 props 对象
```js
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}

const Button = props => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

const App = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
};


```

##### jsx中的子元素
包含在开始和结束标签之间的JSX表达式内容将作为特定属性props.children传递给外层组件。
字符串字面量
JSX 子元素
JavaScript 表达式作为子元素
函数作为子元素
布尔类型、Null 以及 Undefined 将会忽略

### 性能优化
UI更新需要昂贵的DOM操作，而React内部使用几种巧妙的技术以便最小化DOM操作次数。对于大部分应用而言，使用React时无需专门优化就已拥有高性能的用户界面。尽管如此，仍然有办法来加速react应用。
##### 虚拟化长列表（虚拟滚动组件）
##### 避免调停
React 当一个组件的props或state变更，react会将最新返回的元素与之前渲染的元素进行对比，以此决定是否有必要更新真实的DOM.当他们不相同时，react会更新DOM。

 component和PureComponent的区别

 react.PureComponent与react.Component几乎完全相同，但react.PureComponent通过props和state的浅对比来实现shouldComponentUpdate（）
 PureComponent缺点：可能会因深层的数据不一致而产生错误的否定判断，从而shouldComponentUpdate结果返回false，界面得不到更新。
 PureComponent优点：不需要开发者自己实现shouldComponentUpdate，就可以进行简单得判断来提升性能。

 ```js
 class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}

class CounterButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}
 ```

 #### 不可变数据

 ### Portal
    Portal提供了一种将子节点渲染到存在于父组件以外得DOM节点的优秀的方案
    ReactDOM.createPortal（child,container） 第一个元素是 可渲染的react子元素，第二个元素是一个DOM元素。
  
```js
render() {
  // React 挂载了一个新的 div，并且把子元素渲染其中
  return (
    <div>
      {this.props.children}
    </div>
  );
}

render() {
  // React 并*没有*创建一个新的 div。它只是把子元素渲染到 `domNode` 中。
  // `domNode` 是一个可以在任何位置的有效 DOM 节点。
  return ReactDOM.createPortal(
    this.props.children,
    domNode
  );
}
```

```js
// 在 DOM 中有两个容器是兄弟级 （siblings）
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // 在 Modal 的所有子元素被挂载后，
    // 这个 portal 元素会被嵌入到 DOM 树中，
    // 这意味着子元素将被挂载到一个分离的 DOM 节点中。
    // 如果要求子组件在挂载时可以立刻接入 DOM 树，
    // 例如衡量一个 DOM 节点，
    // 或者在后代节点中使用 ‘autoFocus’，
    // 则需添加 state 到 Modal 中，
    // 仅当 Modal 被插入 DOM 树中才能渲染子元素。
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 当子元素里的按钮被点击时，
    // 这个将会被触发更新父元素的 state，
    // 即使这个按钮在 DOM 中不是直接关联的后代
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

function Child() {
  // 这个按钮的点击事件会冒泡到父元素
  // 因为这里没有定义 'onClick' 属性
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}

ReactDOM.render(<Parent />, appRoot);

```

### Profiler API
    Profiler 测量渲染一个React应用多久渲染一次以及渲染一次的“代价”，它的目的是识别出应用中渲染较慢的部分，
    或是可以使用类似`memoization优化`的部分，并从相关优化中获益

>Profiler能添加在react树中的任何地方来测量树中的这部分渲染所带了的开销。他需要两个prop：一个是ID(string),一个是当组件树中的组件“提交”更新的时候被react调用的回调函数onRender（function）

* 注意
尽管 Profiler 是一个轻量级组件，我们依然应该在需要时才去使用它。对一个应用来说，每添加一些都会给 CPU 和内存带来一些负担。

* onRender 回调

Profiler需要一个onRender函数作为参数。React会在profile包含的组件树中任何组件“提交”一个更新的时候调用这个函数。它的参数描述了渲染了什么和花费了多久。

```js
function onRenderCallback(
  id, // 发生提交的 Profiler 树的 “id”
  phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
  actualDuration, // 本次更新 committed 花费的渲染时间
  baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
  startTime, // 本次更新中 React 开始渲染的时间
  commitTime, // 本次更新中 React committed 的时间
  interactions // 属于本次更新的 interactions 的集合
) {
  // 合计或记录渲染时间。。。
}
```

### 不使用ES6

```JS
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}


var createReactClass = require('create-react-class');
var Greeting = createReactClass({
  render: function() {
    return <h1>Hello, {this.props.name}</h1>;
  }
});

```

ES6中的class与`createReactClass()`方法十分相似，
#### class与`createReactClass()`两者个区别

##### 声明默认属性
无论是函数组件还是class组件，都拥有defaultProps属性：
```JS
class Greeting extends React.Component {

}
Greeting.defaultProps = {
  name:"Mary"
}
```
```js
var Greeting = createReactClass({
  getDefaultProps:function(){
    return {
      name:"Mary"
    }
  }
})
```
##### 初始化 State
es6
```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }
  // ...
}
```
createReactClass()

```js
var Counter = createReactClass({
  getInitialState: function() {
    return {count: this.props.initialCount};
  },
  // ...
});
```

自动绑定

es6
```js
class SayHello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: 'Hello!'};
    // 这一行很重要！
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert(this.state.message);
  }

  render() {
    // 由于 `this.handleClick` 已经绑定至实例，因此我们才可以用它来处理点击事件
    return (
      <button onClick={this.handleClick}>
        Say hello
      </button>
    );
  }
}

```

createReactClass()
```js
var SayHello = createReactClass({
  getInitialState: function() {
    return {message: 'Hello!'};
  },

  handleClick: function() {
    alert(this.state.message);
  },

  render: function() {
    return (
      <button onClick={this.handleClick}>
        Say hello
      </button>
    );
  }
});
```