var app = getApp();
Page({
  data:{
    // upImg:"apptmpfile__1677513727_o6zAJszvH_cs5Zvd8ZqiJocr_0yo_1475201875126",
    upImg: 'apptmpfile__1677513727_o6zAJszvH_cs5Zvd8ZqiJocr_0yo_1475201875126',
    user:{
      name: '',
      pwd: ''
    }
  },

  // 页面初始化
  onLoad: function (options) {
    console.log("onland")
     var name = options.name;
     var pwd = options.pwd;
     var upImg = options.upImg;
     if(name != undefined || pwd != undefined){
        this.initUser(name,pwd,upImg);
     }else{
        this.init();
     }
  },

  init:function(){
    //  var uImag = wx.getStorageSync('upImg') || [];
    //  wx.setStorageSync('upImg',uImag);
      console.log("init")
     this.data.user.name = app.globalData.user.name;
     this.data.user.pwd = app.globalData.user.pwd ;
     this.data.upImg = app.globalData.upImg;
  },

  initUser:function(name,pwd){
     this.data.user.name = name;
     this.data.user.pwd = pwd;
     app.globalData.user.name = name;
     app.globalData.user.pwd = pwd;
     this.data.upImg = app.globalData.upImg;
  },

  //设置用户头像
  setUserImage:function(){
      var _ = this;
      var tempFilePaths = '';
      wx.chooseImage({ 
        count:1,
        sizeType:['original','compressed'],
        sourceType:['album','camera'],
        success:function(res){
          tempFilePaths = res.tempFilePaths;
          _.setData({
            upImg: tempFilePaths
          });
         _.setGlobaData(tempFilePaths)
        }
      });
  },

  setGlobaData:function(upImg){
      app.globalData.upImg = upImg;
  },

  uploadClick:function(){
      //console.log('dfdf');
      var that=this;
      console.log(that);
      wx.chooseImage({
        success: function(res) {
            wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    console.log(res);
                        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                        var tempFilePaths = res.tempFilePaths;
                       //更新数据
                        that.setData({
                            motto:'上传成功!',
                            upImg:tempFilePaths[0]
                        })
                }
            })
        }
      })
  },
  
  // 邮件输入监听
  listenerEmailInput:function(e){
      this.data.user.email = e.detail.value;
  },


  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})