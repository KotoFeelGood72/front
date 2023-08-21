<template>
  <section class="w-full">
    <div class="container">
      <div class="module-head flex items-center justify-between mb-[40px]">
        <v-title title="Страна"/>
        <div class="flex items-center">
          <button type="button" class="flex items-center mr-[30px]">
            <global-icon icon="tabler:arrow-forward-up" width="20" height="20" color="#374151" class="mr-[8px]"/>
            <p>По умолчанию</p>
          </button>
          <button type="button" class="flex items-center">
            <global-icon icon="tabler:device-floppy" width="20" height="20" color="#374151" class="mr-[8px]"/>
            <p>Сохранить</p>
          </button>
        </div>
      </div>
      <div class="module-main w-full shadow rounded-[15px] border border-gray-200 p-[40px] bg-white">
        <div class="module-head flex justify-between mb-[29px]">
          <div class="flex items-center justify-start flex-1">
            <v-add-button class="mr-[20px]" link="/admin/countries/add" type="link"/>
            <v-delete-button class="mr-[20px]"/>
            <v-search/>
          </div>
          <div class="module-group flex justify-end">
            <div class="settings-btn mr-[20px]" @click="togglePopup">
              <button type="button" class="flex items-center justify-center w-[40px] h-[40px] rounded-[8px] bg-indigo-600 text-white">
                <global-icon icon="tabler:eye" width="20"/>
              </button>
            </div>
            <div class="settings-btn" @click="togglePopup">
              <button type="button" class="flex items-center justify-center w-[40px] h-[40px] rounded-[8px] bg-indigo-600 text-white">
                <global-icon icon="tabler:filter-cog" width="20"/>
              </button>
            </div>
          </div>
        </div>
        <v-table :list="getCountries.list"/>
        <div class="py-[19px] flex items-center justify-center border-b border-grey-200">
          <button type="button" class="bg-indigo-600 text-white py-[10px] px-[18px] rounded-[8px] flex items-center justify-center">
            <p class="text-14sm mr-[8px]">Показать еще</p>
            <global-icon icon="tabler:arrow-down" width="20" height="20" color="white"/>
          </button>
        </div>
        <div class="module-bottom flex items-center justify-between py-[9.5px]">
          <div class="text-14sm text-grey-500">Всего записей: {{ getTotalPages }}</div>
          <div class="col-row-settings flex items-center">
            <div class="text-grey-500 text-14sm mr-[10px]">Полей на странице</div>
            <div class="col-row-select mr-[25px]">
              <v-select :data="select"/>
            </div>
            <v-pagination :pages="visiblePages"/>
          </div>
        </div>
      </div>
    </div>
    <v-filter />

  </section>
</template>

<script>
  import vTable from '@/components/content/v-table.vue'
  import VSearch from '@/components/shared/v-search.vue';
  import vAddButton from '@/components/button/v-add-button.vue';
  import vDeleteButton from '@/components/button/v-delete-button.vue';
  import vTitle from '@/components/content/v-title.vue';
  import vSelect from '@/components/shared/v-select.vue';
  import vFilter from '@/components/filter/v-filter.vue'
  import { mapActions, mapGetters } from 'vuex';


  import vPagination from '@/components/templates/v-pagination.vue';


  export default {
    components: {
      vTable,
      VSearch,
      vAddButton,
      vDeleteButton,
      vTitle,
      vSelect,
      vFilter,
      vPagination
    },
    data() {
      return {
        select: [10, 20, 30, 40, 50],
        currentPage: 1
      }
    },
    methods: {
      ...mapActions(['actionCountries']),
      togglePopup() {
        this.$store.commit('togglePopup')
      },
    },
    computed: {
      ...mapGetters(['getCountries', 'getTotalPages']),
      visiblePages() {
      const maxVisiblePages = 4; // Количество отображаемых ссылок пагинации
      const pages = [];

      const startPage = Math.max(this.currentPage - Math.floor(maxVisiblePages / 2), 1);
      const endPage = Math.min(startPage + maxVisiblePages - 1, this.getTotalPages);

      for (let page = startPage; page <= endPage; page++) {
        pages.push(page);
      }
      console.log(pages)
      return pages;
    }
    },
  }
</script>

<style lang="scss" scoped>


.navigation-module {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(44px, 1fr));
  grid-gap: 4px;
  width: 92px;
}

.col-row-select {
  position: relative;
  
  width: 63px;
}
</style>