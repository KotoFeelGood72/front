<template>
  <div class="flex items-center justify-center cursor-pointer" @click="changeCountry">
      <global-icon icon="tabler:pencil-minus" width="23" height="23" color="#9CA3AF"/>
  </div>
</template>

<script>
  export default {
    props: ['data'],
    data() {
      return {
        good: '22'
      }
    },
    methods: {
      changeCountry() {
        this.$emit('change-countries', this.$props.data);
        this.$router.push(`/admin/countries/edit/${this.$props.data.id}`)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>