// pages/user/index.js
import { view_or_set_img } from '../../utils/img.js';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startY: 0,
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
  },
  personality(){
    wx.showActionSheet({
      itemList: ['查看个人简介','上传简介(markdown)'],
  
      success(res) {
        if(res.tapIndex == 0)
        {
          let result = app.towxml(`# Markdown 
          ## YOU KNOW HOW WE DO IT`,'markdown',{
          });
        }
        else if(res.tapIndex == 1)
        {
         
        }
      }
    })
  },
  help(){
    wx.showActionSheet({
      itemList: ['客服','使用帮助'], 
  
      success(res) {
        if(res.tapIndex == 0)
        {
        }
        else if(res.tapIndex == 1)
        {     
        }
      }
    })
  },
  setting(){
    wx.showActionSheet({
      itemList: ['退出登陆'],
  
      success(res) {
        if(res.tapIndex == 0)
        {
        }
        else if(res.tapIndex == 1)
        {        
        }
      }
    })
  }
})