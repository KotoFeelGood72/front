<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>
            <p>Код страны</p>
            <div class="sort-btn">
              <global-icon icon="tabler:arrows-down-up"/>
            </div>
          </th>
          <th>
            <p>Название страны</p>
            <div class="sort-btn">
              <global-icon icon="tabler:arrows-down-up"/>
            </div>
          </th>
          <th>
            <p>Видимость</p>
            <div class="sort_btn--group">
              <div class="sort-btn">
                <global-icon icon="tabler:arrows-down-up"/>
              </div>
              <div class="sort-btn">
                <global-icon icon="tabler:filter"/>
              </div>
            </div>
          </th>
          <th>
            <global-icon icon="tabler:dots-vertical"/>
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
      <!-- <div class="table-navigation">
        <div class="previousPage" @click="previousPage" :disabled="page === 1">
          <global-icon icon="tabler:chevron-left"/>
        </div>
        <div class="nextPage" @click="nextPage" :disabled="page === totalPages">
          <global-icon icon="tabler:chevron-right"/>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getCountries']),
  },
  methods: {
    ...mapActions(['actionCountries'])
    
  },
  mounted() {
    this.actionCountries()
  }
  // computed: {
  //   ...mapState(['page', 'totalPages']),
  // },
  // methods: {
  //   ...mapActions(['fetchCountry']),
  //   previousPage() {
  //     this.fetchCountry(this.page - 1);
  //   },
  //   nextPage() {
  //     this.fetchCountry(this.page + 1);
  //   },
  // },
  // mounted() {
  //   this.fetchCountry(3);
  // },
};
</script>
