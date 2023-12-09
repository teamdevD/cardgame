import {Scene} from 'phaser';
import Button from '../component/button';
import Dropdown from '../component/dropdown';

export default class IndexScene extends Scene {

    constructor(config: Phaser.Types.Scenes.SettingsConfig) {
        super(config);
      }

    preload(){
      this.load.image("indexBg","assets/indexBg.png")
    }

    create(){
      this.add.image(800, 450, 'indexBg');
      const LevelOptions=["1","2","3"]
      this.createDropdown(LevelOptions,800,350,"levelDropdown","select Level")
      const GameOptions=["BrackJack","war"]
      this.createDropdown(GameOptions,800,450,"gameDropdown","select Game")
      const button = new Button("start Game",this,() => {
        let dropdown1=document.getElementById("gameDropdown") as HTMLSelectElement
          let curroption=dropdown1[dropdown1.selectedIndex] as HTMLOptionElement
          this.scene.start(curroption.value)
          return "button"
      });
    }

    update(){

    }

    createDropdown(options:string[],x:number,y:number,id:string,placeholder:string){
      let dropdown=document.createElement("select")
      dropdown.id=id
      let firstOption=document.createElement("option")
      firstOption.innerHTML=`${placeholder}`
      firstOption.selected=true
      firstOption.hidden=true
      dropdown.appendChild(firstOption)
      options.forEach((option)=>{
        let optionEle=document.createElement("option")
        optionEle.innerHTML=option
        optionEle.value=option
        dropdown.appendChild(optionEle)
      })
      let div=document.createElement("div")
      div.className="select is-rounded is-link is-dark is-large"
      div.appendChild(dropdown)
      this.add.dom(x,y,div)
    }

}