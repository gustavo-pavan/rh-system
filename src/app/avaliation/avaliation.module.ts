import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvaliationComponent } from './avaliation.component';
import { AvaliationHomeComponent } from './avaliation-home/avaliation-home.component';
import { AvaliationCreateComponent } from './avaliation-create/avaliation-create.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AvaliationConfigComponent } from './avaliation-config/avaliation-config.component';
import { AvaliationConfigService } from './avaliation-config/avaliation-config.service';
import {FormsModule } from '@angular/forms';
import { AvaliationPortfolioComponent } from './avaliation-portfolio/avaliation-portfolio.component'
import { AvaliationPortfolioService } from './avaliation-portfolio/avaliation-portfolio.service';
 

@NgModule({
  declarations: [AvaliationComponent, AvaliationHomeComponent, AvaliationCreateComponent, AvaliationConfigComponent, AvaliationPortfolioComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[AvaliationComponent,AvaliationHomeComponent, AvaliationCreateComponent, AvaliationConfigComponent, AvaliationPortfolioComponent],
  providers:[AvaliationConfigService, AvaliationPortfolioService]
})
export class AvaliationModule { }
