import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbdulComponent } from './abdul.component';

describe('AbdulComponent', () => {
  let component: AbdulComponent;
  let fixture: ComponentFixture<AbdulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbdulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbdulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
