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
        {{ getCountries }}
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
    <!-- <div class="table-bottom">
      <div class="table-navigation">
        <div class="previousPage" @click="previousPage" :disabled="page === 1">
          <global-icon icon="tabler:chevron-left"/>
        </div>
        <div class="nextPage" @click="nextPage" :disabled="page === totalPages">
          <global-icon icon="tabler:chevron-right"/>
        </div>
      </div>
    </div> -->
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
    ...mapGetters(['getCountries']),
  },
  mounted() {
    this.actionCountries(1)
  },
  methods: {
    ...mapActions(['actionCountries']),
  },
};
</script>
