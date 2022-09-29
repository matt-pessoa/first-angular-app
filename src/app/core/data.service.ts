import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
//Observable allows us do deal with async operations
//Allows functions to subscribe to Observable and when the data is returned, they'll get it
//You can convert an Observable to promises (but you don't really need to)
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder } from '../../app/shared/interfaces';

@Injectable()
export class DataService {
  baseUrl: string = 'assets/';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<ICustomer[]> {
    //HttpClient to call the server, get the customers.json and return it to a subscribed component by calling the getCustomers function
    return (
      this.http
        //call the server baseUrl to get a data in the format of ICustomer[]
        .get<ICustomer[]>(this.baseUrl + 'customers.json')
        //Observables are aware of errors and we can treat them using .pipe
        .pipe(catchError(this.handleError))
    );
  }

  getCustomer(id: number): Observable<ICustomer | null> {
    //call the server and get an array of ICustomer
    return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json').pipe(
      //as the data is flowing through the pipe, we can get to that response data (customers)
      map((customers) => {
        //now as we grabbed the data, we want to filter it by the passed id
        let customer = customers.filter((cust: ICustomer) => cust.id === id);
        //and return the correspondent customer or null
        return customer && customer.length ? customer[0] : null;
      }),
      //if there's an error, now we deal with it
      catchError(this.handleError)
    );
  }

  getOrders(id: number): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.baseUrl + 'orders.json').pipe(
      //whatever is returned by the map, this is the data the caller will get when it is subscribed
      map((orders) => {
        let custOrders = orders.filter(
          (order: IOrder) => order.customerId === id
        );
        return custOrders;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(() => new Error(errMessage));
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return throwError(() => new Error(error || 'Node.js server error'));
  }
}
