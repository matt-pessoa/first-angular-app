// Child of the CustomersComponent
import { Component, OnInit } from '@angular/core';

import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
})
export class CustomersListComponent implements OnInit {
  filteredCustomers: ICustomer[] = [];
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
}
