import{aM as s,o as r,c as d,w as t,a,t as n,b as i,j as l}from"./app-537fb8fd.js";const u={class:"d-flex justify-space-between"},p={class:"d-flex py-0 align-center"},h={class:"text-h6 mb-2"},y={__name:"BreadCrumbs",props:{name:{type:String,required:!0},items:{type:Array,required:!0}},setup(o){return(f,v)=>{const c=s("v-breadcrumbs-item"),_=s("inertia-link"),m=s("v-breadcrumbs"),b=s("v-sheet");return r(),d(b,{class:"rounded-b-lg pa-4 ml-2 mt-0",elevation:"2",width:"100vw"},{default:t(()=>[a("div",u,[a("div",p,[a("div",null,[a("h3",h,n(o.name),1),i(m,{items:o.items,class:"font-weight-regular pa-0 ml-n1"},{item:t(({item:e})=>[e.disabled?(r(),d(c,{key:1,disabled:e.disabled},{default:t(()=>[l(n(e.text),1)]),_:2},1032,["disabled"])):(r(),d(_,{key:0,href:e.href},{default:t(()=>[i(c,{disabled:e.disabled},{default:t(()=>[l(n(e.text),1)]),_:2},1032,["disabled"])]),_:2},1032,["href"]))]),_:1},8,["items"])])])])]),_:1})}}};export{y as _};
