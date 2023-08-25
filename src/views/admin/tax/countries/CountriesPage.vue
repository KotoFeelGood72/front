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
            <v-delete-button class="mr-[20px]" @click.native="deleteSelectedItems" :class="{'bg-pink-600 pointer-events-auto': activeDeleteItem.length}"/>
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
        <v-table :list="countries.list"/>
        <div class="py-[19px] flex items-center justify-center border-b border-grey-200" @click="loadmore">
          <button type="button" class="bg-indigo-600 text-white py-[10px] px-[18px] rounded-[8px] flex items-center justify-center">
            <p class="text-14sm mr-[8px]">Показать еще</p>
            <global-icon icon="tabler:arrow-down" width="20" height="20" color="white"/>
          </button>
        </div>
        <div class="module-bottom flex items-center justify-between py-[9.5px]">
          <div class="text-14sm text-grey-500">Всего записей: {{ countries.total }}</div>
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
  import { mapActions } from 'vuex';

  export default {
    components: {
      vTable,
      VSearch,
      vAddButton,
      vDeleteButton,
      vTitle,
      vSelect,
      vFilter,
    },
    data() {
      return {
        select: [10, 20, 30, 40, 50],
        currentPage: Number(this.$route.params.page) || 1
      }
    },
    mounted() {
      this.actionCountries({page: this.$route.params.page})
    },
    computed: {
      countries() {
        return this.$store.state.country.countries
      },
      totalPage() {
        return this.countries.pages
      },
      activeDeleteItem() {
        return this.$store.state.country.deleteArray
      }
    },
    methods: {
      ...mapActions(['actionCountries']),
      updatePagination(newLimit) {
        this.selectLimit = newLimit; 
      },
      togglePopup() {
        this.$store.commit('togglePopup')
      },
      paginateCall(pageNum) {
        this.fetchCountries(pageNum)
        this.$router.push({ name: 'countries-page', params: {page: pageNum}, query: this.$route.query });
      },
      fetchCountries(pageNum) {
        this.actionCountries({page: pageNum})
      },
      async deleteSelectedItems() {
        await this.$store.dispatch('deleteCountries', {ids: this.$store.state.country.deleteArray})
      },
      loadmore() {
        this.fetchCountries(this.currentPage++);
        console.log(this.$route.params.page)
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