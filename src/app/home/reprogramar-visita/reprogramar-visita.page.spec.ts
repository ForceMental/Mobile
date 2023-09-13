import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReprogramarVisitaPage } from './reprogramar-visita.page';

describe('ReprogramarVisitaPage', () => {
  let component: ReprogramarVisitaPage;
  let fixture: ComponentFixture<ReprogramarVisitaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReprogramarVisitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
