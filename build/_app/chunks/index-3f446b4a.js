function P(){}function Z(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function I(){return Object.create(null)}function $(t){t.forEach(J)}function K(t){return typeof t=="function"}function gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function xt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function tt(t){return Object.keys(t).length===0}function bt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?Z(n.ctx.slice(),t[1](i(e))):n.ctx}function wt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const a=[],l=Math.max(e.dirty.length,r.length);for(let o=0;o<l;o+=1)a[o]=e.dirty[o]|r[o];return a}return e.dirty|r}return e.dirty}function $t(t,e,n,i,r,a){if(r){const l=Q(e,n,i,a);t.p(l,r)}}function kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Et(t){return t&&K(t.destroy)?t.destroy:P}let C=!1;function et(){C=!0}function nt(){C=!1}function it(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let s=0;s<e.length;s++){const f=e[s];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const s=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=s?r+1:it(1,r,d=>e[n[d]].claim_order,s))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,r=Math.max(_,r)}const a=[],l=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(a.push(e[c-1]);o>=c;o--)l.push(e[o]);o--}for(;o>=0;o--)l.push(e[o]);a.reverse(),l.sort((c,s)=>c.claim_order-s.claim_order);for(let c=0,s=0;c<l.length;c++){for(;s<a.length&&l[c].claim_order>=a[s].claim_order;)s++;const f=s<a.length?a[s]:null;t.insertBefore(l[c],f)}}function rt(t,e){if(C){for(ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function vt(t,e,n){C&&!n?rt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode.removeChild(t)}function St(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ot(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function jt(){return z(" ")}function Nt(){return z("")}function At(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ct(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function st(t){return Array.from(t.childNodes)}function at(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,i,r=!1){at(t);const a=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(e(o)){const c=n(o);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(e(o)){const c=n(o);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function ut(t,e,n,i){return R(t,r=>r.nodeName===e,r=>{const a=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];n[o.name]||a.push(o.name)}a.forEach(l=>r.removeAttribute(l))},()=>i(e))}function Mt(t,e,n){return ut(t,e,n,ot)}function ft(t,e){return R(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function Lt(t){return ft(t," ")}function Tt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function qt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Bt(t,e,n){t.classList[n?"add":"remove"](e)}function dt(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}let w;function b(t){w=t}function k(){if(!w)throw new Error("Function called outside component initialization");return w}function Dt(t){k().$$.on_mount.push(t)}function Ot(t){k().$$.after_update.push(t)}function Pt(t){k().$$.on_destroy.push(t)}function zt(){const t=k();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const r=dt(e,n);i.slice().forEach(a=>{a.call(t,r)})}}}function Ft(t,e){k().$$.context.set(t,e)}function Ht(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const x=[],W=[],N=[],G=[],U=Promise.resolve();let D=!1;function V(){D||(D=!0,U.then(X))}function It(){return V(),U}function O(t){N.push(t)}const B=new Set;let j=0;function X(){const t=w;do{for(;j<x.length;){const e=x[j];j++,b(e),_t(e.$$)}for(b(null),x.length=0,j=0;W.length;)W.pop()();for(let e=0;e<N.length;e+=1){const n=N[e];B.has(n)||(B.add(n),n())}N.length=0}while(x.length);for(;G.length;)G.pop()();D=!1,B.clear(),b(t)}function _t(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const A=new Set;let g;function Wt(){g={r:0,c:[],p:g}}function Gt(){g.r||$(g.c),g=g.p}function Y(t,e){t&&t.i&&(A.delete(t),t.i(e))}function ht(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),g.c.push(()=>{A.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Jt(t,e){ht(t,1,1,()=>{e.delete(t.key)})}function Kt(t,e,n,i,r,a,l,o,c,s,f,_){let d=t.length,m=a.length,h=d;const M={};for(;h--;)M[t[h].key]=h;const E=[],L=new Map,T=new Map;for(h=m;h--;){const u=_(r,a,h),y=n(u);let p=l.get(y);p?i&&p.p(u,e):(p=s(y,u),p.c()),L.set(y,E[h]=p),y in M&&T.set(y,Math.abs(h-M[y]))}const F=new Set,H=new Set;function q(u){Y(u,1),u.m(o,f),l.set(u.key,u),f=u.first,m--}for(;d&&m;){const u=E[m-1],y=t[d-1],p=u.key,v=y.key;u===y?(f=u.first,d--,m--):L.has(v)?!l.has(p)||F.has(p)?q(u):H.has(v)?d--:T.get(p)>T.get(v)?(H.add(p),q(u)):(F.add(v),d--):(c(y,l),d--)}for(;d--;){const u=t[d];L.has(u.key)||c(u,l)}for(;m;)q(E[m-1]);return E}function Qt(t,e){const n={},i={},r={$$scope:1};let a=t.length;for(;a--;){const l=t[a],o=e[a];if(o){for(const c in l)c in o||(i[c]=1);for(const c in o)r[c]||(n[c]=o[c],r[c]=1);t[a]=o}else for(const c in l)r[c]=1}for(const l in i)l in n||(n[l]=void 0);return n}function Rt(t){return typeof t=="object"&&t!==null?t:{}}function Ut(t){t&&t.c()}function Vt(t,e){t&&t.l(e)}function mt(t,e,n,i){const{fragment:r,on_mount:a,on_destroy:l,after_update:o}=t.$$;r&&r.m(e,n),i||O(()=>{const c=a.map(J).filter(K);l?l.push(...c):$(c),t.$$.on_mount=[]}),o.forEach(O)}function yt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(t,e){t.$$.dirty[0]===-1&&(x.push(t),V(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Xt(t,e,n,i,r,a,l,o=[-1]){const c=w;b(t);const s=t.$$={fragment:null,ctx:null,props:a,update:P,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:I(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};l&&l(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return s.ctx&&r(s.ctx[_],s.ctx[_]=h)&&(!s.skip_bound&&s.bound[_]&&s.bound[_](h),f&&pt(t,_)),d}):[],s.update(),f=!0,$(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){et();const _=st(e.target);s.fragment&&s.fragment.l(_),_.forEach(lt)}else s.fragment&&s.fragment.c();e.intro&&Y(t.$$.fragment),mt(t,e.target,e.anchor,e.customElement),nt(),X()}b(c)}class Yt{$destroy(){yt(this,1),this.$destroy=P}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Qt as A,Rt as B,yt as C,Z as D,It as E,bt as F,$t as G,kt as H,wt as I,rt as J,zt as K,W as L,xt as M,St as N,Bt as O,At as P,Ht as Q,Kt as R,Yt as S,Jt as T,Et as U,K as V,$ as W,Pt as X,st as a,Ct as b,Mt as c,lt as d,ot as e,qt as f,vt as g,ft as h,Xt as i,Tt as j,jt as k,Nt as l,Lt as m,P as n,Wt as o,ht as p,Gt as q,Y as r,gt as s,z as t,Ft as u,Ot as v,Dt as w,Ut as x,Vt as y,mt as z};