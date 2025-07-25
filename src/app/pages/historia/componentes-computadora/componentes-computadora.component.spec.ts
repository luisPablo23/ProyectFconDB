import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesComputadoraComponent } from './componentes-computadora.component';

describe('ComponentesComputadoraComponent', () => {
  let component: ComponentesComputadoraComponent;
  let fixture: ComponentFixture<ComponentesComputadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentesComputadoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentesComputadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
