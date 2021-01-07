// pages/components/my-component/my-component.js
import computedBehavior from '../../../miniprogram_npm/miniprogram-computed/index'
import {
  storeBindingsBehavior
} from '../../../miniprogram_npm/mobx-miniprogram-bindings/index';
import {
  store
} from '../../../pages/info/store'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,

  },
  behaviors: [computedBehavior, storeBindingsBehavior],
  /**
   * 组件的初始数据
   */
  data: {
    a: 1,
    b: 2
  },
  storeBindings: {
    store,
    fields: {
      data1: () => store.data1,
      storeNum: () => store.storeNum
    },
  },
  // 计算属性
  computed: {
    sum(data) {
      // 注意： computed 函数中不能访问 this ，只有 data 对象可供访问
      // 这个函数的返回值会被设置到 this.data.sum 字段中
      return data.a + data.b
    },
  },
  // 监听器
  watch: {
    'a, b': function (a, b) {
      this.setData({
        sum: a + b
      })
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {

    handleClick(e) {
      this.setData({
        a: this.data.a + 1
      })

      // console.log(this.data.title)
      this.triggerEvent('myevent', {
        title: '子组件向父组件传参'
      })

    }
  }
})