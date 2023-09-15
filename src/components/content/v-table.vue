<template>
  <div>
    <table class="w-full">
      <thead class="w-full border-b border-grey-200">
        <tr class="w-full relative h-[51px]">
          <th class="relative check-row min-w-[51px]">
            <input type="checkbox" id="countries-0" @input="selectAllRows" :checked="checkItem">
            <label for="countries-0"></label>
          </th>
          <th v-for="(item, i) in sortTable" :key="'sort-item' + i">
            <v-sort-item
              :data=item
              @toggle-sortered="sortering"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id" class="py-[11px] relative  border-b border-grey-200">
          <td class="relative check-row w-[20px] min-w-[51px]">
            <input type="checkbox" :id="'countries-' + item.id" :checked="checkItem" @input="checkedRow(item)">
            <label :for="'countries-' + item.id"></label>
          </td>
          <v-table-item v-for="(field, i) in filteredItemFields(item)" :key="'field-' + i" :title="field"/>
          <td>
            <div class="flex justify-start items-center min-h-[46px] text-14sm text-grey-500 font-normal max-w-md w-[100%]">
              <v-status v-if="item" :status="item.active ? item.active : 0" @changeStatus="shortChange(item)" />
            </div>
          </td>
          <td class="edit-trigger absolute top-[50%]  right-0 -translate-y-[50%]">
            <edit-btn :data="item" :link="address" @change-elements="getElements(item)"/>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import VStatus from '@/components/label/v-status.vue';
import vSortItem from '@/components/content/v-sort-item.vue';
import editBtn from '@/components/shared/edit-btn.vue';
import vTableItem from './v-table-item.vue';



import axios from 'axios';

export default {
  components: { VStatus, vSortItem, editBtn, vTableItem },
  props: ['list', 'sortTable', 'address', 'type'],
  data() {
    return {
      checkItem: false,
      selectedItems: [],
    }
  },
  computed: {
    filteredItemFields() {
      return function (item) {
        const filteredFields = {
          countryCode: item.country && item.country.code,
          country: item.country && item.country.name,
          code: item.code,
          region: item.region && item.region.name,
          name: item.name,
        };
        // Возвращаем массив значений свойств
        return Object.values(filteredFields);
      };
    },
  },
  methods: {
    getElements(item) {
      this.$emit('routeDetail', item)
      console.log(item)
    },
    selectAllRows() {
      this.checkItem = !this.checkItem;
      for (const item of this.$props.type) {
        item.checked = this.checkItem;
      }
      this.updateSelectedItems();
    },
    checkedRow(item) {
      item.checked = !item.checked;
      this.updateSelectedItems();
    },
    updateSelectedItems() {
      this.selectedItems = this.$props.type.list.filter(item => item.checked).map(item => item.id);
      this.checkItem = this.selectedItems.length === this.$props.type.length;
      this.$store.commit('setDeleteArr', this.selectedItems)
    },
    async shortChange(item) {
      const data = {
        id: item.id,
        active: item.active === 1 ? 0 : 1,
        code: item.code,
        name: item.name,
      }
      try {
        await axios.post(`admin/${this.$props.address}/edit`, data)
        if(item) {
          item.active = item.active === 1 ? 0 : 1;
        }
      } catch (error) {
        console.error(error);
      }
    },
    sortering(data, dir) {
      this.$emit('sortAction', data, dir )
    }    
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



</style>