import{g as c,c as f,w as l,o as _,b as o,a as t,u as e,n as w,j as g,l as V}from"./app-8f7a63b0.js";import{A as b}from"./AuthenticationCard-ee854d58.js";import{_ as v}from"./AuthenticationCardLogo-12f7712a.js";import{_ as m}from"./InputError-b69c6f5d.js";import{_ as i}from"./InputLabel-7743c8db.js";import{_ as k}from"./PrimaryButton-fbb757b2.js";import{_ as n}from"./TextInput-27a06ab1.js";import{_ as $}from"./AuthLayout-4aae53c0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./logo-899ff9db.js";import"./Logo-461a59c9.js";const x=["onSubmit"],y={class:"mt-4"},C={class:"mt-4"},P={class:"flex items-center justify-end mt-4"},M={__name:"ResetPassword",props:{email:String,token:String},setup(p){const d=p,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(S,a)=>(_(),f($,{title:"Restablecer contraseña"},{default:l(()=>[o(b,null,{logo:l(()=>[o(v)]),default:l(()=>[t("form",{onSubmit:V(u,["prevent"])},[t("div",null,[o(i,{for:"email",value:"Email"}),o(n,{id:"email",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>e(s).email=r),autocomplete:"username",autofocus:"",class:"mt-1 block w-full",required:"",type:"email"},null,8,["modelValue"]),o(m,{message:e(s).errors.email,class:"mt-2"},null,8,["message"])]),t("div",y,[o(i,{for:"password",value:"Password"}),o(n,{id:"password",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>e(s).password=r),autocomplete:"new-password",class:"mt-1 block w-full",required:"",type:"password"},null,8,["modelValue"]),o(m,{message:e(s).errors.password,class:"mt-2"},null,8,["message"])]),t("div",C,[o(i,{for:"password_confirmation",value:"Confirm Password"}),o(n,{id:"password_confirmation",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>e(s).password_confirmation=r),autocomplete:"new-password",class:"mt-1 block w-full",required:"",type:"password"},null,8,["modelValue"]),o(m,{message:e(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])]),t("div",P,[o(k,{class:w({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:l(()=>[g(" Reset Password ")]),_:1},8,["class","disabled"])])],40,x)]),_:1})]),_:1}))}};export{M as default};
