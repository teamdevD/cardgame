import Phaser, { Tilemaps } from "phaser";
import {Card} from './card/card';
import Deck from "./card/deck";
import { CardScene } from "./scenes/cardScene";
import Text = Phaser.GameObjects.Text;
import Texture = Phaser.Textures.Texture;
import Image = Phaser.GameObjects.Image;
import Zone = Phaser.GameObjects.Zone;


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


class Example extends Phaser.Scene
{

    private deck : Deck<BlackJackCard> = new Deck<BlackJackCard>(BlackJackCard);
    private atlasTexture: Texture | undefined;
    private cardScene: CardScene | undefined;

    constructor (){
        super();
        //this.examCardScene = scene;
    }

    preload (){
        this.cardScene = new CardScene(this);
        this.atlasTexture = this.textures.get("cards");
    }

    create ()
    {
        //const frames = this.textures.get('cards').getFrameNames();

        const cards = [];
        let card : BlackJackCard;
        //  Create 8 cards and push them into an array

        for (var i = 0; i < 8; i++){
            card = this.deck.drawOne();
            cards.push(this.add.sprite(0, 0, 'cards', card.getAtlasFrame()));
        }

        //  The cards are 140x190 in size

        //  Let's lay them out in a 4x2 grid, with 10px spacing between them

        Phaser.Actions.GridAlign(cards, {
            width: 4,
            height: 2,
            cellWidth: 150,
            cellHeight: 200,
            x: 100,
            y: 100
        });
    }
}




const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1600,
  height: 900,
  scene: Example,
};
new Phaser.Game(config);