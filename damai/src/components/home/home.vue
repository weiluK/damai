<template>
    <div>
        <hometop></hometop>
        <banner></banner>
        <homelist></homelist>
        <joinnow></joinnow>
        <hof></hof>
        <show></show>
        <more></more>
    </div>
</template>

<script>

import hometop from "./hometop.vue";
import homelist from "./homeList.vue";
import banner from "./banner.vue";
import joinnow from "./joinNow.vue";
import hof from "./hof.vue";
import show from "./show.vue";
import more from "./more.vue";


export default {
    components: {
    banner,
    homelist,
    joinnow,
    hof,
    show,
    more,
    hometop,
  }
}
</script>

<style scoped>
    *{
    background: white;
    }
</style>
