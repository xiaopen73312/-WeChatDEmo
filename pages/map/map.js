
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     latitude: 23.099994,
//     longitude: 113.324520,
//     markers: [{
//       latitude: 23.099994,
//       longitude: 113.324520,
//       name: '广东省深圳市南山区桃园路2号',
//      iconPath: './../images/ic_position.png'
//     }],
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//     this.setData({
//         latitude: options.latitude,
//         longitude: options.longitude,
//         markers: {
//           // latitude: options.latitude,
//           // longitude: options.longitude,
//           // name: options.name
//           id: "1",
//           latitude: options.latitude,
//           longitude: options.longitude,
//           width: 50,
//           height: 50,
//           iconPath: "./../images/ic_position.png",
//           title: "哪里"
//         }

//       });
  
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {
    
//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {
    
//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {
    
//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {
    
//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {
    
//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {
    
//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {
    
//   }
// })
// // Page({
// //   data: {
// //     latitude: 23.099994,
// //     longitude: 113.324520,
// //     markers: [{
// //       latitude: 23.099994,
// //       longitude: 113.324520,
// //       name: 'T.I.T 创意园'
// //     }],
  
// //     // covers: [{
// //     //   latitude: 23.099994,
// //     //   longitude: 113.344520,
// //     //   iconPath: './../images/ic_position.png'
// //     // }, {
// //     //   latitude: 23.099994,
// //     //   longitude: 113.304520,
// //     //   iconPath: './../images/ic_position.png'
// //     // }]
// //     onLoad: function (options) {
// //       this.setData({ 
// //         latitude: options.latitude,
// //         longitude: options.longitude,
// //         markers: {
// //           latitude: options.latitude,
// //           longitude: options.longitude,
// //           name: options.name
// //         }

// //       });
// //       console.log(options.latitude)
// //     }
// //   }
// // })
Page({
  data: {
    Height: 0,
    scale: 13,
    latitude: "",
    longitude: "",
    markers: [],
    controls: [{
      id: 1,
      iconPath: './../images/ic_position.png',
      position: {
        left: 320,
        top: 100 - 50,
        width: 20,
        height: 20
      },
      clickable: true
    },
    {
      id: 2,
      iconPath: './../images/ic_position.png',
      position: {
        left: 340,
        top: 100 - 50,
        width: 20,
        height: 20
      },
      clickable: true
    }
    ],
    circles: []

  },

  onLoad: function (options) {
    var _this = this;

    wx.getSystemInfo({
      success: function (res) {
        //设置map高度，根据当前设备宽高满屏显示
        _this.setData({
          view: {
            Height: res.windowHeight
          }

        })



      }
    })

    // wx.getLocation({
    //   type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
    //   success: function (res) {

        _this.setData({
          latitude: options.latitude,
          longitude: options.longitude,
          markers: [{
            id: "1",
            latitude: options.latitude,
            longitude: options.longitude,
            width: 50,
            height: 50,
            iconPath: "./../images/ic_position.png",
            title: options.name

          }],
          circles: [{
            latitude: options.latitude,
            longitude: options.longitude,
            color: '#FF0000DD',
            fillColor: '#7cb5ec88',
            radius: 300,
            strokeWidth: 1
          }]

      //   })
      // }

    })

  },

  regionchange(e) {
    console.log("regionchange===" + e.type)
  },

  //点击merkers
  markertap(e) {
    console.log(e.markerId)

    wx.showActionSheet({
      itemList: ["tel:8008000"],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },

  //点击缩放按钮动态请求数据
  controltap(e) {
    var that = this;
    console.log("scale===" + this.data.scale)
    if (e.controlId === 1) {
      // if (this.data.scale === 13) {
      that.setData({
        scale: --this.data.scale
      })
      // }
    } else {
      //  if (this.data.scale !== 13) {
      that.setData({
        scale: ++this.data.scale
      })
      // }
    }


  },


})