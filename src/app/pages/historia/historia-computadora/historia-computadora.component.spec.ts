import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaComputadoraComponent } from './historia-computadora.component';

describe('HistoriaComputadoraComponent', () => {
  let component: HistoriaComputadoraComponent;
  let fixture: ComponentFixture<HistoriaComputadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoriaComputadoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriaComputadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
