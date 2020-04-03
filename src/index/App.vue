<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>这里是主体页面</div>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <div>
      <a href="/logion.html">跳转新的页面</a>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
