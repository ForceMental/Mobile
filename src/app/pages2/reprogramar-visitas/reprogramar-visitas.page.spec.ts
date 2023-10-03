import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReprogramarVisitasPage } from './reprogramar-visitas.page';

describe('ReprogramarVisitasPage', () => {
  let component: ReprogramarVisitasPage;
  let fixture: ComponentFixture<ReprogramarVisitasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReprogramarVisitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
