import Phaser from "phaser";
import IndexScene  from "./scene/index";
import BrackJackScene from "./scene/game";


const scale: Phaser.Types.Core.ScaleConfig = {
  mode: Phaser.Scale.FIT,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  width: 1600,
  height: 900
};

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  scale: scale,
  scene: [IndexScene,BrackJackScene],
};

new Phaser.Game(config);