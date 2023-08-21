<template>
  <div>
    <nav class="flex items-center justify-end">
      <div class="prev">
        <router-link to="/">
          <global-icon icon="tabler:chevron-left" width="17" height="17"/>
        </router-link>
      </div>
      <ul class="flex items-center justify-center">
        <li v-for="item in pages" :key="'page-' + item" class="mx-[3px] min-w-[32px] min-h-[32px] flex items-center">
          <router-link class="w-full h-full flex items-center justify-center" :to="{name: 'countries-page', path: item}">{{ item }}</router-link>
        </li>
      </ul>
      <div class="next">
        <router-link to="/">
          <global-icon icon="tabler:chevron-right" width="17" height="17"/>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    props: {
      pages: {
        required: true,
        type: Number
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>