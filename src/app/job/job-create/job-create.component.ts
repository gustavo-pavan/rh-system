import { Component, OnInit } from '@angular/core';
import { IDepartment, ISector, IFunction } from 'src/app/department/department.model';

@Component({
  selector: 'rh-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.scss']
})
export class JobCreateComponent implements OnInit {
  menu: number = 0
  private _department: IDepartment[] = [
    { name: 'Tecnology', id: 1 },
    { name: 'Department Person', id: 1 },
    { name: 'Education', id: 1 },
    { name: 'Commercial', id: 1 },
    { name: 'Economics', id: 1 }
  ]
  private _sector: ISector[] = [
    { name: 'Developer Assitent', id: 1, department: 1 },
    { name: 'Enginer Junior', id: 2, department: 1 },
    { name: 'Architect', id: 3, department: 1 },
  ];
  private _func: IFunction[] = [
    { name: 'Developer Assitent', id: 1, sector: 1 },
    { name: 'Developer Junior', id: 2, sector: 2 },
    { name: 'Developer Senior', id: 3, sector: 3 },
  ];
  //show data
  sector: ISector[] = []
  department: IDepartment[] = []
  func: IFunction[] = []
  lblDepartment: string
  constructor() { }

  ngOnInit() {
    this.department = [...this._department]
  }

  openMenu(value) {
    this.menu = (this.menu == value) ? 0 : value;
  }
  searchDepartment(value) {
    if(this.department.indexOf(value) == -1){
      setTimeout(() => {
     this.department = this._department.filter((x) => {
        return x.name.toLowerCase().indexOf(value) !== -1
        })
       }, 100);
    }
    else{
      console.log("no")
      this.department = [];
      this.department = [...this._department]
    }
  }
  selDepartment(value) {
    this.lblDepartment = value
  }
}
