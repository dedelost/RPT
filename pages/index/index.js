Page({
  data: {
    mapheight: "width: 100vw; height:93.3vh",
    mylongitude: "121.49971691534425",
    mylatitude: "31.239658843127756",
    tabs: ['红包厕所', '公共厕所'],
    markers: [
      {
        iconPath: "/image/toilet.png",
        id: 10,
        latitude: 31.161402,
        longitude: 121.431133,
        width: 80,
        height: 80,
        marName: '钦州大厦',
        callout: {content: '钦州大厦'}
      },
      {
        iconPath: "/image/toilet.png",
        id: 11,
        latitude: 31.153218,
        longitude: 121.429399,
        width: 80,
        height: 80,
        marName: '上海南站',
        callout: { content: '上海南站' }
      },
      {
        iconPath: "/image/toilet.png",
        id: 12,
        latitude: 31.160281,
        longitude: 121.426811,
        width: 80,
        height: 80,
        marName: '建行厕所',
        callout: { content: '建设银行' }
      },
    ],
    toiletName: '生态厕所',
    icons: ["/image/female.png", "/image/male.png", "/image/futari.png", "/image/washstand.png", "/image/bumf.png"],
  },
  onLoad(query) {
    // 页面加载
      my.getSystemInfo({
        success: (res) => {
          console.log(res)
          let screenH = res.windowHeight * res.pixelRatio
          let screenW = res.windowWidth * res.pixelRatio
          this.setData({
            controls: [{
                id: 1,
                iconPath: '/image/scanbtn.png',
                position: {
                  left: screenW * 0.095,
                  top: screenH * 0.279,
                  width: screenW * 0.19,
                  height: screenW * 0.07,
                },
                clickable: true
              },
              {
                id: 2,
                iconPath: '/image/local.png',
                position: {
                  left: screenW * 0.015,
                  top: screenH * 0.284,
                  width: screenW * 0.05,
                  height: screenW * 0.05,
                },
                clickable: true
              },
              {
                id: 3,
                iconPath: '/image/config.png',
                position: {
                  left: screenW * 0.015,
                  top: screenH * 0.244,
                  width: screenW * 0.05,
                  height: screenW * 0.05,
                },
                clickable: true
              },
              {
                id: 4,
                iconPath: '/image/user.png',
                position: {
                  left: screenW * 0.305,
                  top: screenH * 0.2865,
                  width: screenW * 0.05,
                  height: screenW * 0.05,
                },
                clickable: true
              },
            ],
          })
        }
      }),
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    this.getloc()
    this.mapCtx = my.createMapContext('map')
    this.setData({
      activeTab: 0,
    });
    console.log(this.data.markers)
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onTabBarTap(e) {
    const { index } = e.target.dataset
    this.setData({
      activeTab: index,
    });
  },
  tap(e) {
    this.setData({
      mapheight: "width: 100vw; height:93.3vh",
    });
  },
  markertap(e) {
    console.log(e.markerId)
    let toiletMarker = this.data.markers.find((maritem)=>{
      return maritem.id == e.markerId
    })
    let thisToilet = toiletMarker.marName
    console.log(toiletMarker)
    this.setData({
      toiletName: thisToilet,
    });
    console.log(this.data.toiletName)
  },
  callouttap(e) {
    this.setData({
      mapheight: "width: 100vw; height:58vh",
    });
  },
  controltap(e) {
    if(e.controlId === 1){
      my.scan({
        type: 'qr',
        success: (res) => {
          my.alert({ title: res.code });
        },
      });
    } else if (e.controlId === 2){
      this.moveToLocation()
    } else if (e.controlId === 3) {
      my.alert({
        content: "设置",
      });
    }  else if (e.controlId === 4){
      my.getAuthCode({
        scopes: 'auth_user',
        success: (res) => {
          my.navigateTo({
            url: "/pages/user/user"
          })
        },
      });
    }
  },
  gocomment() {
    my.navigateTo({
      url: "/pages/comment/comment"
    })
  },
  getloc() {
    my.getLocation({
      success: (res) => {
        console.log(res)
        this.setData({
          mylongitude: res.longitude,
          mylatitude: res.latitude,
        })
      },
    });
  },
  getCenterLocation() {
    this.mapCtx.getCenterLocation(function(res) {
      console.log(res.longitude)
      console.log(res.latitude)
    })
  },
  moveToLocation() {
    this.mapCtx.moveToLocation()
  },

  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: '厕所在哪儿',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
