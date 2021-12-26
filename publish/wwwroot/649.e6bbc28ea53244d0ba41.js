"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[649],{287:(C,c,m)=>{m.r(c),m.d(c,{FormsModule:()=>A});var i=m(583),u=m(649),n=m(665),e=m(639),l=m(215),f=m(2),g=m(340),Z=m(841);let a=(()=>{class o{constructor(t,s){this.http=t,this.router=s,this.baseUrl=g.N.apiUrl,this.requestSource=new l.X(null),this.request$=this.requestSource.asObservable()}submitRequest(t){return this.http.post(this.baseUrl+"ComponentProcessing",t).pipe((0,f.U)(s=>{if(s)return this.requestSource.next(s.processRequest),s}))}getProcessResponse(t){return this.http.get(this.baseUrl+"ComponentProcessing/"+t)}getCharges(t){return this.http.get(this.baseUrl+"PackageAndDelivery/"+t)}paymentsuccess(t){return this.http.post(this.baseUrl+"ComponentProcessing/CompleteProcessing",t)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(Z.eN),e.LFG(u.F0))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function h(o,r){if(1&o&&(e.TgZ(0,"option"),e._uU(1),e.qZA()),2&o){const t=r.$implicit;e.xp6(1),e.Oqu(t)}}function q(o,r){if(1&o&&(e.TgZ(0,"table",2),e.TgZ(1,"thead"),e.TgZ(2,"tr"),e.TgZ(3,"th",3),e._uU(4,"User Name"),e.qZA(),e.TgZ(5,"th",3),e._uU(6,"Type"),e.qZA(),e.TgZ(7,"th",3),e._uU(8,"Product Name"),e.qZA(),e.TgZ(9,"th",3),e._uU(10,"Quantity"),e.qZA(),e.TgZ(11,"th",3),e._uU(12,"Processing Charge"),e.qZA(),e.TgZ(13,"th",3),e._uU(14,"Delivery Charge"),e.qZA(),e.TgZ(15,"th",3),e._uU(16,"Delivery date"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"tbody"),e.TgZ(18,"tr"),e.TgZ(19,"th",4),e._uU(20),e.qZA(),e.TgZ(21,"td"),e._uU(22),e.qZA(),e.TgZ(23,"td"),e._uU(24),e.qZA(),e.TgZ(25,"td"),e._uU(26),e.qZA(),e.TgZ(27,"td"),e._uU(28),e.qZA(),e.TgZ(29,"td"),e._uU(30),e.qZA(),e.TgZ(31,"td"),e._uU(32),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o){const t=e.oxw();e.xp6(20),e.Oqu(t.request.userName),e.xp6(2),e.Oqu(t.request.componentDetail.componentType),e.xp6(2),e.Oqu(t.request.componentDetail.componentName),e.xp6(2),e.Oqu(t.request.componentDetail.quantity),e.xp6(2),e.Oqu(t.charges.processingCharge),e.xp6(2),e.Oqu(t.charges.packagingAndDeliveryCharge),e.xp6(2),e.Oqu(t.charges.dateOfDelivery)}}const y=function(){return["/forms/paymentsuccess"]},T=[{path:"returnform",component:(()=>{class o{constructor(t,s){this.formsservice=t,this.router=s,this.componentType=["Accessory","Integral"]}ngOnInit(){this.createRequestForm()}createRequestForm(){this.returnForm=new n.cw({userName:new n.NI,contactNumber:new n.NI,componentDetail:new n.cw({componentType:new n.NI,componentName:new n.NI,quantity:new n.NI})})}onSubmit(){console.log(this.returnForm.value),this.formsservice.submitRequest(this.returnForm.value).subscribe(t=>{this.requestId=t.processRequestId,this.router.navigateByUrl("/forms/confirmform/"+this.requestId)},t=>{console.log(t)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a),e.Y36(u.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-returnform"]],decls:35,vars:2,consts:[[1,"text-center","mb-4"],[1,"container"],[3,"formGroup","ngSubmit"],[1,"row","mb-4"],[1,"form-outline"],["for","form6Example1",1,"form-label"],["type","text","formControlName","userName",1,"form-control"],[1,"form-outline","mb-4"],["for","Phone"],["type","text","formControlName","contactNumber",1,"form-control"],["formGroupName","componentDetail"],[1,"form-group","form-outline","mb-4"],["for","Component Type"],["formControlName","componentType",1,"form-control"],["disabled",""],[4,"ngFor","ngForOf"],[1,"col","form-outline","mb-4"],["for","Component Name"],["type","text","formControlName","componentName",1,"form-control"],["for","Quantity"],["type","number","formControlName","quantity",1,"form-control"],["type","submit",1,"btn","btn-primary","btn-block","mb-4"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._uU(2,"Return Request Form"),e.qZA(),e.qZA(),e.TgZ(3,"div",1),e.TgZ(4,"form",2),e.NdJ("ngSubmit",function(){return s.onSubmit()}),e.TgZ(5,"div",3),e.TgZ(6,"div",4),e.TgZ(7,"label",5),e._uU(8,"Full Name"),e.qZA(),e._UZ(9,"input",6),e.qZA(),e.qZA(),e.TgZ(10,"div",7),e.TgZ(11,"label",8),e._uU(12,"Phone"),e.qZA(),e._UZ(13,"input",9),e.qZA(),e.TgZ(14,"fieldset",10),e.TgZ(15,"div",11),e.TgZ(16,"label",12),e._uU(17,"Component Type"),e.qZA(),e.TgZ(18,"select",13),e.TgZ(19,"option",14),e._uU(20,"Select Type"),e.qZA(),e.TgZ(21,"option"),e._uU(22,"Choose Type"),e.qZA(),e.YNc(23,h,2,1,"option",15),e.qZA(),e.qZA(),e.TgZ(24,"div",16),e.TgZ(25,"div",4),e.TgZ(26,"label",17),e._uU(27,"Component Name"),e.qZA(),e._UZ(28,"input",18),e.qZA(),e.qZA(),e.TgZ(29,"div",7),e.TgZ(30,"label",19),e._uU(31,"Quantity"),e.qZA(),e._UZ(32,"input",20),e.qZA(),e.qZA(),e.TgZ(33,"button",21),e._uU(34,"Place order"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("formGroup",s.returnForm),e.xp6(19),e.Q6J("ngForOf",s.componentType))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,n.x0,n.EJ,n.YN,n.Kr,i.sg,n.wV],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center}"]}),o})()},{path:"confirmform/:id",component:(()=>{class o{constructor(t,s,p){this.formsservice=t,this.router=s,this.activatedRoute=p}ngOnInit(){this.loadRequest()}onSubmit(){this.router.navigateByUrl("/forms/paymentsuccess")}loadRequest(){this.formsservice.getProcessResponse(+this.activatedRoute.snapshot.paramMap.get("id")).subscribe(t=>{this.request=t},t=>{console.log(t)}),this.formsservice.getCharges(+this.activatedRoute.snapshot.paramMap.get("id")).subscribe(t=>{this.charges=t},t=>{console.log(t)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a),e.Y36(u.F0),e.Y36(u.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-confirmform"]],decls:3,vars:3,consts:[["class","table table-dark table-striped",4,"ngIf"],["type","button","routerLinkActive","router-link-active",1,"btn","btn-outline-primary","me-2",3,"routerLink"],[1,"table","table-dark","table-striped"],["scope","col"],["scope","row"]],template:function(t,s){1&t&&(e.YNc(0,q,33,7,"table",0),e.TgZ(1,"button",1),e._uU(2,"Proceed to payment"),e.qZA()),2&t&&(e.Q6J("ngIf",s.request&&s.charges),e.xp6(1),e.Q6J("routerLink",e.DdM(2,y)))},directives:[i.O5,u.Od,u.rH],styles:[""]}),o})()},{path:"paymentsuccess",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-paymentsuccess"]],decls:2,vars:0,template:function(t,s){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Payment Successful"),e.qZA())},styles:[""]}),o})()}];let b=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[i.ez,u.Bz.forChild(T)],u.Bz]}),o})();var v=m(466);let A=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[i.ez,v.m,b]]}),o})()}}]);