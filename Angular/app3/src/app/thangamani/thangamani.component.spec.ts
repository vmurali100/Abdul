import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThangamaniComponent } from './thangamani.component';

describe('ThangamaniComponent', () => {
  let component: ThangamaniComponent;
  let fixture: ComponentFixture<ThangamaniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThangamaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThangamaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
