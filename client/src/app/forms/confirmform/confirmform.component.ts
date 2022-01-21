import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IProcessedPension } from 'src/app/shared/models/processedPension';
import {IProcessRequest } from 'src/app/shared/models/processRequest';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-confirmform',
  templateUrl: './confirmform.component.html',
  styleUrls: ['./confirmform.component.scss']
})
export class ConfirmformComponent implements OnInit {

  request: IProcessedPension;
  // charges: ICharges;
  constructor(private formsservice: FormsService,private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.loadRequest();
  }
  onSubmit(){
    this.router.navigateByUrl('/forms/paymentsuccess')

    // this.formsservice.paymentsuccess().subscribe(() =>{
    //   this.router.navigateByUrl('/forms/paymentsuccess')
    // }, error =>{
    //   console.log(error);
    // });
  }

  loadRequest(){
    this.request = this.formsservice.processedPensionDetails;
    // this.formsservice.getCharges(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(charges => {
    //   this.charges = charges;
    // },error =>{
    //     console.log(error);
    //   });

  }

}
