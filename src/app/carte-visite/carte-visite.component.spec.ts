import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteVisiteComponent } from './carte-visite.component';

describe('CarteVisiteComponent', () => {
  let component: CarteVisiteComponent;
  let fixture: ComponentFixture<CarteVisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteVisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
