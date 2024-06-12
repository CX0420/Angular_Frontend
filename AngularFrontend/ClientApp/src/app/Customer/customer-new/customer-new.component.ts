import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../services/CustomerService';
import { CustomerModel } from '../../../models/CustomerModel';
import { FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
})
export class CustomerNewComponent implements OnInit {
  customer: CustomerModel = {
    customerId: 0,
    customerName: '',
    customerEmail: '',
    customerPhoneNumber: '',
    customerGender: 1
  };

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    
  }

  submitForm() {
    if (this.customer) { 
      this.customerService.addCustomer(this.customer).subscribe(
        response => {
          alert('Customer Added Successfully!');
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
