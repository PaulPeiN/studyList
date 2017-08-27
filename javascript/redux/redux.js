//代码结构
//组件之间的通信
//对于大型的复杂应用来说，这两方面恰恰是最关键的。因此，只用 React 没法写大型应用。

//只有遇到 React 实在解决不了的问题，你才需要 Redux

简单说，如果你的UI层非常简单，没有很多互动，Redux 就是不必要的，用了反而增加复杂性。
用户的使用方式非常简单
用户之间没有协作
不需要与服务器大量交互，也没有使用 WebSocket
视图层（View）只从单一来源获取数据
上面这些情况，都不需要使用 Redux。


用户的使用方式复杂
不同身份的用户有不同的使用方式（比如普通用户和管理员）
多个用户之间可以协作
与服务器大量交互，或者使用了WebSocket
View要从多个来源获取数据
上面这些情况才是 Redux 的适用场景：多交互、多数据源。
从组件角度看，如果你的应用有以下场景，可以考虑使用 Redux。
某个组件的状态，需要共享
某个状态需要在任何地方都可以拿到
一个组件需要改变全局状态
一个组件需要改变另一个组件的状态
发生上面情况时，如果不使用 Redux 或者其他状态管理工具，不按照一定规律处理状态的读写，代码很快就会变成一团乱麻。你需要一种机制，可以在同一个地方查询状态、改变状态、传播状态的变化。
总之，不要把 Redux 当作万灵丹，如果你的应用没那么复杂，就没必要用它。另一方面，Redux 只是 Web 架构的一种解决方案，也可以选择其他方案。



设计思想
Redux 的设计思想很简单，就两句话。
（1）Web 应用是一个状态机，视图与状态是一一对应的。
（2）所有的状态，保存在一个对象里面。


基本概念和 API

Store
Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。
Redux 提供createStore这个函数，用来生成 Store。

import { createStore } from 'redux';
const store = createStore(fn);
上面代码中，createStore函数接受另一个函数作为参数，返回新生成的 Store 对象。


State
Store对象包含所有数据。如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 State。
当前时刻的 State，可以通过store.getState()拿到。

import { createStore } from 'redux';
const store = createStore(fn);

const state = store.getState();
Redux 规定， 一个 State 对应一个 View。只要 State 相同，View 就相同。你知道 State，就知道 View 是什么样，反之亦然


Action
State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。所以，State 的变化必须是 View 导致的。Action 就是 View 发出的通知，表示 State 应该要发生变化了。
Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。其他属性可以自由设置，社区有一个规范可以参考。

const action = {
  type: 'ADD_TODO',
  payload: 'Learn Redux'
};
上面代码中，Action 的名称是ADD_TODO，它携带的信息是字符串Learn Redux。
可以这样理解，Action 描述当前发生的事情。改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store。



Action Creator
View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦。可以定义一个函数来生成 Action，这个函数就叫 Action Creator。

const ADD_TODO = '添加 TODO';

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

const action = addTodo('Learn Redux');
上面代码中，addTodo函数就是一个 Action Creator



store.dispatch()
store.dispatch()是 View 发出 Action 的唯一方法。

import { createStore } from 'redux';
const store = createStore(fn);

store.dispatch({
  type: 'ADD_TODO',
  payload: 'Learn Redux'
});
上面代码中，store.dispatch接受一个 Action 对象作为参数，将它发送出去。
结合 Action Creator，这段代码可以改写如下。

store.dispatch(addTodo('Learn Redux'));