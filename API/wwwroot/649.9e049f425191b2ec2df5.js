"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[649],{287:(T,p,s)=>{s.r(p),s.d(p,{FormsModule:()=>A});var a=s(583),m=s(649),c=s(665),t=s(639),d=s(215),h=s(2),l=s(340),g=s(841);let f=(()=>{class e{constructor(o,r){this.http=o,this.router=r,this.baseUrl=l.N.apiUrl,this.requestSource=new d.X(null),this.request$=this.requestSource.asObservable()}submitRequest(o){const i=JSON.stringify(o);return console.log(i),this.http.post(l.N.processPensionApi,o,{headers:{"content-type":"application/json"}}).pipe((0,h.U)(u=>{if(u)return this.processedPensionDetails=u,console.log(u),u}))}getProcessResponse(o){return this.http.post(l.N.processPensionApi,o)}paymentsuccess(o){return this.http.post(this.baseUrl+"ComponentProcessing/CompleteProcessing",o)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(g.eN),t.LFG(m.F0))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function v(e,n){if(1&e&&(t.TgZ(0,"table",2),t.TgZ(1,"thead"),t.TgZ(2,"tr"),t.TgZ(3,"th",3),t._uU(4,"Pension Amount"),t.qZA(),t.TgZ(5,"th",3),t._uU(6,"Bank Service Charge"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"tbody"),t.TgZ(8,"tr"),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const o=t.oxw();t.xp6(10),t.Oqu(o.request.pensionAmount),t.xp6(2),t.Oqu(o.request.bankServiceCharge)}}const Z=function(){return["/forms/paymentsuccess"]},b=[{path:"returnform",component:(()=>{class e{constructor(o,r){this.formsservice=o,this.router=r,this.componentType=["Accessory","Integral"]}ngOnInit(){this.createRequestForm()}createRequestForm(){this.returnForm=new c.cw({aadhaarCardNumber:new c.NI})}onSubmit(){console.log(this.returnForm.value),this.formsservice.submitRequest(this.returnForm.value).subscribe(o=>{this.router.navigateByUrl("/forms/confirmform/")},o=>{console.log(o)})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(f),t.Y36(m.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-returnform"]],decls:12,vars:1,consts:[[1,"text-center","mb-4"],[1,"container"],[3,"formGroup","ngSubmit"],[1,"row","mb-4"],[1,"form-outline"],["for","form6Example1",1,"form-label"],["type","text","formControlName","aadhaarCardNumber",1,"form-control"],["type","submit",1,"btn","btn-primary","btn-block","mb-4"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"h1"),t._uU(2,"Return Request Form"),t.qZA(),t.qZA(),t.TgZ(3,"div",1),t.TgZ(4,"form",2),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(5,"div",3),t.TgZ(6,"div",4),t.TgZ(7,"label",5),t._uU(8,"Aadhar Card Number"),t.qZA(),t._UZ(9,"input",6),t.qZA(),t.qZA(),t.TgZ(10,"button",7),t._uU(11,"Submit"),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(4),t.Q6J("formGroup",r.returnForm))},directives:[c._Y,c.JL,c.sg,c.Fj,c.JJ,c.u],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center}"]}),e})()},{path:"confirmform/:id",component:(()=>{class e{constructor(o,r,i){this.formsservice=o,this.router=r,this.activatedRoute=i}ngOnInit(){this.loadRequest()}onSubmit(){this.router.navigateByUrl("/forms/paymentsuccess")}loadRequest(){this.request=this.formsservice.processedPensionDetails}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(f),t.Y36(m.F0),t.Y36(m.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-confirmform"]],decls:3,vars:3,consts:[["class","table table-dark table-striped",4,"ngIf"],["type","button","routerLinkActive","router-link-active",1,"btn","btn-outline-primary","me-2",3,"routerLink"],[1,"table","table-dark","table-striped"],["scope","col"]],template:function(o,r){1&o&&(t.YNc(0,v,13,2,"table",0),t.TgZ(1,"button",1),t._uU(2,"Proceed to payment"),t.qZA()),2&o&&(t.Q6J("ngIf",r.request),t.xp6(1),t.Q6J("routerLink",t.DdM(2,Z)))},directives:[a.O5,m.Od,m.rH],styles:[""]}),e})()},{path:"paymentsuccess",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-paymentsuccess"]],decls:2,vars:0,template:function(o,r){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Payment Successful"),t.qZA())},styles:[""]}),e})()}];let C=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.ez,m.Bz.forChild(b)],m.Bz]}),e})();var F=s(466);let A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.ez,F.m,C]]}),e})()}}]);