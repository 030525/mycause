
// view-set img
export function view_or_set_img(str1,str2,img,setimg){
  wx.showActionSheet({
    itemList: [str1, str2],

    success(res) {
      if(res.tapIndex == 0)
      {
        if(img != "")
        {
          wx.previewImage({
            urls:[img[0]],
            current: img[0]
          })
        }
      }
      else if(res.tapIndex == 1)
      {
        wx.chooseImage({
          count: 1, 
          sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success(res) {
            setimg(res.tempFilePaths);
          }
        })        
      }
    }
  })
}
