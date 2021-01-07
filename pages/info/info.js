// pages/info/info.js
import {
  navigateBack
} from '../../utils/util';
import '../../utils/lodashFix'
import _ from '../../miniprogram_npm/lodash/index'
import {
  createStoreBindings
} from '../../miniprogram_npm/mobx-miniprogram-bindings/index'
import {
  store
} from './store'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'zhangsan11',
    dialogShow: false,
  },
  handleback() {
    this.setData({
      dialogShow: true
    })
  },

  tapDialogButton(e) {
    const {
      item
    } = e.detail;
    if (!item) return
    if (item.type === 'confirm') {
      navigateBack()
    } else if (item.type === 'cancel') {
      this.setData({
        dialogShow: false
      })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    const name = _.upperCase(this.data.name)

    this.setData({
      name
    })

    // 绑定
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['data1', 'data2', 'storeNum'],
      actions: ['update'],
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // 清理
    this.storeBindings.destroyStoreBindings()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})