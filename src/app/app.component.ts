import { Component, OnInit } from '@angular/core';
import { IUnit } from './interfaces/unit.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  units: IUnit[] = [];

  ngOnInit() {
    const unit1 = { identifier: 'abc1', photoUrl: 'https://picsum.photos/200/200/?image=567', name: 'Unit 1', alias: 'unit1' } as IUnit;
    const unit2 = { identifier: 'abc2', photoUrl: '', name: 'Unit 2', alias: 'unit2' } as IUnit;
    const unit3 = { identifier: 'abc3', photoUrl: 'https://picsum.photos/200/200/?image=845', name: 'Unit 3', alias: 'unit3' } as IUnit;
    const unit4 = { identifier: 'abc4', photoUrl: 'https://picsum.photos/200/200/?image=102', name: 'Unit 4', alias: 'unit4' } as IUnit;
    const unit5 = { identifier: 'abc5', photoUrl: 'https://picsum.photos/200/200/?image=783', name: 'Unit 5', alias: 'unit5' } as IUnit;
    this.units.push(unit1);
    this.units.push(unit2);
    this.units.push(unit3);
    this.units.push(unit4);
    this.units.push(unit5);
  }

  changePhoto() {
    this.units[1].photoUrl = 'https://picsum.photos/200/200/?image=' + Math.floor(Math.random() * 80) + 1;
  }
}
