import{T as c,o as f,c as _,w as l,b as o,a as t,u as e,n as w,h as V,x as g}from"./app-69bbdf3d.js";import{A as b}from"./AuthenticationCard-70b46baf.js";import{_ as k}from"./AuthenticationCardLogo-bf35607e.js";import{_ as m}from"./InputError-697e7ee6.js";import{_ as i}from"./InputLabel-f3899f9d.js";import{_ as v}from"./PrimaryButton-4bbb5162.js";import{_ as n}from"./TextInput-eb9e4199.js";import{_ as x}from"./AuthLayout-3796c122.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./logo-b61dfbc7.js";import"./Logo-2d177948.js";const $=["onSubmit"],y={class:"mt-4"},h={class:"mt-4"},C={class:"flex items-center justify-end mt-4"},F={__name:"ResetPassword",props:{email:String,token:String},setup(p){const d=p,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(P,a)=>(f(),_(x,{title:"Restablecer contraseña"},{default:l(()=>[o(b,null,{logo:l(()=>[o(k)]),default:l(()=>[t("form",{onSubmit:g(u,["prevent"])},[t("div",null,[o(i,{for:"email",value:"Email"}),o(n,{id:"email",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>e(s).email=r),autocomplete:"username",autofocus:"",class:"mt-1 block w-full",required:"",type:"email"},null,8,["modelValue"]),o(m,{message:e(s).errors.email,class:"mt-2"},null,8,["message"])]),t("div",y,[o(i,{for:"password",value:"Password"}),o(n,{id:"password",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>e(s).password=r),autocomplete:"new-password",class:"mt-1 block w-full",required:"",type:"password"},null,8,["modelValue"]),o(m,{message:e(s).errors.password,class:"mt-2"},null,8,["message"])]),t("div",h,[o(i,{for:"password_confirmation",value:"Confirm Password"}),o(n,{id:"password_confirmation",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>e(s).password_confirmation=r),autocomplete:"new-password",class:"mt-1 block w-full",required:"",type:"password"},null,8,["modelValue"]),o(m,{message:e(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])]),t("div",C,[o(v,{class:w({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:l(()=>[V(" Reset Password ")]),_:1},8,["class","disabled"])])],40,$)]),_:1})]),_:1}))}};export{F as default};