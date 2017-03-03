//index.js
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
    // bindViewTap:function(){
      var name = this.data.user.name;
      var pwd = this.data.user.pwd;
      var upImg = this.data.upImg;
      if(name == "11" && pwd == "11"){
        var url = this.data.url.urlMain;
        this.setData({
          motto:''
        })
        wx.navigateTo({
          url: '../mainView/mainView' + '?name='+ name+'&pwd='+pwd + '&upImg=' + upImg
        })
      }else{
        this.setData({
          motto:'用户名或密码错误！'
        })
      }
  }, 
  
  //事件处理方法
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

  // 用户名和密码的输入框监控方法
  listenerNameInput:function(e){
      this.data.user.name = e.detail.value;
  },
  listenerPwdInput:function(e){
      this.data.user.pwd = e.detail.value;
  }
 
})


