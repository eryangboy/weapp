//app.js
import {
  Provider
} from './miniprogram_npm/wechat-weapp-redux/index'
import {
  promisifyAll
} from './miniprogram_npm/wx-promise-pro/index.js';
import store from './redux/store'
promisifyAll()

// 注册小程序，必须在 app.js 中调用，必须调用且只能调用一次
App(Provider(store)({

  // 监听小程序初始化
  onLaunch: function () {

    (async () => {
      const p = await new Promise(resolve => {
        setTimeout(() => resolve("hello async/await"), 3000);
      });
      console.log(p);
    })();
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  // 监听小程序启动或切前台
  onShow() {

  },

  // 监听小程序切后台
  onHide() {

  },

  // 错误监听函数
  onError() {

  },

  // 页面不存在监听函数
  onPageNotFound() {

  },

  // 小程序有未处理的 Promise 拒绝时触发
  onUnhandledRejection() {

  },

  // 监听系统主题变化
  onThemeChange() {

  },


  globalData: {
    userInfo: null
  }
}))