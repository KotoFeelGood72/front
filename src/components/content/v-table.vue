<template>
  <div>
    <table class="w-full">
      <thead class="w-full">
        <tr class="w-full">
          <th>
            <v-sort-item name="Код страны"/>
          </th>
          <th>
            <v-sort-item name="Название страны"/>
          </th>
          <th>
            <v-sort-item name="Видимость"/>
          </th>
        </tr>
      </thead>
      <tbody>
        <template>
            <tr v-for="item in resultTable" :key="item.id" class="py-[11px] border-b border-grey-200">
              <th>
                <div class="flex justify-start items-center min-h-[46px] text-14sm text-grey-500 font-normal">
                  <p>{{ item.isoCode }}</p>
                </div>
              </th>
              <th>
                <div class="flex justify-start items-center min-h-[46px] text-14sm text-grey-500 font-normal">
                  <p>{{ item.name }}</p>
                </div>
              </th>
              <th>
                <div class="flex justify-start items-center min-h-[46px] text-14sm text-grey-500 font-normal">
                  <v-status :status="item.active" @changeStatus="submitCountry(item)" />
                </div>
              </th>
            </tr>
        </template>
      </tbody>

    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import VStatus from '@/components/label/v-status.vue';
import vSortItem from './v-sort-item.vue';
import axios from 'axios';

export default {
  components: {
    VStatus,
    vSortItem
  },
  computed: {
    ...mapGetters(['getCountries', 'getCurrentPage', 'getTotalPages', 'getSearchQuery']),
    currentPage() {
      return this.getCurrentPage;
    },
    totalPages() {
      return this.getTotalPages;
    },
    resultTable() {
      if(this.getSearchQuery) {
        return this.getSearchQuery.data.list
      } else {
        return this.getCountries.list
      }
    },
  },
  mounted() {
    this.actionCountries(1);
  },
  methods: {
    async submitCountry(item) {
      try {
        // Отправляем запрос на сервер для обновления статуса
        await axios.post('admin/countries/edit', {
          id: item.id,
          active: item.active === 1 ? 0 : 1,
          code: item.isoCode,
          name: item.name,
        });
        
        // Если запрос успешен, обновляем статус в списке стран
        item.active = item.active === 1 ? 0 : 1;
      } catch (error) {
        console.error(error);
      }
    },
    ...mapActions(['actionCountries']),
    previousPage() {
      if (this.currentPage > 1) {
        this.actionCountries(this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.actionCountries(this.currentPage + 1);
      }
    },
  },
};
</script>