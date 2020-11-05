<template>
  <v-app>
    <v-main id="article-layout-main">
      <!-- FAB Button -->
      <v-btn id="fab-btn" color="success" fab @click="scrollTopTop">
        <v-icon>mdi mdi-arrow-up</v-icon>
      </v-btn>

      <!-- Router View -->
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods: {
    scrollTopTop() {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    },
  },
}
</script>

<style lang="scss">
#article-layout-main {
  width: 50%;
  margin: 0 auto;
  background-color: white;

  .big-banner {
    display: block;
    width: 100%;
    object-fit: cover;
  }
}

@media screen and (max-width: 1903px) {
  #article-layout-main {
    width: 70%;
  }
}

@media screen and (max-width: 1264px) {
  #article-layout-main {
    width: 90%;
  }
}

@media screen and (max-width: 600px) {
  #article-layout-main {
    width: 95%;
  }
}

blockquote {
  background: #f9f9f9;
  border-left: 10px solid #78c0a8;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: '\201C''\201D''\2018''\2019';
}
blockquote:before {
  color: #78c0a8;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
blockquote p {
  display: inline;
}

#fab-btn {
  position: fixed;
  right: 2%;
  bottom: 5%;
  z-index: 999;
}
</style>
