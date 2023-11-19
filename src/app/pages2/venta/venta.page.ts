import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.page.html',
  styleUrls: ['./venta.page.scss'],
})
export class VentaPage {
  formData: any = {}; // Tu modelo de datos
  listaProductos: any[] = []; // Aquí deberías tener la lista de productos que vas a mostrar en la página
  nuevoProducto: any = { // Agrega esta línea para declarar nuevoProducto
    nombre: '',
    cantidad: 1,
  };

  constructor(private alertController: AlertController) {}

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
            this.enviarVenta(); // Llama a tu función enviarVenta
          },
        },
      ],
    });

    await alert.present();
  }

  enviarVenta() {
    // Aquí puedes acceder a los datos de la venta y realizar cualquier acción necesaria
    console.log('Venta enviada:', this.formData, this.listaProductos);

  
  }

  // Las funciones para manejar la cantidad y la lista de productos también deben agregarse aquí
  disminuirCantidad() {
    // Lógica para disminuir la cantidad
  }

  aumentarCantidad() {
    
  }
  

  agregarNuevoProducto() {
    // Validar que el nombre del producto no esté vacío
    if (this.nuevoProducto.nombre.trim() !== '') {
      // Agregar el nuevo producto a la lista de productos sin la cantidad
      this.listaProductos.push({
        nombre: this.nuevoProducto.nombre,
      });
  
      // Agregar manualmente "Cámara" y "Película" al presionar el botón solo si el producto ingresado no es "Cámara" ni "Película"
      if (this.nuevoProducto.nombre !== 'Cámara' && this.nuevoProducto.nombre !== 'Película') {
        this.listaProductos.push({ nombre: 'Cámara' });
        this.listaProductos.push({ nombre: 'Película' });
      }
  
      // Limpiar el nuevo producto para futuras adiciones
      this.nuevoProducto = {
        nombre: '', // Limpiar solo el nombre, no se necesita repetir 'camara' y 'pelicula'
        cantidad: 1,
      };
    } else {
      // Mostrar un mensaje de error si el nombre del producto está vacío
      this.mostrarMensajeError('El nombre del producto no puede estar vacío.');
    }
  }
  
  

  eliminarProducto(producto: any) {
    // Lógica para eliminar un producto de la lista
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
