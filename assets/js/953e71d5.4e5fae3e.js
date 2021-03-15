(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{171:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return u})),t.d(a,"default",(function(){return p}));var n=t(3),l=t(8),r=(t(0),t(235)),c=t(239),o=t(240),s={title:"Processing Files"},i={unversionedId:"recipes/file-box",id:"recipes/file-box",isDocsHomePage:!1,title:"Processing Files",description:"Sending File",source:"@site/docs/recipes/file-box.md",slug:"/recipes/file-box",permalink:"/docs/recipes/file-box",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/recipes/file-box.md",version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1615821791,formattedLastUpdatedAt:"3/15/2021",sidebar:"docs",previous:{title:"Making Friends",permalink:"/docs/recipes/friendship"},next:{title:"Usage with TypeScript",permalink:"/docs/recipes/usage-with-typescript"}},u=[{value:"Sending File",id:"sending-file",children:[]},{value:"Receiving File",id:"receiving-file",children:[]},{value:"About <code>FileBox</code>",id:"about-filebox",children:[]}],b={toc:u};function p(e){var a=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"sending-file"},"Sending File"),Object(r.b)(c.a,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"ts",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { FileBox } from 'wechaty'\n\nconst fileBox = FileBox.fromUrl('https://wechaty.js.org/img/icon.png')\nawait bot.say(fileBox)\n"))),Object(r.b)(o.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const { FileBox } = require('wechaty')\n\nconst fileBox = FileBox.fromUrl('https://wechaty.js.org/img/icon.png')\nawait bot.say(fileBox)\n"))),Object(r.b)(o.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"from wechaty import FileBox\n\nfileBox = FileBox.from_url('https://wechaty.js.org/img/icon.png')\nawait bot.say(fileBox)\n"))),Object(r.b)(o.a,{value:"go",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),Object(r.b)(o.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),Object(r.b)(o.a,{value:"php",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),Object(r.b)(o.a,{value:"scala",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),Object(r.b)(o.a,{value:"csharp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),Object(r.b)(o.a,{value:"rust",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),Object(r.b)("h2",{id:"receiving-file"},"Receiving File"),Object(r.b)(c.a,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"ts",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { Message } from 'wechaty'\n\nasync function onMessage (message: Message) {\n  const fileTypeList = [\n    Message.Type.Attachment,\n    Message.Type.Audio,\n    Message.Type.Image,\n    Message.Type.Video,\n  ]\n  if (fileTypeList.includes(message.type())) {\n    const fileBox = await message.toFileBox()\n    console.info(`Saving file {$fileBox.name}...`)\n    await fileBox.toFile()\n  }\n}\n\nbot.on('message', onMessage)\n"))),Object(r.b)(o.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const { Message } = require('wechaty')\n\nasync function onMessage (message) {\n  const fileTypeList = [\n    Message.Type.Attachment,\n    Message.Type.Audio,\n    Message.Type.Image,\n    Message.Type.Video,\n  ]\n  if (fileTypeList.includes(message.type())) {\n    const fileBox = await message.toFileBox()\n    console.info(`Saving file {$fileBox.name}...`)\n    await fileBox.toFile()\n  }\n}\n\nbot.on('message', onMessage)\n"))),Object(r.b)(o.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"from wechaty_puppet import FileBox\nfrom wechaty import Wechaty, Contact, Message\n\nclass MyBot(Wechaty):\n    async def on_message(self, msg: Message):\n        if msg.type() == MessageType.MESSAGE_TYPE_IMAGE:\n            image_file_box = await msg.to_file_box()\n            print(f'saving file<{image_file_box.name}>')\n            await image_file_box.to_file('/path/to/local/file')\n"))),Object(r.b)(o.a,{value:"go",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),Object(r.b)(o.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),Object(r.b)(o.a,{value:"php",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),Object(r.b)(o.a,{value:"scala",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),Object(r.b)(o.a,{value:"csharp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),Object(r.b)(o.a,{value:"rust",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),Object(r.b)("h2",{id:"about-filebox"},"About ",Object(r.b)("inlineCode",{parentName:"h2"},"FileBox")),Object(r.b)("p",null,"Learn more about how to use ",Object(r.b)("inlineCode",{parentName:"p"},"FileBox")," module by reading its document at ",Object(r.b)("a",{parentName:"p",href:"https://github.com/huan/file-box"},"https://github.com/huan/file-box")))}p.isMDXComponent=!0},235:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return d}));var n=t(0),l=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=l.a.createContext({}),u=function(e){var a=l.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},b=function(e){var a=u(e.components);return l.a.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return l.a.createElement(l.a.Fragment,{},a)}},m=l.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=u(t),m=n,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||r;return t?l.a.createElement(d,o(o({ref:a},i),{},{components:t})):l.a.createElement(d,o({ref:a},i))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,c=new Array(r);c[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var i=2;i<r;i++)c[i]=t[i];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},236:function(e,a,t){"use strict";function n(e){var a,t,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(l&&(l+=" "),l+=t);else for(a in e)e[a]&&(l&&(l+=" "),l+=a);return l}a.a=function(){for(var e,a,t=0,l="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(l&&(l+=" "),l+=a);return l}},237:function(e,a,t){"use strict";var n=t(0),l=t(238);a.a=function(){var e=Object(n.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},238:function(e,a,t){"use strict";var n=t(0),l=Object(n.createContext)(void 0);a.a=l},239:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(237),c=t(236),o=t(62),s=t.n(o);var i=37,u=39;a.a=function(e){var a=e.lazy,t=e.block,o=e.defaultValue,b=e.values,p=e.groupId,m=e.className,d=Object(r.a)(),f=d.tabGroupChoices,g=d.setTabGroupChoices,O=Object(n.useState)(o),v=O[0],y=O[1],j=n.Children.toArray(e.children),h=[];if(null!=p){var T=f[p];null!=T&&T!==v&&b.some((function(e){return e.value===T}))&&y(T)}var x=function(e){var a=e.target,t=h.indexOf(a),n=j[t].props.value;y(n),null!=p&&(g(p,n),setTimeout((function(){var e,t,n,l,r,c,o,i;(e=a.getBoundingClientRect(),t=e.top,n=e.left,l=e.bottom,r=e.right,c=window,o=c.innerHeight,i=c.innerWidth,t>=0&&r<=i&&l<=o&&n>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(s.a.tabItemActive),setTimeout((function(){return a.classList.remove(s.a.tabItemActive)}),2e3))}),150))},w=function(e){var a,t;switch(e.keyCode){case u:var n=h.indexOf(e.target)+1;t=h[n]||h[0];break;case i:var l=h.indexOf(e.target)-1;t=h[l]||h[h.length-1]}null===(a=t)||void 0===a||a.focus()};return l.a.createElement("div",{className:"tabs-container"},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},m)},b.map((function(e){var a=e.value,t=e.label;return l.a.createElement("li",{role:"tab",tabIndex:v===a?0:-1,"aria-selected":v===a,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===a}),key:a,ref:function(e){return h.push(e)},onKeyDown:w,onFocus:x,onClick:x},t)}))),a?Object(n.cloneElement)(j.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,a){return Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==v})}))))}},240:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.children,t=e.hidden,n=e.className;return l.a.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}}}]);