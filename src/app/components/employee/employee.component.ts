import { Employee } from './../../shared/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  newemployee: Employee;

  constructor() { 
    this.newemployee = {
      name: "",
      position:"",
      office:"",
      salary:null
    }
  }

  ngOnInit() {
  }

}
