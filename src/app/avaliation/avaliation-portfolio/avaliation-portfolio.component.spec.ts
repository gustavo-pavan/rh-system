import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliationPortfolioComponent } from './avaliation-portfolio.component';

describe('AvaliationPortfolioComponent', () => {
  let component: AvaliationPortfolioComponent;
  let fixture: ComponentFixture<AvaliationPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliationPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliationPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
