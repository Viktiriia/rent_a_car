"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[339],{8657:function(n,e,t){t.d(e,{Z:function(){return u}});t(2791);var i,r,o=t(1087),s=t(184),a=function(n){return n.setting?(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",className:"absolute top-[14px] right-[14px] stroke-primary-blue fill-primary-blue",children:(0,s.jsx)("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}):(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",className:"absolute top-[14px] right-[14px] stroke-[#ffffffcc] hover:fill-primary-blue hover:stroke-primary-blue",children:(0,s.jsx)("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},l=t(168),c=t(7924),p=c.ZP.div(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 426px;\n\n  .img-warpper {\n    position: relative;\n    width: 100%;\n    height: 268px;\n    margin-bottom: 14px;\n    overflow: hidden;\n    flex-shrink: 0;\n    border-radius: 14px;\n    background: linear-gradient(\n        180deg,\n        rgba(18, 20, 23, 0.5) 2.5%,\n        rgba(18, 20, 23, 0) 41.07%\n      ),\n      #f3f3f2;\n    box-shadow: var(--btn-box-shadow-hover);\n\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n  .heart {\n    position: absolute;\n    fill: white;\n    top: 14px;\n    right: 14px;\n  }\n  .title-wrapper {\n    display: flex;\n    justify-content: space-between;\n    padding-right: 9px;\n    margin-bottom: 8px;\n    font-size: 16px;\n    font-weight: 500;\n  }\n\n  .model {\n    color: #3470ff;\n  }\n\n  .descr {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 6px;\n    font-size: 12px;\n\n  }\n"]))),d=c.ZP.button(r||(r=(0,l.Z)(["\n  padding: 10px 10px;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  flex-shrink: 0;\n  font-size: 14px;\n  font-weight: 700;\n  border-radius: 15px;\n  width: 100%;\n  color: white;\n  background-color: blue;"]))),u=function(n){var e=n.car,t=n.id,i=n.year,r=n.make,l=n.model,c=n.type,u=n.img,h=n.addFavorite,x=n.setFavorite,f=n.isFavorite,g=n.functionalities,m=n.rentalPrice,b=n.address,w=n.rentalCompany;n.rentalConditions,n.mileage;if(!b||!g||!g[0])return null;var v=b.split(","),j=g[0].split(" ");return(0,s.jsxs)(p,{children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"img-warpper",children:[(0,s.jsx)("img",{src:u,alt:"".concat(r," ").concat(l)}),f?(0,s.jsx)("button",{type:"button",onClick:function(){return function(n){x((function(e){return e.filter((function(e){return e.id!==n}))}))}(e.id)},children:(0,s.jsx)(a,{setting:!0})}):(0,s.jsx)("button",{type:"button",onClick:function(){return h(e.id)},children:(0,s.jsx)(a,{})})]}),(0,s.jsxs)("div",{className:"title-wrapper",children:[(0,s.jsxs)("h2",{children:[(0,s.jsx)("span",{children:r}),", ",(0,s.jsx)("span",{children:i})]}),(0,s.jsx)("p",{children:m})]}),(0,s.jsxs)("p",{className:"descr",children:[v[1]," | ",v[2]," | ",w," ",c," | ",t," |"," ",j[0]," ",j[0]]})]}),(0,s.jsx)(o.rU,{to:"/car-details/".concat(t),children:(0,s.jsx)(d,{type:"submit",children:"Learn more"})})]})}},2339:function(n,e,t){t.r(e);var i=t(9439),r=t(2791),o=t(8657),s=t(184);e.default=function(){var n=(0,r.useState)((function(){return JSON.parse(localStorage.getItem("favorites"))||[]})),e=(0,i.Z)(n,2),t=e[0],a=e[1];(0,r.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(t))}),[t]);var l=function(n){a((function(e){return e.filter((function(e){return e.id!==n}))}))};return(0,s.jsx)("section",{className:"py-[150px]",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("ul",{className:"mb-[100px] grid tablet:grid-cols-2 desktop:grid-cols-4 desktop:gap-y-[50px] desktop:gap-[29px] tablet:gap-[20px] tablet:gap-y-[44px] mobile:gap-y-[38px]",children:t.map((function(n){return(0,s.jsx)(o.Z,{car:n,removeFavorite:l,isFavorite:!0},n.id)}))})})})}}}]);
//# sourceMappingURL=339.cdb0ca50.chunk.js.map