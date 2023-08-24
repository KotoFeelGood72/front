<template>
  <div>
    <table class="w-full">
      <thead class="w-full border-b border-grey-200">
        <tr class="w-full relative h-[51px]">
          <th class="relative check-row min-w-[51px]">
            <input type="checkbox" id="countries-0" @input="selectAllRows" :checked="checkItem">
            <label for="countries-0"></label>
          </th>
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
            <tr v-for="item in list" :key="item.id" class="py-[11px] relative  border-b border-grey-200">
              <th class="relative check-row w-[20px] min-w-[51px]">
                <input type="checkbox" :id="'countries-' + item.id" :checked="checkItem"
                @input="checkedRow(item)">
                <label :for="'countries-' + item.id"></label>
              </th>
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
                <edit-btn :data="item" @change-countries="getCountry(item)"/>
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
  props: ['list'],
  data() {
    return {
      sortList,
      checkItem: false,
      selectedItems: []
    }
  },
  computed: {
    ...mapGetters(['getCountries', 'getCurrentPage']),
    totalPages() {
      return this.getTotalPages;
    },
  },
  mounted() {
    this.actionCountries({page: this.getCurrentPage});
  },
  methods: {
    getCountry(item) {
      this.$store.commit('setCountryDetail', item)
    },
    selectAllRows() {
      this.checkItem = !this.checkItem;

      for (const item of this.getCountries.list) {
        item.checked = this.checkItem;
      }

      this.updateSelectedItems();
    },
    checkedRow(item) {
      item.checked = !item.checked;
      console.log(item.checked, 'Good')
      this.updateSelectedItems();
    },
    updateSelectedItems() {
      this.selectedItems = this.getCountries.list.filter(item => item.checked).map(item => item.id);
      this.checkItem = this.selectedItems.length === this.getCountries.list.length;

      console.log(this.selectedItems)
    },
    async submitCountry(item) {
      try {
        await axios.post('admin/countries/edit', {
          id: item.id,
          active: item.active === 1 ? 0 : 1,
          code: item.code,
          name: item.name,
        });
        if(item) {
          item.active = item.active === 1 ? 0 : 1;
        }
      } catch (error) {
        console.error(error);
      }
    },
    ...mapActions(['actionCountries']),


    sortOrder(field, order) {
      console.log(this.$route.path)
      this.actionCountries({
        page: this.currentPage,
        field,
        order,
      });
      // this.$router.replace({query: {order: order, orderby: field}})
    },
    
  },
};
</script>

<style lang="scss">


.check-row {
  position: relative;
  z-index: 3;
  pointer-events: none;
  input {
    display: none;
    pointer-events: all;
    &:checked + label {
      &:after {
        opacity: 1;
        visibility: visible;
      }
      &:before {
        background-color: #4F46E5;
        border-color: #4F46E5;
      }
    }
  }

  label {
    width: 20px;
    height: 20px;
    cursor: pointer;
    display: block;
    line-height: 0;
    pointer-events: all;
    &:before {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      content: '';
      border: 1px solid #D1D5DB;
      border-radius: 5px;
      transition: all .2s ease;
    }
    &:after {
      background: url('https://api.iconify.design/tabler/check.svg?color=white&width=14&height=14') no-repeat center center / contain;
      width: 14px;
      height: 14px;
      content: '';
      position: absolute;
      top: 50%;
      left: 3px;
      transform: translateY(-50%);
      opacity: 0;
      visibility: hidden;
      transition: all .2s ease;
    }
  }
}


// .empty-check {
//   &:before {
//       position: absolute;
//       top: 50%;
//       left: 0;
//       transform: translateY(-50%);
//       width: 20px;
//       height: 20px;
//       content: '';
//       border: 1px solid #D1D5DB;
//       border-radius: 5px;
//       transition: all .2s ease;
//     }
// }


</style>