import { Cell } from "./cell";

export function nextGeneration(cells) {
  // const spores ={'00':3}
  const cellsKeepsAlive = cells.filter((cell) => {
    const neightbors = cell.countNeighbors(cells);
    return cell.survive(neightbors);
  });

  const bornedCell = new Cell({ x: 0, y: 0 });

  return [...cellsKeepsAlive, bornedCell];
}
