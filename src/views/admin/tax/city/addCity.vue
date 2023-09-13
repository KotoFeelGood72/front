<template>
  <section class="w-full">
    <div class="container">
      <v-title title="Добавить страну" class="mb-[40px]"/>
      <div class="country-row flex items-start">
        <div class="country_input--group shadow-lg rounded-[15px] flex-1 p-[40px] flex items-center bg-white mr-[25px]">
          <label for="countryCode">
            <p class="mb-[10px] font-medium text-grey-700">Код страны</p>
            <input type="text" id="countryCode" placeholder="Пример: RU" v-model="code">
          </label>
          <label for="countryName">
            <p class="mb-[10px] font-medium text-grey-700">Название страны</p>
            <input type="text" id="countryName" placeholder="Название страны заполненное" v-model="name">
          </label>
        </div>
        <div class="country-add min-w-[331px] bg-white shadow-lg p-[30px] rounded-[15px]">
          <ul class="mb-[30px]">
            <li class="flex items-center mb-[8px]">
              <p class="text-14sm text-grey-500 mr-[5px]">Дата публикации:</p>
              <span class="text-grey-700 text-14sm">03.07.2023</span>
            </li>
            <li class="flex items-center mb-[8px]">
              <p class="text-14sm text-grey-500 mr-[5px]">Дата изменения:</p>
              <span class="text-grey-700 text-14sm">03.07.2023</span>
            </li>
          </ul>
          <div class="country-save">
            <button type="button" class="flex items-center justify-center bg-indigo-600 text-white py-[13px] px-[16px] rounded-default w-full" @click="addCities">
              <global-icon icon="tabler:plus" width="20" height="20" class="mr-[8px]"/>
              <p>Добавить</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    components: {
      vTitle: () => import('@/components/content/v-title.vue')
    },
    data() {
      return {
        name: '',
        code: ''
      }
    },
    methods: {
      async addCities() {
        const data = {
          name: this.name,
          code: this.code
        }
        try {
          await axios.post('admin/cities/add', data)
          await this.$router.push('/admin/cities')
          setTimeout(() => {
            this.$notify({
              group: 'all',
              title: 'Новый объект успешно добавлен',
              text: 'Вы успешно добавили обьект, измненения вступают в силу с момента добавления',
              type: 'success',
            });
          }, 200)
        } catch (error) {
            console.log(error);
        }
      }
    },
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