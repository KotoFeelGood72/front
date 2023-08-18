<template>
  <div class="shadow-sm py-[11px] border-b border-grey-300 bg-white header-empty">
    <div class="container justify-end flex items-center">
      <div class="logo">
        <router-link to="/">
          <img src="" alt="">
        </router-link>
      </div>
      <div>
        <div class="auth-btn flex items-center">
          <router-link to="/register" class="mr-[25px]">Регистрация</router-link>
          <router-link to="/login/" class="flex items-center justify-center bg-indigo-600 rounded-[8px] text-white py-[8px] px-[16px] hover:bg-indigo-700 duration-200">Войти</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>


  .header-empty {
    box-shadow: 0px 1px 3px 0px rgba(30, 27, 75, 0.03), 0px 1px 2px 0px rgba(30, 27, 75, 0.02);
  }
</style>