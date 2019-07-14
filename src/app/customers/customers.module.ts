import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ListViewModule } from '../components/list-view/list-view.module';
import { CardViewModule } from '../components/card-view/card-view.module';
import { MapViewModule } from '../components/map-view/map-view.module';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerDetailsModule } from '../components/customer-details/customer-details.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CustomerListComponent, CustomerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    ListViewModule,
    CardViewModule,
    MapViewModule,
    MatFormFieldModule,
    CustomerDetailsModule
  ],
  exports: [CustomerListComponent]
})
export class CustomersModule { }
