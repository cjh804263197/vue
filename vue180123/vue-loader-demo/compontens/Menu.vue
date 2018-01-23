<template>
  <ul>
      <li v-for="val in arr" v-text="val"></li>
  </ul>
</template>

<script>
    export default{
        data(){
            return {
                arr:['one','two','three','four','five']
            }
        }
    }
</script>
