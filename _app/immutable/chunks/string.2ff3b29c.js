import{t as A,a as K}from"./index.229df56b.js";import{K as p}from"./scheduler.0b32438c.js";function z(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function B(n,t){n.d(1),t.delete(n.key)}function C(n,t){A(n,1,1,()=>{t.delete(n.key)})}function D(n,t,l,w,g,h,i,u,s,$,m,x){let o=n.length,a=h.length,d=o;const r={};for(;d--;)r[n[d].key]=d;const y=[],k=new Map,b=new Map,W=[];for(d=a;d--;){const e=x(g,h,d),f=l(e);let c=i.get(f);c?w&&W.push(()=>c.p(e,t)):(c=$(f,e),c.c()),k.set(f,y[d]=c),f in r&&b.set(f,Math.abs(d-r[f]))}const j=new Set,S=new Set;function M(e){K(e,1),e.m(u,m),i.set(e.key,e),m=e.first,a--}for(;o&&a;){const e=y[a-1],f=n[o-1],c=e.key,_=f.key;e===f?(m=e.first,o--,a--):k.has(_)?!i.has(c)||j.has(c)?M(e):S.has(_)?o--:b.get(c)>b.get(_)?(S.add(c),M(e)):(j.add(_),o--):(s(f,i),o--)}for(;o--;){const e=n[o];k.has(e.key)||s(e,i)}for(;a;)M(y[a-1]);return p(W),y}function E(n,t){const l={},w={},g={$$scope:1};let h=n.length;for(;h--;){const i=n[h],u=t[h];if(u){for(const s in i)s in u||(w[s]=1);for(const s in u)g[s]||(l[s]=u[s],g[s]=1);n[h]=u}else for(const s in i)g[s]=1}for(const i in w)i in l||(l[i]=void 0);return l}function F(n){return typeof n=="object"&&n!==null?n:{}}const G=(n,t)=>!t||!n.startsWith(t)?n:n.substring(t.length),H=(n,t)=>!t||!n.endsWith(t)?n:n.substring(0,n.length-t.length),I=(n,t)=>n.endsWith(t)?n:n+t;export{F as a,H as b,I as c,B as d,z as e,E as g,C as o,G as s,D as u};