import { Component, signal } from '@angular/core';
import { CargoApiService } from '../cargo-api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Payment } from '../model';

@Component({
  selector: 'app-payments-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './payments-component.html',
  styleUrl: './payments-component.css',
})
export class PaymentsComponent {
  payments = signal<Payment[]>([]);
  payment = signal<Payment>({ id: 0, orderId: 0, amount: 0, paidAt: new Date().toISOString(), status: 'Created' });

  constructor(private api: CargoApiService) {
    this.loadPayments();
  }

  loadPayments(): void {
    this.api.getPayments().subscribe({ next: (items) => this.payments.set(items), error: () => this.payments.set([]) });
  }

  createPayment(): void {
    const newPayment = { ...this.payment(), id: 0 }; 
    this.api.createPayment(newPayment).subscribe({ next: () => {
      this.loadPayments();
      this.payment.set({ id: 0, orderId: 0, amount: 0, paidAt: new Date().toISOString(), status: 'Created' });
    } });
  }

  EditPayment(data:any): void {
    debugger;
   this.payment.set(data);
  }

  deletePayment(id: number): void {
    debugger;
    this.payments().find(p => p.id === id);
    this.api.deletePayment(id).subscribe({ next: () => {
      this.loadPayments();
      this.payment.set({ id: 0, orderId: 0, amount: 0, paidAt: new Date().toISOString(), status: 'Created' });
    } });
  }



UpdatePayment(): void {
  debugger;
     const updatedPayment = { ...this.payment(),id: this.payment().id };
    this.api.updatePayment(updatedPayment.id, updatedPayment).subscribe({ next: () => {
      this.loadPayments();
      this.payment.set({ id: 0, orderId: 0, amount: 0, paidAt: new Date().toISOString(), status: 'Created' });
    } });
  }
}

