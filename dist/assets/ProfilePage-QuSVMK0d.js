import{k as a,q as t,l as e,Y as n,Z as x}from"./index-jzPyXfrk.js";import{P as m}from"./PageTransition-C-5dqDGg.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=a("Bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=a("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=a("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=a("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]),f=()=>{const{profile:l,addresses:i,payments:d,notifications:r}=t(s=>s.user),c=t(s=>s.orders.items);return e.jsx(m,{children:e.jsxs("section",{className:"container-page py-8",children:[e.jsx("h1",{className:"section-title",children:"Profile"}),e.jsxs("div",{className:"mt-6 grid gap-5 lg:grid-cols-[320px_1fr]",children:[e.jsxs("aside",{className:"glass h-fit rounded-xl p-5",children:[e.jsx(n,{className:"text-fresh-600",size:32}),e.jsx("h2",{className:"mt-4 text-xl font-extrabold",children:l.name}),e.jsx("p",{className:"muted",children:l.email}),e.jsx("p",{className:"muted",children:l.phone})]}),e.jsxs("div",{className:"grid gap-5",children:[e.jsxs("div",{className:"glass rounded-xl p-5",children:[e.jsxs("h2",{className:"flex items-center gap-2 text-xl font-extrabold",children:[e.jsx(x,{size:20})," Address Management"]}),e.jsx("div",{className:"mt-4 grid gap-3 md:grid-cols-2",children:i.map(s=>e.jsxs("div",{className:"rounded-lg border border-slate-200 p-4 dark:border-white/10",children:[e.jsxs("p",{className:"flex items-center gap-2 font-bold",children:[e.jsx(p,{size:17})," ",s.label]}),e.jsxs("p",{className:"muted mt-2",children:[s.line," - ",s.pin]})]},s.id))})]}),e.jsxs("div",{className:"grid gap-5 md:grid-cols-2",children:[e.jsxs("div",{className:"glass rounded-xl p-5",children:[e.jsxs("h2",{className:"flex items-center gap-2 text-xl font-extrabold",children:[e.jsx(h,{size:20})," Saved Payments"]}),d.map(s=>e.jsxs("p",{className:"mt-3 text-sm",children:[e.jsxs("strong",{children:[s.label,":"]})," ",s.detail]},s.id))]}),e.jsxs("div",{className:"glass rounded-xl p-5",children:[e.jsxs("h2",{className:"flex items-center gap-2 text-xl font-extrabold",children:[e.jsx(o,{size:20})," Notifications"]}),r.map(s=>e.jsx("p",{className:"mt-3 text-sm",children:s},s))]})]}),e.jsxs("div",{className:"glass rounded-xl p-5",children:[e.jsxs("h2",{className:"flex items-center gap-2 text-xl font-extrabold",children:[e.jsx(g,{size:20})," Order Tracking"]}),e.jsx("div",{className:"mt-4 grid gap-3",children:c.slice(0,3).map(s=>e.jsxs("div",{className:"flex items-center justify-between rounded-lg bg-fresh-50 p-3 text-sm dark:bg-white/10",children:[e.jsx("span",{className:"font-bold",children:s.id}),e.jsx("span",{children:s.status})]},s.id))})]})]})]})]})})};export{f as default};
