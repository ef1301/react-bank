(this["webpackJsonpreact-bank"]=this["webpackJsonpreact-bank"]||[]).push([[0],{68:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(37),i=c.n(a),j=c(13),b=c(4),s=c(3),d=c(21),o=c(0),u=function(e){var t=e.component,c=e.location,n=e.path,r=Object(d.a)(e,["component","location","path"]),a=c.state,i=a&&a.user||"",j=a&&a.balance||{debit:{},credit:{}},u=n||"/";return null==i||""===i?Object(o.jsx)(b.a,{to:{pathname:"/login",state:{pathname:u,balance:j}}}):Object(o.jsx)(b.b,Object(s.a)(Object(s.a)({location:c},r),{},{render:function(e){return Object(o.jsx)(t,Object(s.a)({},e))}}))},l=c(18),O=c.n(l),h=c(26),x=c(11),p=c(27),m=c.n(p),f=c(5),v=(c(15),function(e){var t=e.to,c=e.user,n=e.balance,r=e.children,a=Object(d.a)(e,["to","user","balance","children"]);return Object(o.jsx)(j.b,Object(s.a)(Object(s.a)({to:{pathname:t,state:{user:c,balance:n}}},a),{},{children:r}))}),g=function(e){var t=e.location.state,c=t&&t.user||"",r=t&&t.balance||null,a=Object(n.useState)(r),i=Object(x.a)(a,2),j=i[0],b=i[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(h.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://moj-api.herokuapp.com/debits").then((function(e){return b((function(t){return Object(s.a)(Object(s.a)({},t),{},{debit:e.data})}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(h.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://moj-api.herokuapp.com/credits").then((function(e){return b((function(t){return Object(s.a)(Object(s.a)({},t),{},{credit:e.data})}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();null==j&&(e(),t())}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(f.a,{style:{width:"10rem"},children:Object(o.jsx)(f.a.Header,{children:Object(o.jsx)(v,{to:"/",user:c,balance:j,children:Object(o.jsx)("center",{children:"Home"})})})}),Object(o.jsx)(f.a,{style:{width:"10rem"},children:Object(o.jsx)(f.a.Header,{children:Object(o.jsx)(v,{to:"/debits",user:c,balance:j,children:Object(o.jsx)("center",{children:"Debits"})})})}),Object(o.jsx)(f.a,{style:{width:"10rem"},children:Object(o.jsx)(f.a.Header,{children:Object(o.jsx)(v,{to:"/credits",user:c,balance:j,children:Object(o.jsx)("center",{children:"Credits"})})})})]})},y=c(20),w=c(14),C=function(e){var t=e.debit;return Object(o.jsx)("div",{id:"debit-card",children:Object(o.jsxs)(f.a,{style:{width:"40rem"},children:[Object(o.jsxs)(f.a.Header,{children:[Object(o.jsx)("b",{children:"Debit Information for: "})," ",t.description]}),Object(o.jsxs)(f.a.Body,{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("i",{children:"Debit Amount:"})," ",t.amount]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("i",{children:"Debit Date:"})," ",t.date]})]})]})})},D=function(e){var t=e.balance,c=function(e,t){return parseFloat(e,10)+parseFloat(t[1].amount,10)},n=Object.entries(t.credit).reduce(c),r=Object.entries(t.debit).reduce(c),a=n-r;return Object(o.jsxs)(o.Fragment,{children:["Total Credits: ",n,Object(o.jsx)("br",{}),"Total Debits: ",r,Object(o.jsx)("br",{}),"Current Balance: ",a]})},k=c(70),S=function(){var e=new Date;return"".concat(e.toLocaleDateString("en-US")," ").concat(e.toLocaleTimeString("en-US")," ")},H=function(){return Object(k.a)()},F=function(e){var t=e.location.state,c=t.user,r=t.balance,a=Object(n.useState)(r.debit),i=Object(x.a)(a,2),j=i[0],b=i[1],d=Object(s.a)(Object(s.a)({},r),{},{debit:j}),u={description:"",amount:0},l=Object(n.useState)(u),O=Object(x.a)(l,2),h=O[0],p=O[1],m=function(e){e.preventDefault(),p((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(w.a)({},e.target.name,e.target.value))}))};return Object(o.jsxs)("div",{id:"debits",children:[Object(o.jsx)("h1",{children:"Debits"}),Object(o.jsx)(f.a,{style:{width:"10rem"},children:Object(o.jsx)(f.a.Header,{children:Object(o.jsx)(v,{to:"/",user:c,balance:d,children:Object(o.jsx)("center",{children:"Home"})})})}),Object(o.jsxs)("div",{id:"add-debit",children:["Description:"," ",Object(o.jsx)("input",{name:"description",type:"text",value:h.description,onChange:m}),Object(o.jsx)("br",{}),"Amount:"," ",Object(o.jsx)("input",{name:"amount",type:"number",value:h.amount,onChange:m}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:function(e){var t=Object(s.a)(Object(s.a)({},h),{},{id:H(),date:S()});b((function(e){return[].concat(Object(y.a)(e),[t])})),p(u)},children:"Enter"})]}),Object(o.jsx)("br",{}),Object(o.jsx)(D,{balance:d}),Object(o.jsx)("div",{id:"all-debits",children:null!==j&&j.map((function(e,t){return Object(o.jsx)(C,{debit:e},t)}))})]})},A=function(e){var t=e.credit;return Object(o.jsx)("div",{id:"credit-card",children:Object(o.jsxs)(f.a,{style:{width:"40rem"},children:[Object(o.jsxs)(f.a.Header,{children:[Object(o.jsx)("b",{children:"Credit Information for: "})," ",t.description]}),Object(o.jsxs)(f.a.Body,{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("i",{children:"Credit Amount:"})," ",t.amount]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("i",{children:"Credit Date:"})," ",t.date]})]})]})})},B=function(e){var t=e.location.state,c=t.user,r=t.balance,a=Object(n.useState)(r.credit),i=Object(x.a)(a,2),j=i[0],b=i[1],d=Object(s.a)(Object(s.a)({},r),{},{credit:j}),u={description:"",amount:0},l=Object(n.useState)(u),O=Object(x.a)(l,2),h=O[0],p=O[1],m=function(e){e.preventDefault(),p((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(w.a)({},e.target.name,e.target.value))}))};return Object(o.jsxs)("div",{id:"credits",children:[Object(o.jsx)("h1",{children:"Credits"}),Object(o.jsx)(f.a,{style:{width:"10rem"},children:Object(o.jsx)(f.a.Header,{children:Object(o.jsx)(v,{to:"/",user:c,balance:d,children:Object(o.jsx)("center",{children:"Home"})})})}),Object(o.jsxs)("div",{id:"add-credit",children:["Description:"," ",Object(o.jsx)("input",{name:"description",type:"text",value:h.description,onChange:m}),Object(o.jsx)("br",{}),"Amount:"," ",Object(o.jsx)("input",{name:"amount",type:"number",value:h.amount,onChange:m}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:function(e){var t=Object(s.a)(Object(s.a)({},h),{},{id:H(),date:S()});b((function(e){return[].concat(Object(y.a)(e),[t])})),p(u)},children:"Enter"})]}),Object(o.jsx)("br",{}),Object(o.jsx)(D,{balance:d}),Object(o.jsx)("div",{id:"all-credits",children:null!==j&&j.map((function(e,t){return Object(o.jsx)(A,{credit:e},t)}))})]})},E=function(e){var t=e.location.state,c=t.pathname,r=t.balance,a=Object(n.useState)(""),i=Object(x.a)(a,2),b=i[0],s=i[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Login"}),Object(o.jsx)("input",{value:b,onChange:function(e){s(e.target.value)}}),Object(o.jsx)(j.b,{to:{pathname:c,state:{user:b,balance:r}},children:Object(o.jsx)("button",{children:"Login"})})]})},L=function(){return Object(o.jsx)(j.a,{basename:"/react-bank",children:Object(o.jsxs)(b.d,{children:[Object(o.jsx)(b.b,{path:"/",exact:!0,component:g}),Object(o.jsx)(b.b,{path:"/login",exact:!0,component:E}),Object(o.jsx)(u,{exact:!0,path:"/debits",component:F}),Object(o.jsx)(u,{exact:!0,path:"/credits",component:B})]})})};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(L,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.94d162fd.chunk.js.map