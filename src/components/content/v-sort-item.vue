<template>
  <div class="flex items-center justify-start py-[11px] border-b border-grey-200 cursor-pointer" @click="toggleSortOrder">
    <p class="mr-[10px] text-grey-700 font-medium">{{ name }}</p>
    <div class="sort-btn text-grey">
      <global-icon :icon="getSortIcon()" width="15" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    field: String,
    sortField: String,
    sortOrder: String,
  },
  methods: {
    toggleSortOrder() {
      if (this.sortField === this.field) {
        this.$emit('toggleSortOrder', this.field);
      } else {
        this.$emit('setSortField', this.field);
      }
    },
    getSortIcon() {
      // Возвращаем правильную иконку в зависимости от текущего состояния сортировки
      if (this.sortField === this.field) {
        return this.sortOrder === 'asc' ? 'tabler:arrow-up' : 'tabler:arrow-down';
      }
      // Если текущее поле не совпадает с полем сортировки, показываем неактивную иконку
      return 'tabler:arrows-down-up';
    },
  },
};
</script>

<style lang="scss" scoped>
/* Стили для компонента, если требуется */
</style>
