export class Cell {
  position = { x: 0, y: 0 };

  constructor(position = { x: 0, y: 0 }) {
    this.position.x = position.x;
    this.position.y = position.y;
  }

  getPosition() {
    return this.position;
  }

  isNeighbor(cell) {
    const maxNeighborDistance = 1;

    return (
      this.getDistance(this.position.x, cell.getPosition().x) <=
        maxNeighborDistance &&
      this.getDistance(this.position.y, cell.getPosition().y) <=
        maxNeighborDistance
    );
  }

  getDistance(coordA, coordB) {
    return Math.abs(coordA - coordB);
  }

  countNeighbors(cells) {
    const otherCells = cells.filter((cell) => cell != this);
    const neighbors = otherCells.filter((cell) => this.isNeighbor(cell));
    return neighbors.length;
  }

  survive(quantityOfNeighbors) {
    return quantityOfNeighbors === 2 || quantityOfNeighbors === 3;
  }

  born(cells) {
    return this.countNeighbors(cells) === 3;
    return new Cell(position);
  }
}
