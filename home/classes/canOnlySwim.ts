import { Pet } from '../classes/pet'
import { IAviarySquare } from '../interfaces/iaviarySquare'
import { ISwim } from '../interfaces/iswim'
export class CanOnlySwim extends Pet implements ISwim, IAviarySquare{
  swim(){
    console.log("Я вмію плавати краще всіх")
  }
  aviarySquare(x:number=5, y:number=6) {
    return "Вольєри з озером розмір "+ x +" на " + y + " метрів озеро глибиною не менше за 3 метри. Не забудь, що я люблю глибоке озерце, не економ на мені) Загальна площа м^2 - " + (x*y).toFixed(2);
  }
}
