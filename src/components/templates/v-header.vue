<template>
  <div class="flex justify-end items-center absolute top-0 left-0 w-full h-[62px] border border-grey-200 shadow-sm pr-[120px] py-[10px] bg-white">
    <div class="note mr-[30px] relative">
        <div class="note-trigger cursor-pointer" @click="openModalNote">
          <global-icon icon="tabler:bell" color="#374151" width="27px" height="27px" class="pointer-events-none"/>
        </div>
        <alert-note v-if="getModalNote"/>
      </div>
      <div class="avatar w-[42px] h-[42px] relative cursor-pointer" @click="openModalUser" >
        <img :src="require('../../assets/img/avatar.jpg')" alt="" class="object-cover w-[42px] h-[42px] avatar-img overflow-hidden border-2" :class="{'border-indigo-600': getModalUser, 'border-transparent': !getModalUser}">
        <alert-user v-if="getModalUser" @logout-user="logout"/>
      </div>
  </div>
</template>

<script>
  import alertUser from '../alert/alert-user.vue';
  import alertNote from '../alert/alert-note.vue';
  export default {
    components: {
      alertUser,
      alertNote,
    },
    methods: {
      logout() {
        this.$store.dispatch('logout');
      },
      openModalUser() {
        this.$store.commit('openPopup', 'user')
      },
      openModalNote() {
        this.$store.commit('openPopup', 'note')
      }
    },
    computed: {
      getModalUser() {
        return this.$store.getters.getPopup('user')
      },
      getModalNote() {
        return this.$store.getters.getPopup('note')
      }
    }
  }
</script>

<style lang="scss" scoped>

.note {
  position: relative;
  &:before {
    position: absolute;
    width: 7.2px;
    height: 7.2px;
    border-radius: 100%;
    background-color: #DB2777;
    border: 1px solid #ffff;
    content: '';
    top: 4.5px;
    right: 4.5px;
  }
}


.avatar-img  {
  border-radius: 100%;
}

</style>