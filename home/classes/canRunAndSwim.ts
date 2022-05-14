import { Pet } from '../classes/pet'
import { IAviarySquare } from '../interfaces/iaviarySquare'
import { ILandSquare } from '../interfaces/ilandSquare'
import { IRun } from '../interfaces/irun'
import { ISwim } from '../interfaces/iswim'
export class CanRunAndSwim extends Pet implements IRun, ISwim, ILandSquare, IAviarySquare{
  run(){
    console.log("Я вмію бігати Ля-ля")
  }
  swim(){
    console.log("Я вмію плавати")
  }
  landSquare(x:number=5.9, y:number=9.9){
    return "Pозмір суші "+x+" на " + y + " метрів. Загальна площа м^2 - " + (x*y).toFixed(2);
  }
  aviarySquare(x:number=3, y:number=4.5) {
    return "Вольєри з високою огорожею та озером "+x+" на " + y + " метрів. Загальна площа м^2 - " + (x*y).toFixed(2);
  }
}
