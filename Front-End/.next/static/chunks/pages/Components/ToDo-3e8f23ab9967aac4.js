(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[155],{3893:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Components/ToDo",function(){return n(1766)}])},5667:function(e,t,n){"use strict";n.d(t,{y:function(){return s}});let s=(0,n(7294).createContext)([])},1766:function(e,t,n){"use strict";n.r(t);var s=n(5893),c=n(7294),l=n(4801),a=n(5667);t.default=()=>{let{myToDo:e=[]}=(0,c.useContext)(a.y);return(0,s.jsxs)("table",{className:"table table-bordered table-hover container mt-5",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"text-center col-3",scope:"col1",children:"#"}),(0,s.jsx)("th",{className:"text-center col-3",scope:"col1",children:"Task"}),(0,s.jsx)("th",{className:"text-center col-3",scope:"col1",children:"date"}),(0,s.jsx)("th",{className:"text-center col-3",scope:"col1",children:"Action"})]})}),(0,s.jsx)("tbody",{children:e.map((e,t)=>(0,s.jsx)(l.default,{done:e.done,id:e._id,index:t,name:e.task,date:new Date(e.date).toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}),toDo:e},t))})]})}},4801:function(e,t,n){"use strict";n.r(t);var s=n(5893),c=n(7294),l=n(5667);t.default=e=>{let{name:t,date:n,index:a,id:r,done:o}=e,{deleteItem:i}=(0,c.useContext)(l.y),{finishItem:d}=(0,c.useContext)(l.y);return(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"text-center",scope:a,children:a+1}),(0,s.jsx)("td",{className:"text-center",children:t}),(0,s.jsx)("td",{className:"text-center",children:n}),(0,s.jsxs)("td",{className:"text-center",children:[(0,s.jsx)("button",{className:"btn btn-danger btn-sm me-2 my-2",onClick:()=>{i(r)},children:"Delete"}),o?(0,s.jsx)("button",{type:"button",className:"btn btn-light",children:"Task Finished"}):(0,s.jsx)("button",{className:"btn btn-success btn-sm",onClick:()=>{d(r)},children:"Finish"})]})]})}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=3893)}),_N_E=e.O()}]);