import{aM as a,o,f as c,b as n,w as r,a as e,t as l}from"./app-537fb8fd.js";const i={class:"text-center align-center justify-center"},d={class:"d-flex justify-center flex-column mb-6 text-center"},u=e("div",{class:"spinner mx-auto mb-4"},[e("div",{class:"rect1"}),e("div",{class:"rect2"}),e("div",{class:"rect3"}),e("div",{class:"rect4"}),e("div",{class:"rect5"})],-1),m={class:"white--text"},f={__name:"SpinnerComponent",props:{value:{type:Boolean,default:!1,required:!0},opacity:{type:Number,default:.9},color:{type:String,default:"primary"},text:{type:String,default:"Un momento por favor, estamos procesando su solicitud"}},setup(t){return(_,p)=>{const s=a("v-overlay");return o(),c("div",i,[n(s,{"model-value":t.value,scrim:t.color,class:"align-center justify-center bg-black-light"},{default:r(()=>[e("div",d,[u,e("p",m,l(t.text),1)])]),_:1},8,["model-value","scrim"])])}}};export{f as _};
