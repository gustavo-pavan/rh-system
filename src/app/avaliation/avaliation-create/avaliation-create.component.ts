import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { relative } from 'path';

@Component({
  selector: 'rh-avaliation-create',
  templateUrl: './avaliation-create.component.html',
  styleUrls: ['./avaliation-create.component.scss']
})
export class AvaliationCreateComponent implements OnInit {
  tab: number = 1;
  value: number = 20
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  tabs(value){
    this.tab = (this.tab === value) ? 0 : value
  }
}
