import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rh-avaliation-home',
  templateUrl: './avaliation-home.component.html',
  styleUrls: ['./avaliation-home.component.scss']
})
export class AvaliationHomeComponent implements OnInit {
  flip: number = 0
  constructor() { }

  ngOnInit() {
  }

  toogle(value){
    this.flip = (this.flip == value) ? 0 : value 
  }
}
