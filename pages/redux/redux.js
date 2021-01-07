// pages/redux/redux.js

import {
  connect
} from '../../miniprogram_npm/wechat-weapp-redux/index'


// ①action types
const COUNTER_ADD = 'counter_add'
const COUNTER_DEC = 'counter_dec'
const COUNTER_DOUBLE = 'counter_double'

// ③action creator
const incA = () => ({
  type: COUNTER_ADD
})
const decA = () => ({
  type: COUNTER_DEC
})
const double = () => ({
  type: COUNTER_DOUBLE
})

const pageConfig = {

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
}

// ④将state映射到组件data
const mapStateToData = state => ({
  store: state
})

// ⑤将actions映射到组件的data
const mapDispatchToPage = dispatch => ({
  incA: () => dispatch(incA()),
  decA: () => dispatch(decA()),
  double: () => dispatch(double())
})

// ⑥connect产生容器组件
const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig)

Page(nextPageConfig)