const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  subMitorder:function() {
    console.log("提交：", app.globalData.OPEN_ID);
    this.setMessage();
    wx.redirectTo({
      url: '../pay/pay',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
    wx.setNavigationBarTitle({
      title: '订单填写'
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  formSubmit:function(e)
    {
    console.log('e', e)
    wx.request({
      url: `https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=${app.globalData.ACCESS_TOKEN}`,
     
      data: 
      {
        "touser": app.globalData.OPEN_ID,
        "template_id": "8bYvxe3G44_abYeld5C50m6AecfQ1cezEAoD-TSGohU",
        "page": "/pages/index/index",
        "form_id": e.detail.formId,
        "data": {
          "keyword1": {
            "value": "OYO80001",
            "color": "#173177"
          },
          "keyword2": {
            "value": "2018年01月05日 12:30",
            "color": "#173177"
          },
          "keyword3": {
            "value": "500",
            "color": "#173177"
          },
          "keyword4": {
            "value": "201",
            "color": "#173177"
          },
          "keyword5": {
            "value": "2018-4-1",
            "color": "#173177"
          },
          "keyword6": {
            "value": "广州市天河区天河路208号",
            "color": "#173177"
          },
          "keyword7": {
            "value": "大床",
            "color": "#173177"
          },
          "keyword8": {
            "value": "jackie",
            "color": "#173177"
          },
          "keyword9": {
            "value": "888888",
            "color": "#173177"
          },
          "keyword10": {
            "value": "如有需要请联系前台客服88888",
            "color": "#173177"
          }
        },
        "emphasis_keyword": "keyword1.DATA"
      } ,
      method: 'post',
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data)
      },
      fail: function (res) {
        console.log(res.data)
      }
    })
    }
})