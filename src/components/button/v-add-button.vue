<template>
  <div v-if="type === 'button'">
    <button type="button" class="flex justify-center items-center py-[9px] px-[16px] bg-indigo-600 text-white rounded-[8px] text-14sm appearance-none border-none h-[40px]">
      <p class="mr-[8px]">Добавить</p>
      <global-icon icon="tabler:plus" width="20" class="flex items-center justify-center -mb-[1px]"/>
    </button>
  </div>
  <div v-else-if="type === 'link'">
    <router-link :to="link" class="flex justify-center items-center py-[9px] px-[16px] bg-indigo-600 text-white rounded-[8px] text-14sm appearance-none border-none h-[40px]">
      <p class="mr-[8px]">Добавить</p>
      <global-icon icon="tabler:plus" width="20" class="flex items-center justify-center -mb-[1px]"/>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: ['type', 'link']
  }
</script>

<style lang="scss" scoped>

</style>