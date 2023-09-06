import { ExposesObject, SharedObject } from "@originjs/vite-plugin-federation";

const exposes: ExposesObject = {
  "./Map": "./src/Organisms/OrganismMap.vue",
};
const sharedExposed: SharedObject = {
  vue: {},
};
export { exposes, sharedExposed };
