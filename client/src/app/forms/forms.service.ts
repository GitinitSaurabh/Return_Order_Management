import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ICharges } from '../shared/models/charges';
import { IProcessRequest } from '../shared/models/processRequest';


@Injectable({
  providedIn: 'root'
})
export class FormsService {
  baseUrl = environment.apiUrl;

  private requestSource = new BehaviorSubject<IProcessRequest>(null);
  request$ = this.requestSource.asObservable();
   
  constructor(private http: HttpClient, private router: Router) { }
  
  submitRequest(request: IProcessRequest) {
    return this.http.post(this.baseUrl + 'ComponentProcessing', request).pipe(
      map((request: ICharges)=>{
        if(request){
          this.requestSource.next(request.processRequest);
          return request;
        }
      }));
    }

    getProcessResponse(id: number){
      return this.http.get<IProcessRequest>(this.baseUrl + 'ComponentProcessing/' + id);
    }
    
    getCharges(id: number){
      return this.http.get<ICharges>(this.baseUrl + 'PackageAndDelivery/' + id);

    }

    paymentsuccess(res:void){
      return this.http.post(this.baseUrl + 'ComponentProcessing/CompleteProcessing',res);  
      }

  }
