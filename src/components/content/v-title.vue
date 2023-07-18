<template>
  <component :is="tag">{{ title }}</component>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      level: {
        type: String,
        default: 'h1',
      }
    },
    computed: {
      tag() {
        return this.level.toLowerCase();
      }
    }
  }
</script>

<style lang="scss" scoped>


  h1 {
    font-size: 26px;
    font-weight: 500;
    color: #374151;
  }
</style>