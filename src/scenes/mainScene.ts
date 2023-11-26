import {CardScene, atlasText, backText} from "./cardScene";
import {GAME} from "../constants/game";
import {Card} from "../card/card";
import Deck from "../card/deck";
import Text = Phaser.GameObjects.Text;
import Texture = Phaser.Textures.Texture;
import Image = Phaser.GameObjects.Image;
/*書きかけの項目です */

import Phaser from "phaser";

class BlackJackCard extends Card{

    rankToNum: { [key: string]: number } = {
        "Ace": 10,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        "Jack": 10,
        "Queen": 10,
        "King": 10
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


export class BlackJackScene extends Phaser.Scene{
    deck : Deck<BlackJackCard> = new Deck<BlackJackCard>(BlackJackCard);
    cardScene: CardScene = new CardScene(this);

    create(){
        // deckをシャッフル
        this.deck.shuffle()
        const frames = this.cardScene.textures.get(atlasText).getFrameNames();

    }

}


const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#222288',
    dom: {
        createContainer: true
    },
    scene: BlackJackScene
};

const game = new Phaser.Game(config);
