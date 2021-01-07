//index.js

import {
  navigateTo
} from '../../utils/util'
//获取应用实例
const app = getApp()

// 注册小程序中的一个页面
Page({
  // 页面初始数据
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 页面的组件选项，同 Component 构造器 中的 options
  options: {

  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  // 生命周期回调—监听页面加载
  // 可以在 onLoad 的参数中获取打开当前页面路径中的参数：query

  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  // 生命周期回调—监听页面显示
  onShow() {},

  // 生命周期回调—监听页面初次渲染完成
  // 页面已经准备妥当，可以和视图层进行交互。
  onReady() {},

  // 生命周期回调—监听页面隐藏
  // 页面隐藏/切入后台时触发。 如 wx.navigateTo 或底部 tab 切换到其他页面，小程序切入后台等
  onHide() {},

  // 生命周期回调—监听页面卸载
  // 页面卸载时触发。如wx.redirectTo或wx.navigateBack到其他页面时。
  onUnload() {},

  // -------------------------------------------

  // 监听用户下拉动作
  onPullDownRefresh() {},

  // 页面上拉触底事件的处理函数
  onReachBottom() {},

  // 用户点击右上角转发
  onShareAppMessage() {},

  // 用户点击右上角转发到朋友圈
  onShareTimeline() {},

  // 页面滚动触发事件的处理函数
  onPageScroll() {},

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  // 子组件向父组件传参
  onMyEvent(e) {
    console.log(e.detail)
  },

  // 跳转到日志页面
  gotoLogs() {
    navigateTo({
      path: 'pages/info/info'
    })
  },

  // 跳转到mobx页面
  gotoMobx() {
    navigateTo({
      path: 'pages/mobx/mobx'
    })
  },

  // 跳转到redux页面
  gotoRedux() {
    navigateTo({
      path: 'pages/redux/redux'
    })
  }
})