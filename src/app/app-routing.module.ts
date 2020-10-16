import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ProductsComponent} from './products/products.component';
import{CustomersComponent} from './customers/customers.component';
import{InvoicesComponent} from './invoices/invoices.component';
import { from } from 'rxjs';
import { DisplayComponent } from './invoices/display/display.component';
import{CreateComponent} from './invoices/create/create.component';
import{NavbarComponent} from './navbar/navbar.component';


const routes: Routes = [
  {
    component: ProductsComponent,
    path: 'products'
  },
  {
    component: CustomersComponent,
    path: 'customers'
  },
  {
    component: InvoicesComponent,
    path: 'invoices',
    children:[
      {path:'display',component: DisplayComponent},
      { path:'create',component: CreateComponent}
    ]
},
  {
     path:"**",redirectTo: 'invoice/display'
  },
  {
    component: DisplayComponent,
    path:'display'
  },
  {
    component: CreateComponent,
    path:'create'
  },
  {
    component:NavbarComponent,
    path:'navbar'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
