<script lang="ts" setup>
import { PropType } from "vue";
import { ShapePointCoord } from "../../types";
import AtomPolygon from "../Atoms/AtomPolygon.vue";
defineProps({
  coords: { type: Object as PropType<ShapePointCoord[]>, required: true },
  backgroundColor: { type: String, default: "#ffffff" },
  lineColor: { type: String, default: "black" },
});
</script>
<template>
  <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="polygon-svg">
    <AtomPolygon
      :coords="coords"
      :backgroundColor="backgroundColor"
      :lineColor="lineColor"
    />
  </svg>
</template>
<style lang="scss" scoped>
.polygon-svg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
