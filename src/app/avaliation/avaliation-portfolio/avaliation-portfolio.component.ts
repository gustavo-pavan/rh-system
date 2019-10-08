import { Component, OnInit } from '@angular/core';
import { AvaliationPortfolioService } from './avaliation-portfolio.service';

@Component({
  selector: 'rh-avaliation-portfolio',
  templateUrl: './avaliation-portfolio.component.html',
  styleUrls: ['./avaliation-portfolio.component.scss']
})
export class AvaliationPortfolioComponent implements OnInit {
  flip: number = 0
  data = []
  view_list: boolean = false;
  interval:any;

  constructor(private _service: AvaliationPortfolioService) { }

  ngOnInit() {  
    this.appStart();
    this.randonFlip();
  }

  appStart(){
    let value = this._service.getAvaliation();
    value.forEach((element) => {
      this.data.push(element)
    })
  }

  toogle(value){
    clearInterval(this.interval)
    this.flip = (this.flip == value) ? 0 : value 
    setTimeout(() => {
      this.randonFlip();
    }, 2000);
  }
  viewList(){
    this.view_list = !this.view_list;
  }

  randonFlip(){
    this.interval = setInterval(() => {
       this.flip = Math.round(Math.random() * this.data.length)      
    }, 1000);
  }
}
