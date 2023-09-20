<template>
  <th v-if="columnSortVisibility">
    <div class="flex items-center justify-start" @click="toggleSortered">
        <div class="flex items-center justify-start py-[13px] cursor-pointer sort-item mr-[10px]" 
          :data-orderby="data.orderby"
          :class="{ ASC: isAscending, DESC: !isAscending }" 
          >
            <p class="mr-[10px] text-grey-700 font-medium">{{ data.name }}</p>
            <div class="sort-btn text-grey">
              <global-icon icon="tabler:arrows-down-up" width="15" height="15"/>
              <global-icon icon="tabler:arrows-down-up" width="15" height="15"/>
            </div>
        </div>
      <div class="mt-[1px] cursor-pointer" v-if="data.settings">
        <global-icon icon="tabler:settings" width="20" height="20" color="#9CA3AF"/>
      </div>
    </div>
  </th>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      isAscending: null,
      fieldName: this.$props.data.orderby
    }
  },
  methods: {
    toggleSortered() {
      this.isAscending = !this.isAscending;
      this.isAscending ? 'ASC' : 'DESC'
      this.$emit('toggle-sortered', this.$props.data, this.isAscending)
    }
  },
  computed: {
    columnSortVisibility() {
        return this.$store.state.filter.columns[this.fieldName]
      }
    }
};
</script>

<style lang="scss">




.sort-item {
  user-select: none;

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
  .sort-btn {
    &:before {
      // display: none;
    }
  }

  &.ASC {
    svg {
      &:nth-child(1) {
        color: #4F46E5!important;
      }
      &:nth-child(2) {
        display: none;
      }
    }
    .sort-btn {
      // &:before {
      //   display: block;
      //   width: 50%;
      // }
    }
  }

  &.DESC {
    .sort-btn {
      // &:before {
      //   display: block;
      //   width: 50%;
      //   left: auto;
      //   right: 0;
      // }
    }
  }
}

.sort-btn {
  position: relative;
  width: 15px;
  height: 15px;
}




</style>

