import { Injectable } from '@angular/core';
import { Order, Payment, Product } from './model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth-service';


@Injectable({
  providedIn: 'root',
})
export class CargoApiService {
  private readonly baseUrl = 'http://localhost:5173';
   constructor(private http: HttpClient, private auth: AuthService) {}

  getProducts() {
    //return this.http.get<Product[]>(`${this.baseUrl}/api/products`, { headers: this.auth.authHeaders });
      return this.http.get<Product[]>(`http://localhost:5239/api/products`, { headers: this.auth.authHeaders });

  }

  createProduct(product: Product) {
    return this.http.post<Product>(`http://localhost:5239/api/products`, product, { headers: this.auth.authHeaders });
  }

  getOrders() {
    return this.http.get<Order[]>(`http://localhost:5286/api/orders`, { headers: this.auth.authHeaders });
  }

  createOrder(order: Order) {
    return this.http.post<Order>(`http://localhost:5286/api/orders`, order, { headers: this.auth.authHeaders });
  }

  getPayments() {
    return this.http.get<Payment[]>(`http://localhost:5071/api/payments`, { headers: this.auth.authHeaders });
  }

  createPayment(payment: Payment) {
    return this.http.post<Payment>(`http://localhost:5071/api/payments`, payment, { headers: this.auth.authHeaders });
  }

   updatePayment(id: number, payment: Payment) {
    debugger;
    return this.http.put<Payment>(`http://localhost:5071/api/payments/${id}`, payment, { headers: this.auth.authHeaders });
  }
deletePayment(id: number) {
    debugger;
    return this.http.delete<Payment>(`http://localhost:5071/api/payments/${id}`,  { headers: this.auth.authHeaders });
  }
}

