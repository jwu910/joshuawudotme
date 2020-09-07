<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  components: { Footer },
};
</script>

<style lang="scss">
@import "@/styles/variables";

html {
  font-size: $font-size-base;
  background-color: $theme-background-color;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
