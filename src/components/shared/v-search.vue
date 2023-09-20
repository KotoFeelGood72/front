<template>
  <div class="input-search bg-[#FAFBFF] max-w-[353px] w-full">
    <input type="search" 
    placeholder="Поиск"
     class="border border-grey-300 rounded-[8px]" 
     @focus="isFocusec" 
     @blur="handleBlur"  
     :class="{'border-indigo-600': isFocus}" 
     @input="searchQuerys" 
     v-model.trim="searchQuery">
    <button type="button" :class="{'text-indigo-600': isFocus}" @click="clearSearch">
      <global-icon :icon="changeIcon" width="18"/>
    </button>
  </div>
</template>

<script>
  export default {
    props: ['type'],
    data() {
      return {
        isFocus: false,
        searchQuery: ''
      }
    },
    computed: {
      changeIcon() {
        if(this.searchQuery.length) {
          return 'tabler:x'
        } else {
          return 'tabler:search'
        }
      }
    },
    methods: {
      isFocusec() {
        this.isFocus = !this.isFocus
      },
      handleBlur() {
        this.isFocus = false
      },
      clearSearch() {
        this.$store.dispatch('clearSearchQuery');
        this.$store.dispatch(`action${this.$props.type}`, {page: this.$route.params.page});
        this.searchQuery = ''
      },
      searchQuerys() {
          this.$store.commit('setSearchQuery', this.searchQuery);
          this.$store.dispatch(`action${this.$props.type}`, {
            page: this.$route.params.page,
          })
      },
    }
  }
</script>

<style lang="scss" scoped>


.input-search {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}


input {
  width: 100%;
  height: 100%;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-size: 14px;
  padding: 8px 17px;
  min-height: 40px;
  width: 100%;
  &:focus {
    outline: none;
  }
}
button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 17px
}
</style>