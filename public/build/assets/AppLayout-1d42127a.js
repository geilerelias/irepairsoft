import{o,f as n,a as e,r as j,d as x,bN as T,bC as D,n as p,g as h,t as y,x as k,G as F,a_ as P,E as f,s as C,u as g,e as B,bz as L,b as d,w as a,$ as E,c as v,D as S,Z as O,h as c,F as $,i as z,O as N}from"./app-69bbdf3d.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const I={},R={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},G=e("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),H=e("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1),Q=[G,H];function U(i,r){return o(),n("svg",R,Q)}const Z=V(I,[["render",U]]),q={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},J={class:"flex items-center justify-between flex-wrap"},K={class:"w-0 flex-1 flex items-center min-w-0"},W={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},X=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Y=[X],ee={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},te=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),se=[te],oe={class:"ml-3 font-medium text-sm text-white truncate"},re={class:"shrink-0 sm:ml-3"},ne=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),ae=[ne],ie={__name:"Banner",setup(i){const r=j(!0),s=x(()=>{var t;return((t=T().props.jetstream.flash)==null?void 0:t.bannerStyle)||"success"}),u=x(()=>{var t;return((t=T().props.jetstream.flash)==null?void 0:t.banner)||""});return D(u,async()=>{r.value=!0}),(t,_)=>(o(),n("div",null,[r.value&&u.value?(o(),n("div",{key:0,class:p({"bg-indigo-500":s.value=="success","bg-red-700":s.value=="danger"})},[e("div",q,[e("div",J,[e("div",K,[e("span",{class:p(["flex p-2 rounded-lg",{"bg-indigo-600":s.value=="success","bg-red-600":s.value=="danger"}])},[s.value=="success"?(o(),n("svg",W,Y)):h("",!0),s.value=="danger"?(o(),n("svg",ee,se)):h("",!0)],2),e("p",oe,y(u.value),1)]),e("div",re,[e("button",{type:"button",class:p(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":s.value=="success","hover:bg-red-600 focus:bg-red-600":s.value=="danger"}]),"aria-label":"Dismiss",onClick:_[0]||(_[0]=k(l=>r.value=!1,["prevent"]))},ae,2)])])])],2)):h("",!0)]))}},le={class:"relative"},A={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(i){const r=i;let s=j(!1);const u=l=>{s.value&&l.key==="Escape"&&(s.value=!1)};F(()=>document.addEventListener("keydown",u)),P(()=>document.removeEventListener("keydown",u));const t=x(()=>({48:"w-48"})[r.width.toString()]),_=x(()=>r.align==="left"?"origin-top-left left-0":r.align==="right"?"origin-top-right right-0":"origin-top");return(l,m)=>(o(),n("div",le,[e("div",{onClick:m[0]||(m[0]=M=>C(s)?s.value=!g(s):s=!g(s))},[f(l.$slots,"trigger")]),B(e("div",{class:"fixed inset-0 z-40",onClick:m[1]||(m[1]=M=>C(s)?s.value=!1:s=!1)},null,512),[[L,g(s)]]),d(E,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:a(()=>[B(e("div",{class:p(["absolute z-50 mt-2 rounded-md shadow-lg",[t.value,_.value]]),style:{display:"none"},onClick:m[2]||(m[2]=M=>C(s)?s.value=!1:s=!1)},[e("div",{class:p(["rounded-md ring-1 ring-black ring-opacity-5",i.contentClasses])},[f(l.$slots,"content")],2)],2),[[L,g(s)]])]),_:3})]))}},de={key:0,type:"submit",class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},ue=["href"],w={__name:"DropdownLink",props:{href:String,as:String},setup(i){return(r,s)=>(o(),n("div",null,[i.as=="button"?(o(),n("button",de,[f(r.$slots,"default")])):i.as=="a"?(o(),n("a",{key:1,href:i.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},[f(r.$slots,"default")],8,ue)):(o(),v(g(S),{key:2,href:i.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:a(()=>[f(r.$slots,"default")]),_:3},8,["href"]))]))}},ce={__name:"NavLink",props:{href:String,active:Boolean},setup(i){const r=i,s=x(()=>r.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(u,t)=>(o(),v(g(S),{href:i.href,class:p(s.value)},{default:a(()=>[f(u.$slots,"default")]),_:3},8,["href","class"]))}},b={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(i){const r=i,s=x(()=>r.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-left text-Base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-Base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(u,t)=>(o(),n("div",null,[i.as=="button"?(o(),n("button",{key:0,class:p([s.value,"w-full text-left"])},[f(u.$slots,"default")],2)):(o(),v(g(S),{key:1,href:i.href,class:p(s.value)},{default:a(()=>[f(u.$slots,"default")]),_:3},8,["href","class"]))]))}},he={class:"min-h-screen bg-gray-100"},pe={class:"bg-white border-b border-gray-100"},fe={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},ge={class:"flex justify-between h-16"},me={class:"flex"},ve={class:"shrink-0 flex items-center"},_e={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},be={class:"hidden sm:flex sm:items-center sm:ml-6"},ye={class:"ml-3 relative"},we={class:"inline-flex rounded-md"},xe={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},ke=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),$e={class:"w-60"},Se=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),Ce=e("div",{class:"border-t border-gray-200"},null,-1),je=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Me=["onSubmit"],Te={class:"flex items-center"},Be={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Le=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ze=[Le],Ne={class:"ml-3 relative"},Ae={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},De=["src","alt"],Fe={key:1,class:"inline-flex rounded-md"},Pe={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},Ee=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1),Oe=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Ve=e("div",{class:"border-t border-gray-200"},null,-1),Ie=["onSubmit"],Re={class:"-mr-2 flex items-center sm:hidden"},Ge={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},He={class:"pt-2 pb-3 space-y-1"},Qe={class:"pt-4 pb-1 border-t border-gray-200"},Ue={class:"flex items-center px-4"},Ze={key:0,class:"shrink-0 mr-3"},qe=["src","alt"],Je={class:"font-medium text-base text-gray-800"},Ke={class:"font-medium text-sm text-gray-500"},We={class:"mt-3 space-y-1"},Xe=["onSubmit"],Ye=e("div",{class:"border-t border-gray-200"},null,-1),et=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),tt=e("div",{class:"border-t border-gray-200"},null,-1),st=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),ot=["onSubmit"],rt={class:"flex items-center"},nt={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},at=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),it=[at],lt={key:0,class:"bg-white shadow"},dt={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ht={__name:"AppLayout",props:{title:String},setup(i){const r=j(!1),s=t=>{N.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},u=()=>{N.post(route("logout"))};return(t,_)=>(o(),n("div",null,[d(g(O),{title:i.title},null,8,["title"]),d(ie),e("div",he,[e("nav",pe,[e("div",fe,[e("div",ge,[e("div",me,[e("div",ve,[d(g(S),{href:t.route("dashboard")},{default:a(()=>[d(Z,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",_e,[d(ce,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>[c(" Dashboard ")]),_:1},8,["href","active"])])]),e("div",be,[e("div",ye,[t.$page.props.jetstream.hasTeamFeatures?(o(),v(A,{key:0,align:"right",width:"60"},{trigger:a(()=>[e("span",we,[e("button",xe,[c(y(t.$page.props.auth.user.current_team.name)+" ",1),ke])])]),content:a(()=>[e("div",$e,[t.$page.props.jetstream.hasTeamFeatures?(o(),n($,{key:0},[Se,d(w,{href:t.route("teams.show",t.$page.props.auth.user.current_team)},{default:a(()=>[c(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(o(),v(w,{key:0,href:t.route("teams.create")},{default:a(()=>[c(" Create New Team ")]),_:1},8,["href"])):h("",!0),Ce,je,(o(!0),n($,null,z(t.$page.props.auth.user.all_teams,l=>(o(),n("form",{key:l.id,onSubmit:k(m=>s(l),["prevent"])},[d(w,{as:"button"},{default:a(()=>[e("div",Te,[l.id==t.$page.props.auth.user.current_team_id?(o(),n("svg",Be,ze)):h("",!0),e("div",null,y(l.name),1)])]),_:2},1024)],40,Me))),128))],64)):h("",!0)])]),_:1})):h("",!0)]),e("div",Ne,[d(A,{align:"right",width:"48"},{trigger:a(()=>[t.$page.props.jetstream.managesProfilePhotos?(o(),n("button",Ae,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,De)])):(o(),n("span",Fe,[e("button",Pe,[c(y(t.$page.props.auth.user.name)+" ",1),Ee])]))]),content:a(()=>[Oe,d(w,{href:t.route("profile.show")},{default:a(()=>[c(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(o(),v(w,{key:0,href:t.route("api-tokens.index")},{default:a(()=>[c(" API Tokens ")]),_:1},8,["href"])):h("",!0),Ve,e("form",{onSubmit:k(u,["prevent"])},[d(w,{as:"button"},{default:a(()=>[c(" Log Out ")]),_:1})],40,Ie)]),_:1})])]),e("div",Re,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",onClick:_[0]||(_[0]=l=>r.value=!r.value)},[(o(),n("svg",Ge,[e("path",{class:p({hidden:r.value,"inline-flex":!r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:p({hidden:!r.value,"inline-flex":r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:p([{block:r.value,hidden:!r.value},"sm:hidden"])},[e("div",He,[d(b,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>[c(" Dashboard ")]),_:1},8,["href","active"])]),e("div",Qe,[e("div",Ue,[t.$page.props.jetstream.managesProfilePhotos?(o(),n("div",Ze,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,qe)])):h("",!0),e("div",null,[e("div",Je,y(t.$page.props.auth.user.name),1),e("div",Ke,y(t.$page.props.auth.user.email),1)])]),e("div",We,[d(b,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:a(()=>[c(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(o(),v(b,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:a(()=>[c(" API Tokens ")]),_:1},8,["href","active"])):h("",!0),e("form",{method:"POST",onSubmit:k(u,["prevent"])},[d(b,{as:"button"},{default:a(()=>[c(" Log Out ")]),_:1})],40,Xe),t.$page.props.jetstream.hasTeamFeatures?(o(),n($,{key:1},[Ye,et,d(b,{href:t.route("teams.show",t.$page.props.auth.user.current_team),active:t.route().current("teams.show")},{default:a(()=>[c(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(o(),v(b,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:a(()=>[c(" Create New Team ")]),_:1},8,["href","active"])):h("",!0),tt,st,(o(!0),n($,null,z(t.$page.props.auth.user.all_teams,l=>(o(),n("form",{key:l.id,onSubmit:k(m=>s(l),["prevent"])},[d(b,{as:"button"},{default:a(()=>[e("div",rt,[l.id==t.$page.props.auth.user.current_team_id?(o(),n("svg",nt,it)):h("",!0),e("div",null,y(l.name),1)])]),_:2},1024)],40,ot))),128))],64)):h("",!0)])])],2)]),t.$slots.header?(o(),n("header",lt,[e("div",dt,[f(t.$slots,"header")])])):h("",!0),e("main",null,[f(t.$slots,"default")])])]))}};export{ht as _};
