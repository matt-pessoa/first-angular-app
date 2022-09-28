import { NgModule } from '@angular/core';
//child components shouldn't import BrowserModule, but CommonModule instead
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    FilterTextboxComponent,
  ],
  //anyone that imports this module gets acces to CustomersComponent
  exports: [CustomersComponent, CustomersListComponent, FilterTextboxComponent],
})
export class CustomersModule {}
