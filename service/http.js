// var rootDocment = 'https://apis.map.qq.com';//你的域名
var rootDocment = 'http://dev-mm-6.ap-southeast-1.elasticbeanstalk.com/api/v2/';//你的域名
function req(method,url, data, cb) {
  wx.request({
    url: rootDocment + url,
    data: data,
    method: method,
    header: { 'Content-Type': 'application/json', 'ACCESS_TOKEN':           'dUxaRnA5NWJyWFlQYkpQNnEtemo6bzdvX01KLUNFbnRyS3hfdEgyLUE=' },
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