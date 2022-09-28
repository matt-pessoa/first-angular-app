// Child of the CustomersComponent
import { Component, OnInit, Input } from '@angular/core';

import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
})
export class CustomersListComponent implements OnInit {
  private _customers: ICustomer[] = []; //original value
  @Input() get customers(): ICustomer[] {
    //get the value of props passed by CustomerComponent
    return this._customers; //return its value
  }

  set customers(value: ICustomer[]) {
    //assing the value to filteredCustomers and _customers
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

  filteredCustomers: ICustomer[] = []; //filtered value
  customersOrderTotal!: number;
  currecyCode: string = 'USD';

  constructor() {}

  ngOnInit(): void {}

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((customer: ICustomer) => {
      this.customersOrderTotal += customer.orderTotal;
    });
  }

  sort(prop: string) {
    //A sorter service will handle the sorting
  }
}
