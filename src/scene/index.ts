import {Scene} from 'phaser';
import Button from '../component/button';
import Dropdown from '../component/dropdown';

export default class IndexScene extends Scene {

    constructor(config: Phaser.Types.Scenes.SettingsConfig) {
        super(config);
      }

    preload(){
      this.load.image("bg","assets/indexBg.png")
    }

    create(){
      this.add.image(800, 450, 'bg');
      // const button = new Button("start Game",this,() => {
      //   console.log('game is started')
      //   return "button"
      // });
      const dropdown = new Dropdown(this,"aaaa","bbbbb","cccccc");
    }

    update(){

    }


}