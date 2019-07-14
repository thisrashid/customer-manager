import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { IResult, IResultInfo } from 'src/app/models/customer';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'cm-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  selectedPage = 1;
  customers: IResult;
  info: IResultInfo;
  viewType: string;
  viewTypes = {
    card: 'card',
    list: 'list',
    map: 'map'
  };
  filter = '';

  constructor(private route: ActivatedRoute, private customersService: CustomersService) {}

  ngOnInit() {
    this.route.params.subscribe(params => this.viewType = params.view || 'card');
    this.getCustomers();
  }

  getCustomers() {
    this.customersService.getCustomers(this.selectedPage, this.filter).subscribe(data => this.customers = data);
  }

  onPageChange($event: IResultInfo) {
    this.customersService.pageSize = $event.pageSize;
    this.selectedPage = $event.pageIndex + 1;
    this.getCustomers();
  }

  onFilter(filter: string) {
    this.selectedPage = 1;
    this.filter = filter;
    this.getCustomers();
  }
}
