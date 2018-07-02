import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePorCiaComponent } from './reporte-por-cia.component';

describe('ReportePorCiaComponent', () => {
  let component: ReportePorCiaComponent;
  let fixture: ComponentFixture<ReportePorCiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportePorCiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportePorCiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
