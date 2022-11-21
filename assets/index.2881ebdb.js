(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function O(){}function H(e,t){for(const r in t)e[r]=t[r];return e}function Ie(e){return e()}function Ee(){return Object.create(null)}function U(e){e.forEach(Ie)}function re(e){return typeof e=="function"}function x(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let J;function fe(e,t){return J||(J=document.createElement("a")),J.href=t,e===J.href}function We(e){return Object.keys(e).length===0}function De(e,...t){if(e==null)return O;const r=e.subscribe(...t);return r.unsubscribe?()=>r.unsubscribe():r}function D(e,t,r){e.$$.on_destroy.push(De(t,r))}function ge(e,t,r,n){if(e){const o=He(e,t,r,n);return e[0](o)}}function He(e,t,r,n){return e[1]&&n?H(r.ctx.slice(),e[1](n(t))):r.ctx}function be(e,t,r,n){if(e[2]&&n){const o=e[2](n(r));if(t.dirty===void 0)return o;if(typeof o=="object"){const i=[],l=Math.max(t.dirty.length,o.length);for(let s=0;s<l;s+=1)i[s]=t.dirty[s]|o[s];return i}return t.dirty|o}return t.dirty}function ke(e,t,r,n,o,i){if(o){const l=He(t,r,n,i);e.p(l,o)}}function ye(e){if(e.ctx.length>32){const t=[],r=e.ctx.length/32;for(let n=0;n<r;n++)t[n]=-1;return t}return-1}function ae(e){const t={};for(const r in e)r[0]!=="$"&&(t[r]=e[r]);return t}function Se(e,t){const r={};t=new Set(t);for(const n in e)!t.has(n)&&n[0]!=="$"&&(r[n]=e[n]);return r}function Ye(e){return e&&re(e.destroy)?e.destroy:O}function j(e,t){e.appendChild(t)}function g(e,t,r){e.insertBefore(t,r||null)}function _(e){e.parentNode&&e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function oe(e){return document.createTextNode(e)}function T(){return oe(" ")}function ie(){return oe("")}function de(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function L(e,t,r){r==null?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function Le(e,t){const r=Object.getOwnPropertyDescriptors(e.__proto__);for(const n in t)t[n]==null?e.removeAttribute(n):n==="style"?e.style.cssText=t[n]:n==="__value"?e.value=e[n]=t[n]:r[n]&&r[n].set?e[n]=t[n]:L(e,n,t[n])}function Ge(e){return Array.from(e.childNodes)}function Je(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Xe(e,t,{bubbles:r=!1,cancelable:n=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,r,n,t),o}function Oe(e,t){return new e(t)}let W;function V(e){W=e}function G(){if(!W)throw new Error("Function called outside component initialization");return W}function Ze(e){G().$$.on_mount.push(e)}function et(e){G().$$.on_destroy.push(e)}function tt(){const e=G();return(t,r,{cancelable:n=!1}={})=>{const o=e.$$.callbacks[t];if(o){const i=Xe(t,r,{cancelable:n});return o.slice().forEach(l=>{l.call(e,i)}),!i.defaultPrevented}return!0}}function Pe(e,t){return G().$$.context.set(e,t),t}function z(e){return G().$$.context.get(e)}const F=[],Ce=[],Z=[],Te=[],nt=Promise.resolve();let pe=!1;function rt(){pe||(pe=!0,nt.then(Ue))}function me(e){Z.push(e)}const se=new Set;let X=0;function Ue(){const e=W;do{for(;X<F.length;){const t=F[X];X++,V(t),ot(t.$$)}for(V(null),F.length=0,X=0;Ce.length;)Ce.pop()();for(let t=0;t<Z.length;t+=1){const r=Z[t];se.has(r)||(se.add(r),r())}Z.length=0}while(F.length);for(;Te.length;)Te.pop()();pe=!1,se.clear(),V(e)}function ot(e){if(e.fragment!==null){e.update(),U(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(me)}}const ee=new Set;let I;function ve(){I={r:0,c:[],p:I}}function we(){I.r||U(I.c),I=I.p}function P(e,t){e&&e.i&&(ee.delete(e),e.i(t))}function $(e,t,r,n){if(e&&e.o){if(ee.has(e))return;ee.add(e),I.c.push(()=>{ee.delete(e),n&&(r&&e.d(1),n())}),e.o(t)}else n&&n()}function qe(e,t){const r={},n={},o={$$scope:1};let i=e.length;for(;i--;){const l=e[i],s=t[i];if(s){for(const u in l)u in s||(n[u]=1);for(const u in s)o[u]||(r[u]=s[u],o[u]=1);e[i]=s}else for(const u in l)o[u]=1}for(const l in n)l in r||(r[l]=void 0);return r}function $e(e){return typeof e=="object"&&e!==null?e:{}}function M(e){e&&e.c()}function N(e,t,r,n){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,r),n||me(()=>{const l=e.$$.on_mount.map(Ie).filter(re);e.$$.on_destroy?e.$$.on_destroy.push(...l):U(l),e.$$.on_mount=[]}),i.forEach(me)}function A(e,t){const r=e.$$;r.fragment!==null&&(U(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function it(e,t){e.$$.dirty[0]===-1&&(F.push(e),rt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function q(e,t,r,n,o,i,l,s=[-1]){const u=W;V(e);const c=e.$$={fragment:null,ctx:[],props:i,update:O,not_equal:o,bound:Ee(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:Ee(),dirty:s,skip_bound:!1,root:t.target||u.$$.root};l&&l(c.root);let a=!1;if(c.ctx=r?r(e,t.props||{},(d,p,...m)=>{const w=m.length?m[0]:p;return c.ctx&&o(c.ctx[d],c.ctx[d]=w)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](w),a&&it(e,d)),p}):[],c.update(),a=!0,U(c.before_update),c.fragment=n?n(c.ctx):!1,t.target){if(t.hydrate){const d=Ge(t.target);c.fragment&&c.fragment.l(d),d.forEach(_)}else c.fragment&&c.fragment.c();t.intro&&P(e.$$.fragment),N(e,t.target,t.anchor,t.customElement),Ue()}V(u)}class K{$destroy(){A(this,1),this.$destroy=O}$on(t,r){if(!re(r))return O;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(r),()=>{const o=n.indexOf(r);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!We(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const B=[];function st(e,t){return{subscribe:Q(e,t).subscribe}}function Q(e,t=O){let r;const n=new Set;function o(s){if(x(e,s)&&(e=s,r)){const u=!B.length;for(const c of n)c[1](),B.push(c,e);if(u){for(let c=0;c<B.length;c+=2)B[c][0](B[c+1]);B.length=0}}}function i(s){o(s(e))}function l(s,u=O){const c=[s,u];return n.add(c),n.size===1&&(r=t(o)||O),s(e),()=>{n.delete(c),n.size===0&&(r(),r=null)}}return{set:o,update:i,subscribe:l}}function lt(e,t,r){const n=!Array.isArray(e),o=n?[e]:e,i=t.length<2;return st(r,l=>{let s=!1;const u=[];let c=0,a=O;const d=()=>{if(c)return;a();const m=t(n?u[0]:u,l);i?l(m):a=re(m)?m:O},p=o.map((m,w)=>De(m,v=>{u[w]=v,c&=~(1<<w),s&&d()},()=>{c|=1<<w}));return s=!0,d(),function(){U(p),a()}})}const te={},ne={};function le(e){return{...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}}function ut(e,t){const r=[];let n=le(e);return{get location(){return n},listen(o){r.push(o);const i=()=>{n=le(e),o({location:n,action:"POP"})};return e.addEventListener("popstate",i),()=>{e.removeEventListener("popstate",i);const l=r.indexOf(o);r.splice(l,1)}},navigate(o,{state:i,replace:l=!1}={}){i={...i,key:Date.now()+""};try{l?e.history.replaceState(i,null,o):e.history.pushState(i,null,o)}catch{e.location[l?"replace":"assign"](o)}n=le(e),r.forEach(s=>s({location:n,action:"PUSH"}))}}}function ct(e="/"){let t=0;const r=[{pathname:e,search:""}],n=[];return{get location(){return r[t]},addEventListener(o,i){},removeEventListener(o,i){},history:{get entries(){return r},get index(){return t},get state(){return n[t]},pushState(o,i,l){const[s,u=""]=l.split("?");t++,r.push({pathname:s,search:u}),n.push(o)},replaceState(o,i,l){const[s,u=""]=l.split("?");r[t]={pathname:s,search:u},n[t]=o}}}}const ft=Boolean(typeof window<"u"&&window.document&&window.document.createElement),he=ut(ft?window:ct()),{navigate:Ke}=he,Be=/^:(.+)/,Re=4,at=3,dt=2,pt=1,mt=1;function _e(e,t){return e.substr(0,t.length)===t}function ht(e){return e===""}function _t(e){return Be.test(e)}function ze(e){return e[0]==="*"}function Y(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function ue(e){return e.replace(/(^\/+|\/+$)/g,"")}function gt(e,t){const r=e.default?0:Y(e.path).reduce((n,o)=>(n+=Re,ht(o)?n+=mt:_t(o)?n+=dt:ze(o)?n-=Re+pt:n+=at,n),0);return{route:e,score:r,index:t}}function bt(e){return e.map(gt).sort((t,r)=>t.score<r.score?1:t.score>r.score?-1:t.index-r.index)}function Fe(e,t){let r,n;const[o]=t.split("?"),i=Y(o),l=i[0]==="",s=bt(e);for(let u=0,c=s.length;u<c;u++){const a=s[u].route;let d=!1;if(a.default){n={route:a,params:{},uri:t};continue}const p=Y(a.path),m={},w=Math.max(i.length,p.length);let v=0;for(;v<w;v++){const b=p[v],S=i[v];if(b!==void 0&&ze(b)){const C=b==="*"?"*":b.slice(1);m[C]=i.slice(v).map(decodeURIComponent).join("/");break}if(S===void 0){d=!0;break}let R=Be.exec(b);if(R&&!l){const C=decodeURIComponent(S);m[R[1]]=C}else if(b!==S){d=!0;break}}if(!d){r={route:a,params:m,uri:"/"+i.slice(0,v).join("/")};break}}return r||n||null}function kt(e,t){return Fe([e],t)}function ce(e,t){return e+(t?`?${t}`:"")}function yt(e,t){if(_e(e,"/"))return e;const[r,n]=e.split("?"),[o]=t.split("?"),i=Y(r),l=Y(o);if(i[0]==="")return ce(o,n);if(!_e(i[0],".")){const c=l.concat(i).join("/");return ce((o==="/"?"":"/")+c,n)}const s=l.concat(i),u=[];return s.forEach(c=>{c===".."?u.pop():c!=="."&&u.push(c)}),ce("/"+u.join("/"),n)}function je(e,t){return`${ue(t==="/"?e:`${ue(e)}/${ue(t)}`)}/`}function Qe(e){return!e.defaultPrevented&&e.button===0&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function vt(e){const t=location.host;return e.host==t||e.href.indexOf(`https://${t}`)===0||e.href.indexOf(`http://${t}`)===0}function wt(e){let t;const r=e[9].default,n=ge(r,e,e[8],null);return{c(){n&&n.c()},m(o,i){n&&n.m(o,i),t=!0},p(o,[i]){n&&n.p&&(!t||i&256)&&ke(n,r,o,o[8],t?be(r,o[8],i,null):ye(o[8]),null)},i(o){t||(P(n,o),t=!0)},o(o){$(n,o),t=!1},d(o){n&&n.d(o)}}}function Et(e,t,r){let n,o,i,{$$slots:l={},$$scope:s}=t,{basepath:u="/"}=t,{url:c=null}=t;const a=z(te),d=z(ne),p=Q([]);D(e,p,h=>r(6,o=h));const m=Q(null);let w=!1;const v=a||Q(c?{pathname:c}:he.location);D(e,v,h=>r(5,n=h));const b=d?d.routerBase:Q({path:u,uri:u});D(e,b,h=>r(7,i=h));const S=lt([b,m],([h,E])=>{if(E===null)return h;const{path:f}=h,{route:k,uri:Ve}=E;return{path:k.default?f:k.path.replace(/\*.*$/,""),uri:Ve}});function R(h){const{path:E}=i;let{path:f}=h;if(h._path=f,h.path=je(E,f),typeof window>"u"){if(w)return;const k=kt(h,n.pathname);k&&(m.set(k),w=!0)}else p.update(k=>(k.push(h),k))}function C(h){p.update(E=>{const f=E.indexOf(h);return E.splice(f,1),E})}return a||(Ze(()=>he.listen(E=>{v.set(E.location)})),Pe(te,v)),Pe(ne,{activeRoute:m,base:b,routerBase:S,registerRoute:R,unregisterRoute:C}),e.$$set=h=>{"basepath"in h&&r(3,u=h.basepath),"url"in h&&r(4,c=h.url),"$$scope"in h&&r(8,s=h.$$scope)},e.$$.update=()=>{if(e.$$.dirty&128){const{path:h}=i;p.update(E=>(E.forEach(f=>f.path=je(h,f._path)),E))}if(e.$$.dirty&96){const h=Fe(o,n.pathname);m.set(h)}},[p,v,b,u,c,n,o,i,s,l]}class St extends K{constructor(t){super(),q(this,t,Et,wt,x,{basepath:3,url:4})}}const Lt=e=>({params:e&4,location:e&16}),Ne=e=>({params:e[2],location:e[4]});function Ae(e){let t,r,n,o;const i=[Pt,Ot],l=[];function s(u,c){return u[0]!==null?0:1}return t=s(e),r=l[t]=i[t](e),{c(){r.c(),n=ie()},m(u,c){l[t].m(u,c),g(u,n,c),o=!0},p(u,c){let a=t;t=s(u),t===a?l[t].p(u,c):(ve(),$(l[a],1,1,()=>{l[a]=null}),we(),r=l[t],r?r.p(u,c):(r=l[t]=i[t](u),r.c()),P(r,1),r.m(n.parentNode,n))},i(u){o||(P(r),o=!0)},o(u){$(r),o=!1},d(u){l[t].d(u),u&&_(n)}}}function Ot(e){let t;const r=e[10].default,n=ge(r,e,e[9],Ne);return{c(){n&&n.c()},m(o,i){n&&n.m(o,i),t=!0},p(o,i){n&&n.p&&(!t||i&532)&&ke(n,r,o,o[9],t?be(r,o[9],i,Lt):ye(o[9]),Ne)},i(o){t||(P(n,o),t=!0)},o(o){$(n,o),t=!1},d(o){n&&n.d(o)}}}function Pt(e){let t,r,n;const o=[{location:e[4]},e[2],e[3]];var i=e[0];function l(s){let u={};for(let c=0;c<o.length;c+=1)u=H(u,o[c]);return{props:u}}return i&&(t=Oe(i,l())),{c(){t&&M(t.$$.fragment),r=ie()},m(s,u){t&&N(t,s,u),g(s,r,u),n=!0},p(s,u){const c=u&28?qe(o,[u&16&&{location:s[4]},u&4&&$e(s[2]),u&8&&$e(s[3])]):{};if(i!==(i=s[0])){if(t){ve();const a=t;$(a.$$.fragment,1,0,()=>{A(a,1)}),we()}i?(t=Oe(i,l()),M(t.$$.fragment),P(t.$$.fragment,1),N(t,r.parentNode,r)):t=null}else i&&t.$set(c)},i(s){n||(t&&P(t.$$.fragment,s),n=!0)},o(s){t&&$(t.$$.fragment,s),n=!1},d(s){s&&_(r),t&&A(t,s)}}}function Ct(e){let t,r,n=e[1]!==null&&e[1].route===e[7]&&Ae(e);return{c(){n&&n.c(),t=ie()},m(o,i){n&&n.m(o,i),g(o,t,i),r=!0},p(o,[i]){o[1]!==null&&o[1].route===o[7]?n?(n.p(o,i),i&2&&P(n,1)):(n=Ae(o),n.c(),P(n,1),n.m(t.parentNode,t)):n&&(ve(),$(n,1,1,()=>{n=null}),we())},i(o){r||(P(n),r=!0)},o(o){$(n),r=!1},d(o){n&&n.d(o),o&&_(t)}}}function Tt(e,t,r){let n,o,{$$slots:i={},$$scope:l}=t,{path:s=""}=t,{component:u=null}=t;const{registerRoute:c,unregisterRoute:a,activeRoute:d}=z(ne);D(e,d,b=>r(1,n=b));const p=z(te);D(e,p,b=>r(4,o=b));const m={path:s,default:s===""};let w={},v={};return c(m),typeof window<"u"&&et(()=>{a(m)}),e.$$set=b=>{r(13,t=H(H({},t),ae(b))),"path"in b&&r(8,s=b.path),"component"in b&&r(0,u=b.component),"$$scope"in b&&r(9,l=b.$$scope)},e.$$.update=()=>{e.$$.dirty&2&&n&&n.route===m&&r(2,w=n.params);{const{path:b,component:S,...R}=t;r(3,v=R)}},t=ae(t),[u,n,w,v,o,d,p,m,s,l,i]}class Me extends K{constructor(t){super(),q(this,t,Tt,Ct,x,{path:8,component:0})}}function $t(e){let t,r,n,o;const i=e[16].default,l=ge(i,e,e[15],null);let s=[{href:e[0]},{"aria-current":e[2]},e[1],e[6]],u={};for(let c=0;c<s.length;c+=1)u=H(u,s[c]);return{c(){t=y("a"),l&&l.c(),Le(t,u)},m(c,a){g(c,t,a),l&&l.m(t,null),r=!0,n||(o=de(t,"click",e[5]),n=!0)},p(c,[a]){l&&l.p&&(!r||a&32768)&&ke(l,i,c,c[15],r?be(i,c[15],a,null):ye(c[15]),null),Le(t,u=qe(s,[(!r||a&1)&&{href:c[0]},(!r||a&4)&&{"aria-current":c[2]},a&2&&c[1],a&64&&c[6]]))},i(c){r||(P(l,c),r=!0)},o(c){$(l,c),r=!1},d(c){c&&_(t),l&&l.d(c),n=!1,o()}}}function Rt(e,t,r){let n;const o=["to","replace","state","getProps"];let i=Se(t,o),l,s,{$$slots:u={},$$scope:c}=t,{to:a="#"}=t,{replace:d=!1}=t,{state:p={}}=t,{getProps:m=()=>({})}=t;const{base:w}=z(ne);D(e,w,f=>r(14,s=f));const v=z(te);D(e,v,f=>r(13,l=f));const b=tt();let S,R,C,h;function E(f){if(b("click",f),Qe(f)){f.preventDefault();const k=l.pathname===S||d;Ke(S,{state:p,replace:k})}}return e.$$set=f=>{t=H(H({},t),ae(f)),r(6,i=Se(t,o)),"to"in f&&r(7,a=f.to),"replace"in f&&r(8,d=f.replace),"state"in f&&r(9,p=f.state),"getProps"in f&&r(10,m=f.getProps),"$$scope"in f&&r(15,c=f.$$scope)},e.$$.update=()=>{e.$$.dirty&16512&&r(0,S=a==="/"?s.uri:yt(a,s.uri)),e.$$.dirty&8193&&r(11,R=_e(l.pathname,S)),e.$$.dirty&8193&&r(12,C=S===l.pathname),e.$$.dirty&4096&&r(2,n=C?"page":void 0),e.$$.dirty&15361&&r(1,h=m({location:l,href:S,isPartiallyCurrent:R,isCurrent:C}))},[S,h,n,w,v,E,i,a,d,p,m,R,C,l,s,c,u]}class jt extends K{constructor(t){super(),q(this,t,Rt,$t,x,{to:7,replace:8,state:9,getProps:10})}}function Nt(e){function t(r){const n=r.currentTarget;n.target===""&&vt(n)&&Qe(r)&&(r.preventDefault(),Ke(n.pathname+n.search,{replace:n.hasAttribute("replace")}))}return e.addEventListener("click",t),{destroy(){e.removeEventListener("click",t)}}}function xe(e){let t,r;return{c(){t=y("p"),r=oe(e[2])},m(n,o){g(n,t,o),j(t,r)},p(n,o){o&4&&Je(r,n[2])},d(n){n&&_(t)}}}function At(e){let t;return{c(){t=y("p"),t.textContent="Lager pepperkakeform ..."},m(r,n){g(r,t,n)},p:O,d(r){r&&_(t)}}}function Mt(e){let t,r,n,o,i,l;return{c(){t=y("form"),r=y("input"),n=T(),o=y("input"),L(r,"type","file"),L(r,"accept","image/*"),L(o,"type","submit")},m(s,u){g(s,t,u),j(t,r),j(t,n),j(t,o),i||(l=[de(r,"change",e[4]),de(t,"submit",e[3])],i=!0)},p:O,d(s){s&&_(t),i=!1,U(l)}}}function xt(e){let t,r,n=e[2]&&xe(e);function o(s,u){return s[1]?At:Mt}let i=o(e),l=i(e);return{c(){n&&n.c(),t=T(),l.c(),r=ie()},m(s,u){n&&n.m(s,u),g(s,t,u),l.m(s,u),g(s,r,u)},p(s,[u]){s[2]?n?n.p(s,u):(n=xe(s),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null),i===(i=o(s))&&l?l.p(s,u):(l.d(1),l=i(s),l&&(l.c(),l.m(r.parentNode,r)))},i:O,o:O,d(s){n&&n.d(s),s&&_(t),l.d(s),s&&_(r)}}}function It(e,t,r){let n,o=!1,i,l="https://cookie-generator.herokuapp.com/api";function s(){event.preventDefault();const c=n[0],a=new FormData;a.append("file",c),r(1,o=!0),r(2,i=void 0),fetch(`${l}/generator/cutter`,{method:"POST",body:a}).then(d=>d.status==200?d.blob():d.text().then(p=>{throw new Error(p)})).then(d=>{var p=document.createElement("a");p.href=window.URL.createObjectURL(d),p.download=c.name.substring(0,c.name.lastIndexOf("."))+".stl",p.click()}).catch(d=>{console.error(d),r(2,i="Klarte dessverre ikke lage pepperkakeform av det bildet!")}).finally(()=>{r(1,o=!1)})}function u(){n=this.files,r(0,n)}return[n,o,i,s,u]}class Dt extends K{constructor(t){super(),q(this,t,It,xt,x,{})}}function Ht(e){let t;return{c(){t=oe("Hvordan funker dette?")},m(r,n){g(r,t,n)},d(r){r&&_(t)}}}function Ut(e){let t,r,n,o,i,l,s,u,c;return i=new Dt({}),u=new jt({props:{to:"how",$$slots:{default:[Ht]},$$scope:{ctx:e}}}),{c(){t=y("main"),r=y("h1"),r.textContent="Lag din egen pepperkakeform",n=T(),o=y("div"),M(i.$$.fragment),l=T(),s=y("h3"),M(u.$$.fragment),L(o,"class","card")},m(a,d){g(a,t,d),j(t,r),j(t,n),j(t,o),N(i,o,null),j(t,l),j(t,s),N(u,s,null),c=!0},p(a,[d]){const p={};d&1&&(p.$$scope={dirty:d,ctx:a}),u.$set(p)},i(a){c||(P(i.$$.fragment,a),P(u.$$.fragment,a),c=!0)},o(a){$(i.$$.fragment,a),$(u.$$.fragment,a),c=!1},d(a){a&&_(t),A(i),A(u)}}}class qt extends K{constructor(t){super(),q(this,t,null,Ut,x,{})}}const Kt="/cookie-cutter/assets/iver.dd024ae3.png",Bt="/cookie-cutter/assets/iver-stl.2c265da5.png";function zt(e){let t,r,n,o,i,l,s,u,c,a,d,p,m,w,v,b,S,R,C,h,E;return{c(){t=y("h1"),t.textContent="Lag din egen pepperkakeform",r=T(),n=y("div"),n.innerHTML="<p>Transformer et bilde med gr\xF8nn bakgrunn til en 3D-printbar STL modell</p>",o=T(),i=y("img"),s=T(),u=y("img"),a=T(),d=y("h2"),d.textContent="Tips og triks",p=T(),m=y("div"),m.innerHTML=`<p>Maskeringsfargen er &quot;optimalisert&quot; for gr\xF8nnfargen i eksempelbildet.
        Andre gr\xF8nnfarger kan gi d\xE5rligere resultat.</p> 
    <p>Kutt (crop) bort deler av bilde som ikke er relevant. Algoritmen er ikke
        kjempe robust - gi den et s\xE5 enkelt case som mulig. Har du forslag til
        forbedringer s\xE5 finner du kildekoden p\xE5 github!</p>`,w=T(),v=y("h2"),v.textContent="Teknologi",b=T(),S=y("div"),S.innerHTML=`<p>L\xF8sningen bruker <a href="https://pypi.org/project/opencv-python/">OpenCV</a>
        til \xE5 ekstrahere omriss av det som skal bli kakeform fra et bilde. Omrisset
        blir etterbehandlet av
        <a href="https://pypi.org/project/shapely/">Shapely</a>
        for \xE5 rydde opp og forenkle geometrien. Til slutt ender vi opp med en linjesegment
        som blir brukt til generering av 3D modellen ved hjelp av
        <a href="https://github.com/CadQuery/cadquery">CadQuery</a></p>`,R=T(),C=y("h2"),C.textContent="Kildekode",h=T(),E=y("div"),E.innerHTML=`<ul><li><a href="https://github.com/jensmark/cookie-cutter-frontend">https://github.com/jensmark/cookie-cutter-frontend</a></li> 
        <li><a href="https://github.com/jensmark/cookie-cutter-web">https://github.com/jensmark/cookie-cutter-web</a></li></ul>`,L(n,"class","content svelte-1eb5dbw"),fe(i.src,l=Kt)||L(i,"src",l),L(i,"height","350"),L(i,"alt","Bilde av iver"),fe(u.src,c=Bt)||L(u,"src",c),L(u,"height","350"),L(u,"alt","Bilde av iver kakeform"),L(m,"class","content svelte-1eb5dbw"),L(S,"class","content svelte-1eb5dbw"),L(E,"class","content svelte-1eb5dbw")},m(f,k){g(f,t,k),g(f,r,k),g(f,n,k),g(f,o,k),g(f,i,k),g(f,s,k),g(f,u,k),g(f,a,k),g(f,d,k),g(f,p,k),g(f,m,k),g(f,w,k),g(f,v,k),g(f,b,k),g(f,S,k),g(f,R,k),g(f,C,k),g(f,h,k),g(f,E,k)},p:O,i:O,o:O,d(f){f&&_(t),f&&_(r),f&&_(n),f&&_(o),f&&_(i),f&&_(s),f&&_(u),f&&_(a),f&&_(d),f&&_(p),f&&_(m),f&&_(w),f&&_(v),f&&_(b),f&&_(S),f&&_(R),f&&_(C),f&&_(h),f&&_(E)}}}class Ft extends K{constructor(t){super(),q(this,t,null,zt,x,{})}}const Qt="/cookie-cutter/assets/hwguild.fff32244.svg";function Vt(e){let t,r;return t=new qt({}),{c(){M(t.$$.fragment)},m(n,o){N(t,n,o),r=!0},i(n){r||(P(t.$$.fragment,n),r=!0)},o(n){$(t.$$.fragment,n),r=!1},d(n){A(t,n)}}}function Wt(e){let t,r,n,o,i;return r=new Me({props:{path:"how",component:Ft}}),o=new Me({props:{path:"/",$$slots:{default:[Vt]},$$scope:{ctx:e}}}),{c(){t=y("div"),M(r.$$.fragment),n=T(),M(o.$$.fragment)},m(l,s){g(l,t,s),N(r,t,null),j(t,n),N(o,t,null),i=!0},p(l,s){const u={};s&2&&(u.$$scope={dirty:s,ctx:l}),o.$set(u)},i(l){i||(P(r.$$.fragment,l),P(o.$$.fragment,l),i=!0)},o(l){$(r.$$.fragment,l),$(o.$$.fragment,l),i=!1},d(l){l&&_(t),A(r),A(o)}}}function Yt(e){let t,r,n,o,i,l,s,u,c,a;return s=new St({props:{url:e[0],$$slots:{default:[Wt]},$$scope:{ctx:e}}}),{c(){t=y("main"),r=y("div"),n=y("a"),o=y("img"),l=T(),M(s.$$.fragment),fe(o.src,i=Qt)||L(o,"src",i),L(o,"class","logo svelte-154dzqd"),L(o,"alt","HW guild Logo"),L(n,"href","/")},m(d,p){g(d,t,p),j(t,r),j(r,n),j(n,o),j(t,l),N(s,t,null),u=!0,c||(a=Ye(Nt.call(null,n)),c=!0)},p(d,[p]){const m={};p&1&&(m.url=d[0]),p&2&&(m.$$scope={dirty:p,ctx:d}),s.$set(m)},i(d){u||(P(s.$$.fragment,d),u=!0)},o(d){$(s.$$.fragment,d),u=!1},d(d){d&&_(t),A(s),c=!1,a()}}}function Gt(e,t,r){let{url:n=""}=t;return e.$$set=o=>{"url"in o&&r(0,n=o.url)},[n]}class Jt extends K{constructor(t){super(),q(this,t,Gt,Yt,x,{url:0})}}new Jt({target:document.getElementById("app")});
