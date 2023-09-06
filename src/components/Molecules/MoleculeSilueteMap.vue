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
  <AtomPolygon
    :coords="coords"
    :backgroundColor="backgroundColor"
    :lineColor="lineColor"
  />
</template>
<style lang="scss" scoped></style>
