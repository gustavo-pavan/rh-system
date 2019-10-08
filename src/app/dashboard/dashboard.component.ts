import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rh-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  search_toogle: boolean = false;
  menu: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toogle(){
    this.search_toogle = !this.search_toogle;
  }
  sidemenu(){
    this.menu = !this.menu
  }

}
