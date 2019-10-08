import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AvaliationComponent } from './avaliation/avaliation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AvaliationCreateComponent } from './avaliation/avaliation-create/avaliation-create.component';
import { AvaliationHomeComponent } from './avaliation/avaliation-home/avaliation-home.component';
import { AvaliationConfigComponent } from './avaliation/avaliation-config/avaliation-config.component';
import { AvaliationPortfolioComponent } from './avaliation/avaliation-portfolio/avaliation-portfolio.component';
import { JobComponent } from './job/job.component';
import { DepartmentCreateComponent } from './department/department-create/department-create.component';
import { DepartmentHomeComponent } from './department/department-home/department-home.component';
import { DepartmentComponent } from './department/department.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'avaliation', component: AvaliationComponent, children: [
          { path: '', pathMatch: 'full', redirectTo: 'home' },
          { path: 'home', component: AvaliationHomeComponent },
          { path: 'create', component: AvaliationCreateComponent },
          { path: 'config/:id', component: AvaliationConfigComponent },
          { path: 'config-edit/:id', component: AvaliationConfigComponent },
          { path: 'portfolio', component: AvaliationPortfolioComponent}
        ]
      },
      {path: 'department', component: DepartmentComponent, children:[
        {path: '', pathMatch:'full', redirectTo: 'home'},
        {path: 'home', component: DepartmentHomeComponent},
        {path: 'create', component: DepartmentCreateComponent}
      ]},
      {path: 'job', component: JobComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
