
import Phaser from "phaser";

export const atlasText:string = "cards";
export const backText:string = "back";

export  class CardScene extends Phaser.Scene {
    constructor(scene: Phaser.Scene) {

        scene.load.atlas(atlasText, 'assets/atlas/cards.png', 'assets/atlas/cards.json');
        super({key: "cardScene"},
        );
    }

    preload(): void{
        //カード画像の読み込み
    }

    create(){

    }

}