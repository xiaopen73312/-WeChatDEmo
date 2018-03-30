// pages/more/more.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login: false,  //判断用户是否已登录
  },
  loginOrregist: function() {
    //redirectTo navigateTo
    wx.navigateTo({
      url: './login/login',
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
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({

      login: app.globalData.defaultLogin,

    })
    console.log('login:',this.data.login)
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
  //退出登录
  loginout: function() {
    wx.clearStorage({
      success: function (res) {
        console.log('清除登入记录')
      }
    })
    app.globalData.defaultLogin=false;

    this.setData({

      login: app.globalData.defaultLogin,

    })
    console.log('login：', app.globalData.defaultLogin)
  }
})