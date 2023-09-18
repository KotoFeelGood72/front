<template>
  <div class="filter" v-if="isPopupOpen">
    <div class="filter-main shadow-2xl">
      <div class="close-filter" @click="togglePopup">
        <global-icon icon="tabler:x" width="25" height="25" color="#6B7280" class="absolute top-[36px] right-[36px] cursor-pointer"/>
      </div>
      <div class="border-b border-grey-200 pb-[20px] mb-[20px]">
        <v-title title="Видимость" level="h3" class="text-xl font-medium mb-[6px]"/>
        <p class="text-grey-500 text-14sm mb-[10px]">Измените видимость объектов</p>
        <button type="button" class="flex items-center text-grey-400 text-14sm">
          <global-icon icon="tabler:arrow-forward-up" width="18" height="18" class="mr-[5px]"/>
          <p>Сбросить</p>
        </button>
      </div>
      <div class="filter-row pb-[20px] border-b border-grey-300 mb-[20px]">
        <div class="filter-acc flex items-center justify-between relative cursor-pointer mb-[15px]">
          <p class="uppercase text-grey-400">поля</p>
          <global-icon icon="tabler:chevron-down" width="20" height="24" color="#9CA3AF" class="arrow-acc"/>
        </div>
        <v-check v-for="item in visibleField" :data="item" :key="item.id"/>
      </div>
      <!-- <div class="filter-row">
        <div class="filter-acc flex items-center justify-between relative cursor-pointer mb-[15px]">
          <p class=" uppercase text-grey-400">видимость</p>
          <global-icon icon="tabler:chevron-down" width="20" height="24" color="#9CA3AF" class="arrow-acc"/>
        </div>
        <v-check v-for="item in visibleField" :data="item" :key="item.id"/>
      </div> -->
    </div>
  </div>
</template>

<script>
  import vTitle from '@/components/content/v-title.vue'
  import vCheck from './v-check.vue';
  export default {
    props: ['visibleField'],
    components: {
      vTitle,
      vCheck
    },
    data() {
      return {
        countryFilter: {
          column: [
            {
              label: 'Код страны',
              id: 'isocode',
              name: 'iso code'
            },
            {
              label: 'Название страны',
              id: 'nameCountry',
              name: 'name country'
            },
            {
              label: 'Видимость',
              id: 'countryVisibility',
              name: 'visibility country'
            },
          ],
          visible: [
            {
              label: 'Активно',
              id: 'filterActive',
              name: 'filter active'
            },
            {
              label: 'Неактивно',
              id: 'filterNoActive',
              name: 'filter no active'
            },
          ]
        }
      }
    },
    methods: {
      togglePopup() {
        this.$store.commit('openPopup', 'visibles')
      }
    },
    computed: {
      isPopupOpen() {
        return this.$store.getters.getPopup('visibles')
      }
    },
  }
</script>

<style lang="scss" scoped>
  .filter {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    z-index: 101;
  }

  .filter-main {
    background-color: #fff;
    height: 100%;
    min-width: 348px;
    padding: 30px;

  }

  .arrow-acc {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }
</style>