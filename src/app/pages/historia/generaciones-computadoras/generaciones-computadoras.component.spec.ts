import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneracionesComputadorasComponent } from './generaciones-computadoras.component';

describe('GeneracionesComputadorasComponent', () => {
  let component: GeneracionesComputadorasComponent;
  let fixture: ComponentFixture<GeneracionesComputadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneracionesComputadorasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneracionesComputadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
