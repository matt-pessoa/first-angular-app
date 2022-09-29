import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';
import { ICustomer } from '../shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  title!: string;
  people!: ICustomer[]; //anything we add into people, it must match ICustomer's interface structure
  isVisible: boolean = true;
  showHide: string = 'Hide';

  changeVisibility(): void {
    this.isVisible = !this.isVisible;
    this.isVisible ? (this.showHide = 'Hide') : (this.showHide = 'Show');
  }

  //we can inject our services by passing it through the constructor
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.title = 'Customers';
    //instead of having a hard coded array, we can call our data service to get the customers
    // this.people = [
    //   {
    //     id: 1,
    //     name: 'john Doe',
    //     city: 'Phoenix',
    //     orderTotal: 9.99,
    //     customerSince: new Date(2014, 7, 10),
    //   },
    //   {
    //     id: 2,
    //     name: 'jane doe',
    //     city: 'Chandler',
    //     orderTotal: 19.99,
    //     customerSince: new Date(2017, 2, 22),
    //   },
    //   {
    //     id: 3,
    //     name: 'michelle thomas',
    //     city: 'Seattle',
    //     orderTotal: 99.99,
    //     customerSince: new Date(2002, 10, 31),
    //   },
    //   {
    //     id: 4,
    //     name: 'jim thomas',
    //     city: 'New York',
    //     orderTotal: 599.99,
    //     customerSince: new Date(2002, 10, 31),
    //   },
    // ];
  }
}
