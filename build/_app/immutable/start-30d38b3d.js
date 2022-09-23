import{S as Ge,i as We,s as He,a as Me,e as x,c as Xe,b as K,g as ie,t as V,d as le,f as B,h as J,j as Ye,o as ye,k as Qe,l as Ze,m as et,n as _e,p as D,q as tt,r as nt,u as rt,v as W,w as Ee,x as H,y as M,z as De}from"./chunks/index-48cb2043.js";import{g as qe,f as Ce,s as F,a as be,b as at,i as st}from"./chunks/singletons-ff0de012.js";const ot=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),it=function(a,e){return new URL(a,e).href},xe={},se=function(e,t,c){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=it(o,c),o in xe)return;xe[o]=!0;const d=o.endsWith(".css"),n=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":ot,d||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),d)return new Promise((g,m)=>{f.addEventListener("load",g),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};class ge{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ve{constructor(e,t){this.status=e,this.location=t}}function lt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function ct(a){for(const e in a)a[e]=a[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return a}const ft=["href","pathname","search","searchParams","toString","toJSON"];function ut(a,e){const t=new URL(a);for(const c of ft){let o=t[c];Object.defineProperty(t,c,{get(){return e(),o},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(c,o,d)=>d(a,o),dt(t),t}function dt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function pt(a){let e=5381,t=a.length;if(typeof a=="string")for(;t;)e=e*33^a.charCodeAt(--t);else for(;t;)e=e*33^a[--t];return(e>>>0).toString(36)}const Re=window.fetch;window.fetch=(a,e)=>{if((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"){const c=new URL(a instanceof Request?a.url:a.toString(),document.baseURI).href;oe.delete(c)}return Re(a,e)};const oe=new Map;function ht(a,e,t){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;t&&typeof t.body=="string"&&(o+=`[data-hash="${pt(t.body)}"]`);const d=document.querySelector(o);if(d!=null&&d.textContent){const{body:n,...f}=JSON.parse(d.textContent),g=d.getAttribute("data-ttl");return g&&oe.set(e,{body:n,init:f,ttl:1e3*Number(g)}),Promise.resolve(new Response(n,f))}return Re(a,t)}function mt(a,e){const t=oe.get(a);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);oe.delete(a)}return Re(a,e)}const _t=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function gt(a){const e=[],t=[];let c=!0;return{pattern:a===""?/^\/$/:new RegExp(`^${a.split(/(?:\/|$)/).filter(wt).map((d,n,f)=>{const g=decodeURIComponent(d),m=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(g);if(m)return e.push(m[1]),t.push(m[2]),"(?:/(.*))?";const y=n===f.length-1;return g&&"/"+g.split(/\[(.+?)\]/).map((L,b)=>{if(b%2){const q=_t.exec(L);if(!q)throw new Error(`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,T,N,z]=q;return e.push(N),t.push(z),T?"(.*?)":"([^/]+?)"}return y&&L.includes(".")&&(c=!1),L.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${c?"/?":""}$`),names:e,types:t}}function wt(a){return!/^\([^)]+\)$/.test(a)}function yt(a,e,t,c){const o={};for(let d=0;d<e.length;d+=1){const n=e[d],f=t[d],g=a[d+1]||"";if(f){const m=c[f];if(!m)throw new Error(`Missing "${f}" param matcher`);if(!m(g))return}o[n]=g}return o}function bt(a,e,t,c){const o=new Set(e);return Object.entries(t).map(([f,[g,m,y]])=>{const{pattern:L,names:b,types:q}=gt(f),T={id:f,exec:N=>{const z=L.exec(N);if(z)return yt(z,b,q,c)},errors:[1,...y||[]].map(N=>a[N]),layouts:[0,...m||[]].map(n),leaf:d(g)};return T.errors.length=T.layouts.length=Math.max(T.errors.length,T.layouts.length),T});function d(f){const g=f<0;return g&&(f=~f),[g,a[f]]}function n(f){return f===void 0?f:[o.has(f),a[f]]}}function vt(a){let e,t,c;var o=a[0][0];function d(n){return{props:{data:n[2],form:n[1]}}}return o&&(e=new o(d(a))),{c(){e&&W(e.$$.fragment),t=x()},l(n){e&&Ee(e.$$.fragment,n),t=x()},m(n,f){e&&H(e,n,f),K(n,t,f),c=!0},p(n,f){const g={};if(f&4&&(g.data=n[2]),f&2&&(g.form=n[1]),o!==(o=n[0][0])){if(e){ie();const m=e;V(m.$$.fragment,1,0,()=>{M(m,1)}),le()}o?(e=new o(d(n)),W(e.$$.fragment),B(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else o&&e.$set(g)},i(n){c||(e&&B(e.$$.fragment,n),c=!0)},o(n){e&&V(e.$$.fragment,n),c=!1},d(n){n&&J(t),e&&M(e,n)}}}function kt(a){let e,t,c;var o=a[0][0];function d(n){return{props:{data:n[2],$$slots:{default:[Et]},$$scope:{ctx:n}}}}return o&&(e=new o(d(a))),{c(){e&&W(e.$$.fragment),t=x()},l(n){e&&Ee(e.$$.fragment,n),t=x()},m(n,f){e&&H(e,n,f),K(n,t,f),c=!0},p(n,f){const g={};if(f&4&&(g.data=n[2]),f&523&&(g.$$scope={dirty:f,ctx:n}),o!==(o=n[0][0])){if(e){ie();const m=e;V(m.$$.fragment,1,0,()=>{M(m,1)}),le()}o?(e=new o(d(n)),W(e.$$.fragment),B(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else o&&e.$set(g)},i(n){c||(e&&B(e.$$.fragment,n),c=!0)},o(n){e&&V(e.$$.fragment,n),c=!1},d(n){n&&J(t),e&&M(e,n)}}}function Et(a){let e,t,c;var o=a[0][1];function d(n){return{props:{data:n[3],form:n[1]}}}return o&&(e=new o(d(a))),{c(){e&&W(e.$$.fragment),t=x()},l(n){e&&Ee(e.$$.fragment,n),t=x()},m(n,f){e&&H(e,n,f),K(n,t,f),c=!0},p(n,f){const g={};if(f&8&&(g.data=n[3]),f&2&&(g.form=n[1]),o!==(o=n[0][1])){if(e){ie();const m=e;V(m.$$.fragment,1,0,()=>{M(m,1)}),le()}o?(e=new o(d(n)),W(e.$$.fragment),B(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else o&&e.$set(g)},i(n){c||(e&&B(e.$$.fragment,n),c=!0)},o(n){e&&V(e.$$.fragment,n),c=!1},d(n){n&&J(t),e&&M(e,n)}}}function Be(a){let e,t=a[5]&&Je(a);return{c(){e=Qe("div"),t&&t.c(),this.h()},l(c){e=Ze(c,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=et(e);t&&t.l(o),o.forEach(J),this.h()},h(){_e(e,"id","svelte-announcer"),_e(e,"aria-live","assertive"),_e(e,"aria-atomic","true"),D(e,"position","absolute"),D(e,"left","0"),D(e,"top","0"),D(e,"clip","rect(0 0 0 0)"),D(e,"clip-path","inset(50%)"),D(e,"overflow","hidden"),D(e,"white-space","nowrap"),D(e,"width","1px"),D(e,"height","1px")},m(c,o){K(c,e,o),t&&t.m(e,null)},p(c,o){c[5]?t?t.p(c,o):(t=Je(c),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(c){c&&J(e),t&&t.d()}}}function Je(a){let e;return{c(){e=tt(a[6])},l(t){e=nt(t,a[6])},m(t,c){K(t,e,c)},p(t,c){c&64&&rt(e,t[6])},d(t){t&&J(e)}}}function Rt(a){let e,t,c,o,d;const n=[kt,vt],f=[];function g(y,L){return y[0][1]?0:1}e=g(a),t=f[e]=n[e](a);let m=a[4]&&Be(a);return{c(){t.c(),c=Me(),m&&m.c(),o=x()},l(y){t.l(y),c=Xe(y),m&&m.l(y),o=x()},m(y,L){f[e].m(y,L),K(y,c,L),m&&m.m(y,L),K(y,o,L),d=!0},p(y,[L]){let b=e;e=g(y),e===b?f[e].p(y,L):(ie(),V(f[b],1,1,()=>{f[b]=null}),le(),t=f[e],t?t.p(y,L):(t=f[e]=n[e](y),t.c()),B(t,1),t.m(c.parentNode,c)),y[4]?m?m.p(y,L):(m=Be(y),m.c(),m.m(o.parentNode,o)):m&&(m.d(1),m=null)},i(y){d||(B(t),d=!0)},o(y){V(t),d=!1},d(y){f[e].d(y),y&&J(c),m&&m.d(y),y&&J(o)}}}function St(a,e,t){let{stores:c}=e,{page:o}=e,{components:d}=e,{form:n}=e,{data_0:f=null}=e,{data_1:g=null}=e;Ye(c.page.notify);let m=!1,y=!1,L=null;return ye(()=>{const b=c.page.subscribe(()=>{m&&(t(5,y=!0),t(6,L=document.title||"untitled page"))});return t(4,m=!0),b}),a.$$set=b=>{"stores"in b&&t(7,c=b.stores),"page"in b&&t(8,o=b.page),"components"in b&&t(0,d=b.components),"form"in b&&t(1,n=b.form),"data_0"in b&&t(2,f=b.data_0),"data_1"in b&&t(3,g=b.data_1)},a.$$.update=()=>{a.$$.dirty&384&&c.page.set(o)},[d,n,f,g,m,y,L,c,o]}class $t extends Ge{constructor(e){super(),We(this,e,St,Rt,He,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Lt={},ce=[()=>se(()=>import("./chunks/0-bba14127.js"),["chunks/0-bba14127.js","components/pages/_layout.svelte-8aa5ce2b.js","assets/_layout-be410899.css","chunks/index-48cb2043.js"],import.meta.url),()=>se(()=>import("./chunks/1-a6553205.js"),["chunks/1-a6553205.js","components/error.svelte-a1839107.js","chunks/index-48cb2043.js","chunks/singletons-ff0de012.js","chunks/index-555949fa.js"],import.meta.url),()=>se(()=>import("./chunks/2-1fdae615.js"),["chunks/2-1fdae615.js","components/pages/_page.svelte-b4e13b43.js","chunks/index-48cb2043.js","chunks/index-555949fa.js"],import.meta.url)],Pt=[],It={"":[2]},Ot={handleError:({error:a})=>(console.error(a),{message:"Internal Error"})},Ut="/__data.js",Ke="sveltekit:scroll",C="sveltekit:index",ne=bt(ce,Pt,It,Lt),ve=ce[0],ke=ce[1];ve();ke();let Z={};try{Z=JSON.parse(sessionStorage[Ke])}catch{}function we(a){Z[a]=be()}function jt({target:a,base:e,trailing_slash:t}){var Ae;const c=[];let o=null;const d={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},f=!1,g=!0,m=!1,y=!1,L,b=(Ae=history.state)==null?void 0:Ae[C];b||(b=Date.now(),history.replaceState({...history.state,[C]:b},"",location.href));const q=Z[b];q&&(history.scrollRestoration="manual",scrollTo(q.x,q.y));let T=!1,N,z,ee;async function Se(){ee=ee||Promise.resolve(),await ee,ee=null;const r=new URL(location.href),i=pe(r,!0);o=null,await Le(i,r,[])}async function fe(r,{noscroll:i=!1,replaceState:u=!1,keepfocus:s=!1,state:l={}},p,h){return typeof r=="string"&&(r=new URL(r,qe(document))),he({url:r,scroll:i?be():null,keepfocus:s,redirect_chain:p,details:{state:l,replaceState:u},nav_token:h,accepted:()=>{},blocked:()=>{},type:"goto"})}async function $e(r){const i=pe(r,!1);if(!i)throw new Error("Attempted to prefetch a URL that does not belong to this app");return o={id:i.id,promise:Oe(i)},o.promise}async function Le(r,i,u,s,l={},p){var R,E;z=l;let h=r&&await Oe(r);if(!h&&i.origin===location.origin&&i.pathname===location.pathname&&(h=await te({status:404,error:new Error(`Not found: ${i.pathname}`),url:i,routeId:null})),!h)return await Y(i),!1;if(i=(r==null?void 0:r.url)||i,z!==l)return!1;if(h.type==="redirect")if(u.length>10||u.includes(i.pathname))h=await te({status:500,error:new Error("Redirect loop"),url:i,routeId:null});else return fe(new URL(h.location,i).href,{},[...u,i.pathname],l),!1;else((E=(R=h.props)==null?void 0:R.page)==null?void 0:E.status)>=400&&await F.updated.check()&&await Y(i);if(c.length=0,y=!1,m=!0,s&&s.details){const{details:w}=s,v=w.replaceState?0:1;w.state[C]=b+=v,history[w.replaceState?"replaceState":"pushState"](w.state,"",i)}if(o=null,f){n=h.state,h.props.page&&(h.props.page.url=i);const w=ae();L.$set(h.props),w()}else Pe(h);if(s){const{scroll:w,keepfocus:v}=s;if(!v){const k=document.body,P=k.getAttribute("tabindex");k.tabIndex=-1,k.focus({preventScroll:!0}),setTimeout(()=>{var I;(I=getSelection())==null||I.removeAllRanges()}),P!==null?k.setAttribute("tabindex",P):k.removeAttribute("tabindex")}if(await De(),g){const k=i.hash&&document.getElementById(i.hash.slice(1));w?scrollTo(w.x,w.y):k?k.scrollIntoView():scrollTo(0,0)}}else await De();g=!0,h.props.page&&(N=h.props.page),p&&p(),m=!1}function Pe(r){var l,p;n=r.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),N=r.props.page;const u=ae();L=new $t({target:a,props:{...r.props,stores:F},hydrate:!0}),u();const s={from:null,to:re("to",{params:n.params,routeId:(p=(l=n.route)==null?void 0:l.id)!=null?p:null,url:new URL(location.href)}),type:"load"};d.after_navigate.forEach(h=>h(s)),f=!0}async function X({url:r,params:i,branch:u,status:s,error:l,route:p,form:h}){var P;const R=u.filter(Boolean),E={type:"loaded",state:{url:r,params:i,branch:u,error:l,route:p},props:{components:R.map(I=>I.node.component)}};h!==void 0&&(E.props.form=h);let w={},v=!N;for(let I=0;I<R.length;I+=1){const U=R[I];w={...w,...U.data},(v||!n.branch.some(j=>j===U))&&(E.props[`data_${I}`]=w,v=v||Object.keys((P=U.data)!=null?P:{}).length>0)}if(v||(v=Object.keys(N.data).length!==Object.keys(w).length),!n.url||r.href!==n.url.href||n.error!==l||v){E.props.page={error:l,params:i,routeId:p&&p.id,status:s,url:r,data:v?w:N.data};const I=(U,j)=>{Object.defineProperty(E.props.page,U,{get:()=>{throw new Error(`$page.${U} has been replaced by $page.url.${j}`)}})};I("origin","origin"),I("path","pathname"),I("query","searchParams")}return E}async function ue({loader:r,parent:i,url:u,params:s,routeId:l,server_data_node:p}){var w,v,k,P,I;let h=null;const R={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await r();if((w=E.shared)!=null&&w.load){let U=function(...$){for(const _ of $){const{href:S}=new URL(_,u);R.dependencies.add(S)}};const j={routeId:l,params:new Proxy(s,{get:($,_)=>(R.params.add(_),$[_])}),data:(v=p==null?void 0:p.data)!=null?v:null,url:ut(u,()=>{R.url=!0}),async fetch($,_){let S;$ instanceof Request?(S=$.url,_={body:$.method==="GET"||$.method==="HEAD"?void 0:await $.blob(),cache:$.cache,credentials:$.credentials,headers:$.headers,integrity:$.integrity,keepalive:$.keepalive,method:$.method,mode:$.mode,redirect:$.redirect,referrer:$.referrer,referrerPolicy:$.referrerPolicy,signal:$.signal,..._}):S=$;const A=new URL(S,u).href;return U(A),f?mt(A,_):ht(S,A,_)},setHeaders:()=>{},depends:U,parent(){return R.parent=!0,i()}};Object.defineProperties(j,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),h=(k=await E.shared.load.call(null,j))!=null?k:null}return{node:E,loader:r,server:p,shared:(P=E.shared)!=null&&P.load?{type:"data",data:h,uses:R}:null,data:(I=h!=null?h:p==null?void 0:p.data)!=null?I:null}}function Ie(r,i,u,s){if(y)return!0;if(!u)return!1;if(u.parent&&i||u.url&&r)return!0;for(const l of u.params)if(s[l]!==n.params[l])return!0;for(const l of u.dependencies)if(c.some(p=>p(new URL(l))))return!0;return!1}function de(r,i){var u,s;return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set((u=r.uses.dependencies)!=null?u:[]),params:new Set((s=r.uses.params)!=null?s:[]),parent:!!r.uses.parent,url:!!r.uses.url}}:(r==null?void 0:r.type)==="skip"&&i!=null?i:null}async function Oe({id:r,invalidating:i,url:u,params:s,route:l}){var $;if((o==null?void 0:o.id)===r)return o.promise;const{errors:p,layouts:h,leaf:R}=l,E=[...h,R];p.forEach(_=>_==null?void 0:_().catch(()=>{})),E.forEach(_=>_==null?void 0:_[1]().catch(()=>{}));let w=null;const v=n.url?r!==n.url.pathname+n.url.search:!1,k=E.reduce((_,S,A)=>{var Q;const O=n.branch[A],G=!!(S!=null&&S[0])&&((O==null?void 0:O.loader)!==S[1]||Ie(v,_.some(Boolean),(Q=O.server)==null?void 0:Q.uses,s));return _.push(G),_},[]);if(k.some(Boolean)){try{w=await ze(u,k)}catch(_){return te({status:500,error:_,url:u,routeId:l.id})}if(w.type==="redirect")return w}const P=w==null?void 0:w.nodes;let I=!1;const U=E.map(async(_,S)=>{var Q;if(!_)return;const A=n.branch[S],O=P==null?void 0:P[S];if((!O||O.type==="skip")&&_[1]===(A==null?void 0:A.loader)&&!Ie(v,I,(Q=A.shared)==null?void 0:Q.uses,s))return A;if(I=!0,(O==null?void 0:O.type)==="error")throw O;return ue({loader:_[1],url:u,params:s,routeId:l.id,parent:async()=>{var Te;const Ne={};for(let me=0;me<S;me+=1)Object.assign(Ne,(Te=await U[me])==null?void 0:Te.data);return Ne},server_data_node:de(O===void 0&&_[0]?{type:"skip"}:O!=null?O:null,A==null?void 0:A.server)})});for(const _ of U)_.catch(()=>{});const j=[];for(let _=0;_<E.length;_+=1)if(E[_])try{j.push(await U[_])}catch(S){if(S instanceof Ve)return{type:"redirect",location:S.location};let A=500,O;P!=null&&P.includes(S)?(A=($=S.status)!=null?$:A,O=S.error):S instanceof ge?(A=S.status,O=S.body):O=Fe(S,{params:s,url:u,routeId:l.id});const G=await Ue(_,j,p);if(G)return await X({url:u,params:s,branch:j.slice(0,G.idx).concat(G.node),status:A,error:O,route:l});await Y(u);return}else j.push(void 0);return await X({url:u,params:s,branch:j,status:200,error:null,route:l,form:i?void 0:null})}async function Ue(r,i,u){for(;r--;)if(u[r]){let s=r;for(;!i[s];)s-=1;try{return{idx:s+1,node:{node:await u[r](),loader:u[r],data:{},server:null,shared:null}}}catch{continue}}}async function te({status:r,error:i,url:u,routeId:s}){var w;const l={},p=await ve();let h=null;if(p.server)try{const v=await ze(u,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;h=(w=v.nodes[0])!=null?w:null}catch{await Y(u);return}const R=await ue({loader:ve,url:u,params:l,routeId:s,parent:()=>Promise.resolve({}),server_data_node:de(h)}),E={node:await ke(),loader:ke,shared:null,server:null,data:null};return await X({url:u,params:l,branch:[R,E],status:r,error:i instanceof ge?i.body:Fe(i,{url:u,params:l,routeId:null}),route:null})}function pe(r,i){if(je(r))return;const u=decodeURI(r.pathname.slice(e.length)||"/");for(const s of ne){const l=s.exec(u);if(l){const p=new URL(r.origin+lt(r.pathname,t)+r.search+r.hash);return{id:p.pathname+p.search,invalidating:i,route:s,params:ct(l),url:p}}}}function je(r){return r.origin!==location.origin||!r.pathname.startsWith(e)}async function he({url:r,scroll:i,keepfocus:u,redirect_chain:s,details:l,type:p,delta:h,nav_token:R,accepted:E,blocked:w}){var U,j,$,_;let v=!1;const k=pe(r,!1),P={from:re("from",{params:n.params,routeId:(j=(U=n.route)==null?void 0:U.id)!=null?j:null,url:n.url}),to:re("to",{params:($=k==null?void 0:k.params)!=null?$:null,routeId:(_=k==null?void 0:k.route.id)!=null?_:null,url:r}),type:p};h!==void 0&&(P.delta=h);const I={...P,cancel:()=>{v=!0}};if(d.before_navigate.forEach(S=>S(I)),v){w();return}we(b),E(),f&&F.navigating.set(P),await Le(k,r,s,{scroll:i,keepfocus:u,details:l},R,()=>{d.after_navigate.forEach(S=>S(P)),F.navigating.set(null)})}function Y(r){return location.href=r.href,new Promise(()=>{})}return{after_navigate:r=>{ye(()=>(d.after_navigate.push(r),()=>{const i=d.after_navigate.indexOf(r);d.after_navigate.splice(i,1)}))},before_navigate:r=>{ye(()=>(d.before_navigate.push(r),()=>{const i=d.before_navigate.indexOf(r);d.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(m||!f)&&(g=!1)},goto:(r,i={})=>fe(r,i,[]),invalidate:r=>{if(r===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof r=="function")c.push(r);else{const{href:i}=new URL(r,location.href);c.push(u=>u.href===i)}return Se()},invalidateAll:()=>(y=!0,Se()),prefetch:async r=>{const i=new URL(r,qe(document));await $e(i)},prefetch_routes:async r=>{const u=(r?ne.filter(s=>r.some(l=>s.exec(l))):ne).map(s=>Promise.all([...s.layouts,s.leaf].map(l=>l==null?void 0:l[1]())));await Promise.all(u)},apply_action:async r=>{if(r.type==="error"){const i=new URL(location.href),{branch:u,route:s}=n;if(!s)return;const l=await Ue(n.branch.length,u,s.errors);if(l){const p=await X({url:i,params:n.params,branch:u.slice(0,l.idx).concat(l.node),status:500,error:r.error,route:s});n=p.state;const h=ae();L.$set(p.props),h()}}else if(r.type==="redirect")fe(r.location,{},[]);else{const i={form:r.data};r.status!==N.status&&(N={...N,status:r.status},i.page=N);const u=ae();L.$set(i),u()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var h,R;let l=!1;const p={from:re("from",{params:n.params,routeId:(R=(h=n.route)==null?void 0:h.id)!=null?R:null,url:n.url}),to:null,type:"unload",cancel:()=>l=!0};d.before_navigate.forEach(E=>E(p)),l?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){we(b);try{sessionStorage[Ke]=JSON.stringify(Z)}catch{}}});const r=s=>{const{url:l,options:p}=Ce(s);if(l&&p.prefetch){if(je(l))return;$e(l)}};let i;const u=s=>{clearTimeout(i),i=setTimeout(()=>{var l;(l=s.target)==null||l.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",r),addEventListener("mousemove",u),addEventListener("sveltekit:trigger_prefetch",r),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:l,url:p,options:h}=Ce(s);if(!l||!p)return;const R=l instanceof SVGAElement;if(!R&&!(p.protocol==="https:"||p.protocol==="http:"))return;const E=(l.getAttribute("rel")||"").split(/\s+/);if(l.hasAttribute("download")||E.includes("external")||h.reload||(R?l.target.baseVal:l.target))return;const[w,v]=p.href.split("#");if(v!==void 0&&w===location.href.split("#")[0]){T=!0,we(b),n.url=p,F.page.set({...N,url:p}),F.page.notify();return}he({url:p,scroll:h.noscroll?be():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[C]===b)return;const l=s.state[C]-b;he({url:new URL(location.href),scroll:Z[s.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{b=s.state[C]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{T&&(T=!1,history.replaceState({...history.state,[C]:++b},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&F.navigating.set(null)})},_hydrate:async({status:r,error:i,node_ids:u,params:s,routeId:l,data:p,form:h})=>{var w;const R=new URL(location.href);let E;try{const v=u.map(async(k,P)=>{const I=p[P];return ue({loader:ce[k],url:R,params:s,routeId:l,parent:async()=>{const U={};for(let j=0;j<P;j+=1)Object.assign(U,(await v[j]).data);return U},server_data_node:de(I)})});E=await X({url:R,params:s,branch:await Promise.all(v),status:r,error:i,form:h,route:(w=ne.find(k=>k.id===l))!=null?w:null})}catch(v){const k=v;if(k instanceof Ve){await Y(new URL(v.location,location.href));return}E=await te({status:k instanceof ge?k.status:500,error:k,url:R,routeId:l})}Pe(E)}}}let At=1;async function ze(a,e){const t=new URL(a);t.pathname=a.pathname.replace(/\/$/,"")+Ut,t.searchParams.set("__invalid",e.map(o=>o?"y":"n").join("")),t.searchParams.set("__id",String(At++)),await se(()=>import(t.href),[],import.meta.url);const c=window.__sveltekit_data;return delete window.__sveltekit_data,c}function Fe(a,e){var t;return(t=Ot.handleError({error:a,event:e}))!=null?t:{message:e.routeId?"Internal Error":"Not Found"}}const Nt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function re(a,e){for(const t of Nt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${a}.${t} should now be ${a}.url.${t}`)},enumerable:!1});return e}function ae(){return()=>{}}async function qt({env:a,hydrate:e,paths:t,target:c,trailing_slash:o}){at(t);const d=jt({target:c,base:t.base,trailing_slash:o});st({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{qt as start};
