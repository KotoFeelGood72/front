<template>
  <div class="flex items-center justify-start py-[11px] border-b border-grey-200 cursor-pointer sort-item" @click="toggleSortOrder()" 
  :data-orderby="data.orderby" 
  :class="this.sortOrder"
  
  >
    <p class="mr-[10px] text-grey-700 font-medium">{{ data.name }}</p>
    <div class="sort-btn text-grey">
      <global-icon icon="tabler:arrows-down-up" width="15" height="15"/>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      active: null,
      sortOrder: ''
    }
  },
  methods: {
    toggleSortOrder() {
      if (this.sortField === this.data.orderby) {
        this.sortOrder = this.sortOrder === 'ASC' ? 'DESC' : 'ASC'; 
      } else {
        this.sortField = this.data.orderby;
        this.sortOrder = 'ASC';
      }
      this.active = this.sortOrder; 

      
      this.$store.commit('setSortOrder', this.sortOrder);
      this.$store.commit('setSortField', this.sortField);
      this.$emit('toggleSortOrder', this.sortField, this.sortOrder);
    },



  },
};
</script>

<style lang="scss">


.sort-item {
  &.DESC, &.ASC {
    svg {
      color: #4F46E5!important;
    }
  }
}



.sort-item {
  user-select: none;
  .sort-btn {
        &:before {
          display: none;
        }
      }

  &.ASC {
    .sort-btn {
      &:before {
        display: block;
        width: 50%;
      }
    }
  }

  &.DESC {
    .sort-btn {
      &:before {
        display: block;
        width: 50%;
        left: auto;
        right: 0;
      }
    }
  }
}

.sort-btn {
  position: relative;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    content: '';
    z-index: 2;
  }



}




</style>

