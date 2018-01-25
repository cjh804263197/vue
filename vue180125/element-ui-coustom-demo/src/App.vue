<template>
  <div id="app">
    <div>
      <el-button type="primary" @click="get">请求按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    get(){
      alert(1);
    }
  }
}
</script>

<style>
</style>
