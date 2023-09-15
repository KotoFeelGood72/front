<template>
  <section class="w-full">
    <div class="container">
      <vAlert v-if="isPopupOpen" @remove-pages="deletePages" @hidden-alert="togglePopup"/>
      <v-title title="Редактировать регион" class="mb-[40px]"/>
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
            <input type="text" :id="moduleName + 'Code'" placeholder="Пример: 1234" v-model="getPages.code">
          </label>
          <label :for="moduleName + 'Name'">
            <p class="mb-[10px] font-medium text-grey-700">Название региона</p>
            <input type="text" :id="moduleName + 'Name'" placeholder="Название страны заполненное" v-model="getPages.name">
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
            <v-select :status="getPages.active" name="regions"/>
          </div>
          <div class="country-save flex items-center">
            <button type="button" class="flex items-center justify-center bg-indigo-600 text-white py-[13px] px-[16px] rounded-default w-full mr-[10px]" @click="savePage">
              <global-icon icon="tabler:brand-ubuntu" width="20" height="20" class="mr-[8px]"/>
              <p>Сохранить</p>
            </button>
            <v-delete-button hidden="true" classes="bg-pink-600 h-[50px]" @click.native="togglePopup"/>
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
      vSelect: () => import('@/components/input/v-select.vue'),
      vDeleteButton: () => import('@/components/button/v-delete-button.vue'),
      vAlert: () => import('@/components/alert/alert-default.vue'),
    },
    data: () => ({
      moduleName: 'regions',
      moduleStoreName: 'regions',
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
    }),
    computed: {
      isPopupOpen() {
        return this.$store.getters.getPopupStatus
      },
      getPages() {
        return this.$store.state.regions.pageDetail
      },
      dateCreates() {
        const getYears = new Date(this.getPages.date_create).toLocaleDateString('en-GB'); return getYears
      },
      dateUpdate() {
        const getYears = new Date(this.getPages.date_update).toLocaleDateString('en-GB'); return getYears
      },
    },
    methods: {
      togglePopup() {
        this.$store.commit('togglePopup')
      },
      async deletePages() {
        try {
          const idDetails = [this.getPages.id]
          const { data } = await axios.post(`/admin/${this.moduleName}/delete/`, {
            ids: idDetails
          })

          if(data.status) {
            this.togglePopup();
            await this.$router.go(-1);
            setTimeout(() => {
              this.$notify({
                group: 'all',
                title: 'Объект успешно удален',
                text: 'Вы успешно удалили обьект, измненения вступают в силу с момента изменения',
                type: 'success',
              });
            }, 200)
          }
        } catch (error) {
            console.log(error);
        }
      },
      async savePage() {
      const data = {
        id: this.getPages.id,
        name: this.getPages.name,
        code: this.getPages.code,
        active: this.getPages.active,
      };
      try {
        await axios.post(`/admin/${this.moduleName}/edit/`, data);
        await this.$router.go(-1);
        setTimeout(() => {
          this.$notify({
            group: 'all',
            title: 'Объект успешно отредактирован',
            text: 'Вы успешно отредактировали обьект, измненения вступают в силу с момента редактирования',
            type: 'success',
          });
        }, 200)
      } catch (error) {
        console.log(error);
      }
      },
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