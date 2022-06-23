import { fromPseudoGraphics } from "./composition/pseudo-graphic.js";
import { Drawer } from "./dom/drawer.js";
import { GLIDER_GUN_P60 } from './life/population/patterns/gliderGunP60.js';
import { World } from "./life/world.js";

const population = fromPseudoGraphics(GLIDER_GUN_P60);
const drawer = new Drawer(10);
const world = new World(drawer.rows, drawer.columns, population);

function liveGeneration() {
  drawer.reset();
  world.evolve();
  drawer.drawWorld(world);
}

(function gameLoop() {
  liveGeneration();
  setTimeout(() => window.requestAnimationFrame(gameLoop), 60);
})();