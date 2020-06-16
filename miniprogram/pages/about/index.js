// pages/view/view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingHide: true,
    loadingText: "加载中"
  },


  click: function () {//type:'wgs84'   
    wx.getLocation({
      type:'gcj02',
      success:function(res){
        wx.openLocation({
          latitude: 39.898403,
          longitude: 116.630529,
          scale: 18,
          name: '维意',
          address: '北京市朝阳区广渠路'
        })
      }}
    )
  },
  teltoUs: function () {
    wx.makePhoneCall({
      phoneNumber: '17000000000'
    })
  },
  onShareAppMessage: function () {
    return {
      title: '唯意家具',
      desc: '家具订制专家',
      path: "pages/home/home",
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({ loadingHide: false });
    setTimeout(function () {
      that.setData({ loadingHide: true });
    }, 1000)
  }
})