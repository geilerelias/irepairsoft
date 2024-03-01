import{T as l,r as c,o as d,c as u,w as e,b as o,u as a,Z as f,a as r,n as p,h as _,x as w}from"./app-9bde0dc8.js";import{A as x}from"./AuthenticationCard-f8ab6b02.js";import{_ as b}from"./AuthenticationCardLogo-5107b873.js";import{_ as g}from"./InputError-043f61ed.js";import{_ as h}from"./InputLabel-b7dcb121.js";import{_ as v}from"./PrimaryButton-8fca1834.js";import{_ as y}from"./TextInput-f696f172.js";import{_ as V}from"./AuthLayout-e6eb15e1.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./logo-b61dfbc7.js";import"./Logo-1511197d.js";const $=r("div",{class:"mb-4 text-sm text-gray-600 text-justify"}," Esta es un área segura de la aplicación. Por favor, confirme su contraseña antes de continuar. ",-1),C=["onSubmit"],k={class:"flex justify-end mt-4"},U={__name:"ConfirmPassword",setup(A){const s=l({password:""}),t=c(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(B,i)=>(d(),u(V,null,{default:e(()=>[o(a(f),{title:"Secure Area"}),o(x,null,{logo:e(()=>[o(b)]),default:e(()=>[$,r("form",{onSubmit:w(n,["prevent"])},[r("div",null,[o(h,{for:"password",value:"Password"}),o(y,{id:"password",ref_key:"passwordInput",ref:t,modelValue:a(s).password,"onUpdate:modelValue":i[0]||(i[0]=m=>a(s).password=m),autocomplete:"current-password",autofocus:"",class:"mt-1 block w-full",required:"",type:"password"},null,8,["modelValue"]),o(g,{message:a(s).errors.password,class:"mt-2"},null,8,["message"])]),r("div",k,[o(v,{class:p([{"opacity-25":a(s).processing},"ml-4"]),disabled:a(s).processing},{default:e(()=>[_(" Confirm ")]),_:1},8,["class","disabled"])])],40,C)]),_:1})]),_:1}))}};export{U as default};
