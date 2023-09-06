<script lang="ts" setup>
import OrganismFloor from "../Organisms/OrganismFloor.vue";
import { useMap } from "../../core/composables/useMap";
import MoleculeFloorsButton from "../Molecules/MoleculeFloorsButton.vue";
const { getFloors, getIndexFloorSelected } = useMap();
</script>
<template>
  <section>
    <div v-for="(floor, index) in getFloors">
      <Transition name="slide-fade">
        <OrganismFloor v-if="index == getIndexFloorSelected" :floor="floor" />
      </Transition>
    </div>
    <MoleculeFloorsButton
      class="list-button"
      :floor-number="getFloors.length"
    />
  </section>
</template>
<style lang="scss" scoped>
section {
  position: relative;
}
.list-button {
  position: absolute;
  top: 100px;
  right: 100px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-50px);
  opacity: 0.5;
}
</style>
