import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rh-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.scss']
})
export class DepartmentCreateComponent implements OnInit {
  salary: ISalary = {id: 1, salary: 1000.00, function: 1}
  department: IDepartment = {name: 'Tecnology', id: 1}
  sector:ISector[] = [
    // {name: 'Developer Assitent', id: 1, department: 1},
    // {name: 'Enginer Junior', id: 2, department: 1},
    // {name: 'Architect', id: 3, department: 1},
  ];
  func:IFunction[] = [
    // {name: 'Developer Assitent', id: 1, sector: 1},
    // {name: 'Developer Junior', id: 2, sector: 2},
    // {name: 'Developer Senior', id: 3, sector: 3},
  ];
  //Record id Sector
  selectedSector:any = [];
  selectedFunct: any = []
  constructor() { }

  ngOnInit() {
  }
  selectedSectors(value){
    if(this.selectedSector.indexOf(value) > -1){
      this.selectedSector.splice(this.selectedSector.indexOf(value), 1);
    }
    else{
      this.selectedSector.push(value);
    }
  }
  selectedFunc(value){
    if(this.selectedFunct.indexOf(value) > -1){
      this.selectedFunct.splice(this.selectedFunct.indexOf(value), 1);
    }
    else{
      this.selectedFunct.push(value);
    }
  }
  addSector(){
   let sec =  {name: 'New Sector', id: 0, department: 0}
    this.sector.push(sec);
  }
  removeSector(){
    this.selectedSector.forEach(element => {
      this.sector.splice(this.sector.indexOf(element), 1);      
    });
    this.selectedSector = []
  }
  addFunction(){
    let fun =  {name: 'New Sector', id: 0, sector: 0}
    this.func.push(fun);
  }
  removeFunction(){
    this.selectedFunct.forEach(element => {
      this.func.splice(this.func.indexOf(element), 1);      
    });
    this.selectedFunct = []
  }
}
export interface ISector {
  department: number
  name: string
  id: number
}
export interface IDepartment {
  name: string
  id: number
}
export interface IFunction {
  sector: number
  name: string
  id: number
}
export interface ISalary{
  salary: number | string
  function: number
  id: number
}
//Nivel herarquico
//Department
//Sector
//Function
