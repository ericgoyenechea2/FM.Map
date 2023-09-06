<script lang="ts" setup>
import OrganismFloor from "../Organisms/OrganismFloor.vue";
import { Floor } from "../../types";
import { ref } from "vue";

const floors: Floor[] = [
  {
    silueteMapCoord: [
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
    ],
    rooms: [
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
        coords: [
          { x: 38.6, y: 36.4 },
          { x: 45.4, y: 36.4 },
          { x: 45.4, y: 53 },
          { x: 38.6, y: 53 },
        ],
        backgroundColor: "#e1f6ff",
        lineColor: "none",
      },
    ],
  },
  {
    silueteMapCoord: [
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
    ],
    rooms: [
      {
        id: 0,

        coords: [
          { x: 59.7, y: 69.2 },

          { x: 59.7, y: 69.1 },

          { x: 69.3, y: 69.1 },

          { x: 69.2, y: 58.1 },

          { x: 59.8, y: 57.8 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },

      {
        id: 1,

        coords: [
          { x: 16.6, y: 68.8 },

          { x: 16.6, y: 68.8 },

          { x: 16.5, y: 58.7 },

          { x: 11.2, y: 58.7 },

          { x: 11.2, y: 68.8 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },

      {
        id: 2,

        coords: [
          { x: 16.9, y: 74.7 },

          { x: 16.9, y: 58.6 },

          { x: 23.5, y: 58.6 },

          { x: 23.5, y: 74.7 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },

      {
        id: 3,

        coords: [
          { x: 64.2, y: 28.2 },

          { x: 64.3, y: 10.8 },

          { x: 70, y: 10.8 },

          { x: 70.1, y: 20.5 },

          { x: 67.8, y: 28.1 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },

      {
        id: 4,

        coords: [
          { x: 58.9, y: 10.6 },

          { x: 58.9, y: 28.2 },

          { x: 63.9, y: 28.2 },

          { x: 64.1, y: 10.8 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },

      {
        id: 5,

        coords: [
          { x: 58.9, y: 10.8 },

          { x: 58.9, y: 28.2 },

          { x: 63.9, y: 28.2 },

          { x: 63.9, y: 10.8 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },

      {
        id: 6,

        coords: [
          { x: 41.5, y: 61 },

          { x: 41.5, y: 77.4 },

          { x: 49.6, y: 77.4 },

          { x: 49.6, y: 61 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },

      {
        id: 7,

        coords: [
          { x: 49.8, y: 61 },

          { x: 49.8, y: 77.4 },

          { x: 57.6, y: 77.4 },

          { x: 57.6, y: 61 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },

      {
        id: 8,

        coords: [
          { x: 65.4, y: 41.8 },

          { x: 65.4, y: 57.9 },

          { x: 67.9, y: 57.9 },

          { x: 67.9, y: 54.6 },

          { x: 69.3, y: 54.4 },

          { x: 69.3, y: 47.8 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },

      {
        id: 9,

        coords: [
          { x: 12.9, y: 40 },

          { x: 23.5, y: 40 },

          { x: 23.5, y: 28.2 },

          { x: 17.3, y: 31.4 },

          { x: 12.9, y: 31.4 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },

      {
        id: 10,

        coords: [
          { x: 50.1, y: 57.8 },

          { x: 45.8, y: 57.8 },

          { x: 45.8, y: 50 },

          { x: 50.1, y: 50 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },

      {
        id: 11,

        coords: [
          { x: 53.6, y: 57.8 },

          { x: 50.2, y: 57.8 },

          { x: 50.2, y: 50 },

          { x: 53.6, y: 50 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },

      {
        id: 12,

        coords: [
          { x: 45.6, y: 57.8 },

          { x: 41.6, y: 57.8 },

          { x: 41.6, y: 50 },

          { x: 45.6, y: 50 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },

      {
        id: 13,

        coords: [
          { x: 57.7, y: 57.8 },

          { x: 53.8, y: 57.8 },

          { x: 53.8, y: 50 },

          { x: 57.7, y: 50 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },

      {
        id: 14,

        coords: [
          { x: 41.3, y: 57.8 },

          { x: 37, y: 57.8 },

          { x: 37, y: 50 },

          { x: 41.3, y: 50 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },

      {
        id: 15,

        coords: [
          { x: 59.7, y: 57.5 },

          { x: 59.7, y: 42 },

          { x: 65.1, y: 42 },

          { x: 65.1, y: 57.5 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },

      {
        id: 16,

        coords: [
          { x: 41.2, y: 57.8 },

          { x: 37, y: 57.8 },

          { x: 37, y: 50 },

          { x: 41.2, y: 50 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },

      {
        id: 17,

        coords: [
          { x: 15.1, y: 40.2 },

          { x: 23.5, y: 40.2 },

          { x: 23.5, y: 55.7 },

          { x: 15.1, y: 55.7 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },

      {
        id: 18,

        coords: [
          { x: 26, y: 55.6 },

          { x: 36.8, y: 55.6 },

          { x: 36.8, y: 49.5 },

          { x: 45.7, y: 49.5 },

          { x: 45.7, y: 40 },

          { x: 26, y: 40 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },

      {
        id: 19,

        coords: [
          { x: 58.6, y: 18.5 },

          { x: 46.8, y: 18.5 },

          { x: 46.8, y: 31.8 },

          { x: 50.2, y: 31.8 },

          { x: 50.2, y: 23.1 },

          { x: 58.6, y: 23.1 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },

      {
        id: 20,

        coords: [
          { x: 57.8, y: 32.3 },

          { x: 52.7, y: 32.3 },

          { x: 52.7, y: 46.5 },

          { x: 56.5, y: 46.5 },

          { x: 56.5, y: 36.3 },

          { x: 57.8, y: 36.3 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },

      {
        id: 20,

        coords: [
          { x: 46.3, y: 31.5 },

          { x: 46.3, y: 18.5 },

          { x: 42.4, y: 18.5 },

          { x: 28.6, y: 25.5 },

          { x: 28.6, y: 31.5 },
        ],

        backgroundColor: "#e1f6ff",

        lineColor: "none",
      },
    ],
  },
];

const indexRoomSelected = ref<number>(0);

function changeFloor() {
  indexRoomSelected.value === floors.length - 1
    ? (indexRoomSelected.value = 0)
    : indexRoomSelected.value++;
}
</script>
<template>
  <section>
    <div v-for="(floor, index) in floors">
      <Transition name="slide-fade">
        <OrganismFloor v-if="index == indexRoomSelected" :floor="floor" />
      </Transition>
    </div>
    <button @click="changeFloor">Change floor</button>
  </section>
</template>
<style lang="scss" scoped>
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
