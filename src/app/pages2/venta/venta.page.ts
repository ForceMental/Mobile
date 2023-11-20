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
  nuevoProducto: any = {};
  products: any[] = [];

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

  realizarAccion(producto: any) {
    // Establecer el producto seleccionado como nuevoProducto
    this.nuevoProducto = { ...producto, cantidad: 1 }; // Inicializar cantidad en 1
  }
  

  agregarNuevoProducto(producto: any) {
    // Validar que el nombre del producto no esté en la lista antes de agregarlo
    if (producto && producto.nombre) {
      if (!this.listaProductos.some((p) => p.nombre === producto.nombre)) {
        this.listaProductos.push({ nombre: producto.nombre });
        // Actualizar el nuevoProducto para mostrar el último producto agregado
        this.nuevoProducto = { nombre: producto.nombre, cantidad: 1 };
      } else {
        // Si el producto ya está en la lista, puedes mostrar un mensaje o realizar alguna acción adicional
        console.log('El producto ya está en la lista.');
      }
    } else {
      // Si el producto no tiene un nombre, puedes mostrar un mensaje de error o realizar alguna acción adicional
      console.log('El producto no tiene un nombre válido.');
    }
  }
  
  
  

    // Limpiar el nuevo producto para futuras adiciones
   
  
  // Incrementa la cantidad del nuevo producto
  disminuirCantidad() {
    if (this.nuevoProducto.cantidad && this.nuevoProducto.cantidad > 1) {
      this.nuevoProducto.cantidad -= 1;
    }
  }
  
  aumentarCantidad() {
    this.nuevoProducto.cantidad = (this.nuevoProducto.cantidad || 0) + 1;
  }
  
  

  async mostrarMensajeError(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
