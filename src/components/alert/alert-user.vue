<template>
  <div class="absolute right-0 min-w-[282px] border border-grey-200 bg-white user-modal">
    <div class="user-head flex items-center py-[12px] px-[20px]">
      <div class="user-img w-[42px] h-[42px] rounded-full overflow-hidden mr-[10px]">
        <img :src="require('@/assets/img/avatar.jpg')" alt="">
      </div>
      <div class="user-info">
        <p class="text-14sm">Фамилия Имя Отчество</p>
        <span class="text-[12px] text-grey-400 block">admin</span>
      </div>
    </div>
    <div class="user-settings border-t border-b border-grey-200">
      <router-link to="/" class="text-grey-700 flex items-center p-[20px]">
        <global-icon icon="tabler:settings" width="20" height="20" class="mr-[10px]"/>
        <p>Настройки</p>
      </router-link>
    </div>
    <div class="user-logout">
      <button type="button" class="text-grey-500 flex items-center p-[20px] w-full" @click="logoutUser">
        <global-icon icon="tabler:door-exit" width="20" height="20" class="mr-[10px]"/>
        <p>Выйти</p>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      logoutUser() {
        this.$emit('logout-user')
      },
    }
  }
</script>

<style lang="scss" scoped>

.user-modal {
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 4px 10px 0px rgba(30, 27, 75, 0.10), 0px 1px 4px 0px rgba(30, 27, 75, 0.03);
  top: calc(100% + 9px);
}
</style>