//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

     // 设置头像图片缓存
    var uImag = wx.getStorageSync('upImg') || [];
    wx.setStorageSync('upImg',uImag);
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    upImg:'apptmpfile__1677513727_o6zAJszvH_cs5Zvd8ZqiJocr_0yo_1475201875126',
    user:{
      name : '',
      pwd : ''
    },
  }
})