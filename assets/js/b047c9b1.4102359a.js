"use strict";(self.webpackChunkpulsar_docs=self.webpackChunkpulsar_docs||[]).push([[221],{2517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(4848),i=n(8453);const s={},a="Rate Limiter",l={id:"Plugins/rate-limiter",title:"Rate Limiter",description:"Rate limiting helps control how many requests a client can make within a specific time.",source:"@site/docs/05-Plugins/01-rate-limiter.md",sourceDirName:"05-Plugins",slug:"/Plugins/rate-limiter",permalink:"/docs/Plugins/rate-limiter",draft:!1,unlisted:!1,editUrl:"https://github.com/jvnm-dev/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-Plugins/01-rate-limiter.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Middleware",permalink:"/docs/Concepts/middleware"}},o={},c=[{value:"Example",id:"example",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"rate-limiter",children:"Rate Limiter"})}),"\n",(0,r.jsx)(t.p,{children:"Rate limiting helps control how many requests a client can make within a specific time."}),"\n",(0,r.jsx)(t.p,{children:"This prevents abuse and protects your server."}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'import { start, router, json, rateLimitMiddleware } from "@pulsar-http/core";\n\nconst { get } = router;\n\nconst routes = [\n    get(\'/\', async () => json({ message: "Hello, World!" })),\n];\n\n// Define rate limiting middleware\nconst middlewares = [\n    rateLimitMiddleware({\n        windowMs: 60000, // Time window (1 minute)\n        maxRequests: 100 // Max 100 requests per minute\n    }),\n];\n\n// Start the server with rate limiting\nstart({\n    port: 3000,\n    routes,\n    middlewares,\n});\n\n'})}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Rate limiting prevents excessive requests."}),"\n",(0,r.jsxs)(t.li,{children:["Configure ",(0,r.jsx)(t.code,{children:"windowMs"})," for the time window."]}),"\n",(0,r.jsxs)(t.li,{children:["Set ",(0,r.jsx)(t.code,{children:"maxRequests"})," for allowed requests per window."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(6540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);