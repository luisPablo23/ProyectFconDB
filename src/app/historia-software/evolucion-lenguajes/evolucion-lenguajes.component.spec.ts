import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucionLenguajesComponent } from './evolucion-lenguajes.component';

describe('EvolucionLenguajesComponent', () => {
  let component: EvolucionLenguajesComponent;
  let fixture: ComponentFixture<EvolucionLenguajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvolucionLenguajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvolucionLenguajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
