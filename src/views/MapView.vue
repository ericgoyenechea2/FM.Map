<script lang="ts" setup>
import OrganismMap from "../components/Organisms/OrganismMap.vue";
</script>

<template>
  <div id="container-map">
    <OrganismMap />
  </div>
</template>

<style lang="scss" scoped>
#container-map {
  width: 100vw;
  height: 100vh;
  flex-flow: row;
  margin: auto;
  position: relative;
  display: flex;
  background-color: #f4f8fa;
}
</style>
