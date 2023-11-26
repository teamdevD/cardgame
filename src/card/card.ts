export abstract class Card {
    /**
     * カードクラス
     * @param suit スート（マーク）
     * @param rank ランク（A, 1, 2, ..., J, Q, K）
     * @example
     * const card = new Card('Hearts', 'A');
     * card.faceDown = true; // カードを裏向きに設定
     * const frame = card.getAtlasFrame(); // カードのフレーム名を取得
     * const value = card.getRankNumber('blackjack'); // カードの評価値を取得
     */
    protected suit: string;
    protected rank: string;
    protected faceDown = false;

    constructor(suit: string, rank: string) {
        this.suit = suit;
        this.rank = rank;
    }

    /**
     * カードのスート（マーク）を取得します。
     */
    getSuit(): string {
        return this.suit;
    }

    /**
     * カードのランク（数字またはA,J,Q,K）を取得します。
     */
    getRank(): string {
        return this.rank;
    }

    /**
     * カードを表向きまたは裏向きに設定します。
     */
    setFaceDown(faceDown: boolean): void {
        this.faceDown = faceDown;
    }

    /**
     * カードが表向きかどうかを示す値を取得します。
     */
    getFaceDown(): boolean {
        return this.faceDown;
    }

    /**
     * カードのアトラスフレーム名を取得します。
     * 表向きの場合はカードのフレーム名、裏向きの場合は空の文字列を返します。
     */
    getAtlasFrame(): string {
        return !this.faceDown
            ? `card-${this.suit}-${this.rank}.png`
            : '';
    }

    /**
     * カードの評価値を取得します。
     * @param gameType ゲームタイプ（'blackjack'など）
     * @returns カードの評価値
     */
    abstract getRankNum(): number;
}
