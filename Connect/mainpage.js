// pages/mainpage/mainpage.js
const app = getApp();
Page({
  data: {
    isNightMode : app.globalData.isNightMode ,
    titleSrc : "https://ooo.0x0.ooo/2023/11/14/OeE5OL.png",
    logoSrc :"../img/logo.png",
    daymodeSrc :"https://ooo.0x0.ooo/2023/11/14/OeL3zs.png",
    nightmodeSrc :"https://ooo.0x0.ooo/2023/11/14/OeLCPK.png",
    historySrc: "https://ooo.0x0.ooo/2023/11/17/Oefdfr.png",
    searchSrc :"https://ooo.0x0.ooo/2023/11/14/OeETLX.png",
    animationData: {} 
  },
  onLoad(options) {
    this.animation = wx.createAnimation({
      duration: 600, // 动画时长，单位ms
      timingFunction: 'ease', // 动画效果
   });
  },
  chooseimg:function(){
    wx.chooseMedia({
      count: 9,
      mediaType: ['image','video'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success(res) {
        console.log(res.tempFiles[0].tempFilePath),
        wx.redirectTo({
          url: `/pages/scanresult/scanresult?img=${res.tempFiles[0].tempFilePath}`
        })
        }
      })
  },
  toggleNightMode: function(){
    this.animation.translateY(-110).step(); // -30px为滑动的距离，可以根据需要调整
    // 更新动画数据
    this.setData({
        animationData: this.animation.export()
    });
    // 将动画恢复到原位置，准备下一次动画
    setTimeout(() => {
    // 音乐播放与暂停逻辑
    if (app.globalData.isNightMode) {
      this.setData({ isNightMode: false });
       app.globalData.isNightMode = false;
     } else {
      this.setData({ isNightMode: true });
      app.globalData.isNightMode = true;
     }
      this.animation.translateY(0).step({ duration: 800 });
      this.setData({
        animationData: this.animation.export()
      });
    }, 500); // 500ms是动画的时长
  },
  redirectToHistory: function() {
    wx.navigateTo({
      url: '/pages/history/history',
    })
  },
  redirectToSearch: function() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      isNightMode : app.globalData.isNightMode
  });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})