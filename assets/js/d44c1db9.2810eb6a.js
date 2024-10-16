"use strict";(self.webpackChunkpulsar_docs=self.webpackChunkpulsar_docs||[]).push([[956],{7900:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=t(6070),r=t(1503);const i={},o="Middleware",d={id:"Concepts/middleware",title:"Middleware",description:"Middleware allows you to add functions that modify requests and responses. It can be used for tasks like logging, authentication, or request validation.",source:"@site/docs/04-Concepts/03-middleware.md",sourceDirName:"04-Concepts",slug:"/Concepts/middleware",permalink:"/docs/read/Concepts/middleware",draft:!1,unlisted:!1,editUrl:"https://github.com/pulsar-http/docs/tree/main/docs/04-Concepts/03-middleware.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Responses",permalink:"/docs/read/Concepts/responses"},next:{title:"Rate Limiter",permalink:"/docs/read/Plugins/rate-limiter"}},a={},l=[{value:"Type definition",id:"type-definition",level:2},{value:"Example",id:"example",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"middleware",children:"Middleware"})}),"\n",(0,s.jsx)(n.p,{children:"Middleware allows you to add functions that modify requests and responses. It can be used for tasks like logging, authentication, or request validation."}),"\n",(0,s.jsx)(n.h2,{id:"type-definition",children:"Type definition"}),"\n",(0,s.jsxs)(n.p,{children:["A middleware function takes the request (",(0,s.jsx)(n.code,{children:"req"}),") and a ",(0,s.jsx)(n.code,{children:"next"})," function that continues to the next step."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"export type Middleware = (\n    req: Request,\n    next: () => Promise<Response>,\n) => Promise<Response>;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["Create a file called ",(0,s.jsx)(n.code,{children:"server.ts"})," and add the following code."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { start, router, json, log } from "@pulsar-http/core";\n\nconst { get } = router;\n\nconst routes = [\n    get(\'/\', async () => json({ message: "Hello, World!" })),\n];\n\n// Define middleware functions\nconst middlewares = [\n    async (req, next) => {\n        // Log request method, URL, and response status\n        const response = await next();\n        log(`${req.method} ${req.url} - ${response.status}`);\n        return response;\n    },\n];\n\n// Start the server with middleware\nstart({\n    port: 3000,\n    routes,\n    middlewares,\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Middleware functions modify requests/responses."}),"\n",(0,s.jsx)(n.li,{children:"They execute in the order defined."}),"\n",(0,s.jsx)(n.li,{children:"Use them for common tasks like logging, authentication, etc."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1503:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(758);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);