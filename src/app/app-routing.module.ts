import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { AboutComponent } from './about/about/about.component';
import { LoginComponent } from './login/login/login.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  { path: 'customers', component: CustomerListComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
