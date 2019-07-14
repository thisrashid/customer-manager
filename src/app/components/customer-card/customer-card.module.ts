import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerCardComponent } from './customer-card.component';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CustomerCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [CustomerCardComponent]
})
export class CustomerCardModule { }
