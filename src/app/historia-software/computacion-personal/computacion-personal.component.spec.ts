import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputacionPersonalComponent } from './computacion-personal.component';

describe('ComputacionPersonalComponent', () => {
  let component: ComputacionPersonalComponent;
  let fixture: ComponentFixture<ComputacionPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComputacionPersonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputacionPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
