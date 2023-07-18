// index.js
Page({

    onLoad() {
        // 调用云函数
        wx.cloud.callFunction({
            // 要调用的云函数名称
            name: 'requestTest',
        })
        .then(res=>{
            console.log("请求成功 =>",res)
            this.setData({
                list: res.result.data.children
            })
        })
        .catch(err=>console.log("请求失败 =>",err))
    }
})