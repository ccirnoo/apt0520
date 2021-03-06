// pages/aipintuan/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList()
    this.getNavItems()
    this.getFloorData()
  },
  getSwiperList: function () {
    const swiper_list = {
      "message": [{
        "image_src": "http://www.linweiqin.cn/img/banner1.jpg",
        "goods_id": 1229,
      }, {
        "image_src": "http://www.linweiqin.cn/img/banner2.jpg",
        "goods_id": 3295,
      }, {
        "image_src": "http://www.linweiqin.cn/img/banner3.jpg",
        "goods_id": 382,
      }]
    }
    this.setData({
      swiper_list: swiper_list.message
    })
  },
  getNavItems: function () {
    const navItems = {
      "message": [{
        "name": "分类",
        "image_src": "http://www.linweiqin.cn/img/cat1.png",
        "open_type": "switchTab",
        "navigator_url": "/pages/user/index"
      }, {
        "name": "秒杀拍",
        "image_src": "http://www.linweiqin.cn/img/cat2.png",
        "open_type": "switchTab",
        "navigator_url": "/pages/user/index"
      }, {
        "name": "超市购",
        "image_src": "http://www.linweiqin.cn/img/cat3.png",
        "open_type": "switchTab",
        "navigator_url": "/pages/user/index"
      }, {
        "name": "母婴品",
        "image_src": "http://www.linweiqin.cn/img/cat4.png",
        "open_type": "switchTab",
        "navigator_url": "/pages/user/index"
      }, {
        "name": "母婴品",
        "image_src": "http://www.linweiqin.cn/img/cat5.png",
        "open_type": "switchTab",
        "navigator_url": "/pages/user/index"
      }]
    }
    this.setData({
      navItems: navItems.message
    })
  },

  getFloorData: function () {
    const floorData = {
      "message": [{
        "floor_title": {
          "name": "时尚服装",
        },
        "product_list": [{
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor1.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor2.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor3.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor4.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor5.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor6.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }]
      }]
    }
    this.setData({
      floorData: floorData.message
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})