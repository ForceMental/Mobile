import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisitaAgendadaPage } from './visita-agendada.page';

describe('VisitaAgendadaPage', () => {
  let component: VisitaAgendadaPage;
  let fixture: ComponentFixture<VisitaAgendadaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VisitaAgendadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
