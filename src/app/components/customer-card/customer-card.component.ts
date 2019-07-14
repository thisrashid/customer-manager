import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ICustomer } from 'src/app/models/customer';

@Component({
  selector: 'cm-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerCardComponent {

  @Input() customer: ICustomer;

}
