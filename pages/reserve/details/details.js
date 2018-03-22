const util = require('../../../utils/util.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    hotelId:'',
    hotelName:'OYO8005 莲之乡酒店',
    hotelAdd:'',
    hotelTel:'',
    latitude:'22.53332',
    longitude:'113.93041',
    date: {
      // indate: new Date().format('MM月dd日'),
      // outdate: new Date(+new Date + 3600000 * 24).format('MM月dd日')
      indate: new Date().format('yyyy-MM-dd'),
      outdate: new Date(+new Date + 3600000 * 24).format('yyyy-MM-dd')
    },
    totalDay: app.globalData.defaultEndd,
    rooms:[
      { id: 3, name: 'OYO8004', price: 400 },
      { id: 2, name: 'OYO8003', price: 300 },
      { id: 1, name: 'OYO8002', price: 200 },
      { id: 0, name: 'OYO8001', price: 100 },
    ],
       
  },
  getMap:function(){
    wx.navigateTo({
      url: '../../map/map?latitude=' + this.data.latitude + '&longitude=' + this.data.longitude + '&name=' + this.data.hotelName,
    })
  },
  orderInfo: function() {
    wx.navigateTo({
      url: '../orderinfo/orderinfo',
    })
  },
  callPhone:function()
  {
    wx.makePhoneCall({
      phoneNumber: '8888888'  
    })
    } , 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // app.func.req('get','/gethotel/getchildren',
    //  { 
    //   id:440305,
    //   key: app.globalData.tencentMapKey
    //   }, 
    //   function (res) {
    //   console.log(res)
    // });
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '酒店详情'
    })
  },

  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('时间', app.globalData.defaultIndate)
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
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      //url: '../logs/logs'
      url: '../hotel/hotel'
    })
  },
  editDays: function() {
    wx.navigateTo({
      // url: '../calendar/index',
      url: '../../calendar/index?begin=' + app.globalData.defaultIndate + '&end=' + app.globalData.defaultOutdate,
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})