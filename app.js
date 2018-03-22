var http = require('service/http.js')
const APP_ID = 'wxd9184f3fcc08011b';//输入小程序appid  
const APP_SECRET = '46a2c909ce1ecee963cc146c11c668e2';//输入小程序app_secret  
// var OPEN_ID = ''//储存获取到openid  
// var SESSION_KEY = ''//储存获取到session_key 
 
App({
  globalData: {
    userInfo: null,
   locationInfo: null,
   tencentMapKey: "WAQBZ-OQWCK-TKCJZ-AM74R-PHQVF-J4FPI",
   defaultCity: '',
   defaultCounty: '',
   defaultIndate:'',
   defaultOutdate:'',
   defaultEndd:1,
   ACCESS_TOKEN:'',
   OPEN_ID:'',
   SESSION_KEY:''
  },
  
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs),
      this.getAession_key()
  }, 
  //获取Aession_key
  getAession_key:function(){
    var that = this;
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential', //仅为示例，并非真实的接口地址
      data: {
        appid: 'wxd9184f3fcc08011b',
        secret: '46a2c909ce1ecee963cc146c11c668e2'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        that.globalData.ACCESS_TOKEN = res.data.access_token;
      }
    })
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  //获取openid
  getOpenIdTap: function () {
    var that = this;
    wx.login({
      success: function (res) {
        wx.request({
          //获取openid接口  
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data: {
            appid: APP_ID,
            secret: APP_SECRET,
            js_code: res.code,
            grant_type: 'authorization_code'
          },
          method: 'GET',
          success: function (res) {
            console.log(res.data)
            that.globalData.OPEN_ID = res.data.openid;//获取到的openid  
            that.globalData.SESSION_KEY = res.data.session_key;//获取到session_key  
            //  console.log(OPEN_ID)
            //  console.log(SESSION_KEY)
            // that.setData({
            //   openid: res.data.openid.substr(0, 10) + '********' + res.data.openid.substr(res.data.openid.length - 8, res.data.openid.length),
            //   session_key: res.data.session_key.substr(0, 8) + '********' + res.data.session_key.substr(res.data.session_key.length - 6, res.data.session_key.length)
            // })
          }
        })
      }
    })
  },
  //get locationInfo
  //  getLocationInfo: function (cb) {
  //   var that = this;
  //   if (this.globalData.locationInfo) {
  //     cb(this.globalData.locationInfo)
  //   } else {
  //     wx.getLocation({
  //       type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
  //       success: function (res) {
  //         that.globalData.locationInfo = res;
  //         cb(that.globalData.locationInfo)
  //       },
  //       fail: function () {
  //         // fail
  //       },
  //       complete: function () {
  //         // complete
  //       }
  //     })
  //   }
  // },
  

  func: {
    req: http.req
  }
  
})