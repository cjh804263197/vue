<template>
  <div id="app">
    <input type="button" value="增加" @click="increase">
    <input type="button" value="减少" @click="decrease">
    <input type="button" value="当前数字为偶数时+1" @click="odd">
    <input type="button" value="点击异步" @click="asynCilck">
    <div>
      现在的数字为:{{count}},该数字是{{odder}}
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default{
  computed: mapGetters([
    'count',
    'odder'
  ]),
  methods:mapActions([
    'increase',
    'decrease',
    'odd',
    'asynCilck'
  ])
}
</script>

<style>

</style>
