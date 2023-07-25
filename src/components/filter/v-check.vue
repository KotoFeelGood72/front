<template>
  <div class="global-check">
    <input 
    type="checkbox" 
    :name="data.name" 
    :id="data.id"
    >
    <label :for="data.id" class="text-14sm text-grey-700">{{ data.label }}</label>
  </div>
</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style lang="scss" scoped>

.global-check {
  margin-bottom: 10px;
  input {
    display: none;
    &:checked + label {
      &:before {
        background-color: #4F46E5;
        border-color: #4F46E5;
      }
      &:after {
        opacity: 1;
        visibility: visible;
      }
    }
  }
  label {
    padding-left: 30px;
    position: relative;
    cursor: pointer;
    &:before {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      border: 1px solid #D1D5DB;
      content: '';
      width: 20px;
      height: 20px;
      border-radius: 5px;
    }
    &:after {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      background: url('https://api.iconify.design/tabler/check.svg?color=white') no-repeat center center / 14px;
      content: '';
      width: 20px;
      height: 20px;
      border-radius: 5px;
    }
  }
}
</style>