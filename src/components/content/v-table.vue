<template>
  <div>
    <table class="w-full">
      <thead class="w-full">
        <tr class="w-full">
          <th v-for="(item, i) in sortList.sortList" :key="'sort-item' + i">
            <v-sort-item
              :data=item
              @toggleSortOrder="sortOrder"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <template>
            <tr v-for="item in getCountries.list" :key="item.id" class="py-[11px] border-b border-grey-200">
              <th>
                <div class="flex justify-start items-center min-h-[46px] text-14sm text-grey-500 font-normal">
                  <p>{{ item.code }}</p>
                </div>
              </th>
              <th>
                <div class="flex justify-start items-center min-h-[46px] text-14sm text-grey-500 font-normal">
                  <p>{{ item.name }}</p>
                </div>
              </th>
              <th>
                <div class="flex justify-start items-center min-h-[46px] text-14sm text-grey-500 font-normal">
                  <v-status v-if="item" :status="item.active ? item.active : 0" @changeStatus="submitCountry(item)" />
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
import sortList from '@/data/sort.js'
import axios from 'axios';

export default {
  components: {
    VStatus,
    vSortItem
  },
  data() {
    return {
      sortList,
    }
  },
  computed: {
    ...mapGetters(['getCountries', 'getCurrentPage']),
    currentPage() {
      return this.getCurrentPage;
    },
    totalPages() {
      return this.getTotalPages;
    },
  },
  mounted() {
    this.actionCountries(1);
  },
  methods: {
    async submitCountry(item) {
      try {
        await axios.post('admin/countries/edit', {
          id: item.id,
          active: item.active === 1 ? 0 : 1,
          code: item.code,
          name: item.name,
        });
        if(item.active) {
          item.active = item.active === 1 ? 0 : 1;
        }
      } catch (error) {
        console.error(error);
      }
    },
    ...mapActions(['actionCountries']),



    sortOrder(field, order) {
      // Здесь мы вызываем экшен сортировки из Vuex и передаем в него поля для сортировки
      this.actionCountries(1, field, order);
    },

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