// var rootDocment = 'https://apis.map.qq.com';//你的域名
var rootDocment = 'http://localhost:8080/';//你的域名
function req(method,url, data, cb) {
  wx.request({
    url: rootDocment + url,
    data: data,
    method: method,
    header: { 'Content-Type': 'application/json' },
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