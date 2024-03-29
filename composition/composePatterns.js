import { createAgent } from "../life/agent.js";
import { SEPARATOR } from './const.js';

export function composePatterns(composites) {
  return composites.reduce((population, composite) => {
    if (!composite) return population;

    const { pattern, offset = {} } = composite;
    const { x: offsetX = 0, y: offsetY = 0 } = offset;

    Object.entries(pattern).forEach(([key, _]) => {
      const coords = key.split(SEPARATOR).map(Number);
      const [x, y] = coords;

      const nextCoords = [x + offsetX, y + offsetY];
      const nextKey = nextCoords.join(SEPARATOR);
      const nextValue = createAgent(...nextCoords);

      population[nextKey] = nextValue;
    });

    return population;
  }, {});
};