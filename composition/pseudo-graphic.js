import { createAgent } from "../life/agent.js";
import { exists } from "../utils.js";

export const LINE_BREAK = "\n";
export const LIVE_AGENT = "O";
export const EMPTY_STRING = "";

export function fromPseudoGraphics(source) {
  return source
    .split(LINE_BREAK)
    .filter(exists)
    .reduce((population, row, j) => {
      const characters = row.split(EMPTY_STRING);

      characters.forEach((character, i) => {
        if (character !== LIVE_AGENT) return population;
        population[`${i}:${j}`] = createAgent(i, j);
      });

      return population;
    }, {});
}