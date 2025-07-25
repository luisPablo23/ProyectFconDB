import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoComputadorasComponent } from './mantenimiento-computadoras.component';

describe('MantenimientoComputadorasComponent', () => {
  let component: MantenimientoComputadorasComponent;
  let fixture: ComponentFixture<MantenimientoComputadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MantenimientoComputadorasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoComputadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
