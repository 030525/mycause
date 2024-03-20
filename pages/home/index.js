// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectitem:0, // main list
    selectposition:-1, // position list
    list: [
      { id: 0, name: '热门' ,select:false},
      { id: 1, name: '地点' ,select:false},
      { id: 2, name: '类型' ,select:false},
      { id: 3, name: '报酬' ,select:false},
      { id: 4, name: '时效' ,select:false},
    ],
    position_type:[
      { id: 0, name: '食堂' },
      { id: 1, name: '宿舍' },
      { id: 2, name: '教学楼' },
      { id: 3, name: '办公楼' },
      { id: 4, name: '体育场' },
      { id: 5, name: '驿站' },
      { id: 6, name: '校门' },
      { id: 7, name: '其他' }
    ],
    canteen:[
      { id: 0, name: '一粟堂' },
      { id: 1, name: '三清园' },
      { id: 2, name: '五味轩' },
      { id: 3, name: '七品居' },
      { id: 4, name: '九华厅' },
    ],
    classroom:[
      { id: 0, name: '教一' },
      { id: 1, name: '教二' },
      { id: 2, name: '教三' },
      { id: 3, name: '教四' },
      { id: 4, name: '教五' },
      { id: 5, name: '实验楼一' },
      { id: 6, name: '实验楼二' },
    ],
    dormitory:[
      { id: 0, name: '枫' },
      { id: 1, name: '桔' },
      { id: 2, name: '栋' },
      { id: 3, name: '梅' },
      { id: 4, name: '竹' },
      { id: 5, name: '桂' },
      { id: 6, name: '汀兰苑' },
    ],
    admin:[
      { id: 0, name: '群贤楼' },
      { id: 1, name: '行政楼' },
      { id: 2, name: '知行楼' },
      { id: 3, name: '人文楼' },
    ],
    gym:[
      { id: 0, name: '东操' },
      { id: 1, name: '西操' },
      { id: 2, name: '体育馆' },
    ],
    station:[
      { id: 0, name: '东区驿站' },
      { id: 1, name: '西区驿站' },
      { id: 2, name: '枫苑驿站' },
    ],
    door:[
      { id: 0, name: '北大门' },
      { id: 1, name: '北二门' },
      { id: 2, name: '东大门' },
    ],
    other:[
      { id: 0, name: '图书馆' },
      { id: 1, name: '校医院' },
      { id: 2, name: '活动中心' },
      { id: 3, name: '法商综合' },
      { id: 4, name: '法商实训' },
    ],

    type:[
      { id: 0, name: '搭车' },
      { id: 1, name: '跑腿' },
      { id: 2, name: '陪同' },
      { id: 3, name: '查询' },
      { id: 4, name: '代办'}
    ],
    pay:[
      { id: 0, name: '0' },
      { id: 1, name: '1~5' },
      { id: 2, name: '6~10' },
      { id: 3, name: '11~20' },
      { id: 4, name: '21~40'},
      { id: 5, name: '41~100'},
      { id: 6, name: '100+'}
    ],
    time:[
      { id: 1, name: '30分钟' },
      { id: 2, name: '2小时'},
      { id: 3, name: '6小时'},
      { id: 4, name: '1天'},
      { id: 5, name: '3天'},
      { id: 6, name: '一周'},
      { id: 7, name: '一月'},
      { id: 8, name: '三月'},
      { id: 9, name: '本学期'},
      { id: 10, name: '长期'},
    ],
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

  change_catagory(event){
    var list = this.data.list;

    const s = parseInt(event.currentTarget.dataset.id);
    this.setData({
      selectitem : s,
    })

    for (var i = 0; i < list.length; i++) {
      if (i !== s) {
        list[i].select = false;
      }
      else list[i].select = true;
    }

    this.setData({
      list:list
    })

    if(s == 1)
    {
      this.setData({
        selectposition:-1
      })
    }

  },

  change_position(event){
    const s = parseInt(event.currentTarget.dataset.id);

    this.setData({
      selectposition:s
    })
  }
})