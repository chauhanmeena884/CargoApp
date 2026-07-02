import { Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { AdminDashboardComponent } from './admin-dashboard-component/admin-dashboard-component';    
import { ProductsComponent } from './products-component/products-component';
import { OrdersComponent } from './orders-component/orders-component';
import { PaymentsComponent } from './payments-component/payments-component';        
import { authGuard, roleGuard } from './auth-guard';



export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: AdminDashboardComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent, canActivate: [authGuard] },
  { path: 'payments', component: PaymentsComponent, canActivate: [authGuard] },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [roleGuard], data: { roles: ['Administrator'] } },
  { path: '**', redirectTo: 'dashboard' }
];
