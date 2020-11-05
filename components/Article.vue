<template>
  <v-card elevation="4" :to="{ name: 'slug', params: { slug: article.slug } }">
    <!-- Background Image -->
    <v-img :src="getArticleImagePath()"></v-img>

    <v-card-text>
      <!-- Created Time -->
      <p class="mb-0 grey--text text--darken-1">
        {{ getCreatedAt() }}
      </p>

      <!-- Title -->
      <p class="title mb-1 grey--text text--darken-3 text-capitalize">
        {{ article.title }}
      </p>

      <!-- Description -->
      <p class="mb-0">{{ article.description }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import { getCreatedTime, getArticleImagePath } from '~/helpers/string'

export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },

  methods: {
    getCreatedAt() {
      return getCreatedTime(this.article.createdAt)
    },
    getArticleImagePath() {
      return getArticleImagePath(this.article.background)
    },
  },
}
</script>

<style lang="scss" scoped></style>
