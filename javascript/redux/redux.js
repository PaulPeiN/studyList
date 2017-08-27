//����ṹ
//���֮���ͨ��
//���ڴ��͵ĸ���Ӧ����˵����������ǡǡ����ؼ��ġ���ˣ�ֻ�� React û��д����Ӧ�á�

//ֻ������ React ʵ�ڽ�����˵����⣬�����Ҫ Redux

��˵��������UI��ǳ��򵥣�û�кܶ໥����Redux ���ǲ���Ҫ�ģ����˷������Ӹ����ԡ�
�û���ʹ�÷�ʽ�ǳ���
�û�֮��û��Э��
����Ҫ�����������������Ҳû��ʹ�� WebSocket
��ͼ�㣨View��ֻ�ӵ�һ��Դ��ȡ����
������Щ�����������Ҫʹ�� Redux��


�û���ʹ�÷�ʽ����
��ͬ��ݵ��û��в�ͬ��ʹ�÷�ʽ��������ͨ�û��͹���Ա��
����û�֮�����Э��
���������������������ʹ����WebSocket
ViewҪ�Ӷ����Դ��ȡ����
������Щ������� Redux �����ó������ཻ����������Դ��
������Ƕȿ���������Ӧ�������³��������Կ���ʹ�� Redux��
ĳ�������״̬����Ҫ����
ĳ��״̬��Ҫ���κεط��������õ�
һ�������Ҫ�ı�ȫ��״̬
һ�������Ҫ�ı���һ�������״̬
�����������ʱ�������ʹ�� Redux ��������״̬�����ߣ�������һ�����ɴ���״̬�Ķ�д������ܿ�ͻ���һ�����顣����Ҫһ�ֻ��ƣ�������ͬһ���ط���ѯ״̬���ı�״̬������״̬�ı仯��
��֮����Ҫ�� Redux �������鵤��������Ӧ��û��ô���ӣ���û��Ҫ��������һ���棬Redux ֻ�� Web �ܹ���һ�ֽ��������Ҳ����ѡ������������



���˼��
Redux �����˼��ܼ򵥣������仰��
��1��Web Ӧ����һ��״̬������ͼ��״̬��һһ��Ӧ�ġ�
��2�����е�״̬��������һ���������档


��������� API

Store
Store ���Ǳ������ݵĵط�������԰�������һ������������Ӧ��ֻ����һ�� Store��
Redux �ṩcreateStore����������������� Store��

import { createStore } from 'redux';
const store = createStore(fn);
��������У�createStore����������һ��������Ϊ���������������ɵ� Store ����


State
Store��������������ݡ������õ�ĳ��ʱ������ݣ���Ҫ�� Store ���ɿ��ա�����ʱ������ݼ��ϣ��ͽ��� State��
��ǰʱ�̵� State������ͨ��store.getState()�õ���

import { createStore } from 'redux';
const store = createStore(fn);

const state = store.getState();
Redux �涨�� һ�� State ��Ӧһ�� View��ֻҪ State ��ͬ��View ����ͬ����֪�� State����֪�� View ��ʲô������֮��Ȼ


Action
State �ı仯���ᵼ�� View �ı仯�����ǣ��û��Ӵ����� State��ֻ�ܽӴ��� View�����ԣ�State �ı仯������ View ���µġ�Action ���� View ������֪ͨ����ʾ State Ӧ��Ҫ�����仯�ˡ�
Action ��һ���������е�type�����Ǳ���ģ���ʾ Action �����ơ��������Կ����������ã�������һ���淶���Բο���

const action = {
  type: 'ADD_TODO',
  payload: 'Learn Redux'
};
��������У�Action ��������ADD_TODO����Я������Ϣ���ַ���Learn Redux��
����������⣬Action ������ǰ���������顣�ı� State ��Ψһ�취������ʹ�� Action�������������ݵ� Store��



Action Creator
View Ҫ���Ͷ�������Ϣ���ͻ��ж����� Action���������д������鷳�����Զ���һ������������ Action����������ͽ� Action Creator��

const ADD_TODO = '��� TODO';

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

const action = addTodo('Learn Redux');
��������У�addTodo��������һ�� Action Creator



store.dispatch()
store.dispatch()�� View ���� Action ��Ψһ������

import { createStore } from 'redux';
const store = createStore(fn);

store.dispatch({
  type: 'ADD_TODO',
  payload: 'Learn Redux'
});
��������У�store.dispatch����һ�� Action ������Ϊ�������������ͳ�ȥ��
��� Action Creator����δ�����Ը�д���¡�

store.dispatch(addTodo('Learn Redux'));