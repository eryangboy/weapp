//logs.js
import myBehavior from '../components/my-behavior'
import {formatTime} from '../../utils/util'
const app = getApp()

// 创建自定义组件
Component({
  // 组件的内部数据
  data: {
    logs: [],
    userInfo: null,
    msg:''
  },
  // 组件的对外属性，是属性名到属性设置的映射表
  properties:{
    myProperty: { // 属性名
      type: String,
      value: '11'
    },
    myProperty2: String // 简化的定义方式
  },
  // 组件数据字段监听器，用于监听 properties 和 data 的变化
  observers: {
    "msg": function() {
     console.log(11)
    },
  },
  // 类似于mixins和traits的组件间代码复用机制
  behaviors:[myBehavior],
  // 组件间关系定义
  relations:{},
  // 组件接受的外部样式类
  externalClasses:'my-class',
  // 组件生命周期声明对象
  lifetimes:{
      // 组件生命周期函数-在组件实例刚刚被创建时执行，注意此时不能调用 setData )
      created(){},

      // 组件生命周期函数-在组件实例进入页面节点树时执行)
      attached(){},

      // 组件生命周期函数-在组件布局完成后执行)
      ready(){},

      // 组件生命周期函数-在组件实例被移动到节点树另一个位置时执行)
      moved(){},

      // 组件生命周期函数-在组件实例被从页面节点树移除时执行)
      detached(){},
  },
  // 组件所在页面的生命周期
  pageLifetimes: {
    show: function() {
      // 页面被展示
    },
    hide: function() {
      // 页面被隐藏
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  },
  methods:{
    onLoad: function () {
      this.setData({
        logs: (wx.getStorageSync('logs') || []).map(log => {
          return formatTime(new Date(log))
        }),
        userInfo:app.globalData.userInfo
      })
    },
    handleclick(){
      this.data.logs.shift()
      this.setData({
        logs:this.data.logs
      })
      console.log('value----->',this.data.logs)
      // this.setData({
      //   msg:'msg'
      // })
   },

 

  

  },
 
 
})
