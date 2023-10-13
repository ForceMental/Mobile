import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Producto {
  nombre: string;
  cantidad: number;
}

@Component({
  selector: 'app-solicitar-productos',
  templateUrl: './solicitar-productos.page.html',
  styleUrls: ['./solicitar-productos.page.scss'],
})
export class SolicitarProductosPage {

  nombreProducto: string = '';
  cantidadProducto: number = 0;
  productosSolicitados: Producto[] = [];

  constructor(private alertController: AlertController) {}

  solicitarProducto() {
    const nuevoProducto: Producto = {
      nombre: this.nombreProducto,
      cantidad: this.cantidadProducto
    };
    this.productosSolicitados.push(nuevoProducto);

    // Limpiar los campos después de agregar un producto
    this.nombreProducto = '';
    this.cantidadProducto = 0;
  }

  borrarRespuesta() {
    this.productosSolicitados = []; // Limpiar la lista de productos
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Estás seguro?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }
}
