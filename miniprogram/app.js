// app.js
App({
    onLaunch() {
        if (!wx.cloud) {
            console.log("版本太低");
        } else {
            wx.cloud.init({
                env: 'test-7g6ahfy1fcdf72f9'
            })
        }
    }
})