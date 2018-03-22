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
  hotelDetail:function(e) {
    console.log('e:',e)
    
    console.log('id:', e.currentTarget.id);
    wx.navigateTo({
      url: '../details/details?hotelId=' + e.currentTarget.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onGetDayInfo(options);
    var request_url = 'search/hotels?additional_fields=best_image,room_pricing,availability,tax_structure,restrictions,all_tags,images,hotel_images,category,amenities,dominant_color,captains_info,cx_rating,property_type&available_room_count[checkin]=' + options.begin + '&available_room_count[checkout]=' + options.end + '&available_room_count[min_count]=1&fields=id,name,city,street,category,geo_location,all_tags,all_tags_with_details,category,hotel_type,alternate_name&filters[coordinates][latitude]=&filters[coordinates][longitude]=&filters[coordinates][city]=goa&source=Web%20Booking'
     
    app.func.req('get', request_url,
      {
        
 
        // ACCESS_TOKEN: 'dUxaRnA5NWJyWFlQYkpQNnEtemo6bzdvX01KLUNFbnRyS3hfdEgyLUE=',
      },
      function (res) {
        console.log(res)
       
        that.setData({
          hotels: res.hotels
        });     
      }); 


    var that = this;
    /**
   * 获取系统信息
   */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
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