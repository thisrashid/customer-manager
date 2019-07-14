import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewComponent } from './card-view.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { CustomerCardModule } from '../customer-card/customer-card.module';

@NgModule({
  declarations: [CardViewComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatCardModule,
    CustomerCardModule
  ],
  exports: [CardViewComponent]
})
export class CardViewModule { }
