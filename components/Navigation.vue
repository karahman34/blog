<template>
  <v-row id="nav-r" no-gutters justify="center" align="center">
    <!-- Left -->
    <v-col>
      <nuxt-link id="app-title" to="/" class="text-decoration-none">
        {{ appTitle }}
      </nuxt-link>
    </v-col>

    <!-- Social Media -->
    <v-col class="text-right">
      <v-btn icon href="https://www.facebook.com/" target="_blank">
        <v-icon>mdi mdi-facebook</v-icon>
      </v-btn>
      <v-btn icon href="https://twitter.com/home" target="_blank">
        <v-icon class="mx-1">mdi mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon href="https://www.instagram.com" target="_blank">
        <v-icon>mdi mdi-instagram</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    appTitle() {
      return process.env.appTitle
    },
  },
}
</script>

<style lang="scss" scoped>
#nav-r {
  height: 85px;

  * {
    color: white;
  }
}

#app-title {
  color: white;
  font-size: 35px;
}

@media screen and (max-width: 750px) {
  #app-title {
    font-size: 30px;
  }
}
</style>
