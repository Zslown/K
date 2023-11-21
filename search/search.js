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
    searchBoxSrc:"https://ooo.0x0.ooo/2023/11/17/OelqHS.png",
    backSrc:"https://ooo.0x0.ooo/2023/11/17/Oel5XN.png",
    searchText: '' ,
    animationData: {},
  },
  search:function(){
    console.log(ev)
  },
  onLoad(options) {
    this.animation = wx.createAnimation({
      duration: 600, // 动画时长，单位ms
      timingFunction: 'ease', // 动画效果
   });
  },
  handleInput: function(event) {
    // 更新 searchText 数据
    this.setData({
      searchText: event.detail.value
    });
  },
  handleSearch: function() {
    // 当点击搜索按钮时执行
    const searchText = this.data.searchText;
    if (searchText) {
      // 使用 encodeURIComponent 对 searchText 进行编码
      const encodedSearchText = encodeURIComponent(searchText);
      // 打开新页面，跳转到百度搜索结果
      wx.navigateTo({
        // url: `/pages/webview/webview?url=https://www.baidu.com/s?wd=${encodedSearchText}`
        url:`/pages/findresult/findresult?fruitname=${this.data.searchText}`
      });
    }
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
  redirectToMainpage: function() {
    wx.navigateBack({
      delta: 1
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