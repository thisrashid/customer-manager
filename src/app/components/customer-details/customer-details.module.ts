import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsComponent } from './customer-details.component';
import { AgmCoreModule } from '@agm/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [CustomerDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBv1X3jU0y6VrSiI2C5c20Kkpt903RSPwQ'
    }),
  ],
  exports: [CustomerDetailsComponent]
})
export class CustomerDetailsModule { }
