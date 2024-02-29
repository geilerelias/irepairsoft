import{_ as Ze}from"./AdminLayout-e88aa53a.js";import{_ as et}from"./BreadCrumbs-9c54378d.js";import{bu as C,bv as X,d as V,bj as $e,aD as Y,ab as Z,bw as me,bx as ne,by as pe,b as a,bz as tt,bA as J,bB as at,al as ge,bC as Q,r as j,bD as we,bE as Se,b1 as F,bF as be,bG as oe,bH as Pe,bI as lt,bJ as nt,bK as ot,bL as se,bM as st,F as K,bN as ye,bO as rt,j as T,bP as ut,bq as Ve,bQ as le,bR as it,bi as Te,bS as dt,bT as ct,bU as ft,bV as mt,bW as vt,bX as De,av as gt,c as q,w as m,o as B,u as U,i as ve,a as P,f as W,k as Ie,h as z,aM as I,t as Ce}from"./app-537fb8fd.js";import"./adminDrawer-9df65c6d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-e4e71ec4.js";import"./logo-b61dfbc7.js";import"./links-f34c9867.js";const bt=C({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Fe=Symbol.for("vuetify:data-table-pagination");function pt(e){const n=X(e,"page",void 0,t=>+(t??1)),l=X(e,"itemsPerPage",void 0,t=>+(t??10));return{page:n,itemsPerPage:l}}function yt(e){const{page:n,itemsPerPage:l,itemsLength:t}=e,o=V(()=>l.value===-1?0:l.value*(n.value-1)),d=V(()=>l.value===-1?t.value:Math.min(t.value,o.value+l.value)),r=V(()=>l.value===-1||t.value===0?1:Math.ceil(t.value/l.value));$e(()=>{n.value>r.value&&(n.value=r.value)});function s(g){l.value=g,n.value=1}function u(){n.value=me(n.value+1,1,r.value)}function c(){n.value=me(n.value-1,1,r.value)}function i(g){n.value=me(g,1,r.value)}const v={page:n,itemsPerPage:l,startIndex:o,stopIndex:d,pageCount:r,itemsLength:t,nextPage:u,prevPage:c,setPage:i,setItemsPerPage:s};return Y(Fe,v),v}function ht(){const e=Z(Fe);if(!e)throw new Error("Missing pagination!");return e}function xt(e){const{items:n,startIndex:l,stopIndex:t,itemsPerPage:o}=e;return{paginatedItems:V(()=>o.value<=0?n.value:n.value.slice(l.value,t.value))}}const Ee=C({prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),Be=ne()({name:"VDataTableFooter",props:Ee(),setup(e,n){let{slots:l}=n;const{t}=pe(),{page:o,pageCount:d,startIndex:r,stopIndex:s,itemsLength:u,itemsPerPage:c,setItemsPerPage:i}=ht(),v=V(()=>e.itemsPerPageOptions.map(g=>({...g,title:t(g.title)})));return()=>{var g;return a("div",{class:"v-data-table-footer"},[(g=l.prepend)==null?void 0:g.call(l),a("div",{class:"v-data-table-footer__items-per-page"},[a("span",null,[t(e.itemsPerPageText)]),a(tt,{items:v.value,modelValue:c.value,"onUpdate:modelValue":w=>i(Number(w)),density:"compact",variant:"outlined","hide-details":!0},null)]),a("div",{class:"v-data-table-footer__info"},[a("div",null,[t(e.pageText,u.value?r.value+1:0,s.value,u.value)])]),a("div",{class:"v-data-table-footer__pagination"},[a(J,{icon:e.firstIcon,variant:"plain",onClick:()=>o.value=1,disabled:o.value===1,"aria-label":t(e.firstPageLabel)},null),a(J,{icon:e.prevIcon,variant:"plain",onClick:()=>o.value=Math.max(1,o.value-1),disabled:o.value===1,"aria-label":t(e.prevPageLabel)},null),e.showCurrentPage&&a("span",{key:"page",class:"v-data-table-footer__page"},[o.value]),a(J,{icon:e.nextIcon,variant:"plain",onClick:()=>o.value=Math.min(d.value,o.value+1),disabled:o.value===d.value,"aria-label":t(e.nextPageLabel)},null),a(J,{icon:e.lastIcon,variant:"plain",onClick:()=>o.value=d.value,disabled:o.value===d.value,"aria-label":t(e.lastPageLabel)},null)])])}}}),he=at({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},(e,n)=>{let{slots:l,attrs:t}=n;const o=e.tag??"td";return a(o,ge({class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:Q(e.height),width:Q(e.width),left:Q(e.fixedOffset||null)}},t),{default:()=>{var d;return[(d=l.default)==null?void 0:d.call(l)]}})}),_t=C({headers:{type:Array,default:()=>[]}},"DataTable-header"),Ne=Symbol.for("vuetify:data-table-headers");function kt(e,n){const l=j([]),t=j([]);$e(()=>{var w,y,S;const d=e.headers.length?Array.isArray(e.headers[0])?e.headers:[e.headers]:[],r=d.flatMap((f,b)=>f.map(k=>({column:k,row:b}))),s=d.length,u={title:"",sortable:!1},c={...u,width:48};if((w=n==null?void 0:n.groupBy)!=null&&w.value.length){const f=r.findIndex(b=>{let{column:k}=b;return k.key==="data-table-group"});f<0?r.unshift({column:{...u,key:"data-table-group",title:"Group",rowspan:s},row:0}):r.splice(f,1,{column:{...u,...r[f].column},row:r[f].row})}if((y=n==null?void 0:n.showSelect)!=null&&y.value){const f=r.findIndex(b=>{let{column:k}=b;return k.key==="data-table-select"});f<0?r.unshift({column:{...c,key:"data-table-select",rowspan:s},row:0}):r.splice(f,1,{column:{...c,...r[f].column},row:r[f].row})}if((S=n==null?void 0:n.showExpand)!=null&&S.value){const f=r.findIndex(b=>{let{column:k}=b;return k.key==="data-table-expand"});f<0?r.push({column:{...c,key:"data-table-expand",rowspan:s},row:0}):r.splice(f,1,{column:{...c,...r[f].column},row:r[f].row})}const i=we(s).map(()=>[]),v=we(s).fill(0);r.forEach(f=>{let{column:b,row:k}=f,p=b.key;p==null&&(p="");for(let x=k;x<=k+(b.rowspan??1)-1;x++)i[x].push({...b,key:p,fixedOffset:v[x],sortable:b.sortable??!!b.key}),v[x]+=Number(b.width??0)}),i.forEach(f=>{for(let b=f.length;b--;b>=0)if(f[b].fixed){f[b].lastFixed=!0;return}});const g=new Set;l.value=i.map(f=>{const b=[];for(const k of f)g.has(k.key)||(g.add(k.key),b.push(k));return b}),t.value=i.at(-1)??[]});const o={headers:l,columns:t};return Y(Ne,o),o}function re(){const e=Z(Ne);if(!e)throw new Error("Missing headers!");return e}const wt={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:n,value:l}=e;return new Set(l?[(t=n[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:n}=e;return n}},Re={showSelectAll:!0,allSelected:e=>{let{currentPage:n}=e;return n},select:e=>{let{items:n,value:l,selected:t}=e;for(const o of n)l?t.add(o.value):t.delete(o.value);return t},selectAll:e=>{let{value:n,currentPage:l,selected:t}=e;return Re.select({items:l,value:n,selected:t})}},Ge={showSelectAll:!0,allSelected:e=>{let{allItems:n}=e;return n},select:e=>{let{items:n,value:l,selected:t}=e;for(const o of n)l?t.add(o.value):t.delete(o.value);return t},selectAll:e=>{let{value:n,allItems:l,selected:t}=e;return Ge.select({items:l,value:n,selected:t})}},St=C({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]}},"DataTable-select"),Le=Symbol.for("vuetify:data-table-selection");function Pt(e,n){let{allItems:l,currentPage:t}=n;const o=X(e,"modelValue",e.modelValue,f=>new Set(f),f=>[...f.values()]),d=V(()=>l.value.filter(f=>f.selectable)),r=V(()=>t.value.filter(f=>f.selectable)),s=V(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return wt;case"all":return Ge;case"page":default:return Re}});function u(f){return Se(f).every(b=>o.value.has(b.value))}function c(f){return Se(f).some(b=>o.value.has(b.value))}function i(f,b){const k=s.value.select({items:f,value:b,selected:new Set(o.value)});o.value=k}function v(f){i([f],!u([f]))}function g(f){const b=s.value.selectAll({value:f,allItems:d.value,currentPage:r.value,selected:new Set(o.value)});o.value=b}const w=V(()=>o.value.size>0),y=V(()=>{const f=s.value.allSelected({allItems:d.value,currentPage:r.value});return u(f)}),S={toggleSelect:v,select:i,selectAll:g,isSelected:u,isSomeSelected:c,someSelected:w,allSelected:y,showSelectAll:s.value.showSelectAll};return Y(Le,S),S}function ue(){const e=Z(Le);if(!e)throw new Error("Missing selection!");return e}const Vt=C({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),je=Symbol.for("vuetify:data-table-sort");function Tt(e){const n=X(e,"sortBy"),l=F(e,"mustSort"),t=F(e,"multiSort");return{sortBy:n,mustSort:l,multiSort:t}}function Dt(e){const{sortBy:n,mustSort:l,multiSort:t,page:o}=e,d=u=>{let c=n.value.map(v=>({...v}))??[];const i=c.find(v=>v.key===u.key);i?i.order==="desc"?l.value?i.order="asc":c=c.filter(v=>v.key!==u.key):i.order="desc":t.value?c=[...c,{key:u.key,order:"asc"}]:c=[{key:u.key,order:"asc"}],n.value=c,o&&(o.value=1)};function r(u){return!!n.value.find(c=>c.key===u.key)}const s={sortBy:n,toggleSort:d,isSorted:r};return Y(je,s),s}function It(){const e=Z(je);if(!e)throw new Error("Missing sort!");return e}function Ct(e,n,l){const t=pe();return{sortedItems:V(()=>l.value.length?Bt(n.value,l.value,t.current.value,e.customKeySort):n.value)}}function Bt(e,n,l,t){const o=new Intl.Collator(l,{sensitivity:"accent",usage:"sort"});return[...e].sort((d,r)=>{for(let s=0;s<n.length;s++){const u=n[s].key,c=n[s].order??"asc";if(c===!1)continue;let i=be(d.raw,u),v=be(r.raw,u);if(c==="desc"&&([i,v]=[v,i]),t!=null&&t[u]){const g=t[u](i,v);if(!g)continue;return g}if(i instanceof Date&&v instanceof Date)return i.getTime()-v.getTime();if([i,v]=[i,v].map(g=>g!=null?g.toString().toLocaleLowerCase():g),i!==v)return oe(i)&&oe(v)?0:oe(i)?-1:oe(v)?1:!isNaN(i)&&!isNaN(v)?Number(i)-Number(v):o.compare(i,v)}return 0})}const He=C({color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:Pe,default:"$sortAsc"},sortDescIcon:{type:Pe,default:"$sortDesc"},...lt()},"VDataTableHeaders"),Oe=ne()({name:"VDataTableHeaders",props:He(),setup(e,n){let{slots:l,emit:t}=n;const{toggleSort:o,sortBy:d,isSorted:r}=It(),{someSelected:s,allSelected:u,selectAll:c,showSelectAll:i}=ue(),{columns:v,headers:g}=re(),{loaderClasses:w}=nt(e),y=(x,_)=>{if(!(!e.sticky&&!x.fixed))return{position:"sticky",zIndex:x.fixed?4:e.sticky?3:void 0,left:x.fixed?Q(x.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${_})`:void 0}};function S(x){const _=d.value.find(E=>E.key===x.key);return _?_.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:f,backgroundColorStyles:b}=ot(e,"color"),k=V(()=>({headers:g.value,columns:v.value,toggleSort:o,isSorted:r,sortBy:d.value,someSelected:s.value,allSelected:u.value,selectAll:c,getSortIcon:S,getFixedStyles:y})),p=x=>{let{column:_,x:E,y:O}=x;const D=_.key==="data-table-select"||_.key==="data-table-expand";return a(he,{tag:"th",align:_.align,class:["v-data-table__th",{"v-data-table__th--sortable":_.sortable,"v-data-table__th--sorted":r(_)},w.value],style:{width:Q(_.width),minWidth:Q(_.width),...y(_,O)},colspan:_.colspan,rowspan:_.rowspan,onClick:_.sortable?()=>o(_):void 0,lastFixed:_.lastFixed,noPadding:D},{default:()=>{var R;const H=`column.${_.key}`,A={column:_,selectAll:c,isSorted:r,toggleSort:o,sortBy:d.value,someSelected:s.value,allSelected:u.value,getSortIcon:S};return l[H]?l[H](A):_.key==="data-table-select"?((R=l["column.data-table-select"])==null?void 0:R.call(l,A))??(i&&a(ye,{modelValue:u.value,indeterminate:s.value&&!u.value,"onUpdate:modelValue":c},null)):a("div",{class:"v-data-table-header__content"},[a("span",null,[_.title]),_.sortable&&a(rt,{key:"icon",class:"v-data-table-header__sort-icon",icon:S(_)},null),e.multiSort&&r(_)&&a("div",{key:"badge",class:["v-data-table-header__sort-badge",...f.value],style:b.value},[d.value.findIndex(N=>N.key===_.key)+1])])}})};se(()=>a(K,null,[l.headers?l.headers(k.value):g.value.map((x,_)=>a("tr",null,[x.map((E,O)=>a(p,{column:E,x:O,y:_},null))])),e.loading&&a("tr",{class:"v-data-table-progress"},[a("th",{colspan:v.value.length},[a(st,{name:"v-data-table-progress",active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:l.loader})])])]))}}),Ot=C({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),Me=Symbol.for("vuetify:data-table-group");function At(e){return{groupBy:X(e,"groupBy")}}function $t(e){const{groupBy:n,sortBy:l}=e,t=j(new Set),o=V(()=>n.value.map(c=>({...c,order:c.order??!1})).concat(l.value));function d(c){return t.value.has(c.id)}function r(c){const i=new Set(t.value);d(c)?i.delete(c.id):i.add(c.id),t.value=i}function s(c){function i(v){const g=[];for(const w of v.items)"type"in w&&w.type==="group"?g.push(...i(w)):g.push(w);return g}return i({type:"group",items:c,id:"dummy",key:"dummy",value:"dummy",depth:0})}const u={sortByWithGroups:o,toggleGroup:r,opened:t,groupBy:n,extractRows:s,isGroupOpen:d};return Y(Me,u),u}function Ue(){const e=Z(Me);if(!e)throw new Error("Missing group!");return e}function Ft(e,n){if(!e.length)return[];const l=new Map;for(const t of e){const o=be(t.raw,n);l.has(o)||l.set(o,[]),l.get(o).push(t)}return l}function ze(e,n){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!n.length)return[];const o=Ft(e,n[0]),d=[],r=n.slice(1);return o.forEach((s,u)=>{const c=n[0],i=`${t}_${c}_${u}`;d.push({depth:l,id:i,key:c,value:u,items:r.length?ze(s,r,l+1,i):s,type:"group"})}),d}function Ke(e,n){const l=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&l.push(t),(n.has(t.id)||t.value==null)&&l.push(...Ke(t.items,n))):l.push(t);return l}function Et(e,n,l){return{flatItems:V(()=>{if(!n.value.length)return e.value;const o=ze(e.value,n.value.map(d=>d.key));return Ke(o,l.value)})}}const Nt=C({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),Rt=ne()({name:"VDataTableGroupHeaderRow",props:Nt(),setup(e,n){let{slots:l}=n;const{isGroupOpen:t,toggleGroup:o,extractRows:d}=Ue(),{isSelected:r,isSomeSelected:s,select:u}=ue(),{columns:c}=re(),i=V(()=>d([e.item]));return()=>a("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[c.value.map(v=>{var g,w;if(v.key==="data-table-group"){const y=t(e.item)?"$expand":"$next",S=()=>o(e.item);return((g=l["data-table-group"])==null?void 0:g.call(l,{item:e.item,count:i.value.length,props:{icon:y,onClick:S}}))??a(he,{class:"v-data-table-group-header-row__column"},{default:()=>[a(J,{size:"small",variant:"text",icon:y,onClick:S},null),a("span",null,[e.item.value]),a("span",null,[T("("),i.value.length,T(")")])]})}if(v.key==="data-table-select"){const y=r(i.value),S=s(i.value)&&!y,f=b=>u(i.value,b);return((w=l["data-table-select"])==null?void 0:w.call(l,{props:{modelValue:y,indeterminate:S,"onUpdate:modelValue":f}}))??a("td",null,[a(ye,{modelValue:y,indeterminate:S,"onUpdate:modelValue":f},null)])}return a("td",null,null)})])}}),Gt=C({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),qe=Symbol.for("vuetify:datatable:expanded");function Lt(e){const n=F(e,"expandOnClick"),l=X(e,"expanded",e.expanded,s=>new Set(s),s=>[...s.values()]);function t(s,u){const c=new Set(l.value);u?c.add(s.value):c.delete(s.value),l.value=c}function o(s){return l.value.has(s.value)}function d(s){t(s,!o(s))}const r={expand:t,expanded:l,expandOnClick:n,isExpanded:o,toggleExpand:d};return Y(qe,r),r}function We(){const e=Z(qe);if(!e)throw new Error("foo");return e}const jt=C({index:Number,item:Object,onClick:Function},"VDataTableRow"),Ht=ut({name:"VDataTableRow",props:jt(),setup(e,n){let{slots:l}=n;const{isSelected:t,toggleSelect:o}=ue(),{isExpanded:d,toggleExpand:r}=We(),{columns:s}=re();se(()=>a("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!e.onClick}],onClick:e.onClick},[e.item&&s.value.map((u,c)=>a(he,{align:u.align,fixed:u.fixed,fixedOffset:u.fixedOffset,lastFixed:u.lastFixed,noPadding:u.key==="data-table-select"||u.key==="data-table-expand",width:u.width},{default:()=>{var w,y;const i=e.item,v=`item.${u.key}`,g={index:e.index,item:e.item,columns:s.value,isSelected:t,toggleSelect:o,isExpanded:d,toggleExpand:r};return l[v]?l[v](g):u.key==="data-table-select"?((w=l["item.data-table-select"])==null?void 0:w.call(l,g))??a(ye,{disabled:!i.selectable,modelValue:t([i]),onClick:Ve(()=>o(i),["stop"])},null):u.key==="data-table-expand"?((y=l["item.data-table-expand"])==null?void 0:y.call(l,g))??a(J,{icon:d(i)?"$collapse":"$expand",size:"small",variant:"text",onClick:Ve(()=>r(i),["stop"])},null):le(i.columns,u.key)}}))]))}}),Je=C({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowHeight:Number,"onClick:row":Function},"VDataTableRows"),Ae=ne()({name:"VDataTableRows",props:Je(),setup(e,n){let{emit:l,slots:t}=n;const{columns:o}=re(),{expandOnClick:d,toggleExpand:r,isExpanded:s}=We(),{isSelected:u,toggleSelect:c}=ue(),{toggleGroup:i,isGroupOpen:v}=Ue(),{t:g}=pe();return se(()=>{var w;return e.loading&&t.loading?a("tr",{class:"v-data-table-rows-loading",key:"loading"},[a("td",{colspan:o.value.length},[t.loading()])]):!e.loading&&!e.items.length&&!e.hideNoData?a("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[a("td",{colspan:o.value.length},[((w=t["no-data"])==null?void 0:w.call(t))??g(e.noDataText)])]):a(K,null,[e.items.map((y,S)=>{var k;if(y.type==="group")return t["group-header"]?t["group-header"]({index:S,item:y,columns:o.value,isExpanded:s,toggleExpand:r,isSelected:u,toggleSelect:c,toggleGroup:i,isGroupOpen:v}):a(Rt,{key:`group-header_${y.id}`,item:y},t);const f={index:S,item:y,columns:o.value,isExpanded:s,toggleExpand:r,isSelected:u,toggleSelect:c},b={...f,props:{key:`item_${y.key??y.index}`,onClick:d.value||e["onClick:row"]?p=>{var x;d.value&&r(y),(x=e["onClick:row"])==null||x.call(e,p,{item:y})}:void 0,index:S,item:y}};return a(K,null,[t.item?t.item(b):a(Ht,b.props,t),s(y)&&((k=t["expanded-row"])==null?void 0:k.call(t,f))])})])}),{}}}),Mt=C({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},returnObject:Boolean},"DataTable-items");function Ut(e,n,l,t){const o=e.returnObject?n:le(n,e.itemValue),d=le(n,e.itemSelectable,!0),r=t.reduce((s,u)=>(s[u.key]=le(n,u.value??u.key),s),{});return{type:"item",key:e.returnObject?le(n,e.itemValue):o,index:l,value:o,selectable:d,columns:r,raw:n}}function zt(e,n,l){return n.map((t,o)=>Ut(e,t,o,l))}function Kt(e,n){return{items:V(()=>zt(e,e.items,n.value))}}function qt(e){let{page:n,itemsPerPage:l,sortBy:t,groupBy:o,search:d}=e;const r=it("VDataTable"),s=V(()=>({page:n.value,itemsPerPage:l.value,sortBy:t.value,groupBy:o.value,search:d.value}));Te(()=>d==null?void 0:d.value,()=>{n.value=1});let u=null;Te(s,()=>{dt(u,s.value)||(r.emit("update:options",s.value),u=s.value)},{deep:!0,immediate:!0})}const Wt=C({...Je(),width:[String,Number],search:String,...Gt(),...Ot(),..._t(),...Mt(),...St(),...Vt(),...He(),...ct()},"DataTable"),Jt=C({...bt(),...Wt(),...ft(),...Ee()},"VDataTable"),Qt=ne()({name:"VDataTable",props:Jt(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0},setup(e,n){let{emit:l,slots:t}=n;const{groupBy:o}=At(e),{sortBy:d,multiSort:r,mustSort:s}=Tt(e),{page:u,itemsPerPage:c}=pt(e),{columns:i,headers:v}=kt(e,{groupBy:o,showSelect:F(e,"showSelect"),showExpand:F(e,"showExpand")}),{items:g}=Kt(e,i),w=F(e,"search"),{filteredItems:y}=mt(e,g,w,{transform:fe=>fe.columns}),{toggleSort:S}=Dt({sortBy:d,multiSort:r,mustSort:s,page:u}),{sortByWithGroups:f,opened:b,extractRows:k,isGroupOpen:p,toggleGroup:x}=$t({groupBy:o,sortBy:d}),{sortedItems:_}=Ct(e,y,f),{flatItems:E}=Et(_,o,b),O=V(()=>E.value.length),{startIndex:D,stopIndex:H,pageCount:A,setItemsPerPage:R}=yt({page:u,itemsPerPage:c,itemsLength:O}),{paginatedItems:N}=xt({items:E,startIndex:D,stopIndex:H,itemsPerPage:c}),M=V(()=>k(N.value)),{isSelected:ee,select:G,selectAll:te,toggleSelect:ie,someSelected:$,allSelected:de}=Pt(e,{allItems:g,currentPage:M}),{isExpanded:h,toggleExpand:ce}=Lt(e);qt({page:u,itemsPerPage:c,sortBy:d,groupBy:o,search:w}),vt({VDataTableRows:{hideNoData:F(e,"hideNoData"),noDataText:F(e,"noDataText"),loading:F(e,"loading"),loadingText:F(e,"loadingText")}});const L=V(()=>({page:u.value,itemsPerPage:c.value,sortBy:d.value,pageCount:A.value,toggleSort:S,setItemsPerPage:R,someSelected:$.value,allSelected:de.value,isSelected:ee,select:G,selectAll:te,toggleSelect:ie,isExpanded:h,toggleExpand:ce,isGroupOpen:p,toggleGroup:x,items:M.value,groupedItems:N.value,columns:i.value,headers:v.value}));return se(()=>{const[fe]=Be.filterProps(e),[Qe]=Oe.filterProps(e),[Xe]=Ae.filterProps(e),[Ye]=De.filterProps(e);return a(De,ge({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},Ye),{top:()=>{var ae;return(ae=t.top)==null?void 0:ae.call(t,L.value)},default:()=>{var ae,xe,_e,ke;return t.default?t.default(L.value):a(K,null,[(ae=t.colgroup)==null?void 0:ae.call(t,L.value),a("thead",null,[a(Oe,Qe,t)]),(xe=t.thead)==null?void 0:xe.call(t,L.value),a("tbody",null,[t.body?t.body(L.value):a(Ae,ge(Xe,{items:N.value}),t)]),(_e=t.tbody)==null?void 0:_e.call(t,L.value),(ke=t.tfoot)==null?void 0:ke.call(t,L.value)])},bottom:()=>t.bottom?t.bottom(L.value):a(K,null,[a(Be,fe,{prepend:t["footer.prepend"]})])})}),{}}}),Xt=P("h5",{class:"text-h5 mb-1"},"Listado de Roles",-1),Yt=P("p",{class:"text-sm mb-0 text-justify"}," Los roles en un sistema brindan control y administración de accesos al asignar funciones y permisos específicos a los usuarios, garantizando la seguridad y eficiencia del sistema.",-1),Zt=["innerHTML"],ea={class:"text-center"},ta=P("span",null,"Total 4 users",-1),aa=P("div",{class:"flex-grow-1"},null,-1),la={class:"v-avatar-group"},na={class:"text-h6 text-medium-emphasis mb-0"},oa={class:"d-flex align-center"},sa=P("div",{class:"flex-grow-1"},null,-1),ra={class:"py-12"},ua={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},ia={class:"flex bg-gray justify-between items=center p-5"},da=P("div",{class:"flex space-x-2 items-center"}," ¡Página de configuración de roles! ¡Aquí puede enumerar, crear, actualizar o eliminar funciones! ",-1),ca={key:0,class:"flex space-x-2 items-center"},fa=P("a",{class:"px-4 py-2 bg-green uppercase text-white rounded focus:outline-none flex items-center",href:"#"},[P("span",{class:"iconify mr-1","data-icon":"gridicons:create","data-inline":"false"}),T(" Create Role")],-1),ma=[fa],va={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},ga={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},ba={class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},pa=P("th",{class:"py-3 px-6",scope:"col"},"Name",-1),ya={key:0,class:"py-3 px-6",scope:"col"},ha={class:"py-4 px-6","data-label":"Name"},xa={key:0,class:"py-4 px-6"},_a={"no-wrap":"",type:"justify-start lg:justify-end"},Ca={__name:"Index",props:{roles:{type:Object,default:()=>({})},can:{type:Object,default:()=>({})}},setup(e){const n=[{title:"Dashboard",disabled:!0,href:"/dashboard"},{title:"Roles",disabled:!1,href:"/dashboard/role"}];let l=j(!1),t=j(!1);const o=[{title:"Dessert (100g serving)",align:"start",sortable:!1,key:"name"},{title:"Calories",key:"calories"},{title:"Fat (g)",key:"fat"},{title:"Carbs (g)",key:"carbs"},{title:"Protein (g)",key:"protein"},{title:"Actions",key:"actions",sortable:!1}];let d=[],r=j(-1);const s=j({name:"",calories:0,fat:0,carbs:0,protein:0}),u={name:"",calories:0,fat:0,carbs:0,protein:0},c=V(()=>r.value===-1?"New Item":"Edit Item"),i=j(!1);gt(()=>{v()});function v(){d=[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7}]}function g(k){r=d.indexOf(k),Object.assign(s,k),t=!0}function w(k){r=d.indexOf(k),Object.assign(s,k),l=!0}function y(){d.splice(r,1),f()}function S(){t=!1,Object.assign(s,u),r=-1}function f(){l=!1,Object.assign(s,u),r=-1}function b(){r>-1?Object.assign(d[r],s):d.push(s),S()}return(k,p)=>{const x=I("v-col"),_=I("v-toolbar-title"),E=I("v-divider"),O=I("v-spacer"),D=I("v-btn"),H=I("v-card-title"),A=I("v-text-field"),R=I("v-row"),N=I("v-container"),M=I("v-card-text"),ee=I("v-card-actions"),G=I("v-card"),te=I("v-dialog"),ie=I("v-toolbar"),$=I("v-icon"),de=I("v-avatar");return B(),q(Ze,null,{default:m(()=>[a(et,{items:n,name:"Gestion de Rol"}),a(N,null,{default:m(()=>[a(R,null,{default:m(()=>[a(x,{cols:"12"},{default:m(()=>[Xt,Yt]),_:1}),a(x,null,{default:m(()=>[a(U(Qt),{headers:o,items:U(d),"sort-by":[{key:"calories",order:"asc"}],class:"elevation-1 rounded-lg"},{top:m(()=>[a(ie,{class:"rounded-t-lg",flat:""},{default:m(()=>[a(_,null,{default:m(()=>[T("My CRUD")]),_:1}),a(E,{inset:!0,vertical:!0,class:"mx-4"}),a(O),a(D,{class:"mb-2",color:"primary",dark:"",onClick:p[0]||(p[0]=h=>ve(t)?t.value=!U(t):t=!U(t))},{default:m(()=>[T(" New Item ")]),_:1}),a(te,{modelValue:U(t),"onUpdate:modelValue":p[8]||(p[8]=h=>ve(t)?t.value=h:t=h),"max-width":"500px"},{default:m(()=>[a(G,null,{default:m(()=>[a(H,null,{default:m(()=>[P("span",{class:"text-h5",innerHTML:U(c)},null,8,Zt)]),_:1}),a(M,null,{default:m(()=>[a(N,null,{default:m(()=>[a(R,null,{default:m(()=>[a(x,{cols:"12",md:"4",sm:"6"},{default:m(()=>[a(A,{modelValue:s.value.name,"onUpdate:modelValue":p[1]||(p[1]=h=>s.value.name=h),label:"Dessert name"},null,8,["modelValue"])]),_:1}),a(x,{cols:"12",md:"4",sm:"6"},{default:m(()=>[a(A,{modelValue:s.value.calories,"onUpdate:modelValue":p[2]||(p[2]=h=>s.value.calories=h),label:"Calories"},null,8,["modelValue"])]),_:1}),a(x,{cols:"12",md:"4",sm:"6"},{default:m(()=>[a(A,{modelValue:s.value.fat,"onUpdate:modelValue":p[3]||(p[3]=h=>s.value.fat=h),label:"Fat (g)"},null,8,["modelValue"])]),_:1}),a(x,{cols:"12",md:"4",sm:"6"},{default:m(()=>[a(A,{modelValue:s.value.carbs,"onUpdate:modelValue":p[4]||(p[4]=h=>s.value.carbs=h),label:"Carbs (g)"},null,8,["modelValue"])]),_:1}),a(x,{cols:"12",md:"4",sm:"6"},{default:m(()=>[a(A,{modelValue:s.value.protein,"onUpdate:modelValue":p[5]||(p[5]=h=>s.value.protein=h),label:"Protein (g)"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),a(ee,null,{default:m(()=>[a(O),a(D,{color:"blue-darken-1",variant:"text",onClick:p[6]||(p[6]=h=>S())},{default:m(()=>[T(" Cancel ")]),_:1}),a(D,{color:"blue-darken-1",variant:"text",onClick:p[7]||(p[7]=h=>b())},{default:m(()=>[T(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(te,{modelValue:U(l),"onUpdate:modelValue":p[9]||(p[9]=h=>ve(l)?l.value=h:l=h),"max-width":"500px"},{default:m(()=>[a(G,null,{default:m(()=>[a(H,{class:"text-h5"},{default:m(()=>[T("Are you sure you want to delete this item? ")]),_:1}),a(ee,null,{default:m(()=>[a(O),a(D,{color:"blue-darken-1",variant:"text",onClick:f},{default:m(()=>[T("Cancel ")]),_:1}),a(D,{color:"blue-darken-1",variant:"text",onClick:y},{default:m(()=>[T("OK ")]),_:1}),a(O)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.actions":m(({item:h})=>[a($,{class:"me-2",size:"small",onClick:ce=>g(h.raw)},{default:m(()=>[T(" mdi-pencil ")]),_:2},1032,["onClick"]),a($,{size:"small",onClick:ce=>w(h.raw)},{default:m(()=>[T(" mdi-delete ")]),_:2},1032,["onClick"])]),"no-data":m(()=>[a(D,{color:"primary",onClick:v},{default:m(()=>[T(" Reset ")]),_:1})]),_:1},8,["items"])]),_:1}),a(x,null,{default:m(()=>[P("div",ea,[a(D,{color:"primary",onClick:p[10]||(p[10]=h=>i.value=!0)},{default:m(()=>[T(" Open Dialog ")]),_:1}),a(te,{modelValue:i.value,"onUpdate:modelValue":p[12]||(p[12]=h=>i.value=h),width:"auto"},{default:m(()=>[a(G,null,{default:m(()=>[a(M,null,{default:m(()=>[T(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),_:1}),a(ee,null,{default:m(()=>[a(D,{block:"",color:"primary",onClick:p[11]||(p[11]=h=>i.value=!1)},{default:m(()=>[T("Close Dialog")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1}),a(x,{cols:"12"},{default:m(()=>[a(R,null,{default:m(()=>[(B(!0),W(K,null,Ie(e.roles.data,h=>(B(),q(x,{key:h.id,cols:"12",lg:"4",sm:"6"},{default:m(()=>[a(G,null,{default:m(()=>[a(M,{class:"d-flex align-center"},{default:m(()=>[ta,aa,P("div",la,[a(de,{class:"v-theme--light v-avatar--density-default v-avatar--variant-flat",style:{width:"44px",height:"44px"}},{default:m(()=>[a($,null,{default:m(()=>[T("mdi-account-group")]),_:1})]),_:1})])]),_:1}),a(M,null,{default:m(()=>[P("p",na,Ce(h.name),1),P("div",oa,[e.can.edit?(B(),q(D,{key:0,class:"cursor-pointer",icon:"",variant:"flat"},{default:m(()=>[a($,{icon:"mdi-pencil-outline"})]),_:1})):z("",!0),e.can.delete?(B(),q(D,{key:1,class:"cursor-pointer",icon:"",variant:"flat"},{default:m(()=>[a($,{icon:"mdi-delete-outline"})]),_:1})):z("",!0),sa,a(D,{flat:"",icon:""},{default:m(()=>[a($,null,{default:m(()=>[T("mdi-content-copy")]),_:1})]),_:1})])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}),a(N,null,{default:m(()=>[P("div",ra,[a(G,{class:"max-w-7xl mx-auto sm:px-6 lg:px-8 mb-5"},{default:m(()=>[P("div",ua,[P("div",ia,[da,e.can.create?(B(),W("div",ca,ma)):z("",!0)])])]),_:1}),a(G,{class:"max-w-7xl mx-auto sm:px-6 lg:px-8 mb-2"},{default:m(()=>[P("div",va,[P("table",ga,[P("thead",ba,[P("tr",null,[pa,e.can.edit||e.can.delete?(B(),W("th",ya,"Actions")):z("",!0)])]),P("tbody",null,[(B(!0),W(K,null,Ie(e.roles.data,h=>(B(),W("tr",{key:h.id,class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},[P("td",ha,Ce(h.name),1),e.can.edit||e.can.delete?(B(),W("td",xa,[P("div",_a,[e.can.edit?(B(),q(D,{key:0,class:"bg-green text-white cursor-pointer",icon:""},{default:m(()=>[a($,{icon:"mdi-pencil"})]),_:1})):z("",!0),e.can.delete?(B(),q(D,{key:1,class:"ml-4 bg-red text-white cursor-pointer",icon:""},{default:m(()=>[a($,{icon:"mdi-delete"})]),_:1})):z("",!0)])])):z("",!0)]))),128))])])])]),_:1})])]),_:1})]),_:1})}}};export{Ca as default};
