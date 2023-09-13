import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisitaFrioPage } from './visita-frio.page';

describe('VisitaFrioPage', () => {
  let component: VisitaFrioPage;
  let fixture: ComponentFixture<VisitaFrioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VisitaFrioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
