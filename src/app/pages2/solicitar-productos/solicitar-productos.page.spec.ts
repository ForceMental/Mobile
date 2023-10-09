import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitarProductosPage } from './solicitar-productos.page';

describe('SolicitarProductosPage', () => {
  let component: SolicitarProductosPage;
  let fixture: ComponentFixture<SolicitarProductosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SolicitarProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
