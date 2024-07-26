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

  constructor(private http: HttpClient) {}

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
}

  

