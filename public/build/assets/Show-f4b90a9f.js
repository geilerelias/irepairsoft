import c from"./DeleteUserForm-541d81e5.js";import l from"./LogoutOtherBrowserSessionsForm-8d4d8ed4.js";import{S as s}from"./SectionBorder-e549f715.js";import u from"./TwoFactorAuthenticationForm-1cd1ec8b.js";import f from"./UpdatePasswordForm-96d0acba.js";import _ from"./UpdateProfileInformationForm-140636b8.js";import{_ as d}from"./AdminLayout-faa73e17.js";import{k as h,o as e,c as g,w as m,b as t,a as i,f as r,g as a,F as $}from"./app-f54ee0bf.js";import"./Modal-60c3b21f.js";import"./SectionTitle-5a6d5542.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DangerButton-26a91bea.js";import"./DialogModal-b40cd97e.js";import"./InputError-30de8060.js";import"./SecondaryButton-d3735ec5.js";import"./TextInput-3bd46eb2.js";import"./ActionMessage-b1ced657.js";import"./PrimaryButton-cc18ddb4.js";import"./InputLabel-045503a5.js";import"./FormSection-a8b4dfa8.js";import"./Logo-3d816051.js";import"./logo-b61dfbc7.js";import"./links-1531fbc0.js";const w=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),k={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},v={key:0},y={key:1},B={key:2},Q={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(n){return(o,F)=>{const p=h("v-app");return e(),g(d,{title:"Profile"},{default:m(()=>[t(p,null,{header:m(()=>[w]),default:m(()=>[i("div",null,[i("div",k,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",v,[t(_,{user:o.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",y,[t(f,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",B,[t(u,{"requires-confirmation":n.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:n.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r($,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1})]),_:1})}}};export{Q as default};