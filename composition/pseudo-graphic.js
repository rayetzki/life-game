import { createAgent } from "../life/agent.js";
import { exists } from "../utils.js";
import { LINE_BREAK, EMPTY_STRING, LIVE_AGENT } from "./const.js";

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