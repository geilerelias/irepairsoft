import{r as y,A as M,B as P,f as m,b as t,w as o,u as c,i as C,n as R,F as $,p as n,o as u,j as v,k as W,c as A,l as G,t as f,E as U,G as X,a as r}from"./app-8f7a63b0.js";import{i as x}from"./logo-899ff9db.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";const _=i=>(U("data-v-16410c6b"),i=i(),X(),i),J=_(()=>r("img",{alt:"Logo",src:x},null,-1)),K={key:1},O=_(()=>r("span",{class:"mr-2"},"Home",-1)),Q=_(()=>r("span",{class:"mr-2"},"Sobre",-1)),Y=_(()=>r("span",{class:"mr-2"},"Download",-1)),Z=_(()=>r("span",{class:"mr-2"},"Preços",-1)),tt=_(()=>r("span",{class:"mr-2"},"Contate-nos",-1)),ot={__name:"Navigation",props:{color:String,flat:Boolean},setup(i){let a=y(null),p=y(!1);const B=[["mdi-home-outline","Home","#hero"],["mdi-information-outline","Sobre","#features"],["mdi-download-box-outline","Download","#download"],["mdi-currency-usd","Precios","#pricing"],["mdi-email-outline","Contacto","#contact"]];function g(){p=window.innerWidth<850}return M(p,l=>{l||a&&(a=!1)}),P(()=>{g(),window.addEventListener("resize",g,{passive:!0})}),(l,e)=>{const S=n("v-avatar"),b=n("v-list-item-title"),T=n("v-list-item-subtitle"),w=n("v-list-item"),k=n("v-list"),N=n("v-divider"),V=n("v-icon"),h=n("v-navigation-drawer"),D=n("v-img"),E=n("v-toolbar-title"),I=n("v-spacer"),L=n("v-app-bar-nav-icon"),d=n("v-btn"),z=n("v-app-bar");return u(),m($,null,[t(h,{modelValue:c(a),"onUpdate:modelValue":e[0]||(e[0]=s=>C(a)?a.value=s:a=s),app:"",dark:"",src:"@/assets/img/bgDrawer.jpg",temporary:""},{default:o(()=>[t(k,null,{default:o(()=>[t(w,null,{prepend:o(()=>[t(S,null,{default:o(()=>[J]),_:1})]),subtitle:o(()=>[t(b,{class:"title"},{default:o(()=>[v("Calango")]),_:1}),t(T,null,{default:o(()=>[v("WEB")]),_:1})]),_:1})]),_:1}),t(N),t(k,{dense:""},{default:o(()=>[(u(),m($,null,W(B,([s,j,F],H)=>t(w,{key:H,link:"",onClick:et=>l.$vuetify.goTo(F)},{append:o(()=>[t(V,null,{default:o(()=>[v(f(s),1)]),_:2},1024)]),subtitle:o(()=>[t(b,{class:"subtitile-1"},{default:o(()=>[v(f(j),1)]),_:2},1024)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1},8,["modelValue"]),t(z,{class:R([{expand:i.flat},"px-15"]),color:i.color,flat:i.flat,dark:""},{default:o(()=>[t(E,null,{default:o(()=>[t(D,{src:c(x),"max-width":"50px"},null,8,["src"])]),_:1}),t(I),c(p)?(u(),A(L,{key:0,class:"mr-4",onClick:e[1]||(e[1]=G(s=>C(a)?a.value=!c(a):a=!c(a),["stop"]))})):(u(),m("div",K,[t(d,{variant:"text",onClick:e[2]||(e[2]=s=>l.$vuetify.goTo("#hero"))},{default:o(()=>[O]),_:1}),t(d,{variant:"text",onClick:e[3]||(e[3]=s=>l.$vuetify.goTo("#features"))},{default:o(()=>[Q]),_:1}),t(d,{variant:"text",onClick:e[4]||(e[4]=s=>l.$vuetify.goTo("#download"))},{default:o(()=>[Y]),_:1}),t(d,{variant:"text",onClick:e[5]||(e[5]=s=>l.$vuetify.goTo("#pricing"))},{default:o(()=>[Z]),_:1}),t(d,{rounded:"",variant:"outlined",onClick:e[6]||(e[6]=s=>l.$vuetify.goTo("#contact"))},{default:o(()=>[tt]),_:1})])),v(" "+f(i.flat),1)]),_:1},8,["class","color","flat"])],64)}}},it=q(ot,[["__scopeId","data-v-16410c6b"]]);export{it as default};