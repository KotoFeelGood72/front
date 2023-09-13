<template>
  <div class="flex items-center justify-center cursor-pointer" @click="changeTableItem">
      <global-icon icon="tabler:pencil-minus" width="23" height="23" color="#9CA3AF"/>
  </div>
</template>

<script>
  export default {
    props: ['data', 'link'],
    methods: {
      changeTableItem() {
        this.$emit('change-elements', this.$props.data);
        if(this.$props.link) {
          this.$router.push(`/admin/${this.$props.link}/edit/${this.$props.data.id}`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>