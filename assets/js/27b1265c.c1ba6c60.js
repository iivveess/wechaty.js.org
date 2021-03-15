(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{105:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return c})),r.d(e,"metadata",(function(){return i})),r.d(e,"toc",(function(){return l})),r.d(e,"default",(function(){return s}));var n=r(3),a=r(8),o=(r(0),r(235)),c={title:".NET Wechaty",sidebar_label:".NET"},i={unversionedId:"polyglot/dotnet",id:"polyglot/dotnet",isDocsHomePage:!1,title:".NET Wechaty",description:".NET Wechaty",source:"@site/docs/polyglot/dotnet.md",slug:"/polyglot/dotnet",permalink:"/docs/polyglot/dotnet",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/dotnet.md",version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1615821791,formattedLastUpdatedAt:"3/15/2021",sidebar_label:".NET",sidebar:"docs",previous:{title:"PHP Wechaty",permalink:"/docs/polyglot/php"},next:{title:"Rust Wechaty",permalink:"/docs/polyglot/rust"}},l=[{value:"Getting Started",id:"getting-started",children:[]},{value:"History",id:"history",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],p={toc:l};function s(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/dotnet-wechaty"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty-.NET-blueviolet",alt:".NET Wechaty"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"GitHub Repo ",Object(o.b)("a",{parentName:"li",href:"https://github.com/wechaty/dotnet-wechaty"},"https://github.com/wechaty/dotnet-wechaty")),Object(o.b)("li",{parentName:"ul"},"Getting Started Template Repo ",Object(o.b)("a",{parentName:"li",href:"https://github.com/wechaty/dotnet-wechaty-getting-started"},"https://github.com/wechaty/dotnet-wechaty-getting-started"))),Object(o.b)("h2",{id:"getting-started"},"Getting Started"),Object(o.b)("p",null,"Template Repo: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/dotnet-wechaty-getting-started"},"https://github.com/wechaty/dotnet-wechaty-getting-started")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/dotnet-wechaty-getting-started.git\ncd dotnet-wechaty-getting-started\nmake install\nmake bot\n")),Object(o.b)("h2",{id:"history"},"History"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wechaty.js.org/2021/01/28/csharp-wechaty-for-padlocal-puppet-service/"},".NET Wechaty\u5982\u4f55\u4f7f\u7528PadLocal Puppet Service, Darren, Jan 28, 2021")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wechaty.js.org/2020/12/31/dotnet-wechaty-getting-start/"},".NET Wechaty Getting Start, Darren, Dec 31, 2020"))),Object(o.b)("h2",{id:"maintainers"},"Maintainers"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/echofool"},"@echofool")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/jesn"},"@jesn"))))}s.isMDXComponent=!0},235:function(t,e,r){"use strict";r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=a.a.createContext({}),s=function(t){var e=a.a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=s(t.components);return a.a.createElement(p.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=a.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(r),d=n,h=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(h,i(i({ref:e},p),{},{components:r})):a.a.createElement(h,i({ref:e},p))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);