<template>
  <v-row class="container">
    <!-- Left -->
    <v-col cols="12" md="6" class="hidden-sm-and-down">
      <banner-carousel
        :articles="chunkedArticles[0]"
        :height="435"
      ></banner-carousel>
    </v-col>

    <!-- Right -->
    <v-col cols="12" md="6">
      <!-- Top -->
      <banner-carousel
        class="mb-4"
        :articles="chunkedArticles[1]"
        :height="210"
      ></banner-carousel>

      <!-- Bottm -->
      <banner-carousel
        :articles="chunkedArticles[2]"
        :height="210"
      ></banner-carousel>
    </v-col>
  </v-row>
</template>

<script>
import BannerCarousel from '~/components/BannerCarousel'

export default {
  components: {
    BannerCarousel,
  },

  props: {
    articles: {
      type: Array,
      required: true,
    },
  },

  computed: {
    chunkedArticles() {
      const chunkedArticles = []

      let chunkIndex = 0
      for (const article of this.articles) {
        const chunkedArticle = chunkedArticles[chunkIndex]

        if (chunkedArticle === undefined) {
          chunkedArticles[chunkIndex] = [article]
        } else if (
          chunkedArticle.length < Math.ceil(this.articles.length / 3)
        ) {
          chunkedArticle.push(article)
        } else {
          chunkIndex += 1
          chunkedArticles[chunkIndex] = [article]
        }
      }

      return chunkedArticles
    },
  },
}
</script>
