<template>
  <button type="button" class="flex justify-center items-center py-[9px] px-[16px] bg-pink-200 text-white rounded-[8px] text-14sm h-[40px]" :class="classes">
    <global-icon icon="tabler:trash" width="20"/>
    <p v-if="!hidden">Удалить</p>
  </button>
</template>

<script>
  export default {
    props: ['hidden', 'classes']
  }
</script>

<style lang="scss" scoped>

</style>