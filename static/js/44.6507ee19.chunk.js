"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[44],{3121:function(e,n,a){a(2791);var r=a(184);n.Z=function(e){var n=e.message;return(0,r.jsx)("p",{className:"error",children:n})}},8044:function(e,n,a){a.r(n),a.d(n,{default:function(){return f}});var r=a(5861),i=a(9439),t=a(7757),l=a.n(t),s=a(3121),c=a(653),u=a(2791),h=a(1087),o=a(184),d=function(e){e.car;var n=e.id,a=e.year,r=e.make,i=e.model,t=e.type,l=e.img,s=(e.description,e.fuelConsumption,e.engineSize,e.accessories,e.functionalities),c=e.rentalPrice,u=e.address,d=e.rentalCompany;e.rentalConditions,e.mileage;return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:l,width:200,height:300,alt:r}),(0,o.jsxs)("h2",{children:[r," ",i,", ",a," ",c]}),(0,o.jsxs)("p",{children:[u," | ",d,t," | ",n," | ",s]}),(0,o.jsx)(h.rU,{to:"/car-details/".concat(n),children:(0,o.jsx)("button",{type:"submit",children:"learn more"})})]})},m=function(e){var n=e.cars,a=Array.isArray(n)&&n.length;return(0,o.jsx)("ul",{className:"postList",children:a&&n.map((function(e){return(0,o.jsx)(d,{img:e.img,make:e.make,model:e.model,year:e.year,rentalPrice:e.rentalPrice,address:e.address,rentalCompany:e.rentalCompany,type:e.type,id:e.id,functionalities:e.functionalities},e.id)}))})},x=a(1526),p=function(e){var n=e.selectedMake,a=e.handleMakeChange;return(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"carMake",children:"Choose a car make:"}),(0,o.jsxs)("select",{id:"carMake",value:n,onChange:a,children:[(0,o.jsx)("option",{value:"",children:"Enter the text"}),["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"].map((function(e,n){return(0,o.jsx)("option",{value:e,children:e},n)}))]})]})},g=function(e){for(var n=e.selectedPrice,a=e.handlePriceChange,r=[],i=10;i<=300;i+=10)r.push(i);return(0,o.jsxs)("label",{children:[(0,o.jsx)("p",{children:"Price / 1 hour"}),(0,o.jsxs)("select",{value:n,onChange:a,children:[(0,o.jsx)("option",{value:"",children:"All"}),r.map((function(e,n){return(0,o.jsxs)("option",{value:e,children:["$",e]},n)}))]})]})},j=function(e){var n=e.minMileage,a=e.maxMileage,r=e.handleMinMileageChange,i=e.handleMaxMileageChange;return(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Car mileage / km"}),(0,o.jsx)("label",{children:(0,o.jsx)("input",{type:"number",value:n,onChange:r,placeholder:"From"})}),(0,o.jsx)("label",{children:(0,o.jsx)("input",{type:"number",value:a,onChange:i,placeholder:"To"})})]})},M=function(e){var n=e.selectedMake,a=e.handleMakeChange,r=e.selectedPrice,i=e.handlePriceChange,t=e.minMileage,l=e.maxMileage,s=e.handleMinMileageChange,c=e.handleMaxMileageChange,u=e.handleSubmit;return(0,o.jsxs)("form",{onSubmit:u,children:[(0,o.jsx)(p,{selectedMake:n,handleMakeChange:a}),(0,o.jsx)(g,{selectedPrice:r,handlePriceChange:i}),(0,o.jsx)(j,{minMileage:t,maxMileage:l,handleMinMileageChange:s,handleMaxMileageChange:c}),(0,o.jsx)("button",{type:"submit",children:"Search"})]})},f=function(){var e=(0,u.useState)(null),n=(0,i.Z)(e,2),a=n[0],t=n[1],h=(0,u.useState)(!1),d=(0,i.Z)(h,2),p=d[0],g=d[1],j=(0,u.useState)(null),f=(0,i.Z)(j,2),v=f[0],C=f[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,(0,x.cf)();case 4:n=e.sent,t(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),C(e.t0.message);case 11:return e.prev=11,g(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,o.jsxs)("div",{children:[p&&(0,o.jsx)(c.Z,{}),v&&(0,o.jsx)(s.Z,{message:v}),(0,o.jsx)(M,{}),(0,o.jsx)(m,{cars:a})]})}}}]);
//# sourceMappingURL=44.6507ee19.chunk.js.map