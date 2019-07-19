<template>
  <el-tabs
    v-model="activeName"
    @tab-click="handleClick"
    style="background:white;"
    class="navigation"
    stretch
  >
    <el-tab-pane label="详情" name="first" class="navigation-item">
      <information></information>
    </el-tab-pane>
    <el-tab-pane label="须知" name="second" class="navigation-item">
      <attention></attention>
    </el-tab-pane>
    <el-tab-pane label="推荐" name="third" class="navigation-item">
      <recommend></recommend>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import information from "./information.vue";
import attention from "./attention.vue";
import recommend from "./recommend.vue";

export default {
  data() {
    return {
      activeName: "second"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {
    information,
    attention,
    recommend
  }
};
</script>
<style scoped>
</style>