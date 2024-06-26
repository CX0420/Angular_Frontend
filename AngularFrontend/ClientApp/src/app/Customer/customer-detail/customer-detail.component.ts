import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../services/CustomerService';
import { CustomerModel } from '../../../models/CustomerModel';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
})
export class CustomerDetailComponent implements OnInit {
  customer: CustomerModel = {
    customerId: 0,
    customerName: '',
    customerEmail: '',
    customerPhoneNumber: '',
    customerGender: 0
  };
  customerId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.customerId = +params.get('id')!;
      if (this.customerId) {
        this.customerService.getCustomerDetails(this.customerId).subscribe(
          data => this.customer = data,
          error => console.error('Error fetching customer details:', error)
        );
      }
    });
  }

  submitForm() {
    if (this.customer) {
      this.customerService.updateCustomer(this.customer).subscribe(
        response => {
          alert('Customer Updated Successfully!');
          this.router.navigate(['/customer-data']);
        },
        error => console.error('Error updating customer:', error)
      );
    }
  }

  goBack(): void {
    this.location.back();
  }
}
