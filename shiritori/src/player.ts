export default abstract class Player {
  name: string = ""

  public abstract next(): Player

  public static first(): Player {
    return new Uke()
  }

  toString(): string {
    return this.name
  }
}

class Uke extends Player {
  name: string = 'Uke'

  next() {
    return new Tori()
  }
}

class Tori extends Player {
  name: string = 'Tori'

  next() {
    return new Uke()
  }
}