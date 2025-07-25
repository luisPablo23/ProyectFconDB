import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturoSoftwareComponent } from './futuro-software.component';

describe('FuturoSoftwareComponent', () => {
  let component: FuturoSoftwareComponent;
  let fixture: ComponentFixture<FuturoSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuturoSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuturoSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
