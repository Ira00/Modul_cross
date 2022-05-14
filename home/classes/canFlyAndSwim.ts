import { Pet } from '../classes/pet'
import { IAviarySquare } from '../interfaces/iaviarySquare'
import { IFly } from '../interfaces/ifly'
import { ILandSquare } from '../interfaces/ilandSquare'
import { ISwim } from '../interfaces/iswim'
export class CanFlyAndSwim extends Pet implements IFly, ISwim,ILandSquare, IAviarySquare{
  fly(){
    console.log("Я вмію літати")
  }
  swim(){
    console.log("Я вмію плавати")
  }
  landSquare(x:number=5, y:number=7){
    return "Pозмір суші "+x+" на " + y + " метрів. Загальна площа м^2 - " + (x*y).toFixed(2);
  }
  aviarySquare(x:number=2, y:number=4) {
    return "Вольєри з сіткою та озером "+x+" на " + y + " метрів. Загальна площа м^2 - " + (x*y).toFixed(2);
  }
}
