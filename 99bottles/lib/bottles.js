import { downTo } from './helpers';

export class Bottles{

    song(){
        return this.verses(99,0)
    }

    verses(start, end){
        let result =""
        for(let i = start; i>end; i-- ){
            result += this.verse(i) + "\n" 
        }

        return result + this.verse(end)
    }

    verse(number){
        return this.firstLine(number) +
            this.secondLine(number) +
            this.thirdLine(number) +
            this.fourthLine(number-1)
    }

    firstLine(number){
        if(number === 0) return 'No more bottles of beer on the wall, '
        return `${this.paco(number)} on the wall, `
    }

    secondLine(number){
        if(number === 0) return 'no more bottles of beer.\n'
        return `${this.paco(number)}.\n` 
    }

    thirdLine(number){
        if(number === 0) return 'Go to the store and buy some more, '
        if(number === 1) return 'Take it down and pass it around, '
        return `Take one down and pass it around, `
    }

    fourthLine(number){
        if(number < 0) return '99 bottles of beer on the wall.\n'
        if(number === 0) return 'no more bottles of beer on the wall.\n'
        return `${this.paco(number)} on the wall.\n`
    }

    paco(number){
        return number === 1? 
            `${number} bottle of beer`:
            `${number} bottles of beer`
    }


}