const util = require('../../../utils/util.js')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: {
      indate: new Date().format('yyyy-MM-dd'),
      outdate: new Date(+new Date + 3600000 * 24).format('yyyy-MM-dd')
    },
    totalDay: app.globalData.defaultEndd,
    hotelName: 'OYO8005 莲之乡酒店',
    hotelAddress: '',
    hotelInfo: '',
  },
  subMitorder:function() {
    
    wx.redirectTo({
      url: '../pay/pay',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      hotelName: options.hotelName,
      hotelAddress: options.hotelAddress,

      hotelInfo: options.hotelInfo,
    });
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
    if (app.globalData.defaultIndate != '') {
      this.data.date.indate = app.globalData.defaultIndate;
      this.data.date.outdate = app.globalData.defaultOutdate;
    }
    this.setData({

      totalDay: app.globalData.defaultEndd,
      date: {
        indate: util.formatTime(new Date(this.data.date.indate)),
        outdate: util.formatTime(new Date(this.data.date.outdate))
      }
    })
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
            "value": this.data.hotelName,
            "color": "#173177"
          },
          "keyword2": {
            "value": new Date().format('yyyy年MM月dd日 hh:mm'),
            "color": "#173177"
          },
          "keyword3": {
            "value": "199",
            "color": "#173177"
          },
          "keyword4": {
            "value": this.data.hotelAddress,
            "color": "#173177"
          },
          "keyword5": {
            "value": "305",
            "color": "#173177"
          },
          "keyword6": {
            "value": this.data.date.indate,
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
        wx.redirectTo({
          url: '../pay/pay',
        })

      },
      fail: function (res) {
        console.log('',res.data)
        wx.redirectTo({
          url: '../pay/pay',
        })
      }
    })
    }
})