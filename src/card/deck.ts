import Card from './card';

//カード　デッキの定数
const GAME ={
  CARD: {
    SUIT_CHOICES: ['Spades', 'Clubs', 'Hearts', 'Diamonds'],
    RANK_CHOICES: [
      'A',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K'
    ],
    WIDTH: 140,
    HEIGHT: 190,
    FLIP_TIME: 800,
    ATLAS_KEY: 'cards',
    BACK_KEY: 'cardBack',
  },
  DECK: {
    POKER_HEIGHT: 600
  },
}

export default class Deck {
  protected cardList: Array<Card> = [];

  constructor() {
    const suitChoices: Array<string> = [
      ...GAME.CARD.SUIT_CHOICES
    ];
    const rankChoices: Array<string> = [
      ...GAME.CARD.RANK_CHOICES
    ];

    for (let s = 0; s < suitChoices.length; s += 1) {
      for (let r = 0; r < rankChoices.length; r += 1) {
        this.cardList.push(
          new Card(suitChoices[s], rankChoices[r])
        );
      }
    }
  }

  shuffle(): void {
    for (let i = 0; i < this.cardList.length; i += 1) {
      const randomIndex: number = Math.floor(
        Math.random() * this.cardList.length
      );
      const temp: Card = this.cardList[i];
      this.cardList[i] = this.cardList[randomIndex];
      this.cardList[randomIndex] = temp;
    }
  }

  drawOne(): Card | undefined {
    if (this.isEmpty()) {
      console.log(
        'no more cards left. refresh to start new game.'
      );
      return undefined;
    }
    return this.cardList.pop();
  }

  isEmpty(): boolean {
    return this.cardList.length === 0;
  }

  getDeckSize(): number {
    return this.cardList.length;
  }
}