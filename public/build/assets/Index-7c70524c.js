import{r as P,d as R,k as u,o as s,f as z,a as c,t as g,u as v,b as t,F as q,i as S,c as d,x as O,g as y,w as e,h as x,n as H,G as T,J as E,O as U}from"./app-9bde0dc8.js";import{L as G,d as K}from"./index-d910c994.js";import{_ as Q}from"./AdminLayout-1a32dca7.js";import{_ as W}from"./BreadCrumbs-5114e2b0.js";import"./vue.runtime.esm-bundler-c8684051.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-1511197d.js";import"./logo-b61dfbc7.js";import"./links-e148a6c7.js";const X={class:"d-flex justify-space-between"},Y={__name:"Pagination",props:{textModel:{type:String,default:"posts"},pagination:Object},emits:["paginate"],setup(o){const _=o;P(1),R(()=>Math.ceil(V.length/a)),P(null);const{from:h,to:a,total:$,current_page:C,last_page:b,links:V}=_.pagination;return(p,f)=>{const m=u("v-spacer"),l=u("v-btn");return s(),z("div",{key:new Date().getTime()},[c("div",X,[c("p",null," Mostrando de "+g(v(h))+" a "+g(v(a))+" de "+g(v($))+" "+g(o.textModel),1),t(m),(s(!0),z(q,null,S(v(V),(i,B)=>(s(),z(q,{key:i.label},[i.label==="first"?(s(),d(l,{key:0,class:"mx-1",icon:"mdi-skip-backward-outline",size:"small",onClick:f[0]||(f[0]=O(w=>p.$emit("paginate",1),["prevent"]))})):y("",!0),i.label==="prev"?(s(),d(l,{key:1,class:"mx-1",icon:"mdi-skip-previous-outline",size:"small",onClick:f[1]||(f[1]=w=>p.$emit("paginate",v(C)-1))})):y("",!0),isNaN(i.label)?y("",!0):(s(),d(l,{key:2,class:H([[i.active?"text-white":"bg-white text-grey","border-gray-300"],"mx-1"]),color:i.active?"primary":"",icon:"",size:"small",onClick:O(w=>p.$emit("paginate",i.label),["prevent"])},{default:e(()=>[x(g(i.label),1)]),_:2},1032,["class","color","onClick"])),i.label==="next"?(s(),d(l,{key:3,class:"mx-1",icon:"mdi-skip-next-outline",size:"small",onClick:f[2]||(f[2]=w=>p.$emit("paginate",v(C)+1))})):y("",!0),i.label==="last"?(s(),d(l,{key:4,class:"mx-1",icon:"mdi-skip-forward-outline",size:"small",onClick:f[3]||(f[3]=w=>p.$emit("paginate",v(b)))})):y("",!0)],64))),128))])])}}},A={__name:"Badge",props:{text:String},setup(o){return(_,h)=>{const a=u("v-chip");return s(),d(a,{size:"small",class:"mr-1"},{default:e(()=>[x(g(o.text),1)]),_:1})}}},Z={class:"text-xl font-medium text-indigo-darken-2 underline text-truncate"},ee={class:"text-lg font-medium"},te={class:"mt-2 text-sm text-grey-darken-3"},ae={class:"mt-2 text-sm text-grey-darken-3"},le={__name:"Post",props:{post:Object},setup(o){return(_,h)=>{const a=u("v-card-title"),$=u("v-card-text"),C=u("v-card");return s(),d(C,{class:"pa-2 ma-2",style:{width:"100%"}},{default:e(()=>[t(a,null,{default:e(()=>[c("h2",Z,[t(v(G),{href:_.route("posts.edit",o.post),class:"focus:outline-none"},{default:e(()=>[x(g(o.post.title),1)]),_:1},8,["href"])])]),_:1}),t($,null,{default:e(()=>[c("small",null,"("+g(o.post.created_at)+")",1),c("h3",ee,g(o.post.user.name),1),c("p",te,[x(" Categorías: "),t(A,{text:o.post.category.name},null,8,["text"])]),c("p",ae,[x(" Etiquetas: "),(s(!0),z(q,null,S(o.post.tags,b=>(s(),d(A,{key:b.id,text:b.name},null,8,["text"]))),128))])]),_:1})]),_:1})}}},oe={class:"py-8"},se=c("h3",null,"No hay posts",-1),ne=c("p",null,"Crea el primer post.",-1),ie={class:"mt-6"},ge={__name:"Index",props:{model:{type:Object,default:{posts:[],categories:{},tags:{},filters:{},initial_filters:{}}}},setup(o){const _=o,h=P(null),a=P(_.model.filters),$=[{title:"Dashboard",disabled:!0,href:"/dashboard"},{title:"Post",disabled:!1,href:"/dashboard/posts"}];T(()=>h.value.focus()),T(()=>{a.value.categories=_.model.filters.categories.map(m=>_.model.categories.data.find(i=>i.id===Number(m))||null)});const b=()=>{let m=[];Object.keys(a.value).forEach(l=>{Array.isArray(a.value[l])&&a.value[l].forEach(i=>{m.push(`${l}[]=${i}`)}),typeof a.value[l]=="string"&&a.value[l]&&m.push(`${l}=${a.value[l]}`)}),window.location.href=`${window.route("posts.export-to-excel")}?${m.join("&")}`},V=m=>{a.value.page=m,U.get(route("posts.index"),a.value,{preserveScroll:!0})},p=()=>{V()},f=()=>{a.value=_.model.initial_filters,p(),console.log(window.location.pathname),U.get(window.location.pathname)};return(m,l)=>{const i=u("v-btn"),B=u("v-card-text"),w=u("v-text-field"),k=u("v-col"),D=u("v-chip"),I=u("v-list-item"),F=u("v-autocomplete"),M=u("v-row"),J=u("v-card"),L=u("v-container");return s(),d(Q,{title:"Posts"},{default:e(()=>[t(W,{items:$,name:"Gestion de Post"}),t(L,null,{default:e(()=>[t(J,{flat:""},{default:e(()=>[t(B,{class:"d-flex align-center justify-sm-space-between justify-start gap-4 flex-wrap"},{default:e(()=>[t(i,{class:"bg-primary",variant:"elevated",onClick:l[0]||(l[0]=r=>v(K.Inertia).visit(m.route("posts.create")))},{default:e(()=>[x(" Crear nuevo post ")]),_:1}),t(i,{color:"primary",flat:"",variant:"outlined",onClick:O(b,["prevent"])},{default:e(()=>[x(" Exportar a Excel ")]),_:1},8,["onClick"])]),_:1}),t(B,{class:"d-flex align-center justify-sm-space-between justify-start gap-4 flex-wrap"},{default:e(()=>[t(M,null,{default:e(()=>[t(k,{cols:"12",lg:"3",md:"6"},{default:e(()=>[t(w,{ref_key:"input",ref:h,modelValue:a.value.query,"onUpdate:modelValue":l[1]||(l[1]=r=>a.value.query=r),clearable:"",density:"compact","hide-details":"",placeholder:"Búsqueda por título","prepend-inner-icon":"mdi-magnify",type:"text",variant:"outlined",onInput:p},null,8,["modelValue"])]),_:1}),t(k,{cols:"12",lg:"3",md:"6",sm:"6"},{default:e(()=>[o.model.categories?(s(),d(F,{key:0,modelValue:a.value.categories,"onUpdate:modelValue":[l[2]||(l[2]=r=>a.value.categories=r),p],chips:!0,items:o.model.categories.data,multiple:!0,"closable-chips":"",density:"compact","hide-details":"","item-title":"name","item-value":"id",label:"Categorías",variant:"outlined"},{chip:e(({props:r,item:n})=>[t(D,E({text:n.raw.name,value:n.raw.id},r),null,16,["text","value"])]),item:e(({props:r,item:n})=>{var j,N;return[t(I,E({title:(j=n==null?void 0:n.raw)==null?void 0:j.name,value:(N=n==null?void 0:n.raw)==null?void 0:N.id},r),null,16,["title","value"])]}),_:1},8,["modelValue","items"])):y("",!0)]),_:1}),t(k,{cols:"12",lg:"3",md:"6",sm:"6"},{default:e(()=>[o.model.tags?(s(),d(F,{key:0,modelValue:a.value.tags,"onUpdate:modelValue":l[3]||(l[3]=r=>a.value.tags=r),chips:!0,items:o.model.tags.data,multiple:!0,"closable-chips":"",density:"compact","hide-details":"","item-title":"name","item-value":"id",label:"Etiquetas",variant:"outlined",onChipInput:p},{chip:e(({props:r,item:n})=>[t(D,E({text:n.raw.name,value:n.raw.id},r),null,16,["text","value"])]),item:e(({props:r,item:n})=>{var j,N;return[t(I,E({title:(j=n==null?void 0:n.raw)==null?void 0:j.name,value:(N=n==null?void 0:n.raw)==null?void 0:N.id},r,{onClick:p}),null,16,["title","value"])]}),_:1},8,["modelValue","items"])):y("",!0)]),_:1}),t(k,{class:"d-flex justify-center",cols:"12",lg:"3",md:"6"},{default:e(()=>[t(i,{color:"primary",rounded:"xl",size:"large",onClick:f},{default:e(()=>[x(" Restablecer filtros ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(L,null,{default:e(()=>[c("div",oe,[c("div",null,[c("div",null,[o.model.posts.data.length?(s(),d(M,{key:0},{default:e(()=>[(s(!0),z(q,null,S(o.model.posts.data,r=>(s(),d(k,{key:r.id,class:"d-flex child-flex",cols:"6"},{default:e(()=>[t(le,{post:r},null,8,["post"])]),_:2},1024))),128))]),_:1})):(s(),d(M,{key:1,class:"text-center py-4"},{default:e(()=>[t(k,null,{default:e(()=>[se,ne,c("div",ie,[t(v(G),{href:m.route("posts.create")},{default:e(()=>[x(" Nuevo Post ")]),_:1},8,["href"])])]),_:1})]),_:1}))]),o.model.posts.data.length?(s(),d(Y,{key:0,pagination:o.model.posts.meta,onPaginate:V},null,8,["pagination"])):y("",!0)])])]),_:1})]),_:1})}}};export{ge as default};