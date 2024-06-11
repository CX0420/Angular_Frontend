import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../../models/CustomerModel';
import { CustomerService } from '../../services/CustomerService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent implements OnInit {
  customers: CustomerModel[] = [];
  searchQuery: string = '';
  loading: Boolean = true;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
    this.loading = false;
  }

  searchCustomer() {
    if (this.searchQuery) {
      this.customerService.searchCustomers(this.searchQuery).subscribe(customers => {
        this.customers = customers;
      });
    } else {
      this.customers = [];
    }
  }

  loadData() {
    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }

  reset() {
    this.searchQuery = '';
    this.loadData();
  }

  addCustomer() {
    this.router.navigate(['/customer-new']); 
  }

  editCustomer(customerId: number) {
    this.router.navigate(['/customer', customerId]);
  }

  deleteCustomer(customerId: number) {
    const result = window.confirm('Are you sure you want to delete this customer?');
    if (result) {
      this.customerService.deleteCustomer(customerId).subscribe(() => {
        this.loadData();
        alert('Customer Deleted Successfully!');
      });
    } else {
      //do nothing
    }
  }

}
