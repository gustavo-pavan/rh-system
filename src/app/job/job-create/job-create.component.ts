import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rh-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.scss']
})
export class JobCreateComponent implements OnInit {
  menu:number = 0
  constructor() { }

  ngOnInit() {
  }

  openMenu(value){
    this.menu = (this.menu == value) ? 0 : value;
  }
}
