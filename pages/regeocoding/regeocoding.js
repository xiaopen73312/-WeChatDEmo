var bmap = require('../../libs/bmap-wx.min.js');
var wxMarkerData = [];
Page({
    data: {
        markers: [],
        latitude: '',
        longitude: '',
        rgcData: {}
    },
    makertap: function(e) {
        var that = this;
        var id = e.markerId;
        that.showSearchInfo(wxMarkerData, id);
    },
    onLoad: function (options) {
        var that = this;
        var BMap = new bmap.BMapWX({
          ak: 'fqaXHVSxp5WNYTG1Yf1XsOBZM9d0yVwG'
        });
        var fail = function(data) {
            console.log(data)
        };
        var success = function(data) {
          console.log(data)
            wxMarkerData = data.wxMarkerData;
            that.setData({
                markers: wxMarkerData
            });
            that.setData({
                latitude: wxMarkerData[0].latitude
            });
            that.setData({
                longitude: wxMarkerData[0].longitude
            });
        }
        BMap.regeocoding({
          // location:'39.915,116.404',
          location: options.latitude+',' + options.longitude,
            fail: fail,
            success: success,
            iconPath: '../../img/marker_red.png',
            iconTapPath: '../../img/marker_red.png'
        });
    },
    showSearchInfo: function(data, i) {
        var that = this;
        that.setData({
            rgcData: {
                address: '地址：' + data[i].address + '\n',
                desc: '描述：' + data[i].desc + '\n',
                business: '商圈：' + data[i].business
            }
        });
    }

})