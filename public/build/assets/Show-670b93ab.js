import{_ as i}from"./AppLayout-2f8bf6d8.js";import o from"./DeleteTeamForm-4e5862c2.js";import{S as r}from"./SectionBorder-2831034d.js";import l from"./TeamMemberManager-c6e1f469.js";import n from"./UpdateTeamNameForm-321eb216.js";import{c,w as a,o as s,a as m,b as t,f as p,F as f,h as d}from"./app-8f7a63b0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-6b2003d1.js";import"./SectionTitle-7ae33a6c.js";import"./ConfirmationModal-42694573.js";import"./DangerButton-5b34dd4c.js";import"./SecondaryButton-c2cf62cd.js";import"./ActionMessage-7abda4eb.js";import"./DialogModal-5c7fde97.js";import"./FormSection-407889b3.js";import"./InputError-b69c6f5d.js";import"./InputLabel-7743c8db.js";import"./PrimaryButton-fbb757b2.js";import"./TextInput-27a06ab1.js";const u=m("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},E={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(h,b)=>(s(),c(i,{title:"Team Settings"},{header:a(()=>[u]),default:a(()=>[m("div",null,[m("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(s(),p(f,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):d("",!0)])])]),_:1}))}};export{E as default};
