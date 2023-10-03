import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearVisitasPage } from './crear-visitas.page';

describe('CrearVisitasPage', () => {
  let component: CrearVisitasPage;
  let fixture: ComponentFixture<CrearVisitasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearVisitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
