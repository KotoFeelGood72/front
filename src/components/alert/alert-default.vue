<template>
  <div class="alert-bg">
    <div class="alert shadow-md px-[80px] py-[40px] rounded-[15px] bg-white">
      <h3 class="text-xl text-grey-700 font-medium mb-[50px]">Вы уверены, что хотите удалить объект?</h3>
      <div class="button-group flex items-center justify-center">
        <button type="button" class="bg-pink-200 text-14sm text-white py-[13px] px-[25px] rounded-[10px] mr-[15px]" @click="hiddenAlert">Отмена</button>
        <button type="button" class="bg-indigo-600 text-14sm text-white py-[13px] px-[25px] rounded-[10px]" @click="removeDetails">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    methods: {
      removeDetails() {
        this.$emit('remove-pages')
      },
      hiddenAlert() {
        this.$emit('hidden-alert')
      }
    }
  }
</script>

<style lang="scss" scoped>


.alert {
  
}

.alert-bg {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(55, 65, 81, 0.50);
  z-index: 999;
}
</style>