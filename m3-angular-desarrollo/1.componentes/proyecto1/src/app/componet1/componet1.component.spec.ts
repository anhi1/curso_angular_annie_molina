import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componet1Component } from './componet1.component';

describe('Componet1Component', () => {
  let component: Componet1Component;
  let fixture: ComponentFixture<Componet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componet1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
