import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rh-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  flip: number = 0
  constructor() { }

  ngOnInit() {
  }

  toogle(value){
    this.flip = (this.flip == value) ? 0 : value 
  }

}
