import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaOrigenesComponent } from './historia-origenes.component';

describe('HistoriaOrigenesComponent', () => {
  let component: HistoriaOrigenesComponent;
  let fixture: ComponentFixture<HistoriaOrigenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoriaOrigenesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriaOrigenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
