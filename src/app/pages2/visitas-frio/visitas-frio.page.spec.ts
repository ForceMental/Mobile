import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisitasFrioPage } from './visitas-frio.page';

describe('VisitasFrioPage', () => {
  let component: VisitasFrioPage;
  let fixture: ComponentFixture<VisitasFrioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VisitasFrioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
