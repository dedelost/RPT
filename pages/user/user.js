Page({
  data: {
    name: '用户名',
    list3: [
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '意见反馈'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '厕纸服务'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '附近的人'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '互助捐赠'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '通知'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '历史纪录'
      }
    ]
  },
  onItemClick(ev) {
    if (ev.detail.index === 5) {
      my.navigateTo({
        url: "/pages/history/history"
      })
    } else {
      my.alert({
        content: ev.detail.index,
      });
    }
  },
  imageError: function(e) {
    console.log('image3 发生错误', e.detail.errMsg)
  },
  imageLoad: function(e) {
    console.log('image 加载成功', e);
  },
  onLoad(query) {
    // 页面加载
    my.getAuthCode({
      scopes: 'auth_user',
      success: (res) => {
        my.getAuthUserInfo({
          success: (nickName) => {
            this.setData({
              userInfo: {
                mode: 'aspectFit',
                src: nickName.avatar,
              },
              name: nickName.nickName
            })
          }
        });
      },
    });
  },
  onReady() {
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
  }
});