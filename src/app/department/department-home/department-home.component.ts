import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rh-department-home',
  templateUrl: './department-home.component.html',
  styleUrls: ['./department-home.component.scss']
})
export class DepartmentHomeComponent implements OnInit {
  flip: number = 0
  constructor() { }

  ngOnInit() {
  }

  toogle(value){
    this.flip = (this.flip == value) ? 0 : value 
  }
}
