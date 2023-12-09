import {Scene} from 'phaser';

export default class BrackJackScene extends Scene {

    constructor() {
        super({ key: 'BrackJack', active: false });
      }

    preload(){
      this.load.image("bg","assets/gameBg.png")
    }

    create(){
      this.add.image(800, 450, 'bg');
    }

    update(){

    }


}