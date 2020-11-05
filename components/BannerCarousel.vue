<template>
  <v-carousel
    cycle
    delimiter-icon="mdi-minus"
    hide-delimiter-background
    :height="height"
    :show-arrows="false"
    style="border-radius: 12px"
  >
    <v-carousel-item v-for="(article, i) in articles" :key="i" class="banner">
      <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
        <!-- Background -->
        <img
          :src="getArticleImagePath(article.background)"
          alt="Banner Image"
          class="banner-background"
        />

        <!-- Meta -->
        <div class="banner-info">
          <!-- Created At -->
          <span class="banner-time d-block">{{
            createdAt(article.createdAt)
          }}</span>

          <!-- Title -->
          <span class="banner-title text-capitalize">{{ article.title }}</span>
        </div>
      </nuxt-link>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { getArticleImagePath, getCreatedTime } from '~/helpers/string'
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
    height: {
      type: [String, Number],
      required: true,
    },
  },

  methods: {
    createdAt(createdAt) {
      return getCreatedTime(createdAt)
    },
    getArticleImagePath(background) {
      return getArticleImagePath(background)
    },
  },
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;

  * {
    color: white;
    cursor: pointer;
  }

  .banner-background {
    width: 100%;
    height: 100%;
    object-fit: fill;
    filter: brightness(75%);
  }

  .banner-info {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 0 0 20px 20px;

    * {
      font-weight: 500;
    }

    .banner-title {
      font-size: 32px;
    }
  }
}
</style>
