<template>
  <section class="w-full">
    <div class="container">
      <v-title title="Страна" class="mb-[40px]"/>
      <div class="module-main w-full shadow rounded-[15px] border border-gray-200 p-[40px] bg-white">
        <div class="module-head flex justify-between mb-[29px]">
          <v-search/>
          <div class="module-group flex justify-end">
            <v-add-button class="mr-[20px]" link="/admin/countries/add" type="link"/>
            <v-delete-button class="mr-[20px]"/>
            <div class="settings-btn" @click="togglePopup">
              <button type="button" class="flex items-center justify-center w-[40px] h-[40px] rounded-[8px] bg-indigo-600 text-white">
                <global-icon icon="tabler:settings" width="20"/>
              </button>
            </div>
          </div>
        </div>
        <v-table/>
        <div class="module-bottom flex items-center justify-end py-[9.5px]">
          <div class="col-row-settings flex items-center">
            <div class="text-grey-500 text-14sm mr-[10px]">Полей на странице</div>
            <div class="col-row-select mr-[25px]">
              <v-select :data="select"/>
            </div>
          </div>
          <div class="total-el text-grey-500 text-14sm mr-[25px]">
            {{ getLengthCountries }} из {{ getTotalPages }}
          </div>
          <div class="navigation-module">
            <button type="button" class="w-[44px] h-[44px] items-center flex justify-center text-grey-400" @click="previousPage">
              <global-icon icon="tabler:chevron-left" width="20"/>
            </button>
            <button type="button" class="w-[44px] h-[44px] items-center flex justify-center text-grey-400" @click="nextPage">
              <global-icon icon="tabler:chevron-right" width="20"/>
            </button>
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

  export default {
    components: {
      vTable,
      VSearch,
      vAddButton,
      vDeleteButton,
      vTitle,
      vSelect,
      vFilter
    },
    data() {
      return {
        select: [10, 20, 30, 40, 50]
      }
    },
    methods: {
      ...mapActions(['actionCountries']),
      togglePopup() {
        this.$store.commit('togglePopup')
      },

      previousPage() {
      if (this.currentPage > 1) {
        this.actionCountries({page:this.currentPage - 1});
        }
      },
      nextPage() {
        if (this.currentPage < this.getTotalPages) {
          this.actionCountries({page:this.currentPage + 1});
        }
      },
    },
    computed: {
      getTotalPages() {
        return this.$store.getters.getTotalPages
      },
      ...mapGetters(['getCountries', 'getCurrentPage']),
      currentPage() {
        return this.getCurrentPage;
      },
      getLengthCountries() {
        if(this.$store.getters.getCountries.list) {
          return this.$store.getters.getCountries.list.length
        } else {
          return null
        }
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