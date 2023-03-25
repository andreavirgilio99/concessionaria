import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliVeicoloComponent } from './dettagli-veicolo.component';

describe('DettagliVeicoloComponent', () => {
  let component: DettagliVeicoloComponent;
  let fixture: ComponentFixture<DettagliVeicoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettagliVeicoloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettagliVeicoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
