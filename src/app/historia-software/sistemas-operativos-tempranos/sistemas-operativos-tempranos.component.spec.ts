import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasOperativosTempranosComponent } from './sistemas-operativos-tempranos.component';

describe('SistemasOperativosTempranosComponent', () => {
  let component: SistemasOperativosTempranosComponent;
  let fixture: ComponentFixture<SistemasOperativosTempranosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SistemasOperativosTempranosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemasOperativosTempranosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
