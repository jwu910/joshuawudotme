<template>
  <div class="home">
    <img class="profile" alt="Profile image" src="../assets/profile.jpg" />
    <h1>Hello nerds! I'm Josh</h1>
    <section>
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
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 60%;
  margin: auto;
}

.profile {
  border-radius: 50%;
  height: 12rem;
  padding: 2rem;
  width: 12rem;
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
  padding: 0.5rem;
  vertical-align: center;
}

.social {
  &:hover {
    opacity: 0.5;
  }
}
</style>
