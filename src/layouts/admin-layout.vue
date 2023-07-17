<template>
  <div class="flex">
      <v-sidebar />
      <slot></slot>
  </div>
</template>

<script>
import VSidebar from '../components/templates/v-sidebar.vue';
  export default {
    components: {VSidebar, }
  }
</script>




