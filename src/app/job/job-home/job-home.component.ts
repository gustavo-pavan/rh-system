import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rh-job-home',
  templateUrl: './job-home.component.html',
  styleUrls: ['./job-home.component.scss']
})
export class JobHomeComponent implements OnInit {
  flip: number = 0
  constructor() { }

  ngOnInit() {
  }

  toogle(value){
    this.flip = (this.flip == value) ? 0 : value 
  }

}
