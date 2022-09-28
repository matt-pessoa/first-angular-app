import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //child components shouldn't import BrowserModule

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomersComponent, CustomersListComponent],
  exports: [CustomersComponent, CustomersListComponent], //anyone that imports this module gets acces to CustomersComponent
})
export class CustomersModule {}
