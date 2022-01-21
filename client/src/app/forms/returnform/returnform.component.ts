import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPensionDetails } from 'src/app/shared/models/pensionDetails';
import { IProcessedPension } from 'src/app/shared/models/processedPension';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-returnform',
  templateUrl: './returnform.component.html',
  styleUrls: ['./returnform.component.scss']
})
export class ReturnformComponent implements OnInit {
  componentType: string[] = ['Accessory','Integral'];
  returnForm: FormGroup

  constructor(private formsservice: FormsService, private router: Router) { }

  ngOnInit(): void {
    this.createRequestForm();
  }

  createRequestForm(){
    this.returnForm = new FormGroup({
      aadhaarCardNumber: new FormControl('',[Validators.required,Validators.pattern(/^\d{4}\d{4}\d{4}$/)])
    });

  }

  onSubmit(){

    this.formsservice.submitRequest(this.returnForm.value)
    .subscribe((res: IProcessedPension) =>{
      this.router.navigateByUrl('/forms/confirmform/')
    }, error =>{
      this.InvalidAadhaarId();
    });

  }
  InvalidAadhaarId() {
    window.alert('Invalid Aadhaar Id');
  }
  

}
