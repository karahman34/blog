<template>
  <div>
    <!-- The Jumbotron -->
    <jumbotron :banners="banners"></jumbotron>

    <!-- Content -->
    <div class="container">
      <!-- Filter -->
      <v-row class="py-0">
        <v-col cols="12" sm="6">
          <!-- Tags -->
          <v-chip-group
            v-model="selectedTag"
            class="py-0"
            active-class="green white--text"
            column
            mandatory
          >
            <v-chip
              v-for="tag in tags"
              :key="tag"
              class="text-uppercase"
              :value="tag"
            >
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-col>

        <v-col>
          <!-- The Search -->
          <div class="search-container float-right">
            <v-icon class="search-icon">mdi mdi-magnify</v-icon>
            <input
              v-model="search"
              type="text"
              class="search-input"
              placeholder="Search.."
            />
          </div>
        </v-col>
      </v-row>

      <!-- The Feed -->
      <v-row v-if="!loadingArticles" class="pt-0">
        <v-col v-for="(article, i) in articles" :key="i" sm="6" md="4">
          <!-- Article -->
          <the-article :article="article"></the-article>
        </v-col>
      </v-row>

      <!-- The Skeleton loader -->
      <v-row v-else>
        <v-col v-for="n in 6" :key="n" sm="6" md="4">
          <article-skeleton></article-skeleton>
        </v-col>
      </v-row>

      <!-- The Pagination -->
      <pagination
        v-if="articlesTotal !== null"
        class="my-6"
        :total="articlesTotal"
        :per-page="perPage"
        @page-change="getArticles"
      ></pagination>
    </div>
  </div>
</template>

<script>
import TheArticle from '~/components/Article'
import ArticleSkeleton from '~/components/ArticleSkeleton'
import Jumbotron from '~/components/Jumbotron'
import Pagination from '~/components/Pagination'

export default {
  components: {
    ArticleSkeleton,
    Jumbotron,
    TheArticle,
    Pagination,
  },

  async asyncData({ $content }) {
    const banners = await $content('articles')
      .only(['title', 'background', 'createdAt', 'slug'])
      .where({ banner: true })
      .sortBy('createdAt', 'desc')
      .limit(9)
      .fetch()

    return {
      banners,
    }
  },

  data() {
    return {
      search: '',
      searchTimeout: null,
      perPage: 6,
      articlesTotal: null,
      articles: [],
      loadingArticles: false,
      selectedTag: 'all',
      tags: [
        'all',
        'html',
        'css',
        'php',
        'laravel',
        'javascript',
        'node',
        'vscode',
        'vue',
      ],
    }
  },

  watch: {
    selectedTag() {
      this.articles = []
      this.articlesTotal = null

      this.getArticles()
      this.getArticlesTotal()
    },
    search(val) {
      this.articlesTotal = null
      if (this.searchTimeout !== null) clearTimeout(this.searchTimeout)

      this.searchTimeout = setTimeout(() => {
        this.getArticles()
        this.getArticlesTotal()
      }, 500)
    },
  },

  mounted() {
    this.getArticles()
    this.getArticlesTotal()
  },

  methods: {
    applyQuery(query) {
      if (this.selectedTag.toLowerCase() !== 'all') {
        query.where({
          tags: {
            $contains: this.selectedTag,
          },
        })
      }

      if (this.search.length > 0) {
        query.where({
          title: {
            $contains: this.search.toLowerCase(),
          },
        })
      }

      return query
    },
    async getArticlesTotal() {
      try {
        const query = this.$content('articles').only(['title'])
        this.applyQuery(query)

        const articles = await query.fetch()
        this.articlesTotal = articles.length
      } catch (err) {
        alert('Failed to get articles total.')
      }
    },
    async getArticles(page = null) {
      try {
        this.loadingArticles = true
        const query = this.$content('articles')

        this.applyQuery(query)

        if (page !== null) {
          query.skip((page - 1) * this.perPage)
        }

        this.articles = await query
          .limit(this.perPage)
          .sortBy('createdAt', 'desc')
          .fetch()
      } catch (err) {
        alert('Failed to get articles,please try again later.')
      } finally {
        this.loadingArticles = false
      }
    },
  },

  head() {
    return {
      title: 'Dashboard',
    }
  },
}
</script>

<style lang="scss" scoped>
.search-container {
  position: relative;

  @media screen and (max-width: 600px) {
    & {
      width: 100% !important;
    }
  }

  .search-icon {
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 9px;
    margin-left: 13px;
    color: #66bb6a;
  }

  .search-input {
    outline: none;
    border-radius: 20px;
    padding: 15px;
    padding-left: 40px;
    height: 40px;
    width: 100%;
    background-color: #dddada;

    &:focus {
      background-color: white;
      border: 2px solid #66bb6a;
    }
  }
}
</style>
