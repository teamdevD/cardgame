import { Scene, GameObjects} from "phaser";
import  Button  from "./button";
export default class Dropdown extends GameObjects.Group{


    private dropdownList:GameObjects.Group;
    private mainButton:Button;
    private subButtons:Button[];

    constructor(scene:Scene,...subButtonLabel:string[]){
        super(scene)
        this.subButtons=subButtonLabel.map((label:string)=>{
            const subButton = new Button(label,scene,()=>{
                return "null"
            });
            return subButton
        })
        this.dropdownList=scene.add.group();
        this.dropdownList.addMultiple(this.subButtons);
        this.dropdownList.setVisible(true);

        this.mainButton = new Button(subButtonLabel[0],scene,()=>{
            this.dropdownList.toggleVisible();
            return "null"
        });
        this.dropdownList.setXY(this.mainButton.x, this.mainButton.y-100);

    }
}
