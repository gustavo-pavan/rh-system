import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliationHomeComponent } from './avaliation-home.component';

describe('AvaliationHomeComponent', () => {
  let component: AvaliationHomeComponent;
  let fixture: ComponentFixture<AvaliationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliationHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
