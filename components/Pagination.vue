<template>
  <div>
    <v-pagination
      v-if="totalPage > 1"
      id="pagination-r"
      v-model="page"
      color="green darken-1"
      :length="totalPage"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      page: 1,
    }
  },

  computed: {
    totalPage() {
      return Math.ceil(this.total / this.perPage)
    },
  },

  watch: {
    page(val) {
      this.$emit('page-change', val)
    },
  },
}
</script>

<style lang="scss" scoped>
#pagination-r:focus {
  box-shadow: none !important;
  outline: none !important;
  border: none !important;
}
</style>
