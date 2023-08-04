<template>
  <div>
    <router-link :to="`/admin/countries/edit/${data.id}`" class="flex items-center justify-center">
      <global-icon icon="tabler:pencil-minus" width="23" height="23" color="#9CA3AF"/>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style lang="scss" scoped>

</style>