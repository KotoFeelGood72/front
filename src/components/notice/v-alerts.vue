<template>
  <div class="w-full absolute top-12 bg-emerald-400 text-white py-[15px] right-0">
    <div class="container flex items-center justify-between mr-[120px] pl-0 pr-0">
      <p class="font-medium font-fa">Новый объект успешно добавлен</p>
      <div class="close cursor-pointer" @click="closeNotice">
        <global-icon icon="tabler:x" width="24" height="24"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      closeNotice() {
        this.$emit('closeNotice')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>