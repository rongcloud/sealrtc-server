module.exports = {
  // AppKey 可在融云开发者后台获取 https://developer.rongcloud.cn
  RONGCLOUD_APPKEY: '',
  // Secret 可在融云开发者后台获取 https://developer.rongcloud.cn
  RONGCLOUD_SECRET: '',
  // 调试模式不发送验证码，点击发送验证码后输入万能验证码 9999 可通过验证
  DEBUG: true,
  // https://www.yunpian.com/entry DEBUG 为 true 此项可为空
  YUNPIAN_API_KEY: '',
  // Server 端口，按需调整
  SERVER_PORT: '8585',
  // MediaServer 地址
  MEDIASERVERS: [{
    name: '',
    url: ''
  }]
};