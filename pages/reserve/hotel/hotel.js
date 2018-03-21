var app = getApp()
Page({
  data: {
     inMoth:0,
     outMoth:0,
     inDay:0,
     outDay:0,
     totalDay:1,
    // tab切换
    currentTab: 0,
    numberArray: [1, 2, 3, 4,5,6,7,8,9,10],
    objectArray: [
   
      { id: 3, name: 'OYO8004',price:400 },
      { id: 2, name: 'OYO8003', price: 300},
      { id: 1, name: 'OYO8002', price: 200},
      { id: 0, name: 'OYO8001', price: 100},
    ],
    hotels:[]
  },
  //根据酒店id到酒店详情
  hotelDetail:function() {
    wx.navigateTo({
      url: '../details/details'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onGetDayInfo(options);
    // app.func.req('get','/ws/district/v1/getchildren',
    //  { 
    //   id:440305,
    //   key: app.globalData.tencentMapKey
    //   }, 
    //   function (res) {
    //   console.log(res)
    // }); 
    var request_url = 'search/hotels?     additional_fields=cancellation_policies%2Cbest_image%2Croom_pricing%2Cavailability%2Camenities%2Crestrictions%2Ccategory%2Ccaptains_info%2Cnew_applicable_filters%2Cadditional_charge_info%2Cimages%2Chotel_images%2Cguest_ratings&available_room_count%5Bcheckin%5D=20%2F03%2F2018&available_room_count%5Bcheckout%5D=21%2F03%2F2018&available_room_count%5Bmin_count%5D=1&fields=id%2Cname%2Ccity%2Cstreet%2Ccategory%2Cgeo_location%2Ccategory%2Chotel_type%2Calternate_name%2Cshort_address&filters%5Bcoordinates%5D%5Bcity%5D=hyderabad&format_response%5Bbatch%5D%5Bcount%5D=20&format_response%5Bbatch%5D%5Boffset%5D=0&format_response%5Bsort_params%5D%5Bsort_on%5D=&format_response%5Bsort_params%5D%5Bascending%5D=true&pre_apply_coupon_switch=true&rooms_config=1%2C0%2C0&source=Web+Booking'

    // app.func.req('get', request_url,
    //   {
    //     // ACCESS_TOKEN: 'dUxaRnA5NWJyWFlQYkpQNnEtemo6bzdvX01KLUNFbnRyS3hfdEgyLUE=',
    //   },
    //   function (res) {
    //     console.log(res)
    //     that.setData({
    //       hotels: res.hotels
    //     });
    //   }); 
  },
  /**
      * 滑动切换tab
      */
  bindChange: function (e) {

    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  /**
   * 点击tab切换
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
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
 
  onGetDayInfo: function (options){
    // options.begin.getFullYear();
    this.setData({
      inMoth: new Date(options.begin).getMonth() + 1,
      outMoth: new Date(options.end).getMonth() + 1,
      inDay: new Date(options.begin).getDate(),
      outDay: new Date(options.end).getDate(),
      totalDay: options.totalDay
    })
     
  }
})