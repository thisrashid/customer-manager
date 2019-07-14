import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from '../customers.service';
import { ICustomer } from 'src/app/models/customer';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'cm-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customerId: number;
  customer: ICustomer;

  tabNames = {
    details: 'details',
    orders: 'orders',
    edit: 'edit'
  };

  lat: number;
  lng: number;
  tab: string;
  customerForm: FormGroup;

  get name()    { return this.customerForm.get('name');    }
  get address() { return this.customerForm.get('address'); }
  get city()    { return this.customerForm.get('city');    }
  get state()   { return this.customerForm.get('state');   }

  constructor(
    private route: ActivatedRoute, 
    private location: Location, 
    private customersService: CustomersService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.customerId = +params.id;
      this.tab = params.tab || 'details';
    });

    this.customersService
    .getCustomerById(this.customerId)
    .subscribe(data => {
      this.customer = data;
      this.lat = +data.location.latitude;
      this.lat = +data.location.latitude;
    }, error => {
      console.error(error);
    });
  }

  onSave(customer) {
    this.customersService.save(customer).subscribe(data => {
      this.location.back();
    });
  }

  onCancel() {
    this.location.back();
  }
}
