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
            <tr v-for="item in getCountries.list" :key="item.id" class="py-[11px] border-b border-grey-200 relative">
              <th>
                <div class="flex justify-start items-center min-h-[46px] text-14sm text-grey-500 font-normal max-w-md w-[100%]">
                  <p>{{ item.code }}</p>
                </div>
              </th>
              <th>
                <div class="flex justify-start items-center min-h-[46px] text-14sm text-grey-500 font-normal max-w-md w-[100%]">
                  <p class=" text-left">{{ item.name }}</p>
                </div>
              </th>
              <th>
                <div class="flex justify-start items-center min-h-[46px] text-14sm text-grey-500 font-normal max-w-md w-[100%]">
                  <v-status v-if="item" :status="item.active ? item.active : 0" @changeStatus="submitCountry(item)" />
                </div>
              </th>
              <th class="edit-trigger absolute top-[50%]  right-0 -translate-y-[50%]">
                <edit-btn :data="item"/>
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
import editBtn from '../shared/edit-btn.vue';



import sortList from '@/data/sort.js'
import axios from 'axios';

export default {
  components: {
    VStatus,
    vSortItem,
    editBtn
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
        console.log(item.active)
        if(item) {
          item.active = item.active === 1 ? 0 : 1;
        }
      } catch (error) {
        console.error(error);
      }
    },
    ...mapActions(['actionCountries']),



    sortOrder(field, order) {
      this.actionCountries(this.currentPage, field, order);
      // this.$router.push({
      //   path: `/admin/countries/page/${this.currentPage}`,
      //   query: { order, orderby: field, limit: 15 }
      // });
    },

    mounted() {
    // Считываем параметры запроса из адресной строки
    const { order, orderby, limit } = this.$route.query;

    // Вызываем actionCountries, передавая параметры запроса

    console.log(order, orderby, limit)
    this.actionCountries(1, orderby, order, limit);
  },
  },
};
</script>