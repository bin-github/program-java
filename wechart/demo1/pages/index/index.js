//index.js
//获取应用实例
// @importScripts("../views/mainView/mainView.js")
var app = getApp();

Page({
  data: {
    motto:'',
    upImg:'',
    url: {
      urlMain:"../views/mainView/mainView",
    },
    user: {
      name: '',
      pwd: '',
      email: '',
    }
  },

  // 用户登录
  submitClick:function(){
    debugger
    // bindViewTap:function(){
      var name = this.data.user.name;
      var pwd = this.data.user.pwd;
      var upImg = this.data.upImg;
      debugger
      if(name == "11" && pwd == "11"){
        var url = this.data.url.urlMain;
        this.setData({
          motto:''
        })
        debugger
        // this.skipToText(url,name,pwd,upImg);
        wx.navigateTo({
          // url: '../views/mainView/mainView'
          url: '../logs/logs'
        })
      }else{
        this.setData({
          motto:'用户名或密码错误！'
        })
      }
  }, 

  // 跳转函数
  skipToText:function(url,name,pwd,upImg){
    wx.navigateTo({
      // url: url + '?name='+ name+'&pwd='+pwd + '&upImg=' + upImg
      url: '../logs/logs'
    })
  },

  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
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

  listenerNameInput:function(e){
      this.data.user.name = e.detail.value;
  },
  listenerPwdInput:function(e){
      this.data.user.pwd = e.detail.value;
  }
 
})

