import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasOperativosModernosComponent } from './sistemas-operativos-modernos.component';

describe('SistemasOperativosModernosComponent', () => {
  let component: SistemasOperativosModernosComponent;
  let fixture: ComponentFixture<SistemasOperativosModernosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SistemasOperativosModernosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemasOperativosModernosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
