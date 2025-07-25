import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoCorrectivoComponent } from './mantenimiento-correctivo.component';

describe('MantenimientoCorrectivoComponent', () => {
  let component: MantenimientoCorrectivoComponent;
  let fixture: ComponentFixture<MantenimientoCorrectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MantenimientoCorrectivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoCorrectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
