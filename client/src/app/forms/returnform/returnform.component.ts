import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICharges } from 'src/app/shared/models/charges';
import { IProcessRequest } from 'src/app/shared/models/processRequest';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-returnform',
  templateUrl: './returnform.component.html',
  styleUrls: ['./returnform.component.scss']
})
export class ReturnformComponent implements OnInit {
  componentType: string[] = ['Accessory','Integral'];
  requestId: number;
  returnForm: FormGroup

  constructor(private formsservice: FormsService, private router: Router) { }

  ngOnInit(): void {
    this.createRequestForm();
  }

  createRequestForm(){
    this.returnForm = new FormGroup({
      userName: new FormControl(),
      contactNumber: new FormControl(),
      componentDetail:new FormGroup({
        componentType: new FormControl(),
        componentName: new FormControl(),
        quantity: new FormControl(),
      })
    });

  }

  onSubmit(){

    console.log(this.returnForm.value);
    this.formsservice.submitRequest(this.returnForm.value)
    .subscribe((res: ICharges) =>{
      this.requestId = res.processRequestId;
      this.router.navigateByUrl('/forms/confirmform/'+ this.requestId)
    }, error =>{
      console.log(error);
    });

  }

  

}
