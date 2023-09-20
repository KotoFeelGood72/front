<template>
  <td v-if="columnTableVisibility">
    <div class="py-[10px]">
      <div v-if="title.email" class="flex justify-start items-center text-14sm text-grey-500 font-normal max-w-md w-[100%] pb-[2px]">{{ title.email }}</div>
      <div v-if="title.name" class="flex justify-start items-center text-[12px] text-grey-500 font-normal max-w-md w-[100%]">{{ title.name }}</div>
      <div v-if="!title.name && !title.email && title" class="flex justify-start items-center min-h-[46px] text-14sm text-grey-500 font-normal max-w-md w-[100%]">{{ title }}</div>
    </div>
  </td>
</template>

<script>
  export default {
    props: ['title', 'sortTable'],
    data() {
      return {
        fieldName: this.$props.sortTable
      }
    },
    computed: {
      columnTableVisibility() {
            return this.$store.state.filter.columns[this.fieldName]
          }
    }
  }
</script>

<style lang="scss" scoped>

</style>