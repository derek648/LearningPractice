<template>
  <div>
    <!-- 主标题 -->
    <h1>微信公众号的二维码扫码登录</h1>
    <!-- 分隔线 -->
    <hr/>
    <!-- QR码容器，绑定了加载动画 -->
    <div class="qrCode" 
      v-loading="loadCode"   <!-- 使用v-loading指令显示加载状态 -->
      element-loading-text="拼命加载中">  <!-- 加载状态文本 -->
        <!-- iframe展示二维码 -->
        <iframe class="wh100 box" id="frame" src="./qrCode.html" scrolling="no"></iframe>
    </div>
  </div>
</template>

<script>
// https://blog.csdn.net/helloxiaoliang/article/details/126865344

export default {
  data(){
    return {
      loadCode: true,  // 控制二维码加载动画的状态
    }
  },
  created(){
    // 在组件创建后，启动定时器来隐藏加载动画
    let timer = setTimeout(()=>{
      this.loadCode = false;  // 设置加载状态为false，隐藏加载动画
      clearTimeout(timer);  // 清除定时器
    }, 2000)

    // 调用轮询函数检查扫码状态
    this.loopFun()
  },
  methods:{
    // 定义一个异步的sleep函数，用于暂停指定时间
    sleep(dealy){
      return new Promise((res, rej)=>{
        let tm = setTimeout(()=>{
          clearTimeout(tm)  // 清除定时器
          res()  // 解决Promise
        }, dealy)
      })
    },
    // 轮询函数，检查用户是否已扫码成功
    async loopFun(){
      // 从本地存储获取用户ID，如果没有则默认'a'
      let myid = sessionStorage.getItem('myid') || 'a'
      console.log('myid', myid);  // 打印用户ID
      // 向后台发起请求，检查扫码登录状态
      let rel = await this.$axios.get(`${window.baseApi}/Login?myid=${myid}`)
      console.log('是否登录：',rel);  // 打印响应结果
      
      // 根据后台返回结果判断登录状态
      if(rel && rel.data==true){
        // 登录成功
        this.$message({
          message: '登录成功',
          type: "success"
        })
        this.$router.push('/home')  // 跳转到首页
        return
      }

      // 如果未登录，休眠3秒后再次检查
      if(!rel || (rel && !rel.data) || !rel.data.login){
        // 休眠3秒
        await this.sleep(3000)
        this.loopFun()  // 递归调用轮询函数
      } else {
        // 如果扫码了，跳转页面
        this.$message({
          message: '登录成功',
          type: "success"
        })
        this.$router.push('/home')  // 跳转到首页
      }
    }
  }

}
</script>

<style>
  /* 全局背景样式 */
  body {
    background: url('../assets/background.png') no-repeat center center fixed;
    background-size: cover;
    margin: 0;
    padding: 0;
  }

  /* 样式用于调整二维码iframe的大小 */
  #frame { 
    width: 450px; height: 450px; 
    position:relative; left:-8px; top: -8px;
    -webkit-transform-origin: 0 0;  /* 设置变形的起点 */
    -webkit-transform: scale(0.5);  /* 缩放iframe */
  }
</style>

<style scoped>
  /* 设置iframe和二维码容器的样式 */
  .wh100{
    width: 100%;
    height: 100%;
  }
  
  .box{
    border: none;
    overflow: hidden;
  }
  .qrCode{
    border: 1px solid #ddd;  /* 设置二维码容器的边框 */
    width: 200px;
    height: 200px;
    margin: 20px auto;  /* 设置容器的外边距，使其居中 */
    overflow: hidden;
  }
</style>

