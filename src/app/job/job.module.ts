import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './job.component';
import { JobHomeComponent } from './job-home/job-home.component';
import { JobCreateComponent } from './job-create/job-create.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [JobComponent, JobHomeComponent, JobCreateComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[JobComponent, JobHomeComponent, JobCreateComponent]
})
export class JobModule { }
