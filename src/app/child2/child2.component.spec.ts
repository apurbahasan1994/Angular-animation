import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHILD2Component } from './child2.component';

describe('CHILD2Component', () => {
  let component: CHILD2Component;
  let fixture: ComponentFixture<CHILD2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CHILD2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CHILD2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
