import{n as L,v as j,R as Q,b as k,s as w,f as y,g as A,d,c as B,j as z,h as Y,J as c,U as F,i as P,x as g,y as q,z as C,A as D,k as M,l as O}from"./scheduler.e90ebab1.js";import{S as W,i as X,a as I,t as J}from"./index.67e316ca.js";import{g as Z}from"./string.3b1aa636.js";const rt=Object.freeze([]),ft=n=>Array.isArray(n)?n:[n];const $=n=>({}),G=n=>({index:2}),x=n=>({}),H=n=>({index:1}),tt=n=>({}),K=n=>({index:0});function et(n){let e;return{c(){e=M("•")},l(s){e=O(s,"•")},m(s,o){P(s,e,o)},d(s){s&&d(e)}}}function st(n){let e;return{c(){e=M("•")},l(s){e=O(s,"•")},m(s,o){P(s,e,o)},d(s){s&&d(e)}}}function nt(n){let e;return{c(){e=M("•")},l(s){e=O(s,"•")},m(s,o){P(s,e,o)},d(s){s&&d(e)}}}function at(n){let e,s,o,_,m,i,a;const E=n[3].default,p=j(E,n,n[2],K),r=p||et(),S=n[3].default,h=j(S,n,n[2],H),f=h||st(),N=n[3].default,v=j(N,n,n[2],G),u=v||nt();let R=[n[1],{class:"pending_animation"}],b={};for(let t=0;t<R.length;t+=1)b=Q(b,R[t]);return{c(){e=k("div"),s=k("span"),r&&r.c(),o=w(),_=k("span"),f&&f.c(),m=w(),i=k("span"),u&&u.c(),this.h()},l(t){e=y(t,"DIV",{class:!0});var l=A(e);s=y(l,"SPAN",{style:!0,class:!0});var T=A(s);r&&r.l(T),T.forEach(d),o=B(l),_=y(l,"SPAN",{style:!0,class:!0});var U=A(_);f&&f.l(U),U.forEach(d),m=B(l),i=y(l,"SPAN",{style:!0,class:!0});var V=A(i);u&&u.l(V),V.forEach(d),l.forEach(d),this.h()},h(){z(s,"animation-delay","0s"),Y(s,"class","svelte-1l85mor"),c(s,"running",n[0]),z(_,"animation-delay","0.09s"),Y(_,"class","svelte-1l85mor"),c(_,"running",n[0]),z(i,"animation-delay","0.3s"),Y(i,"class","svelte-1l85mor"),c(i,"running",n[0]),F(e,b),c(e,"svelte-1l85mor",!0)},m(t,l){P(t,e,l),g(e,s),r&&r.m(s,null),g(e,o),g(e,_),f&&f.m(_,null),g(e,m),g(e,i),u&&u.m(i,null),a=!0},p(t,[l]){p&&p.p&&(!a||l&4)&&q(p,E,t,t[2],a?D(E,t[2],l,tt):C(t[2]),K),(!a||l&1)&&c(s,"running",t[0]),h&&h.p&&(!a||l&4)&&q(h,S,t,t[2],a?D(S,t[2],l,x):C(t[2]),H),(!a||l&1)&&c(_,"running",t[0]),v&&v.p&&(!a||l&4)&&q(v,N,t,t[2],a?D(N,t[2],l,$):C(t[2]),G),(!a||l&1)&&c(i,"running",t[0]),F(e,b=Z(R,[l&2&&t[1],{class:"pending_animation"}])),c(e,"svelte-1l85mor",!0)},i(t){a||(I(r,t),I(f,t),I(u,t),a=!0)},o(t){J(r,t),J(f,t),J(u,t),a=!1},d(t){t&&d(e),r&&r.d(t),f&&f.d(t),u&&u.d(t)}}}function lt(n,e,s){let{$$slots:o={},$$scope:_}=e,{running:m=!0}=e,{attrs:i=void 0}=e;return n.$$set=a=>{"running"in a&&s(0,m=a.running),"attrs"in a&&s(1,i=a.attrs),"$$scope"in a&&s(2,_=a.$$scope)},[m,i,_,o]}class ut extends W{constructor(e){super(),X(this,e,lt,at,L,{running:0,attrs:1})}}export{rt as E,ut as P,ft as t};
