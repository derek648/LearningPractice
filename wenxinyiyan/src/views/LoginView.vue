<template>
  <div class="home">
    <!-- 显示 Vue 标志图片 -->
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- 引用 Login 组件 -->
    <Login></Login>
  </div>
</template>

<script>
// @ 是 /src 的别名
import Login from '@/components/Login.vue'

export default {
  name: 'HomeView', // 组件的名称，用于调试和组件树中识别
  components: {
    Login // 注册 Login 组件，使其在模板中可用
  },
  mounted(){
    import ('../assets/css/gyt/vue.css');
  }
}
</script>

<style scoped>
/* 目前没有定义样式 */
</style>
