export function get_list(url,page,size,cope_list)
{
  wx.showLoading({
    title: '数据加载中...',
  })

  wx.request({
    url: url,
    method:'GET',
    data:{
      page:page,
      size:size
    },
    
    success:res=>{
      console.log(res)
      cope_list(res);
    },

    complete:()=>{
      wx.hideLoading()
    }

  })
}