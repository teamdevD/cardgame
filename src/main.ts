import Phaser from "phaser";
import {Card} from './card/card';
import Deck from "./card/deck";


class BlackJackCard extends Card{

    rankToNum: { [key: string]: number } = {
        "A": 10,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        "J": 10,
        "Q": 10,
        "K": 10
    };

    getRankNum(): number{
        if (this.rank in this.rankToNum){
            return this.rankToNum[this.rank];
        }
        else{
            throw new Error('Invalid rank');
        }
    };
}

const deck = new Deck<BlackJackCard>(BlackJackCard);

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1600,
  height: 900,
};

new Phaser.Game(config);