"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[181],{810:(v,c,m)=>{m.r(c),m.d(c,{FormsModule:()=>T});var s=m(583),i=m(649),n=m(665),o=m(639),l=m(215),p=m(340),f=m(841);let a=(()=>{class t{constructor(e,u){this.http=e,this.router=u,this.baseUrl=p.N.apiUrl,this.requestSource=new l.X(null),this.request$=this.requestSource.asObservable()}submitRequest(e){return console.log(e),this.http.post(this.baseUrl+"ComponentProcessing",e)}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(f.eN),o.LFG(i.F0))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function Z(t,r){if(1&t&&(o.TgZ(0,"option"),o._uU(1),o.qZA()),2&t){const e=r.$implicit;o.xp6(1),o.Oqu(e)}}const g=[{path:"returnform",component:(()=>{class t{constructor(e,u){this.formsservice=e,this.router=u,this.componentType=["Accessory","Integral"]}ngOnInit(){this.createRequestForm()}createRequestForm(){this.returnForm=new n.cw({userName:new n.NI("",n.kI.required),contactNumber:new n.NI("",n.kI.required),componentType:new n.NI("",n.kI.required),componentName:new n.NI("",n.kI.required),quantity:new n.NI("",n.kI.required)})}onSubmit(){this.formsservice.submitRequest(this.returnForm.value).subscribe(()=>{this.router.navigateByUrl("/contact")},e=>{console.log(e)})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(a),o.Y36(i.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-returnform"]],decls:34,vars:2,consts:[[1,"text-center","mb-4"],[1,"container"],[3,"formGroup","ngSubmit"],[1,"row","mb-4"],[1,"form-outline"],["for","form6Example1",1,"form-label"],["type","text","formControlName","userName",1,"form-control"],[1,"form-outline","mb-4"],["for","Phone"],["type","number","formControlName","contactNumber",1,"form-control"],[1,"form-group","form-outline","mb-4"],["for","Component Type"],["formControlName","componentType",1,"form-control"],["disabled",""],[4,"ngFor","ngForOf"],[1,"col","form-outline","mb-4"],["for","Component Name"],["type","text","formControlName","componentName",1,"form-control"],["for","Quantity"],["type","number","formControlName","quantity",1,"form-control"],["type","submit",1,"btn","btn-primary","btn-block","mb-4"]],template:function(e,u){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"h1"),o._uU(2,"Return Request Form"),o.qZA(),o.qZA(),o.TgZ(3,"div",1),o.TgZ(4,"form",2),o.NdJ("ngSubmit",function(){return u.onSubmit()}),o.TgZ(5,"div",3),o.TgZ(6,"div",4),o.TgZ(7,"label",5),o._uU(8,"Full Name"),o.qZA(),o._UZ(9,"input",6),o.qZA(),o.qZA(),o.TgZ(10,"div",7),o.TgZ(11,"label",8),o._uU(12,"Phone"),o.qZA(),o._UZ(13,"input",9),o.qZA(),o.TgZ(14,"div",10),o.TgZ(15,"label",11),o._uU(16,"Component Type"),o.qZA(),o.TgZ(17,"select",12),o.TgZ(18,"option",13),o._uU(19,"Select Type"),o.qZA(),o.TgZ(20,"option"),o._uU(21,"Choose Type"),o.qZA(),o.YNc(22,Z,2,1,"option",14),o.qZA(),o.qZA(),o.TgZ(23,"div",15),o.TgZ(24,"div",4),o.TgZ(25,"label",16),o._uU(26,"Component Name"),o.qZA(),o._UZ(27,"input",17),o.qZA(),o.qZA(),o.TgZ(28,"div",7),o.TgZ(29,"label",18),o._uU(30,"Quantity"),o.qZA(),o._UZ(31,"input",19),o.qZA(),o.TgZ(32,"button",20),o._uU(33,"Place order"),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(4),o.Q6J("formGroup",u.returnForm),o.xp6(18),o.Q6J("ngForOf",u.componentType))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,n.wV,n.EJ,n.YN,n.Kr,s.sg],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center}"]}),t})()},{path:"confirmform",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-confirmform"]],decls:2,vars:0,template:function(e,u){1&e&&(o.TgZ(0,"p"),o._uU(1,"confirmform works!"),o.qZA())},styles:[""]}),t})()}];let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[s.ez,i.Bz.forChild(g)],i.Bz]}),t})();var y=m(466);let T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[s.ez,y.m,d]]}),t})()}}]);