import{r as L,aM as a,o as l,f as p,b as t,w as e,c as v,al as P,h as r,a as i,t as h,j as s,n as b,F as y,k as V,bY as A,c0 as j}from"./app-537fb8fd.js";const D={key:0,class:"text-center hidden-xs-only"},F={class:"px-8 pt-6"},T=i("h6",{class:"text-h6 font-weight-medium"},"Perfil del usuario",-1),q={class:"d-flex align-center mt-4 pb-6"},I={class:"ml-3"},O={class:"text-h6 mb-n1"},E={class:"d-flex align-center mt-1"},M={class:"text-subtitle-1 font-weight-regular textSecondary ml-2"},U={key:1,class:"text-center"},J={__name:"SettingsDropdown",setup(Y){L(!1);const N=[{title:"Login",icon:"mdi-account-lock",route:"/login"},{title:"Sign Up",icon:"mdi-account-plus",route:"/register"}];function g(o){A.get(o)}const B=()=>{A.post(route("logout"))};return(o,u)=>{const $=a("v-img"),k=a("v-avatar"),w=a("v-btn"),d=a("v-icon"),C=a("v-divider"),_=a("v-list-subheader"),c=a("v-list-item"),m=a("v-list"),f=a("v-list-item-title"),S=a("v-card"),z=a("v-menu");return l(),p(y,null,[o.$page.props.auth!==null?(l(),p("div",D,[t(z,{"close-on-content-click":!1,location:"end","offset-y":""},{activator:e(({props:n})=>[o.$page.props.jetstream.managesProfilePhotos?(l(),v(w,P({key:0,dark:"",icon:"",size:"large"},n),{default:e(()=>[t(k,{size:"50"},{default:e(()=>[t($,{alt:o.$page.props.auth.user.name,src:o.$page.props.auth.user.profile_photo_url,contain:""},null,8,["alt","src"])]),_:2},1024)]),_:2},1040)):r("",!0)]),default:e(()=>[t(S,{class:"pa-5"},{default:e(()=>[i("div",F,[T,i("div",q,[t(k,{color:"primary",size:"80"},{default:e(()=>[t(k,{size:"76"},{default:e(()=>[t($,{alt:o.$page.props.auth.user.name,src:o.$page.props.auth.user.profile_photo_url,contain:""},null,8,["alt","src"])]),_:1})]),_:1}),i("div",I,[i("h6",O,h(o.$page.props.auth.user.name),1),i("div",E,[t(d,{size:"18"},{default:e(()=>[s("mdi-email-outline")]),_:1}),i("span",M,h(o.$page.props.auth.user.email),1)])])])]),t(C),o.$page.props.auth!==null?(l(),v(m,{key:0,dense:"",rounded:""},{default:e(()=>[t(_,null,{default:e(()=>[s("Administración")]),_:1}),t(c,{active:o.route().current("dashboard"),class:b([o.route().current("dashboard")?"active bg-primary":"","text-decoration-none mr-1"]),dark:o.route().current("dashboard"),"prepend-icon":"mdi-view-dashboard-outline",rounded:"lg",title:"Dashboard",onClick:u[0]||(u[0]=n=>g(o.route("dashboard")))},null,8,["active","class","dark"])]),_:1})):r("",!0),o.$page.props.auth!==null?(l(),v(m,{key:1,dense:"",rounded:""},{default:e(()=>[t(_,null,{default:e(()=>[s("Settings Options")]),_:1}),t(c,{active:o.route().current("profile.show"),class:b([o.route().current("profile.show")?"active bg-primary":"","text-decoration-none mr-1"]),dark:o.route().current("profile.show"),rounded:"lg",onClick:u[1]||(u[1]=n=>g(o.route("profile.show")))},{prepend:e(()=>[t(d,null,{default:e(()=>[s("mdi-account-circle")]),_:1})]),subtitle:e(({subtitle:n})=>[t(f,null,{default:e(()=>[s(" Profile")]),_:1})]),_:1},8,["active","class","dark"]),o.$page.props.jetstream.hasApiFeatures?(l(),v(c,{key:0,active:o.route().current("api-tokens.index"),class:b([o.route().current("api-tokens.index")?"active bg-primary":"","text-decoration-none mr-1"]),dark:o.route().current("api-tokens.index"),rounded:"lg",onClick:u[2]||(u[2]=n=>g(o.route("api-tokens.index")))},{prepend:e(()=>[t(d,null,{default:e(()=>[s("mdi-lan")]),_:1})]),subtitle:e(({subtitle:n})=>[t(f,null,{default:e(()=>[s(" API Tokens")]),_:1})]),_:1},8,["active","class","dark"])):r("",!0)]),_:1})):r("",!0),t(_,null,{default:e(()=>[s("Authentication")]),_:1}),t(m,{dense:"",rounded:""},{default:e(()=>[t(c,{onClick:B},{prepend:e(()=>[t(d,null,{default:e(()=>[s("mdi-logout")]),_:1})]),subtitle:e(({subtitle:n})=>[t(f,null,{default:e(()=>[s("Logout")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])):r("",!0),o.$page.props.auth==null?(l(),p("div",U,[t(z,{"close-on-content-click":!1,"nudge-width":200,"offset-y":""},{activator:e(({props:n})=>[t(w,P({class:"ml-2 hidden-xs-only white--text",icon:""},n),{default:e(()=>[t(d,null,{default:e(()=>[s(" mdi-dots-vertical ")]),_:1})]),_:2},1040)]),default:e(()=>[t(S,null,{default:e(()=>[t(m,null,{default:e(()=>[o.$page.props.auth===null?(l(),p(y,{key:0},[t(_,null,{default:e(()=>[s("Autenticación")]),_:1}),t(C),(l(),p(y,null,V(N,n=>t(c,{key:n.title,href:n.route},{prepend:e(()=>[t(d,null,{default:e(()=>[s(h(n.icon),1)]),_:2},1024)]),subtitle:e(({subtitle:G})=>[t(f,null,{default:e(()=>[s(h(n.title),1)]),_:2},1024)]),_:2},1032,["href"])),64))],64)):r("",!0)]),_:1})]),_:1})]),_:1})])):r("",!0)],64)}}},K=j("links",{state:()=>({links:[{title:"Inicio",icon:"mdi-home",route:"home"},{title:"Nosotros",icon:"mdi-account-question",route:"about-us"},{title:"Servicios",icon:"mdi-account-question",route:"services"},{title:"Contáctenos",icon:"mdi-card-account-phone",route:"contact-us"}]})});export{J as _,K as u};