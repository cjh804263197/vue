<template>
  <h1 v-text="msg"></h1>
  <menus></menus>
</template>

<script>
    import Menu from './compontens/Menu.vue'

    export default{
        data(){
            return {
                msg:'你好'
            }
        },
        components:{
            menus:Menu
        }
    }
</script>

<style>

</style>

