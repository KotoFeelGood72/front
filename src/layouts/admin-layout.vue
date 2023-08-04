<template>
  <div class="flex relative bg-[#FAFBFF]">
      <v-sidebar class="sticky z-10 top-0 left-0"/>
      <v-header/>
      <div class="pt-[104px] w-full pb-[105px]">
        <slot></slot>
      </div>
  </div>
</template>

<script>
import VSidebar from '../components/templates/v-sidebar.vue';
import vHeader from '@/components/templates/v-header.vue';
  export default {
    components: {VSidebar, vHeader}
  }
</script>




