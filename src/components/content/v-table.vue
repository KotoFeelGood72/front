<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>
            <v-sort-item name="Код страны"/>
          </th>
          <th>
            <v-sort-item name="Название страны"/>
          </th>
          <th>
            <v-sort-item name="Видимость"/>
          </th>
          <th>
            <v-sort-item name="Код страны"/>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in getCountries.list" :key="item.id">
          <th>
            <p>{{ item.isoCode }}</p>
            <p>{{ item.name }}</p>
            <p>{{ item.active }}</p>
            <p>{{ item.date_create }}</p>
            <p>{{ item.date_update }}</p>
          </th>
        </tr>
      </tbody>
    </table>
    <div class="table-bottom">
      <div class="table-navigation">
        <div class="previousPage" @click="previousPage" :disabled="currentPage === 1">
          <global-icon icon="tabler:chevron-left"/>
        </div>
        <div class="nextPage" @click="nextPage" :disabled="currentPage === totalPages">
          <global-icon icon="tabler:chevron-right"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import VSortItem from './v-sort-item.vue';

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
