<template>
  <div class="relative">
    <select class="border border-grey-300 rounded-[8px] text-14sm text-grey-700 py-[3px] px-[10px] mr-[25px] col-row-select">
      <option v-for="item in data" :value="item" :key="item + '-' + i">{{ item }}</option>
    </select>
    <global-icon icon="eva:arrow-down-fill" width="17" height="20" color="#9CA3AF" class="select-arrow"/>
  </div>
</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style lang="scss" scoped>
div {

  select {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    width: 100%;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  &:before {
    position: absolute;
    top: 50%;
    right: 10px;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.select-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  pointer-events: none;
}
</style>