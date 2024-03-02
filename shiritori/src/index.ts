import Player from "./player"

export default class Shiritori {
  dictionary: Dictionary
  currentPlayer: Player
  lastCharacter: string | undefined

  constructor(tokens: Array<string>) {
    this.currentPlayer = Player.first()
    this.dictionary = new Dictionary(this.toWords(tokens))
    this.lastCharacter = undefined
  }

  nextPlay(): string {
    let answer = this.retrieveAnswer()

    if (answer.isIncorrect())
      return `${this.previousPlayer()} won`

    this.lastCharacter = answer.endsWith()
    const result = `${this.currentPlayer.toString()}: ${answer.toString()}`

    this.currentPlayer = this.currentPlayer.next()
    return result
  }

  private retrieveAnswer(): WordInterface {
    const firstPlay = !this.lastCharacter

    if (firstPlay) return this.randomWord()

    return this.getShiritori()
  }

  private randomWord(): WordInterface {
    return this.dictionary.randomWord()
  }

  private getShiritori(): WordInterface {
    return this.dictionary.findByStart(this.lastCharacter!)
  }

  private previousPlayer() {
    return this.currentPlayer.next().toString()
  }

  private toWords(words: Array<string>): Array<WordInterface> {
    return words.map(word => new Word(word))
  }
}

class Dictionary {
  words: Array<WordInterface>

  constructor(words: Array<WordInterface>) {
    this.words = words
  }

  randomWord(): WordInterface {
    return this.words[0]
  }

  findByStart(letter: string): WordInterface {
    let result = this.words.find(word => word.startsWith() === letter)

    if (!result) result = new NullWord()

    return result
  }
}

interface WordInterface {
  isIncorrect: () => boolean

  startsWith: () => string

  endsWith: () => string

  toString: () => string
}


class Word implements WordInterface {
  characters: string

  constructor(word: string) {
    this.characters = word
  }

  startsWith(): string {
    return this.characters[0]
  }

  endsWith(): string {
    return this.characters[this.characters.length - 1]
  }

  toString() {
    return this.characters
  }

  isIncorrect(): boolean {
    return false
  }
}

class NullWord implements WordInterface {
  startsWith(): string {
    return ""
  }

  endsWith(): string {
    return ""
  }

  toString() {
    return ""
  }

  isIncorrect(): boolean {
    return true
  }

}