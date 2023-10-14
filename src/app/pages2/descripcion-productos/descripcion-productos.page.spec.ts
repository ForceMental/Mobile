import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescripcionProductosPage } from './descripcion-productos.page';

describe('DescripcionProductosPage', () => {
  let component: DescripcionProductosPage;
  let fixture: ComponentFixture<DescripcionProductosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DescripcionProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
