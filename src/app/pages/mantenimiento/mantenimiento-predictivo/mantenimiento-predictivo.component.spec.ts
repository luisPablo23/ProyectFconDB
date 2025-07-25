import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoPredictivoComponent } from './mantenimiento-predictivo.component';

describe('MantenimientoPredictivoComponent', () => {
  let component: MantenimientoPredictivoComponent;
  let fixture: ComponentFixture<MantenimientoPredictivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MantenimientoPredictivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoPredictivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
