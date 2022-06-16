import { fromPseudoGraphics } from "./composition/pseudo-graphic.js";
import { Drawer } from "./dom/drawer.js";
import { GLIDER_GUN } from './life/population/patterns/gliderGun.js';
import { World } from "./life/world.js";

const population = fromPseudoGraphics(GLIDER_GUN);
const drawer = new Drawer(10);
const world = new World(drawer.rows, drawer.columns, population);

function liveGeneration() {
  drawer.reset();
  world.evolve();
  drawer.drawWorld(world);
}

(function gameLoop() {
  liveGeneration();
  setTimeout(() => window.requestAnimationFrame(gameLoop), 200);
})();