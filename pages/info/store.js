import {
  observable,
  action
} from '../../miniprogram_npm/mobx-miniprogram/index'

export const store = observable({

  // 数据字段
  data1: 1,
  data2: 2,

  // 计算属性
  get storeNum() {
    return this.data1 + this.data2
  },

  // actions
  update: action(function () {
    this.data1 += 1
    // console.log(this.data1)
  })
})