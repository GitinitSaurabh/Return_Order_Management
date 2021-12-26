import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnformComponent } from './returnform/returnform.component';
import { ConfirmformComponent } from './confirmform/confirmform.component';
import { FormsRoutingModule } from './forms-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';



@NgModule({
  declarations: [
    ReturnformComponent,
    ConfirmformComponent,
    PaymentsuccessComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
