import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliationConfigComponent } from './avaliation-config.component';

describe('AvaliationConfigComponent', () => {
  let component: AvaliationConfigComponent;
  let fixture: ComponentFixture<AvaliationConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliationConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliationConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
