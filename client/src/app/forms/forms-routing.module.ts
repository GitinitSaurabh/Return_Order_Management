import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReturnformComponent } from './returnform/returnform.component';
import { ConfirmformComponent } from './confirmform/confirmform.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';


const routes: Routes = [
  {path: 'returnform', component: ReturnformComponent},
  {path: 'confirmform/:id', component: ConfirmformComponent},
  {path: 'paymentsuccess', component: PaymentsuccessComponent},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
