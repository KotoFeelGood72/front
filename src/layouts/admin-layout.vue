<template>
  <div class="flex relative bg-[#FAFBFF]">
      <v-sidebar class="sticky z-10 top-0 left-0"/>
      <v-header/>
      <notifications group="all" position="bottom right"/>
      <div class="pt-[104px] w-full pb-[105px]">
        <slot></slot>
      </div>
      <!-- <transition name="fade">
        <div class="popup-background" v-if="isOpenPopup"></div>
      </transition> -->
  </div>
</template>

<script>
import VSidebar from '../components/templates/v-sidebar.vue';
import vHeader from '@/components/templates/v-header.vue';

  export default {
    components: {
      VSidebar,
      vHeader,
    },
    computed: {
      isOpenPopup() {
        const modalState = this.$store.state.modal.modal;
        return Object.values(modalState).some(value => value === true);
      }
    }
  }
</script>

<style lang="scss">
  // .popup-background {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background-color: #0000004d;
  //   z-index: 99;
  // }
  // .fade-enter-active, .fade-leave-active {
  //   transition: opacity .5s;
  // }
  // .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  //   opacity: 0;
  // }
</style>