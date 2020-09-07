<template>
  <footer>
    <div class="links">
      <span class="logo">
        <img width="42" src="../assets/wu-logo.png" />
      </span>
      <span class="spacer">|</span>
      <a
        class="social"
        href="https://github.com/jwu910"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="Github logo" src="../assets/github.png" />
      </a>
      <a
        class="social"
        href="https://linkedin.com/in/wujoshua"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="LinkedIn logo" src="../assets/linkedin.png" />
      </a>
    </div>
    <div>
      &copy; 2016-2020 | Joshua Wu
    </div>
    <div>
      Built with Vue.js | Powered on Netlify
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

footer {
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  width: 100%;
}

.links {
  display: flex;
  justify-content: center;

  img {
    height: 32px;
    width: 32px;
    padding: 0.5rem;
  }
}

.logo img {
  width: unset;
}

.spacer {
  color: $theme-color-secondary;
  padding: 0.5rem;
  vertical-align: center;
}

.social {
  &:hover {
    opacity: 0.5;
  }
}
</style>
