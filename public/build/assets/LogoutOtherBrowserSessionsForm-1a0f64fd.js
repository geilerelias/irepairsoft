import{r as v,T as V,k as p,o as n,c as g,w as e,b as t,h as r,f as c,F as C,i as L,g as O,a,u as i,C as A,n as I,t as d,A as $,B as F}from"./app-9bde0dc8.js";import{_ as H}from"./ActionMessage-3f6522da.js";import{_ as M}from"./Modal-4ff6b566.js";import{_ as N}from"./DialogModal-fb9efe34.js";import{_ as T}from"./InputError-043f61ed.js";import{_ as y}from"./PrimaryButton-8fca1834.js";import{_ as K}from"./SecondaryButton-13e360bf.js";import{_ as U}from"./TextInput-f696f172.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import"./SectionTitle-5f073c2c.js";const f=l=>($("data-v-9ae359e4"),l=l(),F(),l),D=f(()=>a("div",{class:"max-w-xl text-sm text-gray-600"}," If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. ",-1)),E={key:0,class:"mt-5 space-y-6"},P={key:0,class:"w-8 h-8 text-gray",fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},z=f(()=>a("path",{d:"M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)),q=[z],G={key:1,class:"w-8 h-8 text-gray",fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},J=f(()=>a("path",{d:"M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)),Q=[J],R={class:"ml-3"},W={class:"text-sm text-gray-600"},X={class:"text-xs text-gray-500"},Y={key:0,class:"text-green-500 font-semibold"},Z={key:1},ee={class:"flex items-center mt-5"},se={class:"mt-4"},oe={__name:"LogoutOtherBrowserSessionsForm",props:{sessions:Array},setup(l){const _=v(!1),u=v(null),o=V({password:""}),k=()=>{_.value=!0,setTimeout(()=>u.value.focus(),250)},h=()=>{o.delete(route("other-browser-sessions.destroy"),{preserveScroll:!0,onSuccess:()=>m(),onError:()=>u.value.focus(),onFinish:()=>o.reset()})},m=()=>{_.value=!1,o.reset()};return(te,w)=>{const x=p("v-list-item"),S=p("v-list"),b=p("v-container");return n(),g(b,null,{default:e(()=>[t(M,null,{title:e(()=>[r(" Browser Sessions ")]),description:e(()=>[r(" Manage and log out your active sessions on other browsers and devices. ")]),content:e(()=>[D,l.sessions.length>0?(n(),c("div",E,[t(S,{lines:"two"},{default:e(()=>[(n(!0),c(C,null,L(l.sessions,(s,B)=>(n(),g(x,{key:B,class:"d-flex align-center mb-2 items-center"},{prepend:e(()=>[s.agent.is_desktop?(n(),c("svg",P,q)):(n(),c("svg",G,Q))]),default:e(()=>[a("div",R,[a("div",W,d(s.agent.platform?s.agent.platform:"Unknown")+" - "+d(s.agent.browser?s.agent.browser:"Unknown"),1),a("div",null,[a("div",X,[r(d(s.ip_address)+", ",1),s.is_current_device?(n(),c("span",Y,"This device")):(n(),c("span",Z,"Last active "+d(s.last_active),1))])])])]),_:2},1024))),128))]),_:1})])):O("",!0),a("div",ee,[t(y,{onClick:k},{default:e(()=>[r(" Log Out Other Browser Sessions ")]),_:1}),t(H,{on:i(o).recentlySuccessful,class:"ml-3"},{default:e(()=>[r(" Done. ")]),_:1},8,["on"])]),t(N,{show:_.value,onClose:m},{title:e(()=>[r(" Log Out Other Browser Sessions ")]),content:e(()=>[r(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. "),a("div",se,[t(U,{ref_key:"passwordInput",ref:u,modelValue:i(o).password,"onUpdate:modelValue":w[0]||(w[0]=s=>i(o).password=s),autocomplete:"current-password",class:"mt-1 block w-3/4",placeholder:"Password",type:"password",onKeyup:A(h,["enter"])},null,8,["modelValue","onKeyup"]),t(T,{message:i(o).errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[t(K,{onClick:m},{default:e(()=>[r(" Cancel ")]),_:1}),t(y,{class:I([{"opacity-25":i(o).processing},"ml-3"]),disabled:i(o).processing,onClick:h},{default:e(()=>[r(" Log Out Other Browser Sessions ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1})]),_:1})}}},pe=j(oe,[["__scopeId","data-v-9ae359e4"]]);export{pe as default};