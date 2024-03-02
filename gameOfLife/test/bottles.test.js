import { Cell } from "../lib/cell";
import { nextGeneration } from "../lib/gameOfLife";

describe("Game of life", () => {
  test("dies when you are alone", () => {
    const position = { x: 0, y: 0 };
    const cellA = new Cell(position);
    const cells = [cellA];

    const result = nextGeneration(cells);

    expect(result.length).toEqual(0);
  });

  test("some cells dies in the crow", () => {
    const position = { x: 0, y: 0 };
    const position2 = { x: 0, y: 1 };
    const position3 = { x: 0, y: 2 };
    const cellA = new Cell(position);
    const cellB = new Cell(position2);
    const cellC = new Cell(position3);
    const cells = [cellA, cellB, cellC];

    const result = nextGeneration(cells);

    expect(result.length).toEqual(1);
  });

  test("creates live when an empty space has 3 surrounding", () => {
    const position = { x: 1, y: 0 };
    const position2 = { x: 0, y: 1 };
    const position3 = { x: 1, y: 0 };
    const cellA = new Cell(position);
    const cellB = new Cell(position2);
    const cellC = new Cell(position3);
    const cells = [cellA, cellB, cellC];

    const result = nextGeneration(cells);

    expect(cellAliveInPosition({ x: 0, y: 0 }, result)).toBeDefined();

    expect(
      result.filter((cell) => {
        return cell.getPosition().x === 0 && cell.getPosition().y === 0;
      })
    ).toHaveLength(1);
  });

  describe("a cell", () => {
    describe("life", () => {
      test("continues when has two neighbors", () => {
        const neighborsNumber = 2;
        const cell = new Cell();

        const result = cell.survive(neighborsNumber);

        expect(result).toEqual(true);
      });

      test("continues when has 3 neighbors", () => {
        const neighborsNumber = 3;
        const cell = new Cell();

        const result = cell.survive(neighborsNumber);

        expect(result).toEqual(true);
      });

      test("stops when has not 2 or 3 neighbors", () => {
        const neighborsNumber = 1;
        const cell = new Cell();

        const result = cell.survive(neighborsNumber);

        expect(result).toEqual(false);
      });
    });
    test("knows his position", () => {
      const position = {
        x: 1,
        y: 1,
      };
      const cell = new Cell(position);

      const result = cell.getPosition();

      expect(result).toEqual({ x: 1, y: 1 });
    });

    test("knows when a cell is a neighbor in one dimension", () => {
      const position = { x: 0, y: 1 };
      const position2 = { x: 1, y: 1 };
      const cellA = new Cell(position);
      const cellB = new Cell(position2);

      const result = cellA.isNeighbor(cellB);

      expect(result).toEqual(true);
    });

    test("knows when a cell is a neighbor in two dimension", () => {
      const position = { x: 0, y: 0 };
      const position2 = { x: 1, y: 1 };
      const cellA = new Cell(position);
      const cellB = new Cell(position2);

      const result = cellA.isNeighbor(cellB);

      expect(result).toEqual(true);
    });

    test("returns his neighbors", () => {
      const position = { x: 0, y: 0 };
      const position2 = { x: 1, y: 1 };
      const position3 = { x: 0, y: 1 };
      const position4 = { x: 5, y: 5 };
      const cellA = new Cell(position);
      const cellB = new Cell(position2);
      const cellC = new Cell(position3);
      const cellD = new Cell(position4);
      const cells = [cellA, cellB, cellC, cellD];

      const result = cellA.countNeighbors(cells);

      expect(result).toEqual(2);
    });
  });
});

const cellAliveInPosition = (position, cells) => {
  const myCell = cells.find((cell) => {
    return cell.getPosition().x === 0 && cell.getPosition().y === 0;
  });
  return myCell;
};
