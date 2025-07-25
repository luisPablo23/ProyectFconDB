import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajesDeProgramacionComponent } from './lenguajes-de-programacion.component';

describe('LenguajesDeProgramacionComponent', () => {
  let component: LenguajesDeProgramacionComponent;
  let fixture: ComponentFixture<LenguajesDeProgramacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LenguajesDeProgramacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenguajesDeProgramacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
