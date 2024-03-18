// pages/user/index.js
import { view_or_set_img } from '../../utils/img.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    background:"",
    head:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
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

  },

  /* 查看更换背景
  */ 


  background(e){

    view_or_set_img('查看图片','更换背景',this.data.background,(newimg)=>{
       this.setData({
         background:newimg
       })
    })

  },

  head(){
    view_or_set_img('查看图片','更换头像',this.data.head,(newimg)=>{
      this.setData({
        head:newimg
      })
    })
  }
})