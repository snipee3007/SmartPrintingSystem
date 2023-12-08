<template>
  <div class="flex-col h-screen flex">
    <TopBar />
    <div class="flex">
      <SideBar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopBar from '../components/topbar.vue';
import SideBar from '../components/sidebar.vue';

export default {
  components: {
    TopBar,
    SideBar,
  },
};
</script>

<style>

</style>