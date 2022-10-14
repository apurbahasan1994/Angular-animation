import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHILD1Component } from './child1.component';

describe('CHILD1Component', () => {
  let component: CHILD1Component;
  let fixture: ComponentFixture<CHILD1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CHILD1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CHILD1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
