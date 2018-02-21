import { Employee } from './employee.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class EmployeeService {

  employeeList: AngularFireList<any>;
  selectedEmployee: Employee;

  constructor(private firebase: AngularFireDatabase) { }

  getdata(){
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }

  insertemployee(employee: Employee){
     this.employeeList.push({
      name: employee.name,
      position:employee.position,   
      office:employee.office,
      salary:employee.salary
     });
  }

  updateEmployee(employee: Employee){
     this.employeeList.update(employee.$key,{
      name: employee.name,
      position:employee.position,   
      office:employee.office,
      salary:employee.salary
     })
  }

  deleteEmployee($key: string){
     this.employeeList.remove($key);
  }

}
