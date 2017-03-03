Page({
  data:{
    result: [],
    src: "http://pic41.nipic.com/20140509/4746986_145156378323_2.jpg",

    datas:'拂过了春夏\n绿了春草红了夏花\n却没流下任何过往\n\n花\n灿烂了今天\n却没为昨天\n甚至未来\n留下更多的芳香\n\n'+
    '我的过去\n如淙淙流水\n不曾留下丝毫回忆\n我的未来\n想必\n也如一汪死水\n惊不起一丝波澜'
  },

  backToIndex:function(e){
    wx.navigateBack()
  },

  listenerButton:function() {
  },

//   onLoad:function(options){
//     // 页面初始化 options为页面跳转所带来的参数
//   },
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