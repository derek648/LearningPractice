Page({
  data: {
    userInfo: {}
  },
  
  onLoad() {
    // 页面加载时的逻辑
  },
  
  info() {
    wx.getUserProfile({
      desc: '用于展示用户信息',
      success: (res) => {
        console.log('用户信息:', res.userInfo);

        // 更新数据对象中的 userInfo
        this.setData({
          userInfo: res.userInfo
        });

        // 显示模态弹窗
        wx.showModal({
          title: '授权确认',
          content: `头像: ${res.userInfo.avatarUrl}\n昵称: ${res.userInfo.nickName}`,
          showCancel: true,
          cancelText: '取消',
          confirmText: '允许',
          success: (modalRes) => {
            if (modalRes.confirm) {
              // 用户点击允许，继续执行后续操作
              wx.login({
                success: (loginRes) => {
                  console.log('微信登录返回的code:', loginRes.code);

                  // 请求微信接口获取openid
                  wx.request({
                    url: 'https://api.weixin.qq.com/sns/jscode2session',
                    method: 'GET', // GET请求
                    data: {
                      appid: 'wx3a8747b53b3a748f',
                      secret: 'e54e93d94ed35b6bc08165fbc2b679b0',
                      js_code: loginRes.code,
                      grant_type: 'authorization_code'
                    },
                    success: (response) => {
                      console.log('获取openid响应:', response);
                      console.log('openid:', response.data.openid);
                      
                      // 发送openid到你的后端服务器
                      wx.request({
                        url: 'http://localhost:8080/api/save_openid',
                        method: 'POST',
                        data: {
                          openid: response.data.openid
                        },
                        success: (postRes) => {
                          console.log('成功发送openid到后端:', postRes);
                        },
                        fail: (postError) => {
                          console.error('发送openid到后端失败:', postError);
                        }
                      });
                    },
                    fail: (error) => {
                      console.error('获取openid失败:', error);
                    }
                  });
                },
                fail: (error) => {
                  console.error('微信登录失败:', error);
                }
              });
            } else if (modalRes.cancel) {
              // 用户点击取消，返回
              console.log('用户取消了授权');
            }
          }
        });
      },
      fail: (error) => {
        console.error('获取用户信息失败:', error);
      }
    });
  }
});
