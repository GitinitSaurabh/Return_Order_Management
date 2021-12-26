import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharges } from 'src/app/shared/models/charges';
import { IComponentDetail, IProcessRequest } from 'src/app/shared/models/processRequest';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-confirmform',
  templateUrl: './confirmform.component.html',
  styleUrls: ['./confirmform.component.scss']
})
export class ConfirmformComponent implements OnInit {

  request: IProcessRequest;
  charges: ICharges;
  constructor(private formsservice: FormsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.loadRequest();
  }

  loadRequest(){
    this.formsservice.getProcessResponse(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(request => {
      this.request = request;
    },error =>{
        console.log(error);
      });
    this.formsservice.getCharges(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(charges => {
      this.charges = charges;
    },error =>{
        console.log(error);
      });

  }

}
