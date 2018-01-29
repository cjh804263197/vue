<template>
  <div id="app">
    <input type="button" value="增加" @click="increment">
    <input type="button" value="减少" @click="decrement">
    <input type="button" value="当前数字为偶数时增加1,为奇数时增加3" @click="oddClick">
    <input type="button" value="皮肤更换" @click="changeShink">
    <h2>当前数字:{{count}},它是{{odd}},皮肤是否显示:{{skink}}</h2>
  </div>
</template>

<script>

import {mapActions,mapGetters} from 'vuex'

export default {
  computed: mapGetters([
    'count',
    'odd',
    'skink'
  ]),
  methods:mapActions([
    'increment',
    'decrement',
    'oddClick',
    'changeShink'
  ])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
