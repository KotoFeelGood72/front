<template>
  <section class="w-full">
    <div class="container">
      <v-title title="Редактировать страну" class="mb-[40px]"/>
      <div class="country-row flex items-start">
        <div class="country_input--group shadow-lg rounded-[15px] flex-1 p-[40px] flex items-center bg-white mr-[25px]">
          <label for="countryCode">
            <p class="mb-[10px] font-medium text-grey-700">Код страны</p>
            <input type="text" id="countryCode" placeholder="Пример: 1234" v-model="getsCountry.code">
          </label>
          <label for="countryName">
            <p class="mb-[10px] font-medium text-grey-700">Название страны</p>
            <input type="text" id="countryName" placeholder="Название страны заполненное" v-model="getsCountry.name">
          </label>
        </div>
        <div class="country-add min-w-[331px] bg-white shadow-lg p-[30px] rounded-[15px]">
          <ul class="mb-[30px]">
            <li class="flex items-center mb-[8px]">
              <p class="text-14sm text-grey-500 mr-[5px]">Дата публикации:</p>
              <span class="text-grey-700 text-14sm">{{dateCreates}}</span>
            </li>
            <li class="flex items-center mb-[8px]">
              <p class="text-14sm text-grey-500 mr-[5px]">Дата изменения:</p>
              <span class="text-grey-700 text-14sm">{{dateUpdate}}</span>
            </li>
          </ul>
          <div class="mb-[30px]">
            <p class="mb-[10px] text-14sm">Видимость: </p>
            <v-select :status="getsCountry.active"/>
          </div>
          <div class="country-save flex items-center">
            <button type="button" class="flex items-center justify-center bg-indigo-600 text-white py-[13px] px-[16px] rounded-default w-full mr-[10px]" @click="saveCountry">
              <global-icon icon="tabler:brand-ubuntu" width="20" height="20" class="mr-[8px]"/>
              <p>Сохранить</p>
            </button>
            <v-delete-button hidden="true" classes="bg-pink-600 h-[50px]"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import vTitle from '@/components/content/v-title.vue';
  import vSelect from '@/components/input/v-select.vue';
  import vDeleteButton from '@/components/button/v-delete-button.vue';

  import axios from 'axios'

  export default {
    components: {
      vTitle,
      vSelect,
      vDeleteButton
    },
    methods: {
      saveCountry() {
        const data = {
          id: this.getsCountry.id,
          name: this.getsCountry.name,
          code: this.getsCountry.code,
          active: this.getsCountry.active,
        }
        try {
          axios.post(`/admin/countries/edit/`, data)
          this.$router.push('/admin/countries')
        } catch (error) {
            console.log(error);
        }
        
      }
    },
    computed: {
      getsCountry() {
        return this.$store.state.country.countryDetail
      },
      dateCreates() {
        const getYears = new Date(this.getsCountry.date_create).toLocaleDateString('en-GB');
        return getYears
      },
      dateUpdate() {
        const getYears = new Date(this.getsCountry.date_update).toLocaleDateString('en-GB');
        return getYears
      }
    }
  }
</script>

<style lang="scss" scoped>

input {
  border-radius: 8px;
  border: 1px solid var(--grey-300, #D1D5DB);
  background: var(--indigo-10, #FAFBFF);
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 15px 17px;
  color: var(--grey-500);
  &:focus {
    outline: none;
    border: 1px solid var(--indigo-600, #4F46E5);
  }
}

.country_input--group {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  grid-gap: 20px;
}

</style>