import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CargoApiService } from '../cargo-api.service';
import type { Order } from '../model';

@Component({
  selector: 'app-orders-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './orders-component.html',
  styleUrl: './orders-component.css',
})
export class OrdersComponent 
{
  orders = signal<Order[]>([]);
  order = signal<Order>({ id: 0, customerId: 0, productId: 0, quantity: 1, totalAmount: 0, status: 'Pending' });

  constructor(private api: CargoApiService) {
    this.loadOrders();
  }

  loadOrders(): void {
    this.api.getOrders().subscribe({ next: (items) => this.orders.set(items), error: () => this.orders.set([]) });
  }

  createOrder(): void {
    const newOrder = { ...this.order(), id: 0 };
    this.api.createOrder(newOrder).subscribe({ next: () => {
      this.loadOrders();
      this.order.set({ id: 0, customerId: 0, productId: 0, quantity: 1, totalAmount: 0, status: 'Pending' });
    } });
  }
}

