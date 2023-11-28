import { Scene,GameObjects } from "phaser";

/**
 * Usage
 * const button = new Button(this,() => console.log());
 * button.changeBgColor("#FF0000")
*/
export default class Button extends GameObjects.Text{

    private button:Phaser.GameObjects.Text;
    private backgroundColor:string;
    private fontSize:number;
    x: number;
    y: number;

    constructor(label:string,scene:Scene,callback:(()=>string)){
        super(scene, 800, 550, label,{fontSize:44});
        this.x=800;
        this.y=550
        this.backgroundColor='#111'
        this.fontSize=44

        this.button=scene.add.text(this.x,this.y,label,{fontSize:this.fontSize})
        .setOrigin(0.5)
        .setPadding(20)
        .setInteractive({ useHandCursor: true })
        .setStyle({backgroundColor: this.backgroundColor})
        .on('pointerdown', () => callback())
        .on('pointerover', () => this.button.setStyle({ fill: '#000' }))
        .on('pointerout', () => this.button.setStyle({ fill: '#FFF' }));
    }

    changeBgColor(bgColor:string){
        this.button.setStyle({backgroundColor: bgColor})
    }
    // 値は0~1の範囲で指定します。初期値は0.5で真ん中に表示されるようになっています。
    changePosition(x:number=800,y?:number){
        this.button.setOrigin(x,y)
    }

    changeLabel(label:string){
        this.button.setText(label)
    }

    changeFontsize(fontSize:number){
        this.button.setFontSize(fontSize)
    }
}