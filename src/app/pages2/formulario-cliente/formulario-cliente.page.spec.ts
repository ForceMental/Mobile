import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioClientePage } from './formulario-cliente.page';

describe('FormularioClientePage', () => {
  let component: FormularioClientePage;
  let fixture: ComponentFixture<FormularioClientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormularioClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
