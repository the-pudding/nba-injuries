function T(){}function ot(t,e){for(const n in e)t[n]=e[n];return t}function V(t){return t()}function J(){return Object.create(null)}function w(t){t.forEach(V)}function R(t){return typeof t=="function"}function vt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let k;function At(t,e){return k||(k=document.createElement("a")),k.href=e,t===k.href}function lt(t){return Object.keys(t).length===0}function ut(t,...e){if(t==null)return T;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Mt(t,e,n){t.$$.on_destroy.push(ut(e,n))}function kt(t,e,n,i){if(t){const s=X(t,e,n,i);return t[0](s)}}function X(t,e,n,i){return t[1]&&i?ot(n.ctx.slice(),t[1](i(e))):n.ctx}function St(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function Lt(t,e,n,i,s,o){if(s){const r=X(e,n,i,o);t.p(r,s)}}function jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ct(t){return t&&R(t.destroy)?t.destroy:T}let j=!1;function at(){j=!0}function ft(){j=!1}function dt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function _t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=u?s+1:dt(1,s,d=>e[n[d]].claim_order,u))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,s=Math.max(_,s)}const o=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);o.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<o.length&&r[c].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(r[c],f)}}function ht(t,e){if(j){for(_t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function mt(t,e,n){t.insertBefore(e,n||null)}function pt(t,e,n){j&&!n?ht(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function L(t){t.parentNode&&t.parentNode.removeChild(t)}function Ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function z(t){return document.createTextNode(t)}function Dt(){return z(" ")}function Pt(){return z("")}function Ot(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function qt(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function Gt(t){return t===""?null:+t}function yt(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,i,s=!1){tt(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function nt(t,e,n,i){return et(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||o.push(l.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Rt(t,e,n){return nt(t,e,n,Y)}function zt(t,e,n){return nt(t,e,n,Z)}function gt(t,e){return et(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function Ft(t){return gt(t," ")}function K(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Wt(t,e){const n=K(t,"HTML_TAG_START",0),i=K(t,"HTML_TAG_END",n);if(n===i)return new Q(void 0,e);tt(t);const s=t.splice(n,i-n+1);L(s[0]),L(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new Q(o,e)}function It(t,e){e=""+e,t.data!==e&&(t.data=e)}function Jt(t,e){t.value=e??""}function Kt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Qt(t,e,n){t.classList[n?"add":"remove"](e)}function Ut(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class xt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Z(n.nodeName):this.e=Y(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)mt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(L)}}class Q extends xt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)pt(this.t,this.n[n],e)}}function Vt(t,e){return new t(e)}let N;function E(t){N=t}function v(){if(!N)throw new Error("Function called outside component initialization");return N}function Xt(t){v().$$.on_mount.push(t)}function Yt(t){v().$$.after_update.push(t)}function Zt(t){v().$$.on_destroy.push(t)}function te(t,e){return v().$$.context.set(t,e),e}function ee(t){return v().$$.context.get(t)}const $=[],U=[];let b=[];const B=[],it=Promise.resolve();let q=!1;function st(){q||(q=!0,it.then(rt))}function ne(){return st(),it}function G(t){b.push(t)}function ie(t){B.push(t)}const O=new Set;let x=0;function rt(){if(x!==0)return;const t=N;do{try{for(;x<$.length;){const e=$[x];x++,E(e),$t(e.$$)}}catch(e){throw $.length=0,x=0,e}for(E(null),$.length=0,x=0;U.length;)U.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];O.has(n)||(O.add(n),n())}b.length=0}while($.length);for(;B.length;)B.pop()();q=!1,O.clear(),E(t)}function $t(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}function bt(t){const e=[],n=[];b.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),b=e}const S=new Set;let g;function se(){g={r:0,c:[],p:g}}function re(){g.r||w(g.c),g=g.p}function ct(t,e){t&&t.i&&(S.delete(t),t.i(e))}function wt(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),g.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function ce(t,e){wt(t,1,1,()=>{e.delete(t.key)})}function oe(t,e,n,i,s,o,r,l,c,u,f,_){let d=t.length,m=o.length,h=d;const C={};for(;h--;)C[t[h].key]=h;const A=[],H=new Map,D=new Map,F=[];for(h=m;h--;){const a=_(s,o,h),p=n(a);let y=r.get(p);y?i&&F.push(()=>y.p(a,e)):(y=u(p,a),y.c()),H.set(p,A[h]=y),p in C&&D.set(p,Math.abs(h-C[p]))}const W=new Set,I=new Set;function P(a){ct(a,1),a.m(l,f),r.set(a.key,a),f=a.first,m--}for(;d&&m;){const a=A[m-1],p=t[d-1],y=a.key,M=p.key;a===p?(f=a.first,d--,m--):H.has(M)?!r.has(y)||W.has(y)?P(a):I.has(M)?d--:D.get(y)>D.get(M)?(I.add(y),P(a)):(W.add(M),d--):(c(p,r),d--)}for(;d--;){const a=t[d];H.has(a.key)||c(a,r)}for(;m;)P(A[m-1]);return w(F),A}function le(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],l=e[o];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[o]=l}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function ue(t){return typeof t=="object"&&t!==null?t:{}}function ae(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function fe(t){t&&t.c()}function de(t,e){t&&t.l(e)}function Et(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||G(()=>{const r=t.$$.on_mount.map(V).filter(R);t.$$.on_destroy?t.$$.on_destroy.push(...r):w(r),t.$$.on_mount=[]}),o.forEach(G)}function Tt(t,e){const n=t.$$;n.fragment!==null&&(bt(n.after_update),w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Nt(t,e){t.$$.dirty[0]===-1&&($.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _e(t,e,n,i,s,o,r,l=[-1]){const c=N;E(t);const u=t.$$={fragment:null,ctx:[],props:o,update:T,not_equal:s,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:J(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return u.ctx&&s(u.ctx[_],u.ctx[_]=h)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](h),f&&Nt(t,_)),d}):[],u.update(),f=!0,w(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){at();const _=yt(e.target);u.fragment&&u.fragment.l(_),_.forEach(L)}else u.fragment&&u.fragment.c();e.intro&&ct(t.$$.fragment),Et(t,e.target,e.anchor,e.customElement),ft(),rt()}E(c)}class he{$destroy(){Tt(this,1),this.$destroy=T}$on(e,n){if(!R(n))return T;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ot as $,Et as A,Tt as B,ht as C,T as D,kt as E,Lt as F,jt as G,St as H,Mt as I,Ut as J,Ht as K,Qt as L,Zt as M,Q as N,Wt as O,Ct as P,R as Q,Z as R,he as S,zt as T,At as U,qt as V,Ot as W,ae as X,ie as Y,ee as Z,oe as _,Dt as a,le as a0,ue as a1,ce as a2,te as a3,w as a4,Jt as a5,Gt as a6,pt as b,Ft as c,wt as d,Pt as e,re as f,ct as g,L as h,_e as i,Yt as j,Y as k,Rt as l,yt as m,Bt as n,Xt as o,Kt as p,z as q,gt as r,vt as s,ne as t,It as u,se as v,U as w,Vt as x,fe as y,de as z};
