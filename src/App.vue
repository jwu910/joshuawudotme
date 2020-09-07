<template>
  <div id="app">
    <router-view />
    <footer>
      <div>
        &copy; 2016-2020 | Joshua Wu
      </div>
      <div>
        Built with Vue.js | Powered on Netlify
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

footer {
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  width: 100%;
}
</style>
