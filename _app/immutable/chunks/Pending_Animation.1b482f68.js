import{n as T,v as q,R as W,b as k,s as H,f as y,g as A,d,c as K,j as z,h as C,J as c,U as L,i as P,x as g,y as D,z as I,A as J,k as V,l as w}from"./scheduler.0b32438c.js";import{S as X,i as Y,a as R,t as U}from"./index.229df56b.js";import{g as Z}from"./string.2ff3b29c.js";const $=n=>({}),M=n=>({index:2}),x=n=>({}),O=n=>({index:1}),tt=n=>({}),Q=n=>({index:0});function et(n){let e;return{c(){e=V("•")},l(s){e=w(s,"•")},m(s,o){P(s,e,o)},d(s){s&&d(e)}}}function st(n){let e;return{c(){e=V("•")},l(s){e=w(s,"•")},m(s,o){P(s,e,o)},d(s){s&&d(e)}}}function nt(n){let e;return{c(){e=V("•")},l(s){e=w(s,"•")},m(s,o){P(s,e,o)},d(s){s&&d(e)}}}function at(n){let e,s,o,i,m,_,a;const S=n[3].default,p=q(S,n,n[2],Q),f=p||et(),E=n[3].default,v=q(E,n,n[2],O),r=v||st(),N=n[3].default,h=q(N,n,n[2],M),u=h||nt();let j=[n[1],{class:"pending_animation"}],b={};for(let t=0;t<j.length;t+=1)b=W(b,j[t]);return{c(){e=k("div"),s=k("span"),f&&f.c(),o=H(),i=k("span"),r&&r.c(),m=H(),_=k("span"),u&&u.c(),this.h()},l(t){e=y(t,"DIV",{class:!0});var l=A(e);s=y(l,"SPAN",{style:!0,class:!0});var B=A(s);f&&f.l(B),B.forEach(d),o=K(l),i=y(l,"SPAN",{style:!0,class:!0});var F=A(i);r&&r.l(F),F.forEach(d),m=K(l),_=y(l,"SPAN",{style:!0,class:!0});var G=A(_);u&&u.l(G),G.forEach(d),l.forEach(d),this.h()},h(){z(s,"animation-delay","0s"),C(s,"class","svelte-1l85mor"),c(s,"running",n[0]),z(i,"animation-delay","0.09s"),C(i,"class","svelte-1l85mor"),c(i,"running",n[0]),z(_,"animation-delay","0.3s"),C(_,"class","svelte-1l85mor"),c(_,"running",n[0]),L(e,b),c(e,"svelte-1l85mor",!0)},m(t,l){P(t,e,l),g(e,s),f&&f.m(s,null),g(e,o),g(e,i),r&&r.m(i,null),g(e,m),g(e,_),u&&u.m(_,null),a=!0},p(t,[l]){p&&p.p&&(!a||l&4)&&D(p,S,t,t[2],a?J(S,t[2],l,tt):I(t[2]),Q),(!a||l&1)&&c(s,"running",t[0]),v&&v.p&&(!a||l&4)&&D(v,E,t,t[2],a?J(E,t[2],l,x):I(t[2]),O),(!a||l&1)&&c(i,"running",t[0]),h&&h.p&&(!a||l&4)&&D(h,N,t,t[2],a?J(N,t[2],l,$):I(t[2]),M),(!a||l&1)&&c(_,"running",t[0]),L(e,b=Z(j,[l&2&&t[1],{class:"pending_animation"}])),c(e,"svelte-1l85mor",!0)},i(t){a||(R(f,t),R(r,t),R(u,t),a=!0)},o(t){U(f,t),U(r,t),U(u,t),a=!1},d(t){t&&d(e),f&&f.d(t),r&&r.d(t),u&&u.d(t)}}}function lt(n,e,s){let{$$slots:o={},$$scope:i}=e,{running:m=!0}=e,{attrs:_=void 0}=e;return n.$$set=a=>{"running"in a&&s(0,m=a.running),"attrs"in a&&s(1,_=a.attrs),"$$scope"in a&&s(2,i=a.$$scope)},[m,_,i,o]}class ft extends X{constructor(e){super(),Y(this,e,lt,at,T,{running:0,attrs:1})}}export{ft as P};
