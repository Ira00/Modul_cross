import { Component } from '@angular/core';
import { Pet } from '../home/classes/pet'
import { CanFlyAndSwim } from '../home/classes/canFlyAndSwim'
import { CanOnlySwim } from '../home/classes/canOnlySwim'
import { CanRunAndSwim } from '../home/classes/canRunAndSwim'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pets1:CanFlyAndSwim[];
  pets2:CanOnlySwim[];
  pets3:CanRunAndSwim[];
  landSquare1:number;
  aviarySquare1:number;
  totalSquare1:number;
  aviarySquare2:number;
  landSquare3:number;
  aviarySquare3:number;
  totalSquare3:number;
  totalSquare:number;
  constructor() {}
  pet1 = [['Качка', 'Кря-Кря'],['Гуска', 'Га-га'],['Лебідь', 'Ґу-ґу']];
  pet2 = [['Пінгвін', 'Круруру']];
  pet3 = [['Ківі', 'Віа-віа']];
  getRandomInt(max) {
    return Math.floor(Math.random()*Math.floor(max))
  }
  loopPush(listName, petList, petClass, count){
    for (let i=0; i<count; i++){
      let random = this.getRandomInt(petList.length)
      listName.push(new petClass(petList[random][0],petList[random][1]))
    }
    return listName
  }

  ras(count1:number, count2:number, count3:number){
    this.pets1 = new Array();
    this.pets2 = new Array();
    this.pets3 = new Array();
    this.landSquare1 = 0;
    this.aviarySquare1 = 0;
    this.aviarySquare2 = 0;
    this.landSquare3 = 0;
    this.aviarySquare3 = 0;
    this.loopPush(this.pets1, this.pet1, CanFlyAndSwim, count1);
    for (let i=0; i<count1; i++){
      console.log(this.pets1[i]);
      this.pets1[i].fly();
      this.pets1[i].swim();
      let list = this.pets1[i].landSquare().split(' ');
      this.landSquare1 += parseFloat(list[list.length - 1])
      let new_list = this.pets1[i].aviarySquare().split(' ');
      this.aviarySquare1 += parseFloat(new_list[new_list.length - 1])
    }
    this.totalSquare1 = this.landSquare1 + this.aviarySquare1;
    this.loopPush(this.pets2, this.pet2, CanOnlySwim, count2);
    for (let i=0; i<count2; i++){
      console.log(this.pets2[i]);
      this.pets2[i].swim();
      let new_list = this.pets2[i].aviarySquare().split(' ');
      this.aviarySquare2 += parseFloat(new_list[new_list.length - 1])
    }

    this.loopPush(this.pets3, this.pet3, CanRunAndSwim, count3);
    for (let i=0; i<count3; i++){
      console.log(this.pets3[i]);
      this.pets3[i].run();
      this.pets3[i].swim();
      let list = this.pets3[i].landSquare().split(' ');
      this.landSquare3 += parseFloat(list[list.length - 1])
      let new_list = this.pets3[i].aviarySquare().split(' ');
      this.aviarySquare3 += parseFloat(new_list[new_list.length - 1])
    }
    let a;
    this.totalSquare3 = this.landSquare3 + this.aviarySquare3;
    this.totalSquare = this.totalSquare1 + this.totalSquare3 + this.aviarySquare2;
  }
}
