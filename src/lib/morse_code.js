function morse() {
  return {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
    0: '-----',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
  };
}

class MorseCode {
  constructor(letter) {
    this.letter = letter.toLowerCase();
    this.morse = morse();
  }

  getLetterCode() {
    if (this.morse[this.letter] === undefined) return [];
    const code = this.morse[this.letter].split('');
    return code.map((value) => {
      if (value === '.') {
        return 'dot';
      }
      return 'dash';
    });
  }
}

export default MorseCode;
