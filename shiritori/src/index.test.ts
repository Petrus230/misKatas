import Shiritori from "./index"

describe('shiritori', () => {
  it('start Uke with a random word from the dictionary', () => {
    const words = ['allergic']
    const shiritori = new Shiritori(words)

    const result = shiritori.nextPlay()

    expect(result).toContain("Uke")
    expect(result).toContain("allergic")
  })

  it('Tori answers', () => {
    const words = ['allergic', 'cat', 'data', 'end', 'tongue']
    const shiritori = new Shiritori(words)
    shiritori.nextPlay()

    const result = shiritori.nextPlay()

    expect(result).toContain("Tori")
  })

  it('Tori answers with a shiritori word', () => {
    const words = ['allergic', 'cat', 'data', 'end', 'tongue']
    const shiritori = new Shiritori(words)
    shiritori.nextPlay()

    const result = shiritori.nextPlay()

    expect(result).toContain("cat")
  })

  it('player loses when cant return a shiritori word', () => {
    const words = ['allergic', 'cat', 'end']
    const shiritori = new Shiritori(words)
    shiritori.nextPlay()
    shiritori.nextPlay()

    const result = shiritori.nextPlay()

    expect(result).toContain("Tori won")
  })
})
