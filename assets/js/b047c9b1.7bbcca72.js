"use strict";(self.webpackChunkpulsar_docs=self.webpackChunkpulsar_docs||[]).push([[221],{2517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(4848),r=n(8453);const s={},a="Rate Limiter",l={id:"Plugins/rate-limiter",title:"Rate Limiter",description:"Rate limiting helps control how many requests a client can make within a specific time.",source:"@site/docs/05-Plugins/01-rate-limiter.md",sourceDirName:"05-Plugins",slug:"/Plugins/rate-limiter",permalink:"/docs/docs/Plugins/rate-limiter",draft:!1,unlisted:!1,editUrl:"https://github.com/pulsar-http/core/tree/main/docs/05-Plugins/01-rate-limiter.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Middleware",permalink:"/docs/docs/Concepts/middleware"}},o={},c=[{value:"Example",id:"example",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"rate-limiter",children:"Rate Limiter"})}),"\n",(0,i.jsx)(t.p,{children:"Rate limiting helps control how many requests a client can make within a specific time."}),"\n",(0,i.jsx)(t.p,{children:"This prevents abuse and protects your server."}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'import { start, router, json, rateLimitMiddleware } from "@pulsar-http/core";\n\nconst { get } = router;\n\nconst routes = [\n    get(\'/\', async () => json({ message: "Hello, World!" })),\n];\n\n// Define rate limiting middleware\nconst middlewares = [\n    rateLimitMiddleware({\n        windowMs: 60000, // Time window (1 minute)\n        maxRequests: 100 // Max 100 requests per minute\n    }),\n];\n\n// Start the server with rate limiting\nstart({\n    port: 3000,\n    routes,\n    middlewares,\n});\n\n'})}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Rate limiting prevents excessive requests."}),"\n",(0,i.jsxs)(t.li,{children:["Configure ",(0,i.jsx)(t.code,{children:"windowMs"})," for the time window."]}),"\n",(0,i.jsxs)(t.li,{children:["Set ",(0,i.jsx)(t.code,{children:"maxRequests"})," for allowed requests per window."]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var i=n(6540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);