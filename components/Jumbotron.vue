<template>
  <div id="jumbotron-r">
    <div class="jumbotron-content container">
      <!-- The Navigation -->
      <navigation></navigation>

      <!-- The Banners -->
      <banners id="banners" :articles="banners"></banners>
    </div>
  </div>
</template>

<script>
import Banners from '~/components/Banners'
import Navigation from '~/components/Navigation'

export default {
  components: {
    Banners,
    Navigation,
  },

  props: {
    banners: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
#jumbotron-r {
  width: 100%;
  height: 65vh;
  background-color: #212121;
  position: relative;
}

#banners {
  position: absolute;
  bottom: 0;
  margin-bottom: 25px;
}
</style>
