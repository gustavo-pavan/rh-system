import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliationCreateComponent } from './avaliation-create.component';

describe('AvaliationCreateComponent', () => {
  let component: AvaliationCreateComponent;
  let fixture: ComponentFixture<AvaliationCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliationCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
