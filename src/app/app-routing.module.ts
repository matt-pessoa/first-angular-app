import { NgModule } from '@angular/core'; //gotta use the decorator module
import { RouterModule, Routes } from '@angular/router';
//RouterModule: <router-outlet>
//Routes: interface to avoid typos when defining routes

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
  //when they go to the root of our website, they should be directioned to /customers route
  { path: '**', pathMatch: 'full', redirectTo: '/customers' },
  //if they go to a route that doesn't exists, directs to /customers
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //forRoot is a function and it is called ONE TIME in an app
  exports: [RouterModule],
  //making RouterModule available for anyone that needs it
})
export class AppRoutingModule {}
