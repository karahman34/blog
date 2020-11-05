<template>
  <div>
    <div class="search-r">
      <div
        v-if="!searchActive"
        class="search-activator float-right"
        style="cursor: pointer"
        @click="searchActive = true"
      >
        <v-icon class="white--text">mdi mdi-magnify</v-icon>
        <span class="ml-1">Search</span>
      </div>
    </div>

    <v-text-field
      v-if="searchActive"
      ref="searchInput"
      solo
      dense
      clearable
      single-line
      hide-details
      clear-icon="mdi mdi-close"
      class="search-input"
      placeholder="Search.."
      prepend-inner-icon="mdi mdi-magnify"
      @blur="searchActive = false"
      @click:clear="searchActive = false"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchActive: false,
    }
  },

  watch: {
    searchActive(val) {
      if (val) {
        this.$nextTick(() => this.$refs.searchInput.focus())
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.search-input {
  border-radius: 8px;
}
</style>
