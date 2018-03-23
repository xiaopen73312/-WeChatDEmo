var app = getApp();
Page({
  data: {
    booking: [],
    show: true,
    winHeight: "",//窗口高度,
    winWidth:'',
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置,
    login: true,   //判断用户是否已登录
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 2) {
      this.setData({
        scrollLeft: this.data.winWidth / 3
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  onLoad: function () {

    var that = this;
    app.func.req('get', 'bookings?fields=id,booking_no,checkin,checkout,created_at,status,get_payment_status,source,expected_checkin_time,invoice_no,guest_id&additional_fields=hotel,city,hotel_image,booking_rooms&format_response[batch][offset]=0&format_response[batch][count]=10&format_response[sort_params][sort_on]=checkin_date&format_response[sort_params][ascending]=true&filters[status]=0&user_mode[]=CorporateGuest&version=118&partner_app_version=118&android_id=706529785c7821a9&idfa=036e3e5b-1232-4ff6-82f8-c4adbff252cc&sid=1521699554337',
      {
        // id:440305,
        // key: app.globalData.tencentMapKey
      },
      function (res) {

        console.log(res)

        var arr = []
        if (res.bookings.length != 0) {
          res.bookings.forEach(function (item, index) {
            var date = new Date(item.checkout).getTime() - new Date(item.checkin).getTime()
            var days = Math.floor(date / (24 * 3600 * 1000))
            return arr.push(Object.assign(item, { days: days }))
          })
          that.setData({
            booking: arr,
            show: true,
          });
        } else {
          that.setData({
            booking: [],
            show: false,
          })
        }

      });

    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR;
        console.log(calc)
        that.setData({
          winHeight: calc,
          winWidth: clientWidth
        });
      }
    });
  },
  // footerTap: app.footerTap
})