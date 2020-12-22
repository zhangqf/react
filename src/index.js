import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';





// const name = "az";
// const element = (<h1>hello {name}</h1>)



// const element1 = React.createElement(
//   'h1',
//   {className:'greeting'},
//   'helloWorld Azhang!'
// )

// function tick(){
//   const element = (
//     <div>
//       <h1>helloWorld haha </h1>
//       <h2>
//         {new Date().toLocaleTimeString()}
//       </h2>
//     </div>
//   )
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   )
// }

// setInterval(tick,1000)



// const element = <div/>

// const element1 = <Welcome name="sara"/>

// function Welcome(props){
//   return <h1>hello,{props.name}</h1>
// }

// const element = <Welcome name="sara" />

// function App(props) {
//   return (
//     <div>
//       <Welcome name="sara" />
//       <Welcome name="sara1" />
//       <Welcome name="sar2a" />
//     </div>
//   )
// }

// class Clock extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {data:new Date()}
//   } 
//   componentDidMount(){
//    this.timerID = setInterval(()=>{
//       this.tick()
//     },1000)
//   }
//   componentWillUnmount(){
//     crealInterval(this.timerID)
//   }
//   tick(){
//     this.setState({
//       data:new Date()
//     })
//   }
//   render () {
//     return(
//       <div>
//         <h1>hello world</h1>
//         <h2>it is {this.state.data.toLocaleTimeString()}</h2>
//       </div>
//     )
//   }
// }



// ReactDOM.render(
//   <Clock />,
//   document.getElementById("root")
// )


// // 在 DOM 中有两个容器是兄弟级 （siblings）
// const appRoot = document.getElementById('app-root');
// const modalRoot = document.getElementById('modal-root');

// class Modal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.el = document.createElement('div');
//   }

//   componentDidMount() {
//     // 在 Modal 的所有子元素被挂载后，
//     // 这个 portal 元素会被嵌入到 DOM 树中，
//     // 这意味着子元素将被挂载到一个分离的 DOM 节点中。
//     // 如果要求子组件在挂载时可以立刻接入 DOM 树，
//     // 例如衡量一个 DOM 节点，
//     // 或者在后代节点中使用 ‘autoFocus’，
//     // 则需添加 state 到 Modal 中，
//     // 仅当 Modal 被插入 DOM 树中才能渲染子元素。
//     modalRoot.appendChild(this.el);
//   }

//   componentWillUnmount() {
//     modalRoot.removeChild(this.el);
//   }

//   render() {
//     return ReactDOM.createPortal(
//       this.props.children,
//       this.el
//     );
//   }
// }

// class Parent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {clicks: 0};
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     // 当子元素里的按钮被点击时，
//     // 这个将会被触发更新父元素的 state，
//     // 即使这个按钮在 DOM 中不是直接关联的后代
//     this.setState(state => ({
//       clicks: state.clicks + 1
//     }));
//   }

//   render() {
//     return (
//       <div onClick={this.handleClick}>
//         <p>Number of clicks: {this.state.clicks}</p>
//         <p>
//           Open up the browser DevTools
//           to observe that the button
//           is not a child of the div
//           with the onClick handler.
//         </p>
//         <Modal>
//           <Child />
//         </Modal>
//       </div>
//     );
//   }
// }

// function Child() {
//   // 这个按钮的点击事件会冒泡到父元素
//   // 因为这里没有定义 'onClick' 属性
//   return (
//     <div className="modal">
//       <button>Click</button>
//     </div>
//   );
// }




// ReactDOM.render(<Parent />, appRoot);





// ReactDOM.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>,
//   element1,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
