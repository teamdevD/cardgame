import Card from './card';

// ゲームの定数
const GAME = {
  CARD: {
    SUITS: ['Spades', 'Clubs', 'Hearts', 'Diamonds'],
    RANKS: [
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

export default class Deck<T extends Card> {
  /**
   * カードデッキを表すクラス
   *const deck = new Deck<BlackJackCard>(BlackJackCard);
   みたいにすることでcardを継承したクラスを使ってdeckが作れます。(BlackJackCardはCardの子クラス)
   * deck.shuffle() でカードリストをランダム化します。
   * const card = deck.drawOne(); でカードを1枚引きます。
   */
  protected cards: Array<T> = [];

  protected availableSuits: Array<string> = [
    ...GAME.CARD.SUITS
  ];
  protected availableRanks: Array<string> = [
    ...GAME.CARD.RANKS
  ];

  constructor(classType: { new ( suit: string, rank: string): T}){
    this.resetDeck(classType);
  }

  /**
   * デッキをリセットします。
   */
  resetDeck(classType: { new ( suit: string, rank: string): T}): void {
    for (let suitIndex = 0; suitIndex < this.availableSuits.length; suitIndex += 1) {
      for (let rankIndex = 0; rankIndex < this.availableRanks.length; rankIndex += 1) {
        this.cards.push(
          new classType(this.availableSuits[suitIndex], this.availableRanks[rankIndex])
        );
      }
    }
  }
  showDeck():void{
    for (let i = 0; i< this.cards.length ; i++){
      console.log(this.cards[i].rank, this.cards[i].suit);
    }
 
  }
  /**
   * カードリストをシャッフルします。
   */
  shuffle(): void {
    const shuffledCards = this.cards.slice(); // 元の配列を変更せずにコピーを作成

    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }

    this.cards = shuffledCards;
  }

  /**
   * カードを1枚引きます。
   * @returns カードのインスタンスまたは undefined
   */
  drawOne(): Card | undefined {
    if (this.isEmpty()) {
      throw new Error('デッキにカードがありません。');
    }
    return this.cards.pop();
  }

  /**
   * デッキが空かどうかを確認します。
   * @returns デッキが空の場合は true、そうでない場合は false
   */
  isEmpty(): boolean {
    return this.cards.length === 0;
  }

  /**
   * デッキの残りのカード枚数を返します。
   * @returns デッキに残っているカードの枚数
   */
  getRemainingCardsCount(): number {
    return this.cards.length;
  }
}
