(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),o=(n(0),n(235)),i={title:"Examples II",description:"Introduction > Examples: Wechaty interactive example chatbots"},c={unversionedId:"examples2",id:"examples2",isDocsHomePage:!1,title:"Examples II",description:"Introduction > Examples: Wechaty interactive example chatbots",source:"@site/docs/examples2.md",slug:"/examples2",permalink:"/docs/examples2",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/examples2.md",version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1615821791,formattedLastUpdatedAt:"3/15/2021",sidebar:"docs",previous:{title:"Examples",permalink:"/docs/examples"},next:{title:"Alternatives",permalink:"/docs/introduction/alternatives"}},s=[{value:"Ding Dong Bot",id:"ding-dong-bot",children:[]},{value:"More Examples",id:"more-examples",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Redux is distributed with a few examples in its ",Object(o.b)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples"},"source code"),". Most of these examples are also on ",Object(o.b)("a",{parentName:"p",href:"https://codesandbox.io"},"CodeSandbox"),", an online editor that lets you play with the examples online."),Object(o.b)("h2",{id:"ding-dong-bot"},"Ding Dong Bot"),Object(o.b)("p",null,"Run the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started/tree/master/examples/ding-dong-bot.ts"},"Ding Dong Bot")," example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/wechaty/wechaty-getting-started.git\n\ncd wechaty-getting-started\nnpm install\nnpm start\n")),Object(o.b)("p",null,"Or check out the ",Object(o.b)("a",{parentName:"p",href:"https://codesandbox.io/s/github/wechaty/wechaty-getting-started/tree/master/examples/third-parties/codesandbox?hidenavigation=1&module=%2Fding-dong-bot.ts&theme=dark"},"sandbox"),":"),Object(o.b)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/wechaty/wechaty-getting-started/tree/master/examples/third-parties/codesandbox?hidenavigation=1&module=%2Fding-dong-bot.ts&theme=dark",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),Object(o.b)("p",null,"It does not require a build system or a view framework and exists to show the raw Redux API used with ES5."),Object(o.b)("h2",{id:"more-examples"},"More Examples"),Object(o.b)("p",null,"You can find more examples in the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started/tree/master/examples"},"Wechaty Getting Started Examples Directory"),"\npage."))}l.isMDXComponent=!0},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);