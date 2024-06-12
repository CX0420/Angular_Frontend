import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CustomerListComponent } from './Customer/customer-data/customer-list.component';
import { CustomerDetailComponent } from './Customer/customer-detail/customer-detail.component';
import { CustomerNewComponent } from './Customer/customer-new/customer-new.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerNewComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: CustomerListComponent, pathMatch: 'full' },
      { path: 'customer-data', component: CustomerListComponent },
      { path: 'customer/:id', component: CustomerDetailComponent },
      { path: 'customer-new', component: CustomerNewComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
