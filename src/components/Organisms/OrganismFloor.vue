<script lang="ts" setup>
import MoleculeSilueteMap from "../Molecules/MoleculeSilueteMap.vue";
import MoleculeRoom from "../Molecules/MoleculeRoom.vue";
import { Room, ShapePointCoord, Floor } from "../../types";
import { PropType } from "vue";
defineProps({
  floor: { type: Object as PropType<Floor>, required: true },
});
</script>
<template>
  <section class="floor">
    <MoleculeSilueteMap
      :coords="floor.silueteMapCoord"
      lineColor="#dfdfec"
      backgroundColor="#f4f8fa"
    />
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="polygon-svg">
      <MoleculeRoom v-for="room in floor.rooms" :room="room" />
    </svg>
  </section>
</template>
<style lang="scss" scoped>
.floor {
  position: relative;
  width: 1500px;
  height: 1000px;
}
.polygon-svg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
