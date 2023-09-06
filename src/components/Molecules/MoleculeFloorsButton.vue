<script lang="ts" setup>
import { PropType } from "vue";
import { useMap } from "../../core/composables/useMap";
defineProps({
  floorNumber: { type: Number, required: true },
});
const { changeFloor, getIndexRoomSelected } = useMap();
</script>
<template>
  <section>
    <button
      :class="{ active: index - 1 == getIndexRoomSelected }"
      @click="changeFloor(index - 1)"
      v-for="index in floorNumber"
    >
      {{ index }}
    </button>
  </section>
</template>
<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
}
button {
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid #008cba;
}
.active {
  background-color: #008cba;
  color: white;
}
button:hover {
  background-color: #008cba;
  color: white;
}
</style>
