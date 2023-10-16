import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-solicitar-productos',
  templateUrl: './solicitar-productos.page.html',
  styleUrls: ['./solicitar-productos.page.scss'],
})
export class SolicitarProductosPage {

  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

}
