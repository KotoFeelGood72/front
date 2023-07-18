<template>
  <div @click="changeStatus">
    <div class="bg-emerald-100 py-[3px] px-[20px] rounded-[6px] text-emerald-800 text-[12px] max-w-[92px] flex items-center justify-center cursor-pointer" v-if="isStatus">
      Активно
    </div>
    <div v-else class="bg-pink-200 py-[3px] px-[20px] rounded-[6px] text-pink-800 text-[12px] max-w-[92px] flex items-center justify-center cursor-pointer">
      Неактивно
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isStatus: false,
      }
    },
    methods: {
      changeStatus() {
        this.isStatus = !this.isStatus;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>