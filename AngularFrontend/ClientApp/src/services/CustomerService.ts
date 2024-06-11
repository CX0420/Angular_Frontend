 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerModel } from '../models/CustomerModel'; // assuming you have a Customer model

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'https://localhost:7007/api/Customers'; // replace with your API URL

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<CustomerModel[]> {
    return this.http.get<CustomerModel[]>(this.apiUrl);
  }

  getCustomerDetails(id: number): Observable<CustomerModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<CustomerModel>(url);
  }

  addCustomer(customer: CustomerModel): Observable<CustomerModel> {
    return this.http.post<CustomerModel>(this.apiUrl, customer);
  }

  updateCustomer(customer: CustomerModel): Observable<void> {
    const url = `${this.apiUrl}/${customer.customerId}`;
    return this.http.put<void>(url, customer);
  }

  deleteCustomer(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  searchCustomers(keyword: string): Observable<CustomerModel[]>{
    const url = `${this.apiUrl}/search/${keyword}`;
    return this.http.get<CustomerModel[]>(url);
  }
}
