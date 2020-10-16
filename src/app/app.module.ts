import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule , Routes} from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import{MatTableModule} from '@angular/material/table' 
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { __makeTemplateObject } from 'tslib';
import { DisplayComponent } from './invoices/display/display.component';
import { CreateComponent } from './invoices/create/create.component';
import{CountryService} from './shared/country.service';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes:Routes=[
      {path:'display',component: DisplayComponent},
      { path:'create',component: CreateComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    InvoicesComponent,
    DisplayComponent,
    CreateComponent,
    NavbarComponent
    
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
