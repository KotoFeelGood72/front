<template>
  <td v-if="title">
    <div class="flex justify-start items-center min-h-[46px] text-14sm text-grey-500 font-normal max-w-md w-[100%]">{{ title }}</div>
  </td>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style lang="scss" scoped>

</style>