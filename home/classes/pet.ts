import { IPet } from '../interfaces/ipet'
import { IShow } from '../interfaces/ishow'
export class Pet implements IPet, IShow{
  name: string;
  sound: string;
  constructor(name: string, sound: string){
    this.name = name;
    this.sound = sound;
  }
  show(){
    return "Я "+this.name+". Маю звук - "+this.sound;
  }
}
