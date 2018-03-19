//index.js
require('../../utils/dateFormat.js');
//获取应用实例
const app = getApp()

Page({
  data: {
    date: {
      indate: new Date().format('MM月dd日'),
      outdate: new Date(+new Date + 3600000 * 24).format('MM月dd日')
    },
    userInfo: {},
    hasUserInfo: false,
     
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      //url: '../logs/logs'
      url: '../reserve/reserve'
      //  url: '../request-payment/request-payment'
    })
  },

  onLoad: function () {
    
   
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.hasUserInfo){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    // 获取用户的位置
    this.getLocation();
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      location: app.globalData.defaultCity,
      county: app.globalData.defaultCounty
    })
  },
  switchcity: function () {
    wx.navigateTo({
      url: '../switchcity/switchcity'
    })
  },
  calendar: function () {
    wx.navigateTo({
      url: '../calendar/index'
    })
  },
  

  //定位当前城市
  getLocation: function () {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        //当前的经度和纬度
        let latitude = res.latitude
        let longitude = res.longitude
        wx.request({
          url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=${app.globalData.tencentMapKey}`,
          success: res => {
            app.globalData.defaultCity = app.globalData.defaultCity ? app.globalData.defaultCity : res.data.result.ad_info.city;
            app.globalData.defaultCounty = app.globalData.defaultCounty ? app.globalData.defaultCounty : res.data.result.ad_info.district;
            that.setData({
              location: app.globalData.defaultCity,
              county: app.globalData.defaultCounty
            });

          }
        })
      }
    })
  },
  // 用户点击右上角分享
  onShareAppMessage: function () {
    return {
      title: 'OYO',
      desc: '分享个小程序，希望你喜欢☺️~',
      success: function (res) {
        // 转发成功
        wx.showToast({
          title: "分享成功",
          duration: 1000,
          icon: "success"
        })
      }
    }
  }


})