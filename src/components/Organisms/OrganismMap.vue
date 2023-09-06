<script lang="ts" setup>
import MoleculeSilueteMap from "../Molecules/MoleculeSilueteMap.vue";
import MoleculeRoom from "../Molecules/MoleculeRoom.vue";
import { Room, ShapePointCoord } from "../../types";

const silueteMap: ShapePointCoord[] = [
  { x: 17.2, y: 31.3 },
  { x: 12.7, y: 31.1 },
  { x: 13.4, y: 40.2 },
  { x: 15, y: 39.5 },
  { x: 15.6, y: 58.4 },
  { x: 11.1, y: 57.9 },
  { x: 11.1, y: 68.9 },
  { x: 16.6, y: 68.7 },
  { x: 16.8, y: 74.8 },
  { x: 23.5, y: 74.2 },
  { x: 23.5, y: 62.7 },
  { x: 32.9, y: 62.7 },
  { x: 33.1, y: 59 },
  { x: 34.8, y: 59 },
  { x: 35.1, y: 60.8 },
  { x: 41.1, y: 60.8 },
  { x: 41.4, y: 77.5 },
  { x: 57.7, y: 75.7 },
  { x: 56.8, y: 65.7 },
  { x: 59.3, y: 65.8 },
  { x: 59.6, y: 69.4 },
  { x: 69.5, y: 69.3 },
  { x: 69.4, y: 57.9 },
  { x: 67.9, y: 57.9 },
  { x: 67.9, y: 54.6 },
  { x: 69.4, y: 54.5 },
  { x: 69.3, y: 47.9 },
  { x: 65.2, y: 41.7 },
  { x: 65, y: 36.8 },
  { x: 66.6, y: 36.6 },
  { x: 66.3, y: 32.4 },
  { x: 64.5, y: 32.1 },
  { x: 64.3, y: 28.3 },
  { x: 67.8, y: 27.7 },
  { x: 70.3, y: 20.4 },
  { x: 70.2, y: 9.7 },
  { x: 58.7, y: 10.7 },
  { x: 58.6, y: 18 },
  { x: 42.4, y: 18.4 },
];

const rooms: Room[] = [
  {
    id: 1,
    coords: [
      { x: 11.2, y: 60 },
      { x: 33, y: 59.3 },
      { x: 32.9, y: 62.3 },
      { x: 23.8, y: 62.4 },
      { x: 23.4, y: 73.4 },
      { x: 16.9, y: 74.2 },
      { x: 16.7, y: 68.3 },
      { x: 11.2, y: 68.4 },
    ],
    backgroundColor: "cyan",
    lineColor: "white",
  },
  {
    id: 2,
    coords: [
      { x: 58.7, y: 10.6 },
      { x: 70, y: 9.6 },
      { x: 70.3, y: 20.2 },
      { x: 67.9, y: 27.3 },
      { x: 64.2, y: 28 },
      { x: 63.9, y: 24.3 },
      { x: 58.9, y: 24.1 },
    ],
    backgroundColor: "cyan",
    lineColor: "white",
  },
];
</script>
<template>
  <MoleculeSilueteMap
    :coords="silueteMap"
    backgroundColor="red"
    lineColor="black"
  />
  <MoleculeRoom v-for="room in rooms" :room="room" />
</template>
<style lang="scss" scoped></style>
