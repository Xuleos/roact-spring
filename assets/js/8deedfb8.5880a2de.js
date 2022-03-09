"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[556],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return s}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(r),s=a,f=m["".concat(u,".").concat(s)]||m[s]||c[s]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6437:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={},u="Changelog",d={type:"mdx",permalink:"/roact-spring/CHANGELOG",source:"@site/pages/CHANGELOG.md"},p=[{value:"Unreleased",id:"unreleased",children:[],level:2},{value:"0.2.3 (Feburary 20, 2022)",id:"023-feburary-20-2022",children:[],level:2},{value:"0.2.2 (Feburary 19, 2022)",id:"022-feburary-19-2022",children:[],level:2},{value:"0.2.1 (Feburary 17, 2022)",id:"021-feburary-17-2022",children:[],level:2},{value:"0.2.0 (Feburary 11, 2022)",id:"020-feburary-11-2022",children:[],level:2},{value:"0.1.1 (February 3, 2022)",id:"011-february-3-2022",children:[],level:2}],c={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"changelog"},"Changelog"),(0,i.kt)("h2",{id:"unreleased"},"Unreleased"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Removed implementation detail from return table"),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"getting started")," page to documentation")),(0,i.kt)("h2",{id:"023-feburary-20-2022"},"0.2.3 (Feburary 20, 2022)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Updated npm metadata"),(0,i.kt)("li",{parentName:"ul"},"Fixed library requires from packages")),(0,i.kt)("h2",{id:"022-feburary-19-2022"},"0.2.2 (Feburary 19, 2022)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"progress")," config for easing animations (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/chriscerie"},"@chriscerie")," in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/chriscerie/roact-spring/pull/13"},"#13"),")"),(0,i.kt)("li",{parentName:"ul"},"Hooks now cancel animations when they are unmounted"),(0,i.kt)("li",{parentName:"ul"},"Added staggered text story to demos"),(0,i.kt)("li",{parentName:"ul"},"Fixed useSprings not removing unused springs when length arg decreases"),(0,i.kt)("li",{parentName:"ul"},"Added tests for ",(0,i.kt)("inlineCode",{parentName:"li"},"useSpring")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"useSprings")),(0,i.kt)("li",{parentName:"ul"},"Added rbxts typings")),(0,i.kt)("h2",{id:"021-feburary-17-2022"},"0.2.1 (Feburary 17, 2022)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fixed ",(0,i.kt)("inlineCode",{parentName:"li"},"useTrail")," delaying the wrong amount for varying delay times"),(0,i.kt)("li",{parentName:"ul"},"Fixed typo in docs")),(0,i.kt)("h2",{id:"020-feburary-11-2022"},"0.2.0 (Feburary 11, 2022)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fixed color3 animating with wrong values"),(0,i.kt)("li",{parentName:"ul"},"Cleaned up all stories to use circle button component"),(0,i.kt)("li",{parentName:"ul"},"Added support for hex color strings (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/chriscerie"},"@chriscerie")," in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/chriscerie/roact-spring/pull/6"},"#6"),")"),(0,i.kt)("li",{parentName:"ul"},"Added motivation in docs"),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"delay")," prop"),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"useTrail")),(0,i.kt)("li",{parentName:"ul"},"Added optional dependency array to hooks")),(0,i.kt)("h2",{id:"011-february-3-2022"},"0.1.1 (February 3, 2022)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"useSpring")),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"useSprings")),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"Controller")),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"SpringValue")),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"config")),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"easings"))))}m.isMDXComponent=!0}}]);