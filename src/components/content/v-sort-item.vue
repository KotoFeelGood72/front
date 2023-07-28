<template>
  <div class="flex items-center justify-start py-[11px] border-b border-grey-200 cursor-pointer" @click="toggleSortOrder">
    <p class="mr-[10px] text-grey-700 font-medium">{{ data.name }}</p>
    <div class="sort-btn text-grey">
      <global-icon icon="tabler:arrows-down-up" width="15" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  // data() {
  //   return {
  //     field: ''
  //   }
  // },
  methods: {
    toggleSortOrder() {
      if (this.sortField === this.field) {
        // Если текущее поле сортировки совпадает с полем данного элемента,
        // меняем направление сортировки на противоположное
        this.sortOrder = this.sortOrder === 'ASC' ? 'DESC' : 'ASC';
        this.sortField = 'code';
        this.$store.commit('setSortOrder', this.sortOrder)
        this.$store.commit('setSortField', this.sortField)
        console.log(this.sortOrder, this.sortField)
      } else {
        // Если текущее поле сортировки отличается, устанавливаем поле данного элемента
        // в качестве текущего поля сортировки и направление сортировки по умолчанию (asc)
        this.sortField = this.field;
        // this.sortField = 'code';
        this.sortOrder = 'ASC';
      }
      // Здесь генерируем событие и передаем информацию о текущем поле сортировки и направлении
      // сортировки в родительский компонент CountriesList
      this.$emit('toggleSortOrder', this.sortField, this.sortOrder);
    },
  },
};
</script>

<style lang="scss" scoped>
/* Стили для компонента, если требуется */
</style>
