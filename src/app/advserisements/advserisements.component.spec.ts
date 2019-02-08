import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvserisementsComponent } from './advserisements.component';

describe('AdvserisementsComponent', () => {
  let component: AdvserisementsComponent;
  let fixture: ComponentFixture<AdvserisementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvserisementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvserisementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
