<template>
  <section class="w-full">
    <div class="container">
      <div class="module-head flex items-center justify-between mb-[40px]">
        <v-title title="Регионы"/>
        <v-btn-settings/>
      </div>
      <div class="module-main w-full shadow rounded-[15px] border border-gray-200 p-[40px] bg-white">
        <div class="module-head flex justify-between mb-[29px]">
          <div class="flex items-center justify-start flex-1">
            <v-add-button class="mr-[20px]" link="/admin/regions/add" type="link"/>
            <v-delete-button class="mr-[20px]" @click.native="deleteSelectedItems" :class="{'bg-pink-600 pointer-events-auto': activeDeleteItem.length}"/>
            <v-search type="Regions"/>
          </div>
          <div class="module-group flex justify-end">
            <div class="settings-btn mr-[20px]" @click="openPopup">
              <button type="button" class="flex items-center justify-center w-[40px] h-[40px] rounded-[8px] bg-indigo-600 text-white">
                <global-icon icon="tabler:eye" width="20"/>
              </button>
            </div>
            <div class="settings-btn" @click="openPopup">
              <button type="button" class="flex items-center justify-center w-[40px] h-[40px] rounded-[8px] bg-indigo-600 text-white">
                <global-icon icon="tabler:filter-cog" width="20"/>
              </button>
            </div>
          </div>
        </div>
        <v-table :list="regions.list" :sortTable="sortRegions" address="regions" :type="regions" @routeDetail="nextToDetail" @sortAction="sortWork" :fieldOrder="fieldOrderingModule"/>
        <div class="module-bottom flex items-center justify-between py-[9.5px] mt-[30px]">
          <div class="text-14sm text-grey-500">Всего записей: {{ regions.total }}</div>
          <div class="col-row-settings flex items-center">
            <div class="text-grey-500 text-14sm mr-[10px]">Полей на странице</div>
            <div class="col-row-select mr-[25px]">
              <v-select :data="select" @limit-changed="updatePagination"/>
            </div>
            <vue-paginate
              v-if="totalPage && currentPage"
              :page-count="totalPage"
              :page-range="8"
              :margin-pages="2"
              :click-handler="paginateCall"
              :prev-text="''"
              :next-text="''"
              v-model="currentPage"
              :container-class="'pagination flex items-center'"
              :page-class="'page-item min-w-[32px] h-[32px] flex items-center justify-center text-14sm'">
            </vue-paginate>
          </div>
        </div>
      </div>
    </div>
    <v-visible :visibleField="sortRegions"/>
  </section>
</template>

<script>
  import { sortRegions } from '@/data/sort.js'

  export default {
    components: {
      vTable: () => import('@/components/content/v-table.vue'),
      VSearch: () => import('@/components/shared/v-search.vue'),
      vAddButton: () => import('@/components/button/v-add-button.vue'),
      vDeleteButton: () => import('@/components/button/v-delete-button.vue'),
      vTitle: () => import('@/components/content/v-title.vue'),
      vSelect: () => import('@/components/shared/v-select.vue'),
      vVisible: () => import('@/components/filter/v-visible.vue'),
      vBtnSettings: () => import('@/components/button/btn-settings.vue')
    },
    data() {
      return {
        select: [10, 20, 30, 40, 50],
        sortRegions,
        currentPage: Number(this.$route.params.page) || 1,
        fieldOrderingModule: ['countryCode', 'country', 'name']
      }
    },
    mounted() {
      this.$store.dispatch('actionRegions', { page: this.$route.params.page })
    },
    computed: {
      regions() {
        return this.$store.state.regions.regions
      },
      totalPage() {
        return this.regions.pages
      },
      activeDeleteItem() {
        return this.$store.state.regions.deleteArray
      }
    },
    methods: {
      openPopup() {
        this.$store.commit('openPopup', 'visibles')
      },
      nextToDetail(item) {
        this.$store.commit('setRegionsDetail', item);
      },
      sortWork(data, dir) {
        this.$store.dispatch('actionRegions', {
        page: this.$route.params.page,
        field: data.orderby,
        order: dir ? 'ASC' : 'DESC'
      });
      console.log(dir)
      },
      updatePagination(newLimit) {
        this.selectLimit = newLimit; 
      },
      paginateCall(pageNum) {
        this.fetchRegions(pageNum)
        this.$router.push({ name: 'regions-page', params: {page: pageNum}, query: this.$route.query });
      },
      fetchRegions(pageNum) {
        this.$store.dispatch('actionRegions', { page: pageNum })
      },
      async deleteSelectedItems() {
        await this.$store.dispatch('deleteRegions', {ids: this.$store.state.regions.deleteArray})
        this.$notify({
          group: 'all',
          title: 'Объект успешно удален',
          text: 'Вы успешно удалили обьект, измненения вступают в силу с момента изменения',
          type: 'success',
        });
      },
    }
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

:deep(.page-item) {
  margin: 0 3px;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    overflow: hidden;
    padding: 4px!important;
  }
  &.active {
    a {
      background-color: #E0E7FF;
      pointer-events: none;
      user-select: none;
    }
  }
}
</style>