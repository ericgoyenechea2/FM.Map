<script lang="ts" setup>
import { PropType, ref } from "vue";
import { Room } from "../../types";
import AtomPolygon from "../Atoms/AtomPolygon.vue";
defineProps({
  room: { type: Object as PropType<Room>, required: true },
});
const hoverPolygon = ref<boolean>(false);
</script>
<template>
  <AtomPolygon
    @overPoligon="hoverPolygon = true"
    @mouseout="hoverPolygon = false"
    :id="room.id"
    :coords="room.coords"
    :backgroundColor="!hoverPolygon ? room.backgroundColor : '#000000'"
    :lineColor="room.lineColor"
  />
</template>
<style lang="scss" scoped></style>
