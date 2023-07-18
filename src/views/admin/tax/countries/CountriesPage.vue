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
        <div class="module-bottom">
          <div class="col-row-settings">
            <div>Полей на странице</div>
            <select>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </div>
          <div class="total-el">
            1-10 из 50
          </div>
          <div class="navigation-module">
            <button type="button">
              <global-icon icon="tabler:chevron-left" width="20"/>
            </button>
            <button type="button">
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

</style>