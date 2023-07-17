<template>
  <div class=" bg-indigo-950 py-[10px] px-[20px] text-white max-w-[280px] w-full h-[100vh]">
    <v-logo class="mb-[10px]"/>
    <v-nav/>
  </div>
</template>


<script>
  import vLogo from '../shared/v-logo.vue';
  import vNav from '../shared/v-nav.vue';
  export default {
    components: {vLogo, vNav}
  }
</script>

<style lang="scss" scoped>

</style>