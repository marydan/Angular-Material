import { Component, OnInit } from '@angular/core';
import { Employee } from '../emp';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 
  empobj : Employee;

  constructor()
     {
   this.empobj=new Employee(100,"Sandra");
      }
  
  ngOnInit(): void {

  }

}
