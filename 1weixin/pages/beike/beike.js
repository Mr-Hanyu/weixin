Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainInfo: {},
    
  },
  onLoad: function () {
    this.getMainInfo();
   
  },
  getMainInfo: function () {
    const that = this;
    wx.request({
      url: 'http://47.93.220.17/Home/Bk/xinfang',
      method: "get",
      dataType: "json",
      success: function (res) {
        that.setData({
          mainInfo: res.data
        });
        console.log(that.data.mainInfo);
      }
    })
  }
})