<template>
  <div>
    <p>{{ name }}</p>
    <div class="sort-btn">
      <global-icon icon="tabler:arrows-down-up"/>
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