import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.page.html',
  styleUrls: ['./venta.page.scss'],
})
export class VentaPage implements OnInit {
  formData: any = {};
  listaProductos: any[] = [];
  nombre_producto: any = {};
  products: any[] = [];
  productoSeleccionado: any = {};
  


  constructor(
    private alertController: AlertController,
    private productService: ProductService
  ) {}

  ngOnInit() {
    // Llamada al servicio para obtener productos al inicializar el componente
    this.loadProducts();
  }


  loadProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }
 // Agrega esta función
 async mostrarMensajeExito(mensaje: string) {
  const alert = await this.alertController.create({
    header: 'Éxito',
    message: mensaje,
    buttons: ['OK'],
  });
  await alert.present();
}
  

  realizarAccion(producto: any) {
    // Establecer el producto seleccionado como nombre_producto
    this.nombre_producto = { ...producto, cantidad: 1 }; // Inicializar cantidad en 1
  }
  
  agregarProducto(producto: any) {
    if (producto && producto.nombre) {
      // Verificar si el producto ya está en la lista
      const productoExistente = this.listaProductos.find((p) => p.nombre === producto.nombre);

      if (!productoExistente) {
        // Agregar el producto a la lista con la cantidad
        this.listaProductos.push({ ...producto, cantidad: producto.cantidad || 1 });
        this.mostrarMensajeExito('Producto agregado correctamente.');
      } else {
        // El producto ya está en la lista, puedes manejar esto según tus necesidades
        this.mostrarMensajeError('El producto ya está en la lista.');
      }
    } else {
      this.mostrarMensajeError('El producto no tiene un nombre válido.');
    }
  }
  
  disminuirCantidad(producto: any) {
    // Disminuir la cantidad del producto
    if (producto.cantidad && producto.cantidad > 1) {
      producto.cantidad -= 1;
    }
  }
  
  aumentarCantidad(producto: any) {
    // Aumentar la cantidad del producto
    producto.cantidad = (producto.cantidad || 0) + 1;
  }
  
  
  

  async mostrarMensajeError(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK'],
    });
    await alert.present();
  }




  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmar Envío',
      message: '¿Deseas enviar la venta?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // El usuario eligió "No", no se realiza ninguna acción
          },
        },
        {
          text: 'Sí',
          handler: () => {
            // El usuario eligió "Sí", aquí puedes enviar la venta
            this.enviarVenta();
          },
        },
      ],
    });

    await alert.present();
  }

  enviarVenta() {
    console.log('Venta enviada:');
    // Aquí puedes realizar acciones adicionales después de enviar la venta
  }
}
