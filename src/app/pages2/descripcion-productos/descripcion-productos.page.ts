import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-descripcion-productos',
  templateUrl: './descripcion-productos.page.html',
  styleUrls: ['./descripcion-productos.page.scss'],
})
export class DescripcionProductosPage implements OnInit {

  @Input() titulo: string = '';
  @Input() mensaje: string = '';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit(): void {

  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

}
