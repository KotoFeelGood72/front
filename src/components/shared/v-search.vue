<template>
  <div class="input-search bg-[#FAFBFF]">
    <input type="search" placeholder="Поиск" class="border border-grey-300 rounded-[8px]" @focus="isFocusec" @blur="handleBlur"  :class="{'border-indigo-600': isFocus}">
    <button type="submit" :class="{'text-indigo-600': isFocus}"><global-icon icon="tabler:search" width="18"/></button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isFocus: false
      }
    },
    methods: {
      isFocusec() {
        this.isFocus = !this.isFocus
      },
      handleBlur() {
        this.isFocus = false
      }
    }
  }
</script>

<style lang="scss" scoped>


.input-search {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}


input {
  width: 100%;
  height: 100%;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-size: 14px;
  padding: 8px 17px;
  &:focus {
    outline: none;
  }
}
button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 17px
}
</style>