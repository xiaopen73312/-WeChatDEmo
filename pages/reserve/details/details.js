const util = require('../../../utils/util.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    hotelId:'',
    hotelName:'OYO8005 莲之乡酒店',
    hotelAddress:'',
    hotelTel:'',
    hotelInfo:'',
    latitude:'22.53332',
    longitude:'113.93041',
    date: {
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
  //事件处理函数

  editDays: function () {
    wx.navigateTo({
      // url: '../calendar/index',
      url: '../../calendar/index?begin=' + app.globalData.defaultIndate + '&end=' + app.globalData.defaultOutdate,
    })
  },

  getMap:function(){
    wx.navigateTo({
      url: '../../map/map?latitude=' + this.data.latitude + '&longitude=' + this.data.longitude + '&name=' + this.data.hotelName,
      // url: '../../regeocoding/regeocoding?latitude=' + this.data.latitude + '&longitude=' + this.data.longitude + '&name=' + this.data.hotelName,
    })
  },

  introduce: function () {
    wx.navigateTo({
      url: '../introduce/introduce?hotelInfo=' + this.data.hotelInfo + '&hotelName=' + this.data.hotelName + '&hotelAddress=' + this.data.hotelAddress,
    })
  },

  orderInfo: function() {
    wx.navigateTo({
      url: '../orderinfo/orderinfo?hotelInfo=' + this.data.hotelInfo + '&hotelName=' + this.data.hotelName + '&hotelAddress=' + this.data.hotelAddress,
    })
  },
  
  callPhone:function()
  {
    wx.makePhoneCall({
      phoneNumber: '400-898-2288'  
    })
    } , 
    // var url='';
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options)

    app.func.req('get','/hotels/' + options.hotelId + '?fields=name,alternate_name,longitude,latitude,category,address,oyo_id,id,formatted_checkin_time,formatted_checkout_time,city,country_name,country,currency_symbol,short_address,use_oyo_name&additional_fields=room_pricing,images,amenity_list,restrictions,rich_amenities,payment_methods,cancellation_policies,additional_charge_info,captains_info,service_tax_compliance_text,pac_validate_info,shortlist_info,additional_info,social_rating,guest_ratings,urgency_info&available_room_count[checkin]=22-Mar-2018&available_room_count[checkout]=23-Mar-2018&rooms_config=1%2C0%2C0&pre_apply_coupon_switch=true&user_mode[]=CorporateGuest&requested_coupon=BOOK25&version=118&partner_app_version=118&android_id=706529785c7821a9&idfa=036e3e5b-1232-4ff6-82f8-c4adbff252cc&sid=1521691554344',
     { 
      // id:440305,
      // key: app.globalData.tencentMapKey
      }, 
      function (res) {

      console.log(res)
      that.setData({
        hotelName: res.name,
        // hotelAddress: res.address,
        // latitude:res.latitude,
        // longitude: res.longitude,
        hotelAddress: '深圳南山',
        latitude: 22.53332,
        longitude: 113.93041,
        hotelInfo: res.service_tax_compliance_text,
      }); 
       
    });
    
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
 
})