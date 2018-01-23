<template>
<div>
 <h3>我是主页</h3>
  <ul>
    <li>
      <a v-link="{path:'/home/login/1001'}">登录</a>
    </li>
    <li>
       <a v-link="{path:'/home/register'}">注册</a>
    </li>
  </ul>
  <router-view></router-view>
  </div>
  
</template>
