<template>
  <div @click="toggleStatus" class="none-click">
    <div v-if="status == 1" class="bg-emerald-100 py-[3px] px-[20px] rounded-[6px] text-emerald-800 text-[12px] max-w-[92px] flex items-center justify-center cursor-pointer">
      Активно
    </div>
    <div v-else class="bg-pink-200 py-[3px] px-[20px] rounded-[6px] text-pink-800 text-[12px] max-w-[92px] flex items-center justify-center cursor-pointer">
      Неактивно
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: Number,
      required: true,
    },
  },
  methods: {
    toggleStatus() {
      const toggledStatus = this.status === 1 ? 0 : 1;
      this.$emit('changeStatus', toggledStatus); 
    },
  },
};
</script>

<style lang="scss" scoped>
.none-click {
  user-select: none;
}
</style>
