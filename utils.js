import { SEPARATOR } from "./composition/const.js";
import { createAgent } from "./life/agent.js";

export function exists(char) {
  return !!char;
}

export function range(size) {
  return Array.from({ length: size }, (_, index) => index);
}

export function createCell(population, x, y, value = createAgent(x, y)) {
  const cell = population[`${x}${SEPARATOR}${y}`];
  if (cell) return;
  population[`${x}${SEPARATOR}${y}`] = value;
  return population;
}

// -90 degrees => matrix[j][m - 1 - i]
// +90 degrees  => matrix[n - 1 - j][i]
export function rotateMatrix(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const rotated = [];

  range(n).forEach((j) => {
    range(m).forEach((i) => {
      rotated[i] = rotated[i] ?? [];
      rotated[i][j] = matrix[j][m - 1 - i];
    });
  });

  return rotated;
}

export function toBits(str) {
  return str.split("").map(Number).reverse();
}