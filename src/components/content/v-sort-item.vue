<template>
  <div class="flex items-center justify-start py-[11px] border-b border-grey-200 cursor-pointer" @click="toggleSortOrder()">
    <p class="mr-[10px] text-grey-700 font-medium">{{ data.name }}</p>
    <div class="sort-btn text-grey">
      <global-icon icon="tabler:arrows-down-up" width="15" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    toggleSortOrder() {
      if (this.sortField === this.field) {
        this.sortOrder = this.sortOrder === 'ASC' ? 'DESC' : 'ASC';
        this.sortField = 'code';
        this.$store.commit('setSortOrder', this.sortOrder)
        this.$store.commit('setSortField', this.sortField)
      }
      // } else {
      //   this.sortField = this.field;
      //   this.sortOrder = 'ASC';
      // }
      this.$emit('toggleSortOrder', this.sortField, this.sortOrder);
    },
  },
};
</script>

