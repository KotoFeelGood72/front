<template>
  <section class="w-full">
    <div class="container">
      <v-title title="Добавить регион" class="mb-[40px]"/>
      <div class="country-row flex items-start">
        <div class="country_input--group shadow-lg rounded-[15px] flex-1 p-[40px] flex items-center bg-white mr-[25px]">
          <label for="country-select">
            <p class="mb-[10px] font-medium text-grey-700">Страна</p>
            <div class="relative">
              <select name="country-select" id="country-select" v-model="instance.code" class="w-full py-[8px] px-[10px] h-full rounded-[8px] border border-grey-300 focus:border-indigo-600">
                <option value="" disabled selected>Выберите из списка</option>
                <option v-for="(country, i) in countries" :key="'country' + i" :value="country.id">{{ country.name }}</option>
              </select>
              <global-icon icon="tabler:chevron-down" width="20" height="20" color="#6B7280" class="select-icon"/>
            </div>
          </label>
          <label :for="moduleName + 'Code'">
            <p class="mb-[10px] font-medium text-grey-700">Код страны</p>
            <input type="text" :id="moduleName + 'Code'" placeholder="Пример: RU" v-model="instance.code">
          </label>
          <label :for="moduleName + 'Name'">
            <p class="mb-[10px] font-medium text-grey-700">Название региона</p>
            <input type="text" :id="moduleName + 'Regions'"  placeholder="Введите название" v-model="instance.name">
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
            <button type="button" class="flex items-center justify-center bg-indigo-600 text-white py-[13px] px-[16px] rounded-default w-full" @click="addPage">
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
      vTitle: () => import('@/components/content/v-title.vue'),
    },
    data() {
      return {
        moduleName: 'regions',
        instance: {
          code: '',
          name: ''
        },
        countries: [
          { name: 'Россия', id: '1'   },
          { name: 'Франция', id: '2'  },
          { name: 'Америка', id: '3'  },
          { name: 'ЮАР', id: '4'      },
          { name: 'Австралия', id: '5'},
        ]
      }
    },
    methods: {
      async addPage() {
        const data = {
          name: this.instance.name,
          countryId: this.instance.code,
        }
        try {
          await axios.post(`admin/${this.moduleName}/add`, data)
          await this.$router.push(`/admin/${this.moduleName}`)
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

input, select {
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





select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
}

.select-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
}


</style>