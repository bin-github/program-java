var app = getApp()
Page({
  data:{
    // photo:'http://img04.tooopen.com/images/20130606/tooopen_15193690.jpg',
    photo: '',
    photos: [
        'http://img04.tooopen.com/images/20130606/tooopen_15193690.jpg',
        'http://img05.tooopen.com/images/20151020/tooopen_sy_145850386896.jpg',
        'http://img03.tooopen.com/images/20120704/sy_201207041133174760.jpg',
        'http://img01.tooopen.com/Downs/images/2010/12/14/sy_20101214081854044013.jpg'
    ],
    url:'./photo1',
    index: 1,
    motto:'图片页面',
  },

  head:function(){

      
      var index = this.data.index;
      var that = this.data;
      if(index < 0){
          index = that.photos.size - 1;
      }
    //   this.data.photo = that.photos[index];
    //   var temp = this.data.photos[this.data.index];
    //   wx.navigateTo({
    //      url: this.data.url + '?photo='+ temp
    //   });

      index -= 1;
      this.data.index = index;
  },

  next:function(){
      var index = this.data.index;
      var that = this.data;
      if(index > that.photos.size - 1){
          index = 0;
      }
    //   this.data.photo = that.photos[index];
      var temp = this.data.photos[this.data.index];
    //   wx.navigateTo({
    //      url: this.data.url + '?photo='+ temp
    //   });
      index += 1;
      this.data.index = index;
      this.onLoad();
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.data.photo = this.data.photos[this.data.index];
  },
//   onReady:function(){
//     // 页面渲染完成
//   },
//   onShow:function(){
//     // 页面显示
//   },
//   onHide:function(){
//     // 页面隐藏
//   },
//   onUnload:function(){
//     // 页面关闭
//   }
})