import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProductService } from 'src/app/services/product.service';
import { VentaService } from 'src/app/services/venta.service';

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
  productoSeleccionado: any = [];
  cliente: any = {};

  constructor(private route: ActivatedRoute, private alertController: AlertController,
    private productService: ProductService, private ventaService: VentaService) {
    this.route.queryParams.subscribe(params => {
      if (params['clienteId']) { // Asegúrate de que el parámetro existe
        this.cliente = {
          nombre: params['clienteNombre'],
          rut: params['clienteRut'],
          direccion: params['clienteDireccion'],
          id: params['clienteId'],
          idVisita: params['visitaId'],
          ejecutivoId: params['ejecutivoId']
        };
      }
    });
  }
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
    // Buscar si el producto ya existe en el array
    const productoExistente = this.productoSeleccionado.find((p: any) => p.id_producto === producto.id_producto);

    if (productoExistente) {
      // Si el producto ya existe, incrementar su cantidad
      productoExistente.cantidad += 1;
    } else {
      // Si el producto no existe, añadirlo al array
      const productoASeleccionar = {
        id: producto.id_producto,
        nombre: producto.nombre_producto,
        cantidad: 1,
        precio: 10
      };
      this.productoSeleccionado.push(productoASeleccionar);
    }

    console.log(this.productoSeleccionado);
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
    producto.cantidad -= 1;

    // Comprobar si la cantidad ha llegado a 0
    if (producto.cantidad === 0) {
      // Encontrar el índice del producto en el array
      const index = this.productoSeleccionado.findIndex((p:any) => p.id_producto === producto.id_producto);

      // Eliminar el producto del array si se encontró
      if (index !== -1) {
        this.productoSeleccionado.splice(index, 1);
      }
    }
  }

  aumentarCantidad(producto: any) {
    // Aumentar la cantidad del producto
    producto.cantidad += 1;
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
    const datosVenta = {
      productos: this.productoSeleccionado, // Debes llenar esto con la información de los productos
      compra_confirmada: true,
      cliente_id: this.cliente.id, //
      visita_id: this.cliente.idVisita,
      ejecutivo_id: this.cliente.ejecutivoId
    };
    this.ventaService.realizarVenta(datosVenta).subscribe(
      response => {
        console.log('Venta enviada con éxito', response);
        // Aquí manejas la respuesta del servidor
      },
      error => {
        console.error('Error al enviar la venta', error);
        // Aquí manejas el error
      }
    );
  }
}
