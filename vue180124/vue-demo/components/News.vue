<template>
  <div>
      <h3>我是新闻</h3>
      <div>
          <ul>
              <li>
                  <router-link to="/news/科技新闻/2018-01-25">新闻1</router-link>
              </li>
              <li>
                  <router-link to="/news/文化新闻/2018-01-26">新闻2</router-link>
              </li>
              <li>
                  <router-link to="/news/体育新闻/2018-01-25">新闻3</router-link>
              </li>
          </ul>
      </div>
      <div>
          <router-view></router-view>
      </div>
  </div>
</template>
