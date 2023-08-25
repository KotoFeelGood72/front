<template>
  <div class="relative">
    <select v-model="selectedLimit" class="border border-grey-300 rounded-[8px] text-14sm text-grey-700 py-[3px] px-[10px] mr-[25px] col-row-select" @change="selectOption">
      <option v-for="(item, i) in data" :value="item" :key="item + '-' + i">{{ item }}</option>
    </select>
    <global-icon icon="eva:arrow-down-fill" width="17" height="20" color="#9CA3AF" class="select-arrow"/>
  </div>
</template>

<script>
  export default {
    props: ['data'],
    data() {
      return {
        selectedLimit: this.$store.state.country.filters.limit,
      }
    },
    methods: {
      selectOption() {
        const selectedLimit = this.selectedLimit;

        this.$store.commit('setLimitCountry', selectedLimit);
        
        const totalPages = Math.ceil(this.$store.state.country.countries.total / selectedLimit);
        const currentPage = parseInt(this.$route.params.page);
        
        if (currentPage > totalPages) {
          this.$router.push({ name: 'countries-page', query: { limit: selectedLimit }, params: { page: totalPages } });
        } else {
          this.$router.push({ name: 'countries-page', query: { limit: selectedLimit }, params: { page: currentPage } });
        }
      }

    }
  }
</script>

<style lang="scss" scoped>
div {

  select {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    width: 100%;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  &:before {
    position: absolute;
    top: 50%;
    right: 10px;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.select-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  pointer-events: none;
}
</style>