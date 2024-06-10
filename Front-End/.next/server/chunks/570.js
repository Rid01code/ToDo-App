exports.id=570,exports.ids=[570],exports.modules={2982:e=>{e.exports={sidebar:"allCss_sidebar__Nr1ju",logInBox:"allCss_logInBox__c_jGq",signInBox:"allCss_signInBox__57bwA"}},5206:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});let s={src:"/_next/static/media/logo.722fd422.png",height:292,width:276,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBUlEQVR42mMAgUl51xSag86vbAo8/xSInzcFnd/cEnbBhAEEClWOaVXYnn5V6332f407FHuc/V/ne/ZKS9h5E4aOlEtHO9Iu/89TPfazwuX071L7U//LHE++Ammu8TnZxrBh8Ytv1678/z+j6fbfFIZD/8tdT7WUOZ8oybM8fCLf4th7hnL/ow/2bHn//9aN/z9ntd3+nyC4vbjAdW9qjunh/3kWh78wpIrtis823/1/16a3/69d/v+vJvLo/3TtXf/zbPb+L3LaX8oAApk622IKXHY87i458T/fcfu/XNvtz4pcd2UzgIAOwyomEF3htZHDjmGeeYHrFqum1B08IDFvhl2MAJ9+g1HjiBorAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},5667:(e,t,a)=>{"use strict";a.d(t,{y:()=>s});let s=(0,a(6689).createContext)([])},4990:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{Y:()=>c,Z:()=>i});var l=a(3258),n=e([l]);l=(n.then?(await n)():n)[0];let r=(0,l.createSlice)({name:"auth",initialState:{isLoggedIn:!1},reducers:{logIn(e){e.isLoggedIn=!0},logOut(e){e.isLoggedIn=!1}}}),c=r.actions,i=r.reducer;s()}catch(e){s(e)}})},8398:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>c});var l=a(3258),n=a(4990),r=e([l,n]);[l,n]=r.then?(await r)():r;let c=(0,l.configureStore)({reducer:{auth:n.Z}});s()}catch(e){s(e)}})},4503:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{default:()=>p});var l=a(997),n=a(6689),r=a(5667),c=a(6595),i=a(1766),o=a(4856),d=a(9648),u=a(3291),h=a(4990),m=a(8478),x=e([c,d,u,h,m]);[c,d,u,h,m]=x.then?(await x)():x;let p=()=>{(0,u.useStore)(),(0,u.useSelector)(e=>e.auth.isLoggedIn),(0,n.useEffect)(()=>{},[]);let[e,t]=(0,n.useState)([{task:"",date:""}]),a={id:null,authorization:"Bearer null"};(0,n.useEffect)(()=>{(async()=>{try{let e=await d.default.get("http://localhost:5000/app/task/get",{headers:a});t(e.data.data.tasks)}catch(e){alert("Internal Server Error")}})()},[e]);let s=async e=>{try{event.preventDefault();let t=await d.default.delete(`http://localhost:5000/app/task/delete/${e}`,{headers:a});alert(t.data.message)}catch(e){alert(e.response.data.message)}},h=async e=>{try{event.preventDefault();let t=await d.default.put(`http://localhost:5000/app/task/finish/${e}`,{},{headers:a});alert(t.data.message)}catch(e){alert(e.response.data.message)}};return l.jsx(r.y.Provider,{value:{myToDo:e,setMyToDo:t,deleteItem:s,finishItem:h},children:(0,l.jsxs)("div",{className:"d-flex flex-column p-2",children:[l.jsx("h1",{className:"text-center",children:"Task Management App"}),(0,l.jsxs)("div",{className:"d-flex  w-100",children:[l.jsx(m.default,{}),l.jsx(c.default,{})]}),0===e.length?l.jsx(o.default,{}):l.jsx(i.default,{})]})})};s()}catch(e){s(e)}})},6595:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{default:()=>o});var l=a(997),n=a(6689),r=a(9648),c=a(5667),i=e([r]);r=(i.then?(await i)():i)[0];let o=()=>{let e={id:null,authorization:"Bearer null"},{setMyToDo:t}=(0,n.useContext)(c.y),{myToDo:a=[]}=(0,n.useContext)(c.y),[s,i]=(0,n.useState)(""),[o,d]=(0,n.useState)(""),u=async l=>{try{if(l.preventDefault(),""===s.trim()||""===o.trim())alert("Put proper Task and Date");else{let l=new Date;l.setHours(0,0,0,0);let n=new Date(o);l.setHours(0,0,0,0),n<l?(alert("You set Previous Date"),i(""),d("")):await r.default.post("http://localhost:5000/app/task/add",{task:s.toUpperCase(),date:o},{headers:e}).then(e=>{t([...a,e.data])})}i(""),d("")}catch(e){console.log(e)}};return(0,l.jsxs)("form",{className:"d-sm-flex flex-column align-items-center w-100 px-5",onSubmit:u,children:[(0,l.jsxs)("div",{className:"col-sm-5  mb-3 d-flex flex-column",children:[l.jsx("label",{children:"Add Your Task"}),l.jsx("input",{className:"form-control",placeholder:"Task",onChange:e=>i(e.target.value),value:s,type:"text"})]}),(0,l.jsxs)("div",{className:"col-sm-5 mb-3 d-flex flex-column",children:[l.jsx("label",{children:"Add Date"}),l.jsx("input",{className:"form-control",onChange:e=>d(e.target.value),value:o,type:"date"})]}),l.jsx("input",{className:"btn btn-primary",type:"submit"})]})};s()}catch(e){s(e)}})},4856:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var s=a(997);a(6689);let l=()=>s.jsx("h1",{className:"text-center py-5",children:"No Task For Today"})},8478:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{default:()=>f});var l=a(997),n=a(6689),r=a(5206),c=a(5675),i=a.n(c),o=a(7197),d=a(4563),u=a(4990),h=a(3291),m=a(9648),x=a(2982),p=a.n(x),g=e([d,u,h,m]);[d,u,h,m]=g.then?(await g)():g;let f=()=>{let e=(0,h.useStore)(),t={id:null,authorization:"Bearer null"},[a,s]=(0,n.useState)("");(0,n.useEffect)(()=>{m.default.get("http://localhost:5000/app/getUserInfo",{headers:t}).then(e=>s(e.data.userInfo.name))},[]);let[c,x]=(0,n.useState)("home");return(0,l.jsxs)("div",{className:p().sidebar,children:[(0,l.jsxs)("a",{href:"/",className:"d-flex align-items-center justify-content-center link-dark text-decoration-none mb-3",title:"","data-bs-toggle":"tooltip","data-bs-placement":"right","data-bs-original-title":"Icon-only",children:[l.jsx(i(),{width:"30",height:"30.5",src:r.Z,alt:""}),l.jsx("span",{className:"visually-hidden",children:"Icon-only"})]}),l.jsx("div",{className:"d-flex flex-column flex-shrink-0 bg-light",children:(0,l.jsxs)("ul",{className:"nav nav-pills nav-flush flex-column mb-auto text-center",children:[l.jsx("li",{className:"nav-item",children:l.jsx("a",{href:"/",className:`nav-link py-3 border-bottom ${"home"===c?"active":""}`,"aria-current":"page",title:"","data-bs-toggle":"tooltip","data-bs-placement":"right","data-bs-original-title":"Home",onClick:()=>x("home"),children:l.jsx(o.FontAwesomeIcon,{icon:d.faHouse,size:"xl"})})}),l.jsx("li",{children:l.jsx("a",{href:"/",className:`nav-link py-3 border-bottom ${"orders"===c?"active":""}`,title:"","data-bs-toggle":"tooltip","data-bs-placement":"right","data-bs-original-title":"Orders",onClick:()=>x("orders"),children:l.jsx(o.FontAwesomeIcon,{icon:d.faList,size:"xl"})})}),l.jsx("li",{children:l.jsx("a",{href:"/Finished",className:`nav-link py-3 border-bottom ${"products"===c?"active":""}`,title:"","data-bs-toggle":"tooltip","data-bs-placement":"right","data-bs-original-title":"Products",onClick:()=>x("products"),children:l.jsx(o.FontAwesomeIcon,{icon:d.faListCheck,size:"xl"})})}),l.jsx("li",{children:(0,l.jsxs)("a",{href:"/User",className:`nav-link py-3 border-bottom d-flex align-items-center justify-content-evenly ${"customers"===c?"active":""}`,title:"","data-bs-toggle":"tooltip","data-bs-placement":"right","data-bs-original-title":"Customers",onClick:()=>x("customers"),children:[l.jsx(o.FontAwesomeIcon,{icon:d.faUser,size:"xl"}),(0,l.jsxs)("details",{children:[l.jsx("summary",{children:" "}),l.jsx("p",{children:a})]})]})}),l.jsx("li",{children:l.jsx("a",{href:"/LogIn",className:"nav-link py-3 border-bottom",title:"","data-bs-toggle":"tooltip","data-bs-placement":"right","data-bs-original-title":"Customers",children:l.jsx(o.FontAwesomeIcon,{icon:d.faRightFromBracket,size:"xl",onClick:()=>{alert("Do you want to log out"),e.dispatch(u.Y.logOut()),localStorage.clear("id"),localStorage.clear("token")}})})})]})})]})};s()}catch(e){s(e)}})},1766:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var s=a(997),l=a(6689),n=a(4801),r=a(5667);let c=()=>{let{myToDo:e=[]}=(0,l.useContext)(r.y);return(0,s.jsxs)("table",{className:"table table-bordered table-hover container mt-5",children:[s.jsx("thead",{children:(0,s.jsxs)("tr",{children:[s.jsx("th",{className:"text-center col-3",scope:"col1",children:"#"}),s.jsx("th",{className:"text-center col-3",scope:"col1",children:"Task"}),s.jsx("th",{className:"text-center col-3",scope:"col1",children:"date"}),s.jsx("th",{className:"text-center col-3",scope:"col1",children:"Action"})]})}),s.jsx("tbody",{children:e.map((e,t)=>s.jsx(n.default,{done:e.done,id:e._id,index:t,name:e.task,date:new Date(e.date).toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}),toDo:e},t))})]})}},4801:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var s=a(997),l=a(6689),n=a(5667);let r=({name:e,date:t,index:a,id:r,done:c})=>{let{deleteItem:i}=(0,l.useContext)(n.y),{finishItem:o}=(0,l.useContext)(n.y);return(0,s.jsxs)("tr",{children:[s.jsx("th",{className:"text-center",scope:a,children:a+1}),s.jsx("td",{className:"text-center",children:e}),s.jsx("td",{className:"text-center",children:t}),(0,s.jsxs)("td",{className:"text-center",children:[s.jsx("button",{className:"btn btn-danger btn-sm me-2 my-2",onClick:()=>{i(r)},children:"Delete"}),c?s.jsx("button",{type:"button",className:"btn btn-light",children:"Task Finished"}):s.jsx("button",{className:"btn btn-success btn-sm",onClick:()=>{o(r)},children:"Finish"})]})]})}},7854:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{default:()=>y});var l=a(997),n=a(6689),r=a(1937),c=a.n(r),i=a(5226),o=a.n(i),d=a(1664),u=a.n(d),h=a(4990),m=a(9648),x=a(3291),p=a(2982),g=a.n(p),f=a(7197),j=a(4563),b=e([h,m,x,j]);[h,m,x,j]=b.then?(await b)():b;let y=()=>{let e=(0,n.useRef)(null),t=(0,n.useRef)(null),a=(0,x.useStore)();(0,x.useSelector)(e=>e.auth.isLoggedIn);let s=async s=>{try{s.preventDefault();let l=e.current.value,n=t.current.value;if(""===l.trim()||""===n.trim)alert("Put proper details");else{let t=await m.default.post("http://localhost:5000/app/logIn",{email:l,password:n});localStorage.setItem("id",t.data.id),localStorage.setItem("token",t.data.token),a.dispatch(h.Y.logIn()),e.current.value="",logInPassword.current.value=""}}catch(e){alert(e.response.data.message)}},[r,i]=(0,n.useState)();return l.jsx("div",{className:"vh-100 d-flex justify-content-center align-items-center",children:(0,l.jsxs)(o(),{className:`${g().logInBox} border border-black border-5 rounded-4`,onSubmit:s,children:[(0,l.jsxs)(o().Group,{className:"mb-3",controlId:"formBasicEmail",children:[l.jsx(o().Label,{children:"Email address"}),l.jsx(o().Control,{type:"email",placeholder:"Enter email",ref:e}),l.jsx(o().Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),(0,l.jsxs)(o().Group,{className:"mb-3",controlId:"formBasicPassword",children:[l.jsx(o().Label,{children:"Password"}),l.jsx(o().Control,{type:r?"text":"password",placeholder:"Password",ref:t}),l.jsx("span",{onClick:()=>{i(!r)},children:r?l.jsx(f.FontAwesomeIcon,{icon:j.faEye}):l.jsx(f.FontAwesomeIcon,{icon:j.faEyeSlash})})]}),(0,l.jsxs)("div",{className:"d-flex justify-content-between",children:[l.jsx(c(),{variant:"primary",type:"submit",children:"Submit"}),l.jsx(u(),{href:"./SignIn",children:l.jsx("p",{children:"Not have account || Sign In"})})]})]})})};s()}catch(e){s(e)}})},6719:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{default:()=>h});var l=a(997);a(9090);var n=a(968),r=a.n(n),c=a(3291),i=a(8398),o=a(86);a(5800);var d=a(7854),u=e([c,i,o,d]);function h({Component:e,pageProps:t}){return(0,l.jsxs)(l.Fragment,{children:[l.jsx(r(),{}),l.jsx(c.Provider,{store:i.Z,children:l.jsx(e,{...t})})]})}[c,i,o,d]=u.then?(await u)():u,o.config.autoAddCss=!1,s()}catch(e){s(e)}})},6105:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r,metadata:()=>n});var s=a(997),l=a(6859);let n={title:"",description:"..."};function r(){return(0,s.jsxs)(l.Html,{lang:"en",children:[s.jsx(l.Head,{}),(0,s.jsxs)("body",{children:[s.jsx(l.Main,{}),s.jsx(l.NextScript,{})]})]})}}};