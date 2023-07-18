<template>
  <section class="w-full">
    <div class="container">
      <v-title title="Страна" class="mb-[40px]"/>
      <div class="module-main w-full shadow rounded-[15px] border border-gray-200 p-[40px]">
        <div class="module-head flex justify-between mb-[29px]">
          <v-search/>
          <div class="module-group flex justify-end">
            <v-add-button class="mr-[20px]"/>
            <v-delete-button class="mr-[20px]"/>
            <div class="settings-btn">
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
            <div class="col-row-select">
              <select class="border border-grey-300 rounded-[8px] text-14sm text-grey-700 py-[3px] px-[10px] mr-[25px] col-row-select">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>
          <div class="total-el text-grey-500 text-14sm mr-[25px]">
            1-10 из 50
          </div>
          <div class="navigation-module">
            <button type="button" class="w-[44px] h-[44px] items-center flex justify-center text-grey-400">
              <global-icon icon="tabler:chevron-left" width="20"/>
            </button>
            <button type="button" class="w-[44px] h-[44px] items-center flex justify-center text-grey-400">
              <global-icon icon="tabler:chevron-right" width="20"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import vTable from '@/components/content/v-table.vue'
  import VSearch from '@/components/shared/v-search.vue';
  import vAddButton from '@/components/button/v-add-button.vue';
  import vDeleteButton from '@/components/button/v-delete-button.vue';
  import vTitle from '@/components/content/v-title.vue';
  export default {
    components: {
      vTable,
      VSearch,
      vAddButton,
      vDeleteButton,
      vTitle
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
  select {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    width: 100%;
  }
  &:before {
    position: absolute;
    top: 50%;
    right: 10px;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:focus {
    outline: none;
  }
}
</style>