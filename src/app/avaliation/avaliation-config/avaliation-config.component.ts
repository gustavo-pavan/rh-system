import { Component, OnInit, ViewChild, ElementRef, QueryList, ViewChildren, SystemJsNgModuleLoader } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { timingSafeEqual } from 'crypto';
import { element } from 'protractor';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { identifierModuleUrl } from '@angular/compiler';
import { IAvaliation } from './avaliation-config.model';
import { AvaliationConfigService } from './avaliation-config.service';
@Component({
  selector: 'rh-avaliation-config',
  templateUrl: './avaliation-config.component.html',
  styleUrls: ['./avaliation-config.component.scss']
})
export class AvaliationConfigComponent implements OnInit {
  @ViewChild('inpt_title', { static: false }) title: ElementRef;
  @ViewChildren('inpt_value') input: QueryList<ElementRef>;
  @ViewChildren('check_inpt') check: QueryList<ElementRef>;

  avaliation: IAvaliation[] = [];
  dblclick: boolean = false;
  id: number;
  selected: number;
  system = [];
  sequence: number = 1;
  valueTitle: string;
  position = []
  constructor(private _activate: ActivatedRoute, private _router: Router, private _service: AvaliationConfigService) { }

  ngOnInit() {
    this.startConfig();
    this.applyRounded();
  }
  startConfig() {
    this.id = this._activate.snapshot.params['id'];
    if (this._router.url === `/dashboard/avaliation/config-edit/${this.id}`) {
      let value = this._service.getAvaliation(this.id);
      this.id = value.length
      // value = value.filter(x => x.sequence == (this.sequence));
      value.forEach(element => {
        this.system.push(element)
      });

      this.avaliation = []
      value = this.system.filter(x => x.sequence == (this.sequence));
      value.forEach((element) => {
        this.valueTitle = element['title'];
        element['avaliation'].forEach(x => {
          let aval: IAvaliation = {
            sequence: x.sequence,
            question: x.question,
            validation: x.validation
          }
          this.avaliation.push(aval)
        });
      })
    }
  }
  select(value) {
    if (this.selected == value) {
      this.selected = 0
      this.dblclick = false;
    }
    else {
      this.selected = value
      this.dblclick = true;
    }
  }

  addAvaliation() {
    let aval = {
      sequence: this.avaliation.length + 1,
      question: 'Insert new question'
    }
    this.avaliation.push(aval)
  }

  next() {
    this.selected = 0;
    this.dblclick = false;
    if (this.sequence <= this.id) {
      this.avaliation = [];
      this.dblclick = false;
      if (this.system.filter(x => x.sequence === this.sequence).length > 0) {
        let len = this.system.findIndex(x => x.sequence == this.sequence);
        this.system.splice(len, 1);
      }
      this.input.forEach((input: ElementRef) => {
        let checked = this.check.find(x => x.nativeElement.name == input.nativeElement.name).nativeElement.checked
        let aval: IAvaliation = {
          sequence: input.nativeElement.name,
          question: input.nativeElement.value,
          validation: checked
        }
        this.avaliation.push(aval)
      })

      let body = {
        title: this.title.nativeElement.value,
        sequence: this.sequence,
        avaliation: this.avaliation
      }
      this.sequence += 1;
      this.system.push(body);
      this.avaliation = [];

      //check if in array contain this sequence
      if (this.system.filter(x => x.sequence === this.sequence).length > 0) {
        let value = this.system.filter(x => x.sequence == (this.sequence));
        this.valueTitle = value[0]['title']
        value[0]['avaliation'].forEach((element) => {
          let aval: IAvaliation = {
            sequence: element.sequence,
            question: element.question,
            validation: element.validation
          }
          this.avaliation.push(aval)
        })
      }
    }
    this.applyRounded();
  }

  back() {
    this.selected = 0;
    this.dblclick = false
    if (this.sequence > 0) {
      this.avaliation = []
      let value = this.system.filter(x => x.sequence == (this.sequence - 1));
      this.valueTitle = value[0]['title']
      value[0]['avaliation'].forEach((element) => {
        let aval: IAvaliation = {
          sequence: element.sequence,
          question: element.question,
          validation: element.validation
        }
        this.avaliation.push(aval)
      })
    }
    this.sequence -= 1;
    this.applyRounded();
  }

  moveup() {
    let index = this.avaliation.findIndex(x => x.sequence === this.selected);
    let principal = this.avaliation[index];
    let move = this.avaliation[index - 1];
    if (index != 0) {
      this.avaliation[index] = move;
      this.avaliation[index - 1] = principal;
    }
  }

  movedown() {
    let index = this.avaliation.findIndex(x => x.sequence === this.selected);
    let principal = this.avaliation[index];
    let move = this.avaliation[index + 1];
    if (index != (this.avaliation.length - 1)) {
      this.avaliation[index] = move;
      this.avaliation[index + 1] = principal;
    }
  }
  delete() {
    let index = this.avaliation.findIndex(x => x.sequence === this.selected);
    this.avaliation.splice(index, 1);
    this.selected = 0;
    this.dblclick = !this.dblclick;
  }
  finish() {
    this.next();
    this.sequence = null
  }

  applyRounded(){
    
    if(this.position.length < this.id){
      for(let i = 1; i <= this.id; i++){
        let value = {
          sequence: i
        }
        
        this.position.push(value)
      }
    }
    console.log(this.position)
  }
}