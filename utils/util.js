// 格式化日期时间
export const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 获取url参数
const joinParam =(url,param)=> {
  let keys = Object.keys(params);
  finalUrl = keys.reduce((url, key) => {
    return url + key + "=" + params[key] + "&";
  }, url + "?");
}

// 页面跳转
export const navigateTo= (data = { path="", params } = {})=> {
  const length = getCurrentPages().length;
  const currentRoute = getCurrentPages()[length - 1].route; 
  const pathIndex = currentRoute.split('/').length; 
  let url = ""
  for (let i = 0; i < pathIndex - 1; i++) {
    url += '../'
  }
 let path = url + data.path 

 if (data.params) {
     path = this.joinParam(path, data.params)
 }

 
  wx.navigateTo({
    url: path,
  })
  // console.log(path)
}

// 设置上一页面的数据，并返回
export const navigateBack=(data = {})=> {
  if (data) {
    const length = getCurrentPages().length;
    var prePage = getCurrentPages()[length - 2]
    if (prePage) {
      prePage.setData(data)
    } 
  }
  wx.navigateBack()
}
