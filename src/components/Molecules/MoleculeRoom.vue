<script lang="ts" setup>
import { PropType, ref } from "vue";
import { Room } from "../../types";
import AtomPolygon from "../Atoms/AtomPolygon.vue";
import { useMap } from "../../core/composables/useMap";
defineProps({
  room: { type: Object as PropType<Room>, required: true },
});
const { activeRoom } = useMap();
const hoverPolygon = ref<boolean>(false);
</script>
<template>
  <AtomPolygon
    @click="activeRoom(room.id)"
    @overPoligon="hoverPolygon = true"
    @mouseout="hoverPolygon = false"
    :id="room.id"
    :active="room.active"
    :coords="room.coords"
    :backgroundColor="!hoverPolygon ? room.backgroundColor : '#000000'"
    :lineColor="room.lineColor"
  />
</template>
<style lang="scss" scoped></style>
