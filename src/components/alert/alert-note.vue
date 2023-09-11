<template>
  <div class="alert-note min-w-[409px] absolute">
    <ul class="alert-list w-full">
      <li class="alert-item w-full" v-for="item in 12" :key="'alertNote-' + item">
        <div class="read-note"></div>
        <p class="text-14sm mb-[5px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
        <span class="block text-[12px] text-grey-400">10.10.2023</span>
        <div class="alert_note--delete absolute bottom-[10px] right-[19px] text-[#6B7280] hover:text-red-400 cursor-pointer" >
          <global-icon icon="tabler:x" width="20" height="20D"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>


.alert-note {
  top: calc(100% + 17px);
  right: calc(100% - 27px);
  box-shadow: 0px 4px 10px 0px rgba(30, 27, 75, 0.10), 0px 1px 4px 0px rgba(30, 27, 75, 0.03);
  padding: 10px 0;
  padding-right: 5px;
  border-radius: 0 0 10px 10px;

  .alert-list {
    max-height: 350px;
    overflow-y: auto;
    li {
      padding: 10px 20px;
      position: relative;
      &:hover {
        background-color: #EEF2FF;
      }
    }
  }
}

.alert-list {
  /* плашка-бегунок и фон */
  scrollbar-color: transparent;
}
.alert-list::-webkit-scrollbar {
  width: 5px; /* в основном для вертикальных полос прокрутки */
  height: 10px; /* в основном для горизонтальных полос прокрутки */
}
.alert-list::-webkit-scrollbar-thumb { /* плашка-бегунок */
  background: #4F46E5;
  border-radius: 10px;
}
.alert-list::-webkit-scrollbar-track { /* фон */
  background: transparent;
}
</style>