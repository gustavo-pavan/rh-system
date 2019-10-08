import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentCreateComponent } from './department-create/department-create.component';
import { DepartmentHomeComponent } from './department-home/department-home.component';
import { DepartmentComponent } from './department.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DepartmentComponent, DepartmentCreateComponent, DepartmentHomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DepartmentComponent, DepartmentCreateComponent, DepartmentHomeComponent]
})
export class DepartmentModule { }
