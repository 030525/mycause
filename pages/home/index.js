// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectitem:1,
    list: [
      { id: 1, name: '热门' },
      { id: 2, name: '地点' },
      { id: 3, name: '类型' },
      { id: 4, name: '报酬' },
    ],
    place:[
      { id: 1, name: '一粟堂' },
      { id: 2, name: '三清园' },
      { id: 3, name: '五味轩' },
      { id: 4, name: '七品居' },
      { id: 5, name: '九华厅' },
    ]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  a(){
    console.log(this.list)
  },

  onLoad(options) {

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