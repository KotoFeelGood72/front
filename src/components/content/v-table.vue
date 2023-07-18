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
        <tr v-for="item in getCountries.list" :key="item.id" class="py-[11px]">
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

              <p>{{ item.active }}</p>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import VSortItem from './v-sort-item.vue';
import vActive from '@/components/la'

export default {
  components: {
    VSortItem
  },
  computed: {
    ...mapGetters(['getCountries', 'getCurrentPage', 'getTotalPages']),
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
