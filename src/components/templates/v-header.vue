<template>
  <div class="flex justify-end items-center absolute top-0 left-0 w-full h-[62px] border border-grey-200 shadow-sm pr-[120px] py-[10px] bg-white">
    <div class="note mr-[30px]">
        <global-icon icon="tabler:bell" color="#374151" width="27px" height="27px"/>
      </div>
      <div class="avatar w-[42px] h-[42px] rounded-full overflow-hidden">
        <img :src="require('../../assets/img/avatar.jpg')" alt="" class="h-100% object-cover">
      </div>
  </div>
</template>

<script>
  export default {
    
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

</style>