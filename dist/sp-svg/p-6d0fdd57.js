let t=!1;const e="undefined"!=typeof window?window:{},n=e.CSS,s=e.document||{head:{}},l={t:0,s:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,s)=>t.addEventListener(e,n,s),rel:(t,e,n,s)=>t.removeEventListener(e,n,s)},o=t=>Promise.resolve(t),r=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),c=new WeakMap,a=t=>"sc-"+t,i=t=>"object"==(t=typeof t)||"function"===t,u=(t,e,...n)=>{let s=null,l=!1,o=!1,r=[];const c=e=>{for(let n=0;n<e.length;n++)s=e[n],Array.isArray(s)?c(s):null!=s&&"boolean"!=typeof s&&((l="function"!=typeof t&&!i(s))&&(s+=""),l&&o?r[r.length-1].l+=s:r.push(l?p(null,s):s),o=l)};c(n);const a=p(t,null);return a.o=e,r.length>0&&(a.u=r),a},p=(t,e)=>({t:0,p:t,l:e,$:null,u:null}),f={},m=(t,e,n)=>{let l,o,r=e.u[n],c=0;if(l=r.$=s.createElement(r.p),r.u)for(c=0;c<r.u.length;++c)o=m(t,r,c),o&&l.appendChild(o);return l},d=(t,e,n,s,l,o)=>{let r,c=t;for(;l<=o;++l)s[l]&&(r=m(null,n,l),r&&(s[l].$=r,c.insertBefore(r,e)))},$=(t,e,n,s)=>{for(;e<=n;++e)(s=t[e])&&s.$.remove()},w=(t,e)=>t.p===e.p,h=(t,e)=>{const n=e.$=t.$,s=t.u,l=e.u;null!==s&&null!==l?((t,e,n,s)=>{let l,o=0,r=0,c=e.length-1,a=e[0],i=e[c],u=s.length-1,p=s[0],f=s[u];for(;o<=c&&r<=u;)null==a?a=e[++o]:null==i?i=e[--c]:null==p?p=s[++r]:null==f?f=s[--u]:w(a,p)?(h(a,p),a=e[++o],p=s[++r]):w(i,f)?(h(i,f),i=e[--c],f=s[--u]):w(a,f)?(h(a,f),t.insertBefore(a.$,i.$.nextSibling),a=e[++o],f=s[--u]):w(i,p)?(h(i,p),t.insertBefore(i.$,a.$),i=e[--c],p=s[++r]):(l=m(e&&e[r],n,r),p=s[++r],l&&a.$.parentNode.insertBefore(l,a.$));o>c?d(t,null==s[u+1]?null:s[u+1].$,n,s,r,u):r>u&&$(e,o,c)})(n,s,e,l):null!==l?d(n,null,e,l,0,l.length-1):null!==s&&$(s,0,s.length-1)},y=t=>O(t).h,_=(t,e)=>{e&&!t._&&e["s-p"].push(new Promise(e=>t._=e))},b=(t,e)=>{if(t.t|=16,4&t.t)return void(t.t|=512);const n=t.g,s=()=>g(t,n,e);return _(t,t.v),L(void 0,()=>V(s))},g=(t,e,n)=>{const l=t.h,o=l["s-rc"];n&&(t=>{const e=t.j;((t,e)=>{let n=a(e.M),l=F.get(n);if(t=11===t.nodeType?t:s,l)if("string"==typeof l){let e,o=c.get(t=t.head||t);o||c.set(t,o=new Set),o.has(n)||(e=s.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),o&&o.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l])})(t.h.getRootNode(),e)})(t),((t,e)=>{const n=t.h,s=t.S||p(null,null),l=(t=>t&&t.p===f)(e)?e:u(null,null,e);l.p=null,l.t|=4,t.S=l,l.$=s.$=n,h(s,l)})(t,v(e)),t.t&=-17,t.t|=2,o&&(o.map(t=>t()),l["s-rc"]=void 0);{const e=l["s-p"],n=()=>j(t);0===e.length?n():(Promise.all(e).then(n),t.t|=4,e.length=0)}},v=t=>{try{t=t.render()}catch(e){A(e)}return t},j=t=>{const e=t.h,n=t.g,s=t.v;64&t.t||(t.t|=64,U(e),S(n,"componentDidLoad"),t.L(e),s||M()),t._&&(t._(),t._=void 0),512&t.t&&N(()=>b(t,!1)),t.t&=-517},M=()=>{U(s.documentElement),N(()=>(t=>{const e=new CustomEvent("appload",{detail:{namespace:"sp-svg"}});return t.dispatchEvent(e),e})(e))},S=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(s){A(s)}},L=(t,e)=>t&&t.then?t.then(e):e(),U=t=>t.classList.add("hydrated"),k=(t,e,n)=>{if(e.U){const s=Object.entries(e.U),o=t.prototype;if(s.map(([t,[s]])=>{(31&s||2&n&&32&s)&&Object.defineProperty(o,t,{get(){return((t,e)=>O(this).k.get(e))(0,t)},set(n){((t,e,n,s)=>{const l=O(this),o=l.k.get(e),r=l.t,c=l.g;n=((t,e)=>null==t||i(t)?t:4&e?"false"!==t&&(""===t||!!t):1&e?t+"":t)(n,s.U[e][0]),8&r&&void 0!==o||n===o||(l.k.set(e,n),c&&2==(18&r)&&b(l,!1))})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,s){l.jmp(()=>{const n=e.get(t);this[n]=(null!==s||"boolean"!=typeof this[n])&&s})},t.observedAttributes=s.filter(([t,e])=>15&e[0]).map(([t,n])=>{const s=n[1]||t;return e.set(s,t),s})}}return t},R=(t,n={})=>{const o=[],c=n.exclude||[],i=e.customElements,u=s.head,p=u.querySelector("meta[charset]"),f=s.createElement("style"),m=[];let d,$=!0;Object.assign(l,n),l.s=new URL(n.resourcesUrl||"./",s.baseURI).href,t.map(t=>t[1].map(e=>{const n={t:e[0],M:e[1],U:e[2],R:e[3]};n.U=e[2];const s=n.M,u=class extends HTMLElement{constructor(t){super(t),x(t=this,n)}connectedCallback(){d&&(clearTimeout(d),d=null),$?m.push(this):l.jmp(()=>(t=>{if(0==(1&l.t)){const e=O(t),n=e.j,s=()=>{};if(!(1&e.t)){e.t|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){_(e,e.v=n);break}}n.U&&Object.entries(n.U).map(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),(async(t,e,n,s,l)=>{if(0==(32&e.t)){e.t|=32;{if((l=T(n)).then){const t=()=>{};l=await l,t()}l.isProxied||(k(l,n,2),l.isProxied=!0);const t=()=>{};e.t|=8;try{new l(e)}catch(i){A(i)}e.t&=-9,t()}const t=a(n.M);if(!F.has(t)&&l.style){const e=()=>{};((t,e,n)=>{let s=F.get(t);r&&n?(s=s||new CSSStyleSheet,s.replace(e)):s=e,F.set(t,s)})(t,l.style,!!(1&n.t)),e()}}const o=e.v,c=()=>b(e,!0);o&&o["s-rc"]?o["s-rc"].push(c):c()})(0,e,n)}s()}})(this))}disconnectedCallback(){l.jmp(()=>{})}forceUpdate(){(()=>{{const t=O(this);t.h.isConnected&&2==(18&t.t)&&b(t,!1)}})()}componentOnReady(){return O(this).C}};n.O=t[0],c.includes(s)||i.get(s)||(o.push(s),i.define(s,k(u,n,1)))})),f.innerHTML=o+"{visibility:hidden}.hydrated{visibility:inherit}",f.setAttribute("data-styles",""),u.insertBefore(f,p?p.nextSibling:u.firstChild),$=!1,m.length?m.map(t=>t.connectedCallback()):l.jmp(()=>d=setTimeout(M,30))},C=new WeakMap,O=t=>C.get(t),P=(t,e)=>C.set(e.g=t,e),x=(t,e)=>{const n={t:0,h:t,j:e,k:new Map};return n.C=new Promise(t=>n.L=t),t["s-p"]=[],t["s-rc"]=[],C.set(t,n)},A=t=>console.error(t),E=new Map,T=t=>{const e=t.M.replace(/-/g,"_"),n=t.O,s=E.get(n);return s?s[e]:__sc_import_sp_svg(`./${n}.entry.js`).then(t=>(E.set(n,t),t[e]),A)},F=new Map,H=[],W=[],q=(e,n)=>s=>{e.push(s),t||(t=!0,n&&4&l.t?N(D):l.raf(D))},B=t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){A(e)}t.length=0},D=()=>{B(H),B(W),(t=H.length>0)&&l.raf(D)},N=t=>o().then(t),V=q(W,!0),z=()=>n&&n.supports&&n.supports("color","var(--c)")?o():__sc_import_sp_svg("./p-69b85284.js").then(()=>(l.P=e.__cssshim)?(!1).i():0),G=()=>{l.P=e.__cssshim;const t=Array.from(s.querySelectorAll("script")).find(t=>/\/sp-svg(\.esm)?\.js($|\?|#)/.test(t.src)||"sp-svg"===t.getAttribute("data-stencil-namespace")),n=t["data-opts"]||{};return"onbeforeload"in t&&!history.scrollRestoration?{then(){}}:(n.resourcesUrl=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,e.location.href)).href,I(n.resourcesUrl,t),e.customElements?o(n):__sc_import_sp_svg("./p-2347dcb6.js").then(()=>n))},I=(t,n)=>{try{e.__sc_import_sp_svg=Function("w",`return import(w);//${Math.random()}`)}catch(l){const o=new Map;e.__sc_import_sp_svg=l=>{const r=new URL(l,t).href;let c=o.get(r);if(!c){const t=s.createElement("script");t.type="module",t.crossOrigin=n.crossOrigin,t.src=URL.createObjectURL(new Blob([`import * as m from '${r}'; window.__sc_import_sp_svg.m = m;`],{type:"application/javascript"})),c=new Promise(n=>{t.onload=()=>{n(e.__sc_import_sp_svg.m),t.remove()}}),o.set(r,c),s.head.appendChild(t)}return c}}};export{f as H,z as a,R as b,y as g,u as h,G as p,P as r}