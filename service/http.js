// var rootDocment = 'https://apis.map.qq.com';//你的域名
var rootDocment = 'http://dev-mm-4.ap-southeast-1.elasticbeanstalk.com/api/v2/';//你的域名
function req(method,url, data, cb) {
  
  wx.request({
    url: rootDocment + url,
    data: data,
    method: method,
    header: { 'Content-Type': 'application/json', 'ACCESS_TOKEN':           'QmpDZlRxZWo2UkZ5M3pSeHZ5NW46bi13NHN0ZTV5V1I1aGpCUVVHOUM6aThoZnRvanBHdmJ6RWM2Y2RZN006OTQ5NDA1MjAwMQ==' },
    success: function (res) {
      return typeof cb == "function" && cb(res.data)
    },
    fail: function () {
      return typeof cb == "function" && cb(false)
    }
  })
}


module.exports = {
  req: req
}