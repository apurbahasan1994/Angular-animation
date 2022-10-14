import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildServerComponent } from './child-server.component';

describe('ChildServerComponent', () => {
  let component: ChildServerComponent;
  let fixture: ComponentFixture<ChildServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
