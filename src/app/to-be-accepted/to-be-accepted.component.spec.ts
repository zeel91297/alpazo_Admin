import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBeAcceptedComponent } from './to-be-accepted.component';

describe('ToBeAcceptedComponent', () => {
  let component: ToBeAcceptedComponent;
  let fixture: ComponentFixture<ToBeAcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToBeAcceptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToBeAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
