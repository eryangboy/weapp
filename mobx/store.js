import {
  observable,
  action,
  decorate
} from '../miniprogram_npm/wechat-weapp-mobx/mobx'

// 定义数据结构
export class Store {
  a = 0
  name = 'zhangsan'
  age = 20
}

// 定义对数据的操作
export class Action {
  constructor({
    store
  }) {
    this.store = store
  }

  incA = () => {
    this.store.a++
  }
  decA = () => {
    this.store.a--
  }
  double = () => {
    this.store.a *= 2
  }
}


// ① 使用 observable 设置为可观察数据
decorate(Store, {
  a: observable,
})

// ② 使用 action
decorate(Action, {
  incA: action,
  decA: action,
  double: action
})

// ③实例化单一数据源
export const page1Store = new Store()

// ④实例化 actions，并且和 store 进行关联
export const actions = new Action({
  store: page1Store
})