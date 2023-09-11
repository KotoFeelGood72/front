<template>
  <nav class="navigation-menu">
    <div class="label-menu text-grey mb-[15px] text-14sm pl-[20px]">МЕНЮ</div>
    <ul class=" border-b-[1px] border-[#374151] pb-[10px] mb-[10px]">
      <li v-for="(item, i) in nav.menu" :key="'nav-' + i" :class="{'mb-[10px]': item.isActive}">
        <a href="" class="flex rounded-default relative" @click.prevent="changeStateNavItem(item)" :class="{'bg-indigo-900': item.isActive}">
          <global-icon :icon="item.icon" width="20px" class="mr-[10px]"/>
          <p>{{ item.name }}</p>
          <global-icon v-if="item.submenu"  icon="tabler:chevron-up" width="20px" class="menu-arrow" :class="{active: item.isActive}"/>
        </a>
          <ul v-if="item.submenu && item.isActive" class="sub-menu"  :class="{'active': !item.isActive}">
            <li v-for="(item, i) in item.submenu" :key="'sub-nav-' + i">
              <router-link class="text-grey hover:text-white flex" :to="item.link">{{ item.name }}</router-link>
            </li>
          </ul>
      </li>
    </ul>
    <div class="label-menu text-grey mb-[15px] text-14sm pl-[20px]">ДОПОЛНИТЕЛЬНОЕ</div>
    <ul>
      <li v-for="(item, i) in nav.other" :key="'other-nav-' + i" :class="{'mb-[10px]': item.isActive}">
        <a href="" class="flex rounded-default relative" @click.prevent="changeStateNavItem(item)" :class="{'bg-indigo-900': item.isActive}">
          <global-icon :icon="item.icon" width="20px" class="mr-[10px]"/>
          <p>{{ item.name }}</p>
          <global-icon v-if="item.submenu"  icon="tabler:chevron-up" width="20px" class="menu-arrow" :class="{active: item.isActive}"/>
        </a>
          <ul v-if="item.submenu && item.isActive" class="sub-menu"  :class="{'active': !item.isActive}">
            <li v-for="item in item.submenu" :key="item.id">
              <router-link class="text-grey hover:text-white flex" :to="item.link">{{ item.name }}</router-link>
            </li>
          </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
  import nav from '@/navigation/menu.js'
  export default {
    data() {
      return {
        nav,
      }
    },
    computed: {
      combinedMenu() {
        return [...this.nav.menu, ...this.nav.other];
      }
    },
    methods: {
      changeStateNavItem(item) {
      this.combinedMenu.forEach((menuItem) => {
        if (menuItem !== item) {
          menuItem.isActive = false;
        }
      });
      item.isActive = !item.isActive;
    }
    }
  }
</script>

<style lang="scss" scoped>

.menu-arrow {
  position: absolute;
  top: 53%;
  transform: translateY(-50%) rotate(180deg);
  right: 20px;
  width: 20px;
  height: 20px;
  
 &.active {
  transform: translateY(-50%) rotate(0);
 }
}

.sub-menu {
  padding: 10px 20px 10px 26px;
  background-color: rgba(49, 46, 129, 0.40);
  border-radius: 10px;
  margin: 10px 0;
  &.active {
    margin-bottom: 10px;
  }
  li {
    &:not(:last-child) {
      margin-bottom: 5px;
    }
    a {
      position: relative;
      padding-left: 17px;
      &:hover {
        &:before {
          background-color: #fff;
        }
      }
      &:before {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 5px;
        height: 5px;
        background-color: #9CA3AF;
        content: '';
        border-radius: 100px;
      }
    }
  }
}

.navigation-menu {
  &>ul {
    &>li {
      &:not(:last-child) {
        margin: 4px 0;
      }
      &>a {
        padding: 10px 20px;
      }
    }
  }
}


.router-link-exact-active {
  color: white;
}
</style>