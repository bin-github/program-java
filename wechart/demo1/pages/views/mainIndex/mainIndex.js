//index.js
//获取应用实例
var app = getApp();

Page({
  data: {
    
  },

  onLoad: function () {
    console.log('onLoad');
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(user){
      //更新数据
      that.setData({
        user:user
      })
      that.update()
    })
  },

})

