import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';
import { ICustomer, IOrder, IOrderItem } from '../shared/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: IOrder[] = [];
  customer!: ICustomer | null;
  id!: number;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute //as the router is showing components based on url routes, //we need to go to this activatedRoute to get /:id for example
  ) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || '');

    console.log(this.id);
    this.dataService.getOrders(this.id).subscribe((orders: IOrder[]) => {
      this.orders = orders;
    });

    this.dataService
      .getCustomer(this.id)
      .subscribe((customer: ICustomer | null) => {
        this.customer = customer;
      });
  }
}
