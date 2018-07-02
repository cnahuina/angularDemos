import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePorIncidenciaComponent } from './reporte-por-incidencia.component';

describe('ReportePorIncidenciaComponent', () => {
  let component: ReportePorIncidenciaComponent;
  let fixture: ComponentFixture<ReportePorIncidenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportePorIncidenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportePorIncidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
