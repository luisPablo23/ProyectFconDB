import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerosLenguajesComponent } from './primeros-lenguajes.component';

describe('PrimerosLenguajesComponent', () => {
  let component: PrimerosLenguajesComponent;
  let fixture: ComponentFixture<PrimerosLenguajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimerosLenguajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimerosLenguajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
