<template>
  <div id="app">
    <!-- <v-home></v-home> -->
    <router-view>
    </router-view>
  </div>
</template>
<script>
import vHome from "./components/common/Home.vue";
export default {
  components: {
    vHome,
  },
};
</script>
<style>
@import "./assets/css/main.css";
@import "./assets/css/color-dark.css"; /*深色主题*/
/* @import "./assets/css/theme-green/color-green.css";   浅绿色主题 */
</style>
