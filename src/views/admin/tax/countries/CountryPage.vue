<template>
  <div>
    <h2>Страница страны</h2>
    {{ this.$route.params }}
    <p>{{ this.$route.fullPath }}</p>
    <ul>
      <li v-for="country in countries" :key="country.id">
        {{ country.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      countries: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("http://192.168.0.100:8000/admin/countries/page/6");
        this.countries = response.data.list;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
