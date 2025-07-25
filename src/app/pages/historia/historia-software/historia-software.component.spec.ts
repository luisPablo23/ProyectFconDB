import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaSoftwareComponent } from './historia-software.component';

describe('HistoriaSoftwareComponent', () => {
  let component: HistoriaSoftwareComponent;
  let fixture: ComponentFixture<HistoriaSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoriaSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriaSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
