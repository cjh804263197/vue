<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <br>
    <input type="button" @click="change" value="按钮">
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  methods:{
    change(){
      this.msg='点击了按钮'
    }
  }
}
</script>

<style>

</style>
