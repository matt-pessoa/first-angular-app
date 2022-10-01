import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';

const routes: Routes = [{ path: 'customers', component: CustomersComponent }];
//declares which component should be rendered in the path customers

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
//of course we've got to declare this routingmodule inside our feature module
