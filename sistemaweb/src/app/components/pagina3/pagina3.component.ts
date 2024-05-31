import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component {
  products = [
    { category: 'embrague', name: 'Disco de Embrague', image: 'assets/img/disco.png', description: 'Descripción del disco de embrague.' },
    { category: 'embrague', name: 'Plato de Embrague', image: 'assets/img/disco2.png', description: 'Descripción del plato de embrague.' },
    { category: 'embrague', name: 'Volante de motor bimasa y bomba', image: 'assets/img/disco3.jpg', description: 'Descripción de Volante de motor bimasa y bomba.' },
    { category: 'freno', name: 'Pastilla de Freno Hagen', image: 'assets/img/pastilla.png', description: 'Descripción de la pastilla de freno.' },
    { category: 'freno', name: 'Pastilla de Freno HI-Q SEVERE DUTY', image: 'assets/img/pastilla3.png', description: 'Descripción de la pastilla de freno.' },
    { category: 'freno', name: 'Pastilla de Freno HI-Q', image: 'assets/img/pastilla2.png', description: 'Descripción de la pastilla de freno.' },
    { category: 'caja', name: 'Piñón y Corona', image: 'assets/img/pinon1.jpg', description: 'Descripción de Piñón y Corona.' },
    { category: 'caja', name: 'Propulsor y Deslizante', image: 'assets/img/pinon2.png', description: 'Descripción de Propulsor y Deslizante.' },
    { category: 'caja', name: 'Trenfijo', image: 'assets/img/pinon3.jpg', description: 'Descripción de Trenfijo.' },
  ];

  filteredProducts = [...this.products];
  modalOpen = false;
  selectedProduct: any = null;

  filterProducts(category: string) {
    if (category === 'all') {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
  }

  openModal(product: any) {
    this.selectedProduct = product;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.selectedProduct = null;
  }
}
