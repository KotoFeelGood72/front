<template>
  <div class="flex items-center justify-start py-[11px] border-b border-grey-200">
    <p class="mr-[10px] text-grey-700 font-medium">{{ name }}</p>
    <div class="sort-btn text-grey">
      <global-icon icon="tabler:arrows-down-up" width="15"/>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        required: true,
        type: String,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>