(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[623],{2773:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Components/Sidebar",function(){return a(4041)}])},4041:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return f}});var l=a(5893),n=a(7294),i={src:"/_next/static/media/logo.722fd422.png",height:292,width:276,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBUlEQVR42mMAgUl51xSag86vbAo8/xSInzcFnd/cEnbBhAEEClWOaVXYnn5V6332f407FHuc/V/ne/ZKS9h5E4aOlEtHO9Iu/89TPfazwuX071L7U//LHE++Ammu8TnZxrBh8Ytv1678/z+j6fbfFIZD/8tdT7WUOZ8oybM8fCLf4th7hnL/ow/2bHn//9aN/z9ntd3+nyC4vbjAdW9qjunh/3kWh78wpIrtis823/1/16a3/69d/v+vJvLo/3TtXf/zbPb+L3LaX8oAApk622IKXHY87i458T/fcfu/XNvtz4pcd2UzgIAOwyomEF3htZHDjmGeeYHrFqum1B08IDFvhl2MAJ9+g1HjiBorAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},s=a(5675),o=a.n(s),r=a(4295),c=a(1259),d=a(8773),h=a(9963),g=a(5007),u=a(7066),m=a(9917),b=a.n(m),f=()=>{let t=(0,g.oR)(),e=null,a=null;e=localStorage.getItem("id"),a=localStorage.getItem("token");let s={id:e,authorization:"Bearer ".concat(a)},[m,f]=(0,n.useState)("");(0,n.useEffect)(()=>{u.Z.get("https://to-do-api-seven.vercel.app/app/getUserInfo",{headers:s}).then(t=>f(t.data.userInfo.name))},[]);let[p,x]=(0,n.useState)("home");return(0,l.jsxs)("div",{className:b().sidebar,children:[(0,l.jsxs)("a",{href:"/",className:"d-flex align-items-center justify-content-center link-dark text-decoration-none mb-3",title:"","data-bs-toggle":"tooltip","data-bs-placement":"right","data-bs-original-title":"Icon-only",children:[(0,l.jsx)(o(),{width:"30",height:"30.5",src:i,alt:""}),(0,l.jsx)("span",{className:"visually-hidden",children:"Icon-only"})]}),(0,l.jsx)("div",{className:"d-flex flex-column flex-shrink-0 bg-light",children:(0,l.jsxs)("ul",{className:"nav nav-pills nav-flush flex-column mb-auto text-center",children:[(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("a",{href:"/",className:"nav-link py-3 border-bottom ".concat("home"===p?"active":""),"aria-current":"page",title:"","data-bs-toggle":"tooltip","data-bs-placement":"right","data-bs-original-title":"Home",onClick:()=>x("home"),children:(0,l.jsx)(r.QBi,{size:30})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/",className:"nav-link py-3 border-bottom ".concat("orders"===p?"active":""),title:"","data-bs-toggle":"tooltip","data-bs-placement":"right","data-bs-original-title":"Orders",onClick:()=>x("orders"),children:(0,l.jsx)(c.YKj,{size:30})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/Finished",className:"nav-link py-3 border-bottom ".concat("products"===p?"active":""),title:"","data-bs-toggle":"tooltip","data-bs-placement":"right","data-bs-original-title":"Products",onClick:()=>x("products"),children:(0,l.jsx)(r.dO9,{size:30})})}),(0,l.jsx)("li",{children:(0,l.jsxs)("a",{href:"/User",className:"nav-link py-3 border-bottom d-flex align-items-center justify-content-evenly ".concat("customers"===p?"active":""),title:"","data-bs-toggle":"tooltip","data-bs-placement":"right","data-bs-original-title":"Customers",onClick:()=>x("customers"),children:[(0,l.jsx)(d.Xws,{size:25}),(0,l.jsxs)("details",{children:[(0,l.jsx)("summary",{children:" "}),(0,l.jsx)("p",{children:m})]})]})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/LogIn",className:"nav-link py-3 border-bottom",title:"","data-bs-toggle":"tooltip","data-bs-placement":"right","data-bs-original-title":"Customers",children:(0,l.jsx)(r.fkS,{onClick:()=>{alert("Do you want to log out"),t.dispatch(h.Y.logOut()),localStorage.clear("id"),localStorage.clear("token"),window.location.href="/LogIn"},size:25})})})]})})]})}},9917:function(t){t.exports={sidebar:"allCss_sidebar__Nr1ju",logInBox:"allCss_logInBox__c_jGq",signInBox:"allCss_signInBox__57bwA"}}},function(t){t.O(0,[365,396,219,66,800,888,774,179],function(){return t(t.s=2773)}),_N_E=t.O()}]);