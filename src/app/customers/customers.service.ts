import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CUSTOMERS_LIST } from './customers.data';
import { IResult, ICustomer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private _pageSize = 10;
  get pageSize() {
    return this._pageSize;
  }
  set pageSize(page) {
    this._pageSize = page;
  }

  private CUSTOMERS = CUSTOMERS_LIST;

  getCustomers(pageIndex: number, filter: string = ''): Observable<IResult> {
    return new Observable(subscriber => {
      const start = (pageIndex - 1) * this.pageSize;
      const customers = this.filter(filter).slice(start, start + this.pageSize);
      subscriber.next({results: customers, info: {length: CUSTOMERS_LIST.results.length, pageIndex, pageSize: this.pageSize}});
      subscriber.complete();
    });
  }

  getCustomerById(id: number): Observable<ICustomer> {
    return new Observable(subscriber => {
      const customer = this.CUSTOMERS.results.find(row => row.id === id);
      subscriber.next(customer);
      subscriber.complete();
    });
  }

  save(data: ICustomer): Observable<ICustomer> {
    return new Observable(subscriber => {
      if (data.id) {
        this.CUSTOMERS.results = this.CUSTOMERS.results.map(customer => customer.id === data.id ? data : customer);
      } else {
        data.id = this.CUSTOMERS.results.length + 1;
        this.CUSTOMERS.results = [...this.CUSTOMERS.results, data];
      }

      subscriber.next(data);
      subscriber.complete();
    });
  }

  private filter(filter: string) {
    return this.CUSTOMERS.results
      .filter(customer => ~JSON.stringify(customer)
        .toLocaleLowerCase()
        .indexOf(filter.trim().toLocaleLowerCase())
      );
  }
}
