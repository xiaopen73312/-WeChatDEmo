// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
      title: '酒店列表'
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
   //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      //url: '../logs/logs'
      url: './details/details'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        // 可使用窗口宽度、高度
        console.log('height=' + res.windowHeight);
        console.log('width=' + res.windowWidth);
        // 计算主体部分高度,单位为px
        that.setData({
          // second部分高度 = 利用窗口可使用高度 - first部分高度（这里的高度单位为px，所有利用比例将300rpx转换为px）
          second_height: res.windowHeight ,
          second_width: res.windowWidth
          // - res.windowWidth / 750 * 300
        })
      }
    })
  }
,


  // 为picker绑定方法： 其中获得的时间为2017-06 - 01格式的。
  bindDateChange: function (e) {
    var that = this;
    that.setData({
      date1: e.detail.value
    })
    console.log(that.data.date1);
  },
  bindDateChangeTwo: function (e) {
    var that = this;
    that.setData({
      date2: e.detail.value
    })
    console.log(that.data.date2);
  },
  //表单提交
  submitForm: function (e) {
    //字符串转换为时间戳，单位毫秒
    var date1 = new Date(Date.parse(that.data.date1.replace(/-/g, "/")));
    var date_in = date1.getTime();
    var date2 = new Date(Date.parse(that.data.date2.replace(/-/g, "/")));
    var date_out = date2.getTime();
    if (that.data.is_home == 1 && date1 >= date2) {

      wx.showToast({

        title: '退房时间必须大于住房时间!',

        icon: 'loading',

        duration: 1500

      })

      setTimeout(function () {

        wx.hideToast()

      }, 2000)
    } else if (that.data.is_home == 1 && date1 < Date.parse(new Date()) - 86400000) {

      wx.showToast({

        title: '住房时间不能小于当前时间!',

        icon: 'loading',

        duration: 1500

      })

      setTimeout(function () {

        wx.hideToast()

      }, 2000)

    } else {
      //处理表单的code，自己来
    }
  }
})