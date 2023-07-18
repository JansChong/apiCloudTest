// 云函数入口文件
const cloud = require('wx-server-sdk');
var request = require('request')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
    
    return new Promise((resolv, reject) =>{
        request({
            url: "https://apis.netstart.cn/xpc/home/recommend",
            method: "GET",//GET
            json: true,
            headers: {
              "content-type": "application/json",
            },
          }, function (error, response, body) {
              console.log("状态 =>", response);
            if (!error && response.statusCode == 200) {
              try {
                console.log("云端请求成功 =>", body);
                resolv(body)
              } catch (e) {
                console.log("云端请求失败 =>", e);
                reject()
              }
            }
          })
    })
}