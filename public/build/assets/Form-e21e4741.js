import{G as p,o as i,c as b,w as m,a as t,t as a,x as w,e as u,H as g,u as l,f as r,g as c,I as h,i as v,F as y}from"./app-69bbdf3d.js";import{u as x}from"./index-b0eb3ac2.js";import{_ as S}from"./AppLayout-1d42127a.js";import"./vue.runtime.esm-bundler-66b337ac.js";import"./_plugin-vue_export-helper-c27b6911.js";const k={class:"font-semibold text-xl text-gray-800 leading-tight"},V={class:"py-8"},B=["onSubmit"],C={class:"w-full"},F={class:"mt-1 sm:mt-0 sm:col-span-2"},M={class:"flex rounded-md shadow-sm"},T={key:0,class:"bg-red-500 text-white p-1 rounded-lg"},U={class:"w-full"},j=t("option",{value:""},"Selecciona una categoría",-1),D=["value"],N={key:0,class:"bg-red-500 text-white p-1 rounded-lg"},O={class:"w-full"},q=t("option",{value:""},"Selecciona etiquetas",-1),E=["value"],G={key:0,class:"bg-red-500 text-white p-1 rounded-lg"},H={class:"w-full"},I={class:"mt-1 sm:mt-0"},L={key:0,class:"bg-red-500 text-white p-1 rounded-lg"},$={type:"submit"},Q={__name:"Form",props:{errors:Object,model:Object,title:{type:String,default:"Crear un nuevo post"},actionText:{type:String,default:"Crear"}},setup(o){const f=o,e=x({id:null,title:"",body:"",category_id:"",tags:[]});p(()=>{const n=f.model.post;n&&(e.id=n.data.id,e.title=n.data.title,e.body=n.data.body,e.category_id=n.data.category.id,e.tags=n.data.tags.map(d=>d.id))});const _=()=>{e.id?e.patch(window.route("posts.update",{id:e.id})):e.post(window.route("posts.store"))};return(n,d)=>(i(),b(S,null,{header:m(()=>[t("h2",k,a(o.title),1)]),default:m(()=>[t("div",V,[t("div",null,[t("form",{onSubmit:w(_,["prevent"])},[t("div",null,[t("div",C,[t("div",F,[t("div",M,[u(t("input",{"onUpdate:modelValue":d[0]||(d[0]=s=>l(e).title=s),type:"text",placeholder:"Título"},null,512),[[g,l(e).title]])]),o.errors.title?(i(),r("div",T,a(o.errors.title),1)):c("",!0)])]),t("div",U,[u(t("select",{"onUpdate:modelValue":d[1]||(d[1]=s=>l(e).category_id=s)},[j,(i(!0),r(y,null,v(o.model.categories.data,s=>(i(),r("option",{value:s.id},a(s.name),9,D))),256))],512),[[h,l(e).category_id]]),o.errors.category_id?(i(),r("div",N,a(o.errors.category_id),1)):c("",!0)]),t("div",O,[u(t("select",{multiple:"","onUpdate:modelValue":d[2]||(d[2]=s=>l(e).tags=s)},[q,(i(!0),r(y,null,v(o.model.tags.data,s=>(i(),r("option",{value:s.id},a(s.name),9,E))),256))],512),[[h,l(e).tags]]),o.errors.tags?(i(),r("div",G,a(o.errors.tags),1)):c("",!0)]),t("div",H,[t("div",I,[u(t("textarea",{"onUpdate:modelValue":d[3]||(d[3]=s=>l(e).body=s),rows:"3"},null,512),[[g,l(e).body]])]),o.errors.body?(i(),r("div",L,a(o.errors.body),1)):c("",!0)])]),t("button",$,a(o.actionText),1)],40,B)])])]),_:1}))}};export{Q as default};