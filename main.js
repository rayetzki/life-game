import { Drawer } from "./dom/drawer.js";
import { World } from "./life/world.js";

const drawer = new Drawer(10);
const world = new World(30, 40);

function liveGeneration() {
  drawer.reset();
  world.evolve();
  drawer.drawGrid();
  drawer.drawWorld(world);
}

(function gameLoop() {
  liveGeneration();
  setTimeout(() => window.requestAnimationFrame(gameLoop), 1000);
})();