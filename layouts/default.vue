<template>
  <v-app>
    <v-main id="default-layout-main">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.container {
  width: 75%;
  margin: 0 auto;
}

@media screen and (max-width: 1264px) {
  .container {
    width: 95%;
  }
}

@media screen and (max-width: 600px) {
  .container {
    width: 98%;
  }
}

#default-layout-main {
  background-color: #f1f1f1;
}
</style>
