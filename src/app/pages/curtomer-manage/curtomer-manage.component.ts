import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-curtomer-manage',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule,],
  templateUrl: './curtomer-manage.component.html',
  styleUrls: ['./curtomer-manage.component.css']
})
export class CurtomerManageComponent {
  public customerList: any;

  public customer = {
    id: "",
    name: "",
    city: "",
    contact: ""
  };

  constructor(private http: HttpClient) {
    this.viewAll();
  }

  addCustomer(){
    this.http.post("http://localhost:8080/customer/add-customer",this.customer).subscribe(
      (data) =>{
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
      }
    )
  }

  viewAll() {
    this.http.get("http://localhost:8080/customer/get-all").subscribe(
      (data) => {
        this.customerList = data;
        console.log(data);
      }
    );
  }

  deleteCustomer(customer: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/customer/delete-customer/${customer.id}`, { responseType: 'text' }).subscribe(
          res => {
            console.log(res);
            this.viewAll();
          }
        );
        console.log(customer);

        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Customer has been deleted.",
          icon: "success"
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Customer is safe :)",
          icon: "error"
        });
      }
    });
  }

  updateCustomer(customer: any) {
    console.log(customer);
    if (customer != null) {
      this.customer = customer;
    }
  }

  saveUpdatedetails() {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((sweetalert2) => {
      if (sweetalert2.isConfirmed) {
        this.http.put("http://localhost:8080/customer/update-cutomer", this.customer).subscribe(
          res => {
            console.log("Updated");
            this.viewAll();
          }
        );
        Swal.fire("Saved!", "", "success");
      } else if (sweetalert2.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }
}


