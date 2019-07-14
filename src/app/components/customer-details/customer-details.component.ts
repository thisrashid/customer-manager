import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ICustomer } from 'src/app/models/customer';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cm-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: ICustomer;
  @Input() editMode: boolean;
  @Output() save = new EventEmitter<ICustomer>();
  @Output() cancel = new EventEmitter<void>();

  customerForm: FormGroup;

  get name() { return this.customerForm.get('name'); }
  get address() { return this.customerForm.get('address'); }
  get city() { return this.customerForm.get('city'); }
  get state() { return this.customerForm.get('state'); }

  ngOnInit() {
    this.customerForm = new FormGroup({
      name: new FormControl(this.customer.name, [Validators.required]),
      address: new FormControl(this.customer.address, [Validators.required]),
      city: new FormControl(this.customer.city, [Validators.required]),
      state: new FormControl(this.customer.state, [Validators.required])
    });
  }

  onSubmit($event) {
    this.save.emit({...this.customer, ...this.customerForm.value});
  }
}
