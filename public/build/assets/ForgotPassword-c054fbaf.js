import{g as u,c,w as a,o as l,b as s,u as t,X as d,f as _,t as f,h as p,a as o,n as w,j as g,l as b}from"./app-fb34e38a.js";import{A as y}from"./AuthenticationCard-eeacaa89.js";import{_ as h}from"./AuthenticationCardLogo-31dda92b.js";import{_ as x}from"./InputError-b1fcd311.js";import{_ as k}from"./InputLabel-beeb87f5.js";import{_ as v}from"./PrimaryButton-cbf279be.js";import{_ as V}from"./TextInput-f680c5f5.js";import{_ as $}from"./AuthLayout-5783248d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./logo-b61dfbc7.js";import"./Logo-4282a9b8.js";const N=o("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),B={key:0,class:"mb-4 font-medium text-sm text-green-600"},C=["onSubmit"],S={class:"flex items-center justify-end mt-4"},T={__name:"ForgotPassword",props:{status:String},setup(r){const e=u({email:""}),m=()=>{e.post(route("password.email"))};return(E,i)=>(l(),c($,null,{default:a(()=>[s(t(d),{title:"Forgot Password"}),s(y,null,{logo:a(()=>[s(h)]),default:a(()=>[N,r.status?(l(),_("div",B,f(r.status),1)):p("",!0),o("form",{onSubmit:b(m,["prevent"])},[o("div",null,[s(k,{for:"email",value:"Email"}),s(V,{id:"email",modelValue:t(e).email,"onUpdate:modelValue":i[0]||(i[0]=n=>t(e).email=n),autocomplete:"username",autofocus:"",class:"mt-1 block w-full",required:"",type:"email"},null,8,["modelValue"]),s(x,{message:t(e).errors.email,class:"mt-2"},null,8,["message"])]),o("div",S,[s(v,{class:w({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:a(()=>[g(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,C)]),_:1})]),_:1}))}};export{T as default};
