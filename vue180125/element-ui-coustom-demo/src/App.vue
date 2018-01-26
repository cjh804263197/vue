<template>
  <div id="app">
    <div>
      <el-button type="primary" @click="get">请求本地数据按钮</el-button>
      <br>
      <el-button type="primary" @click="get2">请求跨域数据按钮</el-button>
    </div>
    {{msg}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  methods:{
    get(){
      var _this = this;
      axios.get('a.txt')
      .then(function(res){
        console.log(res);
        _this.msg=res.data;
      }).catch(function(err){
        console.log(err);
      })
    },
    get2(){
      var _this = this;
      axios.get('https://api.github.com/users/cjh804263197')
      .then(function(res){
        _this.msg=res.data;
      }).catch(function(err){
        console.log(err);
      });
    }
  }
}
</script>

<style>
</style>
