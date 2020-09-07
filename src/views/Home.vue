<template>
  <div class="home">
    <img class="profile" alt="Profile image" src="../assets/profile.jpg" />
    <h1>Hello nerds! I'm Josh</h1>
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
  margin: 2rem 0;

  @media (min-width: 768px) {
    max-width: 768px;
    margin: auto;
  }
}

.profile {
  border-radius: 50%;
  height: 12rem;
  width: 12rem;
}
</style>
