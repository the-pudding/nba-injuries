import{S as te,i as se,s as ne,k as b,a as M,q as x,J as ge,l as k,h as y,c as A,m as S,r as I,n as E,p as Y,C as a,b as H,P as Ee,W as Z,u as G,Q as be,D as ee,a4 as ue,o as ke,a5 as X,g as R,v as pe,f as de,d as W,K as he,a6 as ze,y as me,z as ye,A as _e,B as ve}from"../chunks/index.f3f1909b.js";import{d as Ce}from"../chunks/transform.6fe4cd5d.js";import{b as Se}from"../chunks/paths.32c9e90f.js";class Te extends Map{constructor(e,n=De){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),e!=null)for(const[t,f]of e)this.set(t,f)}get(e){return super.get(re(this,e))}has(e){return super.has(re(this,e))}set(e,n){return super.set(we(this,e),n)}delete(e){return super.delete(Pe(this,e))}}function re({_intern:s,_key:e},n){const t=e(n);return s.has(t)?s.get(t):n}function we({_intern:s,_key:e},n){const t=e(n);return s.has(t)?s.get(t):(s.set(t,n),n)}function Pe({_intern:s,_key:e},n){const t=e(n);return s.has(t)&&(n=s.get(t),s.delete(t)),n}function De(s){return s!==null&&typeof s=="object"?s.valueOf():s}function Le(s){return s}function Me(s,...e){return xe(s,Array.from,Le,e)}function xe(s,e,n,t){return function f(r,_){if(_>=t.length)return n(r);const h=new Te,v=t[_++];let l=-1;for(const c of r){const o=v(c,++l,r),i=h.get(o);i?i.push(c):h.set(o,[c])}for(const[c,o]of h)h.set(c,f(o,_));return e(h)}(s,0)}async function Ae(s){if("clipboard"in navigator)await navigator.clipboard.writeText(s);else{const e=document.createElement("input");e.type="text",e.disabled=!0,e.style.setProperty("position","fixed"),e.style.setProperty("z-index","-100"),e.style.setProperty("pointer-events","none"),e.style.setProperty("opacity","0"),e.value=s,document.body.appendChild(e),e.click(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}const Ie=(s,e)=>{async function n(){if(f)try{await Ae(f),s.dispatchEvent(new CustomEvent("svelte-copy",{detail:f}))}catch(r){s.dispatchEvent(new CustomEvent("svelte-copy:error",{detail:r}))}}let t=typeof e=="string"?["click"]:[e.events].flat(1),f=typeof e=="string"?e:e.text;return t.forEach(r=>{s.addEventListener(r,n,!0)}),{update:r=>{const _=typeof r=="string"?["click"]:[r.events].flat(1),h=typeof r=="string"?r:r.text,v=_.filter(c=>!t.includes(c)),l=t.filter(c=>!_.includes(c));v.forEach(c=>{s.addEventListener(c,n,!0)}),l.forEach(c=>{s.removeEventListener(c,n,!0)}),t=_,f=h},destroy:()=>{t.forEach(r=>{s.removeEventListener(r,n,!0)})}}};function Be(s){let e,n,t,f,r,_,h,v,l,c,o,i,d,T,w,U,D,B,q,P,F,L,O,K;return{c(){e=b("link"),n=M(),t=b("div"),f=b("h3"),r=x(s[0]),_=M(),h=b("p"),v=x(s[1]),l=M(),c=b("details"),o=b("summary"),i=x("CSS Snippet"),d=M(),T=b("code"),w=x(s[2]),U=M(),D=b("p"),B=b("button"),q=x("Copy CSS to Clipboard"),F=b("span"),L=x(s[3]),this.h()},l(C){const z=ge("svelte-1uevrx3",document.head);e=k(z,"LINK",{rel:!0,href:!0}),z.forEach(y),n=A(C),t=k(C,"DIV",{style:!0,class:!0});var p=S(t);f=k(p,"H3",{class:!0});var Q=S(f);r=I(Q,s[0]),Q.forEach(y),_=A(p),h=k(p,"P",{});var u=S(h);v=I(u,s[1]),u.forEach(y),l=A(p),c=k(p,"DETAILS",{class:!0});var m=S(c);o=k(m,"SUMMARY",{class:!0});var g=S(o);i=I(g,"CSS Snippet"),g.forEach(y),d=A(m),T=k(m,"CODE",{class:!0});var j=S(T);w=I(j,s[2]),j.forEach(y),m.forEach(y),U=A(p),D=k(p,"P",{});var V=S(D);B=k(V,"BUTTON",{class:!0});var N=S(B);q=I(N,"Copy CSS to Clipboard"),N.forEach(y),F=k(V,"SPAN",{class:!0});var J=S(F);L=I(J,s[3]),J.forEach(y),V.forEach(y),p.forEach(y),this.h()},h(){E(e,"rel","external stylesheet"),E(e,"href",s[5]),E(f,"class","svelte-19ry7n"),Y(h,"font-size",s[4]),E(o,"class","svelte-19ry7n"),E(T,"class","svelte-19ry7n"),E(c,"class","svelte-19ry7n"),E(B,"class","svelte-19ry7n"),E(F,"class","svelte-19ry7n"),Y(t,"font-family","'"+s[0]+"'"),E(t,"class","svelte-19ry7n")},m(C,z){a(document.head,e),H(C,n,z),H(C,t,z),a(t,f),a(f,r),a(t,_),a(t,h),a(h,v),a(t,l),a(t,c),a(c,o),a(o,i),a(c,d),a(c,T),a(T,w),a(t,U),a(t,D),a(D,B),a(B,q),a(D,F),a(F,L),O||(K=[Ee(P=Ie.call(null,B,s[2])),Z(B,"svelte-copy",s[6])],O=!0)},p(C,[z]){z&1&&G(r,C[0]),z&2&&G(v,C[1]),z&16&&Y(h,"font-size",C[4]),z&4&&G(w,C[2]),P&&be(P.update)&&z&4&&P.update.call(null,C[2]),z&8&&G(L,C[3]),z&1&&Y(t,"font-family","'"+C[0]+"'")},i:ee,o:ee,d(C){y(e),C&&y(n),C&&y(t),O=!1,ue(K)}}}function Fe(s,e,n){let t,{id:f=""}=e,{family:r=""}=e,{size:_=16}=e,{text:h}=e,v="",l="";const c=`${Se}/assets/demo/fonts/${f}.css`,o=()=>{n(3,l="Copied!"),setTimeout(()=>{n(3,l="")},1e3)};return ke(async()=>{const i=await fetch(c);n(2,v=await i.text())}),s.$$set=i=>{"id"in i&&n(7,f=i.id),"family"in i&&n(0,r=i.family),"size"in i&&n(8,_=i.size),"text"in i&&n(1,h=i.text)},s.$$.update=()=>{s.$$.dirty&256&&n(4,t=`${_}px`)},[r,h,v,l,t,c,o,f,_]}class Ne extends te{constructor(e){super(),se(this,e,Fe,Be,ne,{id:7,family:0,size:8,text:1})}}const Oe=[{id:"atkinson",family:"Atkinson",type:"sans-serif"},{id:"atlas",family:"Atlas Grotesk",type:"sans-serif"},{id:"baloo-bhai",family:"Baloo Bhai",type:"sans-serif"},{id:"canela",family:"Canela",type:"serif"},{id:"computer-modern",family:"Computer Modern",type:"serif"},{id:"cozette",family:"Cozette",type:"other"},{id:"inter",family:"Inter",type:"sans-serif"},{id:"jamboree",family:"Jamboree",type:"other"},{id:"jersey",family:"Jersey M54",type:"other"},{id:"lyon",family:"Lyon Display",type:"serif"},{id:"metropolis",family:"Metropolis",type:"sans-serif"},{id:"national",family:"National 2 Web",type:"sans-serif"},{id:"publico",family:"Publico Text",type:"serif"},{id:"recoleta",family:"Recoleta",type:"serif"},{id:"rubik",family:"Rubik",type:"sans-serif"},{id:"spacemono",family:"Space Mono",type:"mono"},{id:"tiempos",family:"Tiempos Text",type:"serif"}];function ie(s,e,n){const t=s.slice();return t[5]=e[n][0],t[6]=e[n][1],t}function ae(s,e,n){const t=s.slice();return t[9]=e[n].family,t[10]=e[n].id,t}function fe(s){let e,n;return e=new Ne({props:{id:s[10],family:s[9],size:s[0],text:s[1]}}),{c(){me(e.$$.fragment)},l(t){ye(e.$$.fragment,t)},m(t,f){_e(e,t,f),n=!0},p(t,f){const r={};f&1&&(r.size=t[0]),f&2&&(r.text=t[1]),e.$set(r)},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){W(e.$$.fragment,t),n=!1},d(t){ve(e,t)}}}function ce(s){let e,n=s[5]+"",t,f,r,_,h,v=s[6],l=[];for(let o=0;o<v.length;o+=1)l[o]=fe(ae(s,v,o));const c=o=>W(l[o],1,1,()=>{l[o]=null});return{c(){e=b("h2"),t=x(n),f=M(),r=b("section");for(let o=0;o<l.length;o+=1)l[o].c();_=M(),this.h()},l(o){e=k(o,"H2",{});var i=S(e);t=I(i,n),i.forEach(y),f=A(o),r=k(o,"SECTION",{class:!0});var d=S(r);for(let T=0;T<l.length;T+=1)l[T].l(d);_=A(d),d.forEach(y),this.h()},h(){E(r,"class","svelte-1lzc8ku")},m(o,i){H(o,e,i),a(e,t),H(o,f,i),H(o,r,i);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(r,null);a(r,_),h=!0},p(o,i){if(i&7){v=o[6];let d;for(d=0;d<v.length;d+=1){const T=ae(o,v,d);l[d]?(l[d].p(T,i),R(l[d],1)):(l[d]=fe(T),l[d].c(),R(l[d],1),l[d].m(r,_))}for(pe(),d=v.length;d<l.length;d+=1)c(d);de()}},i(o){if(!h){for(let i=0;i<v.length;i+=1)R(l[i]);h=!0}},o(o){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)W(l[i]);h=!1},d(o){o&&y(e),o&&y(f),o&&y(r),he(l,o)}}}function je(s){let e,n,t,f,r,_,h,v,l,c,o,i,d,T,w,U,D,B,q,P,F,L,O,K,C,z=s[2],p=[];for(let u=0;u<z.length;u+=1)p[u]=ce(ie(s,z,u));const Q=u=>W(p[u],1,1,()=>{p[u]=null});return{c(){e=b("div"),n=b("h1"),t=x("Hosted Fonts on The Pudding"),f=M(),r=b("p"),_=b("em"),h=x("Do not use fonts hosted by The Pudding without written permission."),v=M(),l=b("form"),c=b("label"),o=x("font-size: "),i=x(s[0]),d=x("px"),T=M(),w=b("input"),U=M(),D=b("label"),B=x("text sample"),q=M(),P=b("input"),F=M(),L=b("article");for(let u=0;u<p.length;u+=1)p[u].c();this.h()},l(u){e=k(u,"DIV",{id:!0,class:!0});var m=S(e);n=k(m,"H1",{});var g=S(n);t=I(g,"Hosted Fonts on The Pudding"),g.forEach(y),f=A(m),r=k(m,"P",{});var j=S(r);_=k(j,"EM",{});var V=S(_);h=I(V,"Do not use fonts hosted by The Pudding without written permission."),V.forEach(y),j.forEach(y),v=A(m),l=k(m,"FORM",{});var N=S(l);c=k(N,"LABEL",{for:!0,class:!0});var J=S(c);o=I(J,"font-size: "),i=I(J,s[0]),d=I(J,"px"),J.forEach(y),T=A(N),w=k(N,"INPUT",{id:!0,type:!0,min:!0,max:!0}),U=A(N),D=k(N,"LABEL",{for:!0,class:!0});var le=S(D);B=I(le,"text sample"),le.forEach(y),q=A(N),P=k(N,"INPUT",{id:!0,type:!0,maxlength:!0}),N.forEach(y),m.forEach(y),F=A(u),L=k(u,"ARTICLE",{class:!0});var oe=S(L);for(let $=0;$<p.length;$+=1)p[$].l(oe);oe.forEach(y),this.h()},h(){E(c,"for","size"),E(c,"class","svelte-1lzc8ku"),E(w,"id","size"),E(w,"type","range"),E(w,"min","12"),E(w,"max","48"),E(D,"for","text"),E(D,"class","svelte-1lzc8ku"),E(P,"id","text"),E(P,"type","text"),E(P,"maxlength","100"),E(e,"id","info"),E(e,"class","svelte-1lzc8ku"),E(L,"class","svelte-1lzc8ku")},m(u,m){H(u,e,m),a(e,n),a(n,t),a(e,f),a(e,r),a(r,_),a(_,h),a(e,v),a(e,l),a(l,c),a(c,o),a(c,i),a(c,d),a(l,T),a(l,w),X(w,s[0]),a(l,U),a(l,D),a(D,B),a(l,q),a(l,P),X(P,s[1]),H(u,F,m),H(u,L,m);for(let g=0;g<p.length;g+=1)p[g]&&p[g].m(L,null);O=!0,K||(C=[Z(w,"change",s[3]),Z(w,"input",s[3]),Z(P,"input",s[4])],K=!0)},p(u,[m]){if((!O||m&1)&&G(i,u[0]),m&1&&X(w,u[0]),m&2&&P.value!==u[1]&&X(P,u[1]),m&7){z=u[2];let g;for(g=0;g<z.length;g+=1){const j=ie(u,z,g);p[g]?(p[g].p(j,m),R(p[g],1)):(p[g]=ce(j),p[g].c(),R(p[g],1),p[g].m(L,null))}for(pe(),g=z.length;g<p.length;g+=1)Q(g);de()}},i(u){if(!O){for(let m=0;m<z.length;m+=1)R(p[m]);O=!0}},o(u){p=p.filter(Boolean);for(let m=0;m<p.length;m+=1)W(p[m]);O=!1},d(u){u&&y(e),u&&y(F),u&&y(L),he(p,u),K=!1,ue(C)}}}function He(s,e,n){let t=18,f="The quick brown fox jumps over the lazy dog.";const r=Me(Oe,v=>v.type);r.sort((v,l)=>Ce(v[1].length,l[1].length));function _(){t=ze(this.value),n(0,t)}function h(){f=this.value,n(1,f)}return[t,f,r,_,h]}class Re extends te{constructor(e){super(),se(this,e,He,je,ne,{})}}function Ue(s){let e,n;return e=new Re({}),{c(){me(e.$$.fragment)},l(t){ye(e.$$.fragment,t)},m(t,f){_e(e,t,f),n=!0},p:ee,i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){W(e.$$.fragment,t),n=!1},d(t){ve(e,t)}}}class Ve extends te{constructor(e){super(),se(this,e,null,Ue,ne,{})}}export{Ve as default};
