import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoSoftwareComponent } from './mantenimiento-software.component';

describe('MantenimientoSoftwareComponent', () => {
  let component: MantenimientoSoftwareComponent;
  let fixture: ComponentFixture<MantenimientoSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MantenimientoSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
