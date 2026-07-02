import { Component, signal } from '@angular/core';
import { Product } from '../model';
import { CargoApiService } from '../cargo-api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './products-component.html',
  styleUrl: './products-component.css',
})
export class ProductsComponent {
  products = signal<Product[]>([]);
  product = signal<Product>({ id: 0, name: '', description: '', price: 0, quantityInStock: 0 });

  constructor(private api: CargoApiService) {
    this.loadProducts();
  }

  loadProducts(): void {
    this.api.getProducts().subscribe({ next: (items) => this.products.set(items), error: () => this.products.set([]) });
  }

  addProduct(): void {
    const newProduct = { ...this.product(), id: 0 };
    this.api.createProduct(newProduct).subscribe({ next: () => {
      this.loadProducts();
      this.product.set({ id: 0, name: '', description: '', price: 0, quantityInStock: 0 });
    } });
  }
}
