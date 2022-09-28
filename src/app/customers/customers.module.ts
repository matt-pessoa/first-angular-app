import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //child components shouldn't import BrowserModule

import { CustomersComponent } from './customers.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomersComponent],
  exports: [CustomersComponent], //anyone that imports this module gets acces to CustomersComponent
})
export class CustomersModule {}
