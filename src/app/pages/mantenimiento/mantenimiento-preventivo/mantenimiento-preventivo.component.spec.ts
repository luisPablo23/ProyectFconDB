import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoPreventivoComponent } from './mantenimiento-preventivo.component';

describe('MantenimientoPreventivoComponent', () => {
  let component: MantenimientoPreventivoComponent;
  let fixture: ComponentFixture<MantenimientoPreventivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MantenimientoPreventivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoPreventivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
