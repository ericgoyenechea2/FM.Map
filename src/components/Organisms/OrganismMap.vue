<script lang="ts" setup>
import MoleculeSilueteMap from "../Molecules/MoleculeSilueteMap.vue";
import MoleculeRoom from "../Molecules/MoleculeRoom.vue";
import { Room, ShapePointCoord } from "../../types";

const silueteMap: ShapePointCoord[] = [
  { x: 17.2, y: 31.3 },
  { x: 12.7, y: 31.3 },
  { x: 12.7, y: 40.2 },
  { x: 15, y: 40.2 },
  { x: 15, y: 58.4 },
  { x: 11.1, y: 58.4 },
  { x: 11.1, y: 68.9 },
  { x: 16.6, y: 68.9 },
  { x: 16.8, y: 74.8 },
  { x: 23.5, y: 74.8 },
  { x: 23.5, y: 62.7 },
  { x: 33.1, y: 62.7 },
  { x: 33.1, y: 59 },
  { x: 35.2, y: 59 },
  { x: 35.2, y: 60.8 },
  { x: 41.4, y: 60.8 },
  { x: 41.4, y: 77.5 },
  { x: 57.7, y: 77.5 },
  { x: 57.7, y: 65.8 },
  { x: 59.6, y: 65.8 },
  { x: 59.6, y: 69.4 },
  { x: 69.4, y: 69.4 },
  { x: 69.4, y: 57.9 },
  { x: 67.9, y: 57.9 },
  { x: 67.9, y: 54.6 },
  { x: 69.4, y: 54.5 },
  { x: 69.4, y: 47.9 },
  { x: 65.2, y: 41.7 },
  { x: 65, y: 36.8 },
  { x: 66.6, y: 36.8 },
  { x: 66.6, y: 32.4 },
  { x: 64.5, y: 32.4 },
  { x: 64.3, y: 28.3 },
  { x: 67.8, y: 28.3 },
  { x: 70.2, y: 20.4 },
  { x: 70.2, y: 10.7 },
  { x: 58.7, y: 10.7 },
  { x: 58.7, y: 18.4 },
  { x: 42.4, y: 18.4 },
];

const rooms: Room[] = [
  {
    id: 1,
    coords: [
      { x: 11.1, y: 60 },
      { x: 33.1, y: 60 },
      { x: 33.1, y: 62.7 },
      { x: 23.5, y: 62.7 },
      { x: 23.5, y: 74.8 },
      { x: 16.8, y: 74.8 },
      { x: 16.6, y: 68.9 },
      { x: 11.1, y: 68.9 },
    ],
    backgroundColor: "#e1f6ff",
    lineColor: "none",
  },
  {
    id: 2,
    coords: [
      { x: 58.7, y: 10.7 },
      { x: 70.2, y: 10.7 },
      { x: 70.2, y: 20.4 },
      { x: 67.9, y: 28.2 },
      { x: 64.2, y: 28.2 },
      { x: 64.2, y: 24.3 },
      { x: 58.7, y: 24.3 },
    ],
    backgroundColor: "#e1f6ff",
    lineColor: "none",
  },
  {
    id: 3,
    coords: [
      { x: 35.2, y: 60.8 },
      { x: 35.2, y: 57.8 },
      { x: 44.8, y: 57.8 },
      { x: 44.8, y: 77.5 },
      { x: 41.4, y: 77.5 },
      { x: 41.4, y: 60.8 },
    ],
    backgroundColor: "#e1f6ff",
    lineColor: "none",
  },
  {
    id: 4,
    coords: [
      { x: 57.7, y: 77.5 },
      { x: 57.7, y: 57.8 },
      { x: 47.9, y: 57.8 },
      { x: 48, y: 77.5 },
    ],
    backgroundColor: "#e1f6ff",
    lineColor: "none",
  },
  {
    id: 4,
    coords: [
      { x: 65.2, y: 41.9 },
      { x: 59.6, y: 41.9 },
      { x: 59.6, y: 69.4 },
      { x: 69.4, y: 69.4 },
      { x: 69.4, y: 58 },
      { x: 67.9, y: 58 },
      { x: 68, y: 54.5 },
      { x: 69.4, y: 54.5 },
      { x: 69.4, y: 47.8 },
    ],
    backgroundColor: "#e1f6ff",
    lineColor: "none",
  },
  {
    id: 5,
    coords: [
      { x: 56.5, y: 48.3 },
      { x: 52.2, y: 48.3 },
      { x: 52.2, y: 34 },
      { x: 57.3, y: 34 },
      { x: 57.3, y: 37.9 },
      { x: 56.5, y: 37.9 },
    ],
    backgroundColor: "#e1f6ff",
    lineColor: "none",
  },
  {
    id: 5,
    coords: [
      { x: 12.7, y: 31.2 },
      { x: 12.7, y: 40.1 },
      { x: 28.1, y: 40.1 },
      { x: 28.1, y: 25.9 },
      { x: 17.3, y: 31.2 },
    ],
    backgroundColor: "#e1f6ff",
    lineColor: "none",
  },
  {
    id: 6,
    coords: [
      { x: 15, y: 40.5 },
      { x: 28.1, y: 40.5 },
      { x: 28.1, y: 58.4 },
      { x: 15, y: 58.4 },
    ],
    backgroundColor: "#e1f6ff",
    lineColor: "none",
  },
  {
    id: 7,
    coords: [
      { x: 58.4, y: 24.4 },
      { x: 58.4, y: 18.4 },
      { x: 46.2, y: 18.4 },
      { x: 46.2, y: 32.1 },
      { x: 50.5, y: 32.1 },
      { x: 50.5, y: 24.4 },
    ],
    backgroundColor: "#e1f6ff",
    lineColor: "none",
  },
  {
    id: 8,
    coords: [
      { x: 46, y: 18.4 },
      { x: 42.3, y: 18.4 },
      { x: 28.3, y: 25.7 },
      { x: 28.3, y: 32.1 },
      { x: 46, y: 32.1 },
    ],
    backgroundColor: "#e1f6ff",
    lineColor: "none",
  },
  {
    id: 9,
    coords: [
      { x: 31.9, y: 36.4 },
      { x: 38.4, y: 36.4 },
      { x: 38.4, y: 53 },
      { x: 31.9, y: 53 },
    ],
    backgroundColor: "#e1f6ff",
    lineColor: "none",
  },
  {
    id: 10,
    coords: [
      { x: 38.6, y: 36.4 },
      { x: 45.4, y: 36.4 },
      { x: 45.4, y: 53 },
      { x: 38.6, y: 53 },
    ],
    backgroundColor: "#e1f6ff",
    lineColor: "none",
  },
];
</script>
<template>
  <MoleculeSilueteMap
    :coords="silueteMap"
    lineColor="#dfdfec"
    backgroundColor="#f4f8fa"
  />
  <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="polygon-svg">
    <MoleculeRoom v-for="room in rooms" :room="room" />
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
