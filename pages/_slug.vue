<template>
  <div>
    <div class="d-flex justify-space-between align-center my-6">
      <!-- Back Home -->
      <nuxt-link to="/" class="d-block grey--text text-decoration-none">
        <v-icon class="mr-1">mdi mdi-arrow-left</v-icon>
        <span class="font-weight-medium">Dashboard</span>
      </nuxt-link>

      <!-- App Title -->
      <span class="title">{{ appTitle }}</span>
    </div>

    <!-- Banner -->
    <img
      :src="getArticleImagePath()"
      class="big-banner mb-5"
      alt="Article background image"
    />

    <!-- Time Created -->
    <p class="grey--text text--darken-1 mb-0">
      {{ createdAt() }}
    </p>

    <!-- The Document -->
    <nuxt-content :document="content" class="mb-12"></nuxt-content>
  </div>
</template>

<script>
import { getArticleImagePath, getCreatedTime } from '~/helpers/string'

export default {
  layout: 'article',

  async asyncData({ $content, params, error }) {
    try {
      const content = await $content(`articles`, params.slug).fetch()

      return {
        content,
      }
    } catch (err) {
      error({ statusCode: 404, message: 'Page not found!' })
    }
  },

  computed: {
    appTitle() {
      return process.env.appTitle
    },
  },

  methods: {
    createdAt() {
      return getCreatedTime(this.content.createdAt)
    },
    getArticleImagePath() {
      return getArticleImagePath(this.content.background)
    },
  },

  head() {
    return {
      title: this.content.title
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    }
  },
}
</script>

<style lang="scss" scoped></style>
