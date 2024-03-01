import{T as m,d as _,o as a,c as p,w as t,b as o,f as g,g as h,a as e,n as v,u as i,h as n,D as c,x}from"./app-f54ee0bf.js";import{A as b}from"./AuthenticationCard-3932840a.js";import{_ as y}from"./AuthenticationCardLogo-80db7530.js";import{_ as k}from"./PrimaryButton-cc18ddb4.js";import{_ as V}from"./AuthLayout-9b3c5465.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./logo-b61dfbc7.js";import"./Logo-3d816051.js";const w=e("h2",{class:"font-weight-bold mt-4 blue-grey--text text--darken-2"},"Verificar email",-1),S=e("div",{class:"mb-4 text-sm text-gray-600"}," Antes de continuar, ¿podría verificar su dirección de correo electrónico haciendo clic en el enlace que le acabamos de enviar? Si no recibiste el correo electrónico, con gusto te enviaremos otro. ",-1),E={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],C={class:"mt-4 flex items-center justify-between flex-column"},N={class:"d-flex justify-space-between py-4"},O={__name:"VerifyEmail",props:{status:String},setup(l){const d=l,s=m({}),u=()=>{s.post(route("verification.send"))},f=_(()=>d.status==="verification-link-sent");return(r,A)=>(a(),p(V,{title:"Verificación de Email "},{default:t(()=>[o(b,null,{logo:t(()=>[o(y),w]),default:t(()=>[S,f.value?(a(),g("div",E," Se ha enviado un nuevo enlace de verificación a la dirección de correo electrónico que proporcionó en la configuración de su perfil. ")):h("",!0),e("form",{onSubmit:x(u,["prevent"])},[e("div",C,[o(k,{class:v({"opacity-25":i(s).processing}),disabled:i(s).processing,block:""},{default:t(()=>[n(" Resend Verification Email ")]),_:1},8,["class","disabled"]),e("div",N,[e("div",null,[o(i(c),{href:r.route("profile.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:t(()=>[n(" Edit Profile ")]),_:1},8,["href"])]),e("div",null,[o(i(c),{href:r.route("logout"),as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-2",method:"post"},{default:t(()=>[n(" Log Out ")]),_:1},8,["href"])])])])],40,B)]),_:1})]),_:1}))}};export{O as default};