import {
  observer
} from '../../miniprogram_npm/wechat-weapp-mobx/observer'
import {
  page1Store,
  actions
} from '../../mobx/store'

console.log(page1Store, actions)
// ⑤ 使用observer
Page(observer({
  // 向业务组件注入 store，actions，和 Provider 配合使用
  props: {
    store: page1Store
  },

  incA: actions.incA,
  decA: actions.decA,
  double: actions.double
}))