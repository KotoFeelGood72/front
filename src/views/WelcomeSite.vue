<template>
  <div class="bg-[#FAFBFF] flex items-center justify-center flex-col min-h-[90vh]">
    <v-title title="Фотодетство" class="mb-[15px] text-40xl text-grey-700 font-medium leading-[40px]" level="h2"/>
    <p class="text-xl text-grey-500 mb-[127px]">проект находится в разработке</p>
    <div class="welcome_gallery--w relative w-full flex items-center justify-center">
      <ul class="welcome-gallery">
        <li v-for="i in 5" :key="'welcome' + i">
          <img :src="require('@/assets/img/gallery-' + i + '.png')" alt="" class="relative" :class="'z-' + i + '10'">
        </li>
      </ul>
      <img :src="require('@/assets/img/decor/line.svg')" alt="" class="absolute top-[60%] left-[50%] -translate-x-[50%] -translate-y-[50%] gallery-img">
    </div>
  </div>
</template>

<script>
  import vTitle from '@/components/content/v-title.vue';
  export default {
    components: {
      vTitle,
    },
  }
</script>

<style lang="scss" scoped>


.welcome-gallery {
  margin: -24px -24px 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  li {
    padding: 24px 24px 0 0;








    &:nth-child(1) {
      img {
        z-index: 0;
      }
    }
    &:nth-child(2) {
      img {
        z-index: 2;
      }
    }
    &:nth-child(3) {
      img {
        z-index: 2;
      }
    }
    &:nth-child(4) {
      img {
        z-index: 0;
      }
    }
    &:nth-child(5) {
      img {
        z-index: 2;
      }
    }
  }
}

.gallery-img {
  z-index: 1;
}
</style>