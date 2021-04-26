(this["webpackJsonpreact-bank"]=this["webpackJsonpreact-bank"]||[]).push([[0],{68:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(37),i=c.n(a),j=c(13),s=c(5),b=c(4),d=c(21),o=c(0),l=function(e){var t=e.component,c=e.location,n=e.path,r=Object(d.a)(e,["component","location","path"]),a=c.state,i=a&&a.user||"",j=a&&a.balance||{debit:{},credit:{}},l=n||"/";return null==i||""===i?Object(o.jsx)(s.a,{to:{pathname:"/login",state:{pathname:l,balance:j}}}):Object(o.jsx)(s.b,Object(b.a)(Object(b.a)({location:c},r),{},{render:function(e){return Object(o.jsx)(t,Object(b.a)({},e))}}))},u=c(18),O=c.n(u),h=c(26),x=c(11),m=c(27),p=c.n(m),f=c(3),v=(c(14),function(e){var t=e.to,c=e.user,n=e.balance,r=e.pathname,a=e.children,i=Object(d.a)(e,["to","user","balance","pathname","children"]);return Object(o.jsx)(j.b,Object(b.a)(Object(b.a)({to:{pathname:t,state:{user:c,balance:n,pathname:r}}},i),{},{children:a}))}),g=function(e){var t=e.location.state,c=t&&t.user||{name:"Bob",join:"01/01/2021"},r=t&&t.balance||null,a=Object(n.useState)(r),i=Object(x.a)(a,2),j=i[0],s=i[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(h.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://moj-api.herokuapp.com/debits").then((function(e){return s((function(t){return Object(b.a)(Object(b.a)({},t),{},{debit:e.data})}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(h.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://moj-api.herokuapp.com/credits").then((function(e){return s((function(t){return Object(b.a)(Object(b.a)({},t),{},{credit:e.data})}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();null==j&&(e(),t())}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(f.a,{style:{width:"10rem"},children:Object(o.jsx)(f.a.Header,{children:Object(o.jsx)(v,{to:"/",user:c,balance:j,children:Object(o.jsx)("center",{children:"Home"})})})}),Object(o.jsx)(f.a,{style:{width:"10rem"},children:Object(o.jsx)(f.a.Header,{children:Object(o.jsx)(v,{to:"/login",user:c,balance:j,pathname:"/",children:Object(o.jsx)("center",{children:"Change User"})})})}),Object(o.jsx)(f.a,{style:{width:"10rem"},children:Object(o.jsx)(f.a.Header,{children:Object(o.jsx)(v,{to:"/userProfile",user:c,balance:j,children:Object(o.jsx)("center",{children:"User Profile"})})})}),Object(o.jsx)(f.a,{style:{width:"10rem"},children:Object(o.jsx)(f.a.Header,{children:Object(o.jsx)(v,{to:"/debits",user:c,balance:j,children:Object(o.jsx)("center",{children:"Debits"})})})}),Object(o.jsx)(f.a,{style:{width:"10rem"},children:Object(o.jsx)(f.a.Header,{children:Object(o.jsx)(v,{to:"/credits",user:c,balance:j,children:Object(o.jsx)("center",{children:"Credits"})})})})]})},y=c(20),w=c(15),C=function(e){var t=e.debit;return Object(o.jsx)("div",{id:"debit-card",children:Object(o.jsxs)(f.a,{style:{width:"40rem"},children:[Object(o.jsxs)(f.a.Header,{children:[Object(o.jsx)("b",{children:"Debit Information for: "})," ",t.description]}),Object(o.jsxs)(f.a.Body,{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("i",{children:"Debit Amount:"})," ",t.amount]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("i",{children:"Debit Date:"})," ",t.date]})]})]})})},D=function(e){var t=e.balance,c=function(e,t){return parseFloat(e,10)+parseFloat(t[1].amount,10)},n=Object.entries(t.credit).reduce(c,0),r=Object.entries(t.debit).reduce(c,0),a=n-r;return Object(o.jsxs)(o.Fragment,{children:["Total Credits: ",n.toFixed(2),Object(o.jsx)("br",{}),"Total Debits: ",r.toFixed(2),Object(o.jsx)("br",{}),"Current Balance: ",a.toFixed(2)]})},H=c(70),S=function(){var e=new Date;return"".concat(e.toLocaleDateString("en-US")," ").concat(e.toLocaleTimeString("en-US")," ")},k=function(){return Object(H.a)()},F=function(e){var t=e.location.state,c=t.user,r=t.balance,a=Object(n.useState)(r.debit),i=Object(x.a)(a,2),j=i[0],s=i[1],d=Object(b.a)(Object(b.a)({},r),{},{debit:j}),l={description:"",amount:0},u=Object(n.useState)(l),O=Object(x.a)(u,2),h=O[0],m=O[1],p=function(e){e.preventDefault(),m((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(w.a)({},e.target.name,e.target.value))}))};return Object(o.jsxs)("div",{id:"debits",children:[Object(o.jsx)("h1",{children:"Debits"}),Object(o.jsx)(f.a,{style:{width:"10rem"},children:Object(o.jsx)(f.a.Header,{children:Object(o.jsx)(v,{to:"/",user:c,balance:d,children:Object(o.jsx)("center",{children:"Home"})})})}),Object(o.jsxs)("div",{id:"add-debit",children:["Description:"," ",Object(o.jsx)("input",{name:"description",type:"text",value:h.description,onChange:p}),Object(o.jsx)("br",{}),"Amount:"," ",Object(o.jsx)("input",{name:"amount",type:"number",value:h.amount,onChange:p}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:function(e){var t=Object(b.a)(Object(b.a)({},h),{},{id:k(),date:S()});s((function(e){return[].concat(Object(y.a)(e),[t])})),m(l)},children:"Enter"})]}),Object(o.jsx)("br",{}),Object(o.jsx)(D,{balance:d}),Object(o.jsx)("div",{id:"all-debits",children:null!==j&&j.map((function(e,t){return Object(o.jsx)(C,{debit:e},t)}))})]})},B=function(e){var t=e.credit;return Object(o.jsx)("div",{id:"credit-card",children:Object(o.jsxs)(f.a,{style:{width:"40rem"},children:[Object(o.jsxs)(f.a.Header,{children:[Object(o.jsx)("b",{children:"Credit Information for: "})," ",t.description]}),Object(o.jsxs)(f.a.Body,{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("i",{children:"Credit Amount:"})," ",t.amount]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("i",{children:"Credit Date:"})," ",t.date]})]})]})})},A=function(e){var t=e.location.state,c=t.user,r=t.balance,a=Object(n.useState)(r.credit),i=Object(x.a)(a,2),j=i[0],s=i[1],d=Object(b.a)(Object(b.a)({},r),{},{credit:j}),l={description:"",amount:0},u=Object(n.useState)(l),O=Object(x.a)(u,2),h=O[0],m=O[1],p=function(e){e.preventDefault(),m((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(w.a)({},e.target.name,e.target.value))}))};return Object(o.jsxs)("div",{id:"credits",children:[Object(o.jsx)("h1",{children:"Credits"}),Object(o.jsx)(f.a,{style:{width:"10rem"},children:Object(o.jsx)(f.a.Header,{children:Object(o.jsx)(v,{to:"/",user:c,balance:d,children:Object(o.jsx)("center",{children:"Home"})})})}),Object(o.jsxs)("div",{id:"add-credit",children:["Description:"," ",Object(o.jsx)("input",{name:"description",type:"text",value:h.description,onChange:p}),Object(o.jsx)("br",{}),"Amount:"," ",Object(o.jsx)("input",{name:"amount",type:"number",value:h.amount,onChange:p}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:function(e){var t=Object(b.a)(Object(b.a)({},h),{},{id:k(),date:S()});s((function(e){return[].concat(Object(y.a)(e),[t])})),m(l)},children:"Enter"})]}),Object(o.jsx)("br",{}),Object(o.jsx)(D,{balance:d}),Object(o.jsx)("div",{id:"all-credits",children:null!==j&&j.map((function(e,t){return Object(o.jsx)(B,{credit:e},t)}))})]})},E=function(e){var t=e.location.state,c=t.pathname,r=t.balance,a=Object(n.useState)(""),i=Object(x.a)(a,2),s=i[0],b=i[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Login"}),Object(o.jsx)("input",{value:s,onChange:function(e){b(e.target.value)}}),Object(o.jsx)(j.b,{to:{pathname:c,state:{user:{name:s,join:"01/01/2021"},balance:r}},children:Object(o.jsx)("button",{children:"Login"})})]})},L=function(e){var t=e.location.state,c=t.user,n=t.balance;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h1",{children:[" Welcome ",c.name," "]}),Object(o.jsxs)("div",{children:[" Member Since ",c.join," "]}),Object(o.jsx)(f.a,{style:{width:"10rem"},children:Object(o.jsx)(f.a.Header,{children:Object(o.jsx)(v,{to:"/",user:c,balance:n,children:Object(o.jsx)("center",{children:"Home"})})})})]})},U=function(){return Object(o.jsx)(j.a,{basename:"/react-bank",children:Object(o.jsxs)(s.d,{children:[Object(o.jsx)(s.b,{path:"/",exact:!0,component:g}),Object(o.jsx)(s.b,{path:"/login",exact:!0,component:E}),Object(o.jsx)(l,{exact:!0,path:"/debits",component:F}),Object(o.jsx)(l,{exact:!0,path:"/credits",component:A}),Object(o.jsx)(l,{exact:!0,path:"/userProfile",component:L})]})})};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(U,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.b5b79c1a.chunk.js.map