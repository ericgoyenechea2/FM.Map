<script setup lang="ts">
import { ShapePointCoord } from "../../types";
import { PropType } from "vue";
defineProps({
  coords: { type: Object as PropType<ShapePointCoord[]>, required: true },
  backgroundColor: { type: String, default: "#ffffff" },
  backgroundColorHover: { type: String, default: "#a6d0e1" },
  lineColor: { type: String, default: "black" },
});
function createShape(shape: ShapePointCoord[]): string {
  let points = "";
  for (const coord of shape) {
    points += `${coord.x},${coord.y} `;
  }
  return points;
}
</script>

<template>
  <polygon
    :points="createShape(coords)"
    class="polygon"
    @mouseover="$emit('overPoligon')"
    @mouseout="$emit('outPoligon')"
  ></polygon>
</template>

<style scoped lang="scss">
.polygon {
  fill: v-bind("`${backgroundColor}`");
  stroke: v-bind("lineColor");
  stroke-width: 0.2px;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  scale: 1.1;
  cursor: pointer;
  transition-duration: 0.5s;
  &:hover {
    fill: v-bind("`${backgroundColorHover}`");
  }
}
</style>
