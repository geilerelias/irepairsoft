import{r as d,g as x,f as s,b as o,u as t,w as m,F as c,o as a,b_ as h,a as i,j as n,bq as y,n as C,am as w}from"./app-537fb8fd.js";import{A as V}from"./AuthenticationCard-d65f0fd2.js";import{_ as $}from"./AuthenticationCardLogo-6bd6166e.js";import{_ as p}from"./InputError-8002e5ed.js";import{_ as v}from"./InputLabel-9366c5de.js";import{_ as I}from"./PrimaryButton-fc785b1f.js";import{_ as g}from"./TextInput-bead1ab8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./logo-b61dfbc7.js";const T={class:"mb-4 text-sm text-gray-600"},U=["onSubmit"],B={key:0},F={key:1},N={class:"flex items-center justify-end mt-4"},j=["onClick"],G={__name:"TwoFactorChallenge",setup(A){const r=d(!1),e=x({code:"",recovery_code:""}),f=d(null),_=d(null),b=async()=>{r.value^=!0,await w(),r.value?(f.value.focus(),e.code=""):(_.value.focus(),e.recovery_code="")},k=()=>{e.post(route("two-factor.login"))};return(P,l)=>(a(),s(c,null,[o(t(h),{title:"Two-factor Confirmation"}),o(V,null,{logo:m(()=>[o($)]),default:m(()=>[i("div",T,[r.value?(a(),s(c,{key:1},[n(" Please confirm access to your account by entering one of your emergency recovery codes. ")],64)):(a(),s(c,{key:0},[n(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")],64))]),i("form",{onSubmit:y(k,["prevent"])},[r.value?(a(),s("div",F,[o(v,{for:"recovery_code",value:"Recovery Code"}),o(g,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:f,modelValue:t(e).recovery_code,"onUpdate:modelValue":l[1]||(l[1]=u=>t(e).recovery_code=u),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"]),o(p,{class:"mt-2",message:t(e).errors.recovery_code},null,8,["message"])])):(a(),s("div",B,[o(v,{for:"code",value:"Code"}),o(g,{id:"code",ref_key:"codeInput",ref:_,modelValue:t(e).code,"onUpdate:modelValue":l[0]||(l[0]=u=>t(e).code=u),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"]),o(p,{class:"mt-2",message:t(e).errors.code},null,8,["message"])])),i("div",N,[i("button",{type:"button",class:"text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer",onClick:y(b,["prevent"])},[r.value?(a(),s(c,{key:1},[n(" Use an authentication code ")],64)):(a(),s(c,{key:0},[n(" Use a recovery code ")],64))],8,j),o(I,{class:C(["ml-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:m(()=>[n(" Log in ")]),_:1},8,["class","disabled"])])],40,U)]),_:1})],64))}};export{G as default};