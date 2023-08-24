<template>
  <div>
    <div v-for="(item, i) in alert" :key="'item-' + i">
      <div :class="{'success': state, 'error': !state}" v-if="item.type === type">
        <div>{{ item.message }}</div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        alert: [
          {
            type: 1,
            message: 'Новый объект успешно добавлен',
            mode: 'success'
          },
          {
            type: 2,
            message: 'Объект успешно отредактирован',
            mode: 'success'
          },
          {
            type: 3,
            message: 'Объект успешно удален',
            mode: 'success'
          },
          {
            type: 4,
            message: 'Не удалось добавить объект',
            mode: 'error'
          },
          {
            type: 5,
            message: 'Не удалось отредактировать объект',
            mode: 'error'
          },
          {
            type: 6,
            message: 'Не удалось удалить объект',
            mode: 'error'
          }
        ]
      }
    },
    props: {
      type: {
        required: true,
        type: Number,
      },
      state: {
        required: true,
        type: Boolean
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>