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

  &,
  body,
  #app {
    height: 100%;
    margin: 0;
    padding: 0;
  }
}

#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  flex-direction: column;
}
</style>
