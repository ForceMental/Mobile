import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisitasAgendadasPage } from './visitas-agendadas.page';

describe('VisitasAgendadasPage', () => {
  let component: VisitasAgendadasPage;
  let fixture: ComponentFixture<VisitasAgendadasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VisitasAgendadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
