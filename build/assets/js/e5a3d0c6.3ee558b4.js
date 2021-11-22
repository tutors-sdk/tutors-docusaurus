"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2185],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return d}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(o),d=n,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return o?r.createElement(m,a(a({ref:t},s),{},{components:o})):r.createElement(m,a({ref:t},s))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},8175:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var r=o(7462),n=o(3366),i=(o(7294),o(3905)),a=["components"],l={icon:{type:"logos:github-octocat"}},u="Git Workflow",c={unversionedId:"topic-01-create/git-workflow/book-a/Git Workflow",id:"topic-01-create/git-workflow/book-a/Git Workflow",isDocsHomePage:!1,title:"Git Workflow",description:"Learn how to integrate GitHub into your Tutors course",source:"@site/docs/topic-01-create/git-workflow/book-a/00.Git Workflow.md",sourceDirName:"topic-01-create/git-workflow/book-a",slug:"/topic-01-create/git-workflow/book-a/Git Workflow",permalink:"/docs/topic-01-create/git-workflow/book-a/Git Workflow",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/topic-01-create/git-workflow/book-a/00.Git Workflow.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{icon:{type:"logos:github-octocat"}},sidebar:"tutorialSidebar",previous:{title:"Regenerate and Redeploy",permalink:"/docs/topic-01-create/videos-&-labs/book-d-labs/Redeploy"},next:{title:"GitHub Desktop",permalink:"/docs/topic-01-create/git-workflow/book-a/Git"}},s=[],p={toc:s};function f(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git-workflow"},"Git Workflow"),(0,i.kt)("p",null,"Learn how to integrate GitHub into your Tutors course"),(0,i.kt)("br",null),(0,i.kt)("p",null,"This is an alternative method to deploying your Tutors website. This method leverages GitHub, an online repository website which we will use to store the source code for your Tutors course. This is then used by Netlify to automatically redeploy a Tutors course website after each update to your repository. "),(0,i.kt)("p",null,"Once the initial GitHub repository and Netlify setup is complete, this essentially just means that the process of updating the live site is different. Instead of dragging the json folder onto the Netlify webpage, you must ",(0,i.kt)("strong",{parentName:"p"},"push")," (upload) ",(0,i.kt)("strong",{parentName:"p"},"commits")," (changes) via GitHub Desktop."),(0,i.kt)("p",null,"Once these commits have been pushed to the GitHub repository, Netlify will automatically redeploy the Tutors site. This eliminates the need to keep ruinning the ",(0,i.kt)("inlineCode",{parentName:"p"},"npx tutors-json")," command before dragging and dropping to Netlify with each update."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install GitHub Desktop")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clone a Tutors template course")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create an online GitHub repository")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configure Netflify to automatically deploy")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Push commits to the GitHub repository")))}f.isMDXComponent=!0}}]);