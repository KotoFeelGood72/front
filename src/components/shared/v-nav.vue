<template>
  <nav>
    <ul>
      <li v-for="item in nav.menu" :key="item.id">
        <router-link :to="item.link">
        <global-icon :icon="item.icon"/>
        <p>{{ item.name }}</p>
        </router-link>
          <ul v-if="item.submenu">
            <li v-for="item in item.submenu" :key="item.id">
              <router-link :to="item.link">{{ item.name }}</router-link>
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
        nav
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>