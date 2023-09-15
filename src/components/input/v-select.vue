<template>
  <div class="select relative">
    <select @change="changeStatus" v-model="getStatus.active" class="w-full py-[8px] px-[10px] text-14sm text-grey-500 h-full rounded-[8px] border border-grey-300 focus:border-indigo-600">
      <option :value="item.active" v-for="item in option" :key="'select' + item.active">{{ item.name }}</option>
    </select>
    <global-icon icon="tabler:chevron-down" width="20" height="20" color="#6B7280" class="select-icon"/>
  </div>
</template>

<script>
  export default {
    props: ['name'],
    data() {
      return {
        option: [
          { active: 1, name: 'Активно' },
          { active: 0, name: 'Неактивно'}
        ],
      }
    },
    methods: {
      changeStatus() {
        this.$store.commit('setChangeStatus', this.getStatus.active)
      }
    },
    computed: {
      getStatus() {
        return this.$store.state[this.name].pageDetail
      }
    }
  }
</script>

<style lang="scss" scoped>


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