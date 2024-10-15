"use strict";(self.webpackChunkpulsar_docs=self.webpackChunkpulsar_docs||[]).push([[154],{8318:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=r(4848),s=r(8453);const o={},i="Routing",c={id:"Concepts/routing",title:"Routing",description:"Basic Routing",source:"@site/docs/04-Concepts/01-routing.md",sourceDirName:"04-Concepts",slug:"/Concepts/routing",permalink:"/docs/Concepts/routing",draft:!1,unlisted:!1,editUrl:"https://github.com/jvnm-dev/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04-Concepts/01-routing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Example: Hello world!",permalink:"/docs/hello-world-tutorial/"},next:{title:"Responses",permalink:"/docs/Concepts/responses"}},a={},l=[{value:"Basic Routing",id:"basic-routing",level:2},{value:"Route with Parameters",id:"route-with-parameters",level:2},{value:"Route Groups",id:"route-groups",level:2},{value:"Summary",id:"summary",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"routing",children:"Routing"})}),"\n",(0,t.jsx)(n.h2,{id:"basic-routing",children:"Basic Routing"}),"\n",(0,t.jsx)(n.p,{children:"Define routes using HTTP methods like GET, POST, etc."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { router, json, start } from "@pulsar-http/core";\n\nconst { get } = router;\n\nstart({\n    port: 3000,\n    routes: [\n        get(\'/\', async () => json({ message: "Welcome to Pulsar!" }))\n    ]\n});\n'})}),"\n",(0,t.jsx)(n.h2,{id:"route-with-parameters",children:"Route with Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["Define routes with parameters. Use ",(0,t.jsx)(n.code,{children:"params"})," to access them."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { router, json, start } from \"@pulsar-http/core\";\n\nconst { get } = router;\n\nstart({\n    port: 3000,\n    routes: [\n        get('/:name', async (request, params) => {\n            return json({ message: `Hello, ${params.name}` });\n        })\n    ]\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example: ",(0,t.jsx)(n.code,{children:"/John"})," will respond with ",(0,t.jsx)(n.code,{children:"Hello, John"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"route-groups",children:"Route Groups"}),"\n",(0,t.jsx)(n.p,{children:"Group related routes under a common prefix."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { router, file, start } from \"@pulsar-http/core\";\n\nconst { get, post } = router;\n\nstart({\n    port: 3000,\n    routes: [\n        get('/', async () => file(\"/public/hello-world.html\")),\n        {\n            path: \"/api/v1\",\n            routes: [\n                get('/users', handleGetUsers),\n                post('/users', handleCreateUser),\n                get('/users/:id', handleGetUser)\n            ]\n        }\n    ]\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["All ",(0,t.jsx)(n.code,{children:"/api/v1"})," routes share the prefix."]}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Routes are defined using the ",(0,t.jsx)(n.code,{children:"router"})," object."]}),"\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.code,{children:"get()"}),", ",(0,t.jsx)(n.code,{children:"post()"}),", etc. to define routes for different HTTP methods."]}),"\n",(0,t.jsxs)(n.li,{children:["Use handler second argument's ",(0,t.jsx)(n.code,{children:"params"})," to access route parameters."]}),"\n",(0,t.jsx)(n.li,{children:"You can group related routes under a common prefix."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var t=r(6540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);