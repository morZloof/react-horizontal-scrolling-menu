(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},4239:function(e,t,n){var r=n(2705),i=n(9607),o=n(2333),l=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?i(e):o(e)}},7561:function(e,t,n){var r=n(7990),i=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(i,""):e}},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),i=Object.prototype,o=i.hasOwnProperty,l=i.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(u){}var i=l.call(e);return r&&(t?e[s]=n:delete e[s]),i}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();e.exports=o},7990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},3279:function(e,t,n){var r=n(3218),i=n(7771),o=n(4841),l=Math.max,s=Math.min;e.exports=function(e,t,n){var u,a,c,d,f,v,m=0,p=!1,h=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=u,r=a;return u=a=void 0,m=t,d=e.apply(r,n)}function x(e){return m=e,f=setTimeout(w,t),p?b(e):d}function y(e){var n=e-v;return void 0===v||n>=t||n<0||h&&e-m>=c}function w(){var e=i();if(y(e))return S(e);f=setTimeout(w,function(e){var n=t-(e-v);return h?s(n,c-(e-m)):n}(e))}function S(e){return f=void 0,g&&u?b(e):(u=a=void 0,d)}function C(){var e=i(),n=y(e);if(u=arguments,a=this,v=e,n){if(void 0===f)return x(v);if(h)return clearTimeout(f),f=setTimeout(w,t),b(v)}return void 0===f&&(f=setTimeout(w,t)),d}return t=o(t)||0,r(n)&&(p=!!n.leading,c=(h="maxWait"in n)?l(o(n.maxWait)||0,t):c,g="trailing"in n?!!n.trailing:g),C.cancel=function(){void 0!==f&&clearTimeout(f),m=0,u=v=a=f=void 0},C.flush=function(){return void 0===f?d:S(i())},C}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),i=n(7005);e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(5639);e.exports=function(){return r.Date.now()}},3493:function(e,t,n){var r=n(3279),i=n(3218);e.exports=function(e,t,n){var o=!0,l=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return i(n)&&(o="leading"in n?!!n.leading:o,l="trailing"in n?!!n.trailing:l),r(e,t,{leading:o,maxWait:t,trailing:l})}},4841:function(e,t,n){var r=n(7561),i=n(3218),o=n(3448),l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=s.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):l.test(e)?NaN:+e}},6086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},4623:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(5893),i=n(7294),o=n(3493),l=n.n(o);const s="no-scroll",u=()=>void 0!==window?window.document.body:new HTMLElement,a=()=>u().classList.remove(s);var c=function(){const[e,t]=i.useState(!1);return i.useEffect((()=>(e?u().classList.add(s):a(),a)),[e]),{hideScroll:i.useCallback((()=>t(!0)),[]),showScroll:i.useCallback((()=>t(!1)),[])}};var d,f,v=n(2218),m=n(4155);const p=null===(d=m)||void 0===m||null===(f=d.env)||void 0===f?void 0:f.NEXT_PUBLIC_IS_TEST,h=()=>Array(20).fill(0).map(((e,t)=>{return{id:(n=t,"".concat("test").concat(n))};var n})),g=(e,t)=>{0!==Math.abs(t.deltaX)||Math.abs(t.deltaY)<15?t.stopPropagation():t.deltaY<0?e.scrollNext():t.deltaY>0&&e.scrollPrev()};function b(){const[e,t]=i.useState(h),[n,o]=i.useState([]),[s,u]=i.useState(0),a=e=>!!n.find((t=>t===e)),{dragStart:d,dragStop:f,dragMove:m,dragging:p}=function(){const[e,t]=i.useState(!1),[n,r]=i.useState(!1),[o,l]=i.useState(0),[s,u]=i.useState(0);return{dragStart:i.useCallback((e=>{l(e.clientX),u(0),t(!0)}),[]),dragStop:i.useCallback((()=>window.requestAnimationFrame((()=>{r(!1),t(!1)}))),[]),dragMove:i.useCallback(((t,i)=>{const s=o-t.clientX,a=Math.abs(s)>5;e&&a&&r(!0),n&&a&&(l(t.clientX),u(s),i(s))}),[e,n,o]),diff:s,dragging:n,position:o,setDragging:r,setDiff:u,setPosition:l}}(),b=i.useCallback((({scrollContainer:e})=>{e.current&&(e.current.scrollLeft=s)}),[s]),w=i.useCallback(l()((({scrollContainer:e})=>!!e.current&&u(e.current.scrollLeft)),500),[]),{hideScroll:C,showScroll:T}=c();return(0,r.jsx)("div",{className:"example",style:{height:"200vh",paddingTop:"200px"},children:(0,r.jsx)("div",{onMouseEnter:C,onMouseLeave:T,children:(0,r.jsx)("div",{onMouseLeave:f,children:(0,r.jsx)(v.ScrollMenu,{LeftArrow:x,RightArrow:y,onInit:b,onScroll:w,onWheel:g,onMouseDown:()=>e=>d(e),onMouseUp:()=>f,onMouseMove:({scrollContainer:e})=>t=>m(t,(t=>{if(e.current){const n=e.current.scrollLeft;e.current.scrollLeft=n+t}})),children:e.map((({id:e})=>{return(0,r.jsx)(S,{title:e,itemId:e,onClick:(t=e,({getItemById:e,scrollToItem:n})=>{if(p)return!1;const r=a(t);var i,l;o((e=>r?e.filter((e=>e!==t)):e.concat(t))),r||n(null===(i=e(t))||void 0===i||null===(l=i.entry)||void 0===l?void 0:l.target,"smooth","center","nearest")}),selected:a(e)},e);var t}))})})})})}function x(){const{isFirstItemVisible:e,scrollPrev:t,visibleItemsWithoutSeparators:n}=i.useContext(v.VisibilityContext),[o,l]=i.useState(!n.length&&e);return i.useEffect((()=>{n.length&&l(e)}),[e,n]),(0,r.jsx)(w,{disabled:o,onClick:()=>t(p?"auto":"smooth"),children:"Left"})}function y(){const{isLastItemVisible:e,scrollNext:t,visibleItemsWithoutSeparators:n}=i.useContext(v.VisibilityContext),[o,l]=i.useState(!n.length&&e);return i.useEffect((()=>{n.length&&l(e)}),[e,n]),(0,r.jsx)(w,{disabled:o,onClick:()=>t(p?"auto":"smooth"),children:"Right"})}function w({children:e,disabled:t,onClick:n}){return(0,r.jsx)("button",{disabled:t,onClick:n,style:{cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",right:"1%",opacity:t?"0":"1",userSelect:"none"},children:e})}function S({onClick:e,selected:t,title:n,itemId:o}){const l=i.useContext(v.VisibilityContext),s=l.isItemVisible(o);return(0,r.jsxs)("div",{onClick:()=>e(l),onKeyDown:t=>{"Enter"===t.code&&e(l)},role:"button",style:{border:"1px solid",display:"inline-block",margin:"0 10px",width:"160px",userSelect:"none"},tabIndex:0,children:[(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{children:n}),(0,r.jsxs)("div",{style:{backgroundColor:s?"transparent":"gray"},children:["visible: ",JSON.stringify(s)]}),(0,r.jsxs)("div",{children:["selected: ",JSON.stringify(!!t)]})]}),(0,r.jsx)("div",{style:{backgroundColor:t?"green":"bisque",height:"200px"}})]})}var C=()=>{const[e,t]=i.useState(!1);return i.useEffect((()=>{t(!0)}),[]),e?(0,r.jsx)(b,{}):null}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4623)}])},4155:function(e){var t,n,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var s,u=[],a=!1,c=-1;function d(){a&&s&&(a=!1,s.length?u=s.concat(u):c=-1,u.length&&f())}function f(){if(!a){var e=l(d);a=!0;for(var t=u.length;t;){for(s=u,u=[];++c<t;)s&&s[c].run();c=-1,t=u.length}s=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new v(e,t)),1!==u.length||a||l(f)},v.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},2218:function(e,t,n){!function(e,t){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=r(t);!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".react-horizontal-scrolling-menu--wrapper {\n  display: flex;\n}\n\n.react-horizontal-scrolling-menu--scroll-container {\n  display: flex;\n  height: max-content;\n  overflow-y: hidden;\n  position: relative;\n  width: 100%;\n}\n\n:export {\n  wrapper: react-horizontal-scrolling-menu--wrapper;\n  container: react-horizontal-scrolling-menu--scroll-container;\n}\n");const o="react-horizontal-scrolling-menu",l=`${o}--separator`,s=`${o}--item`,u=`${o}--scroll-container`,a=`${o}--wrapper`,c="itemId";var d=Object.freeze({__proto__:null,rootClassName:o,separatorClassName:l,itemClassName:s,scrollContainerClassName:u,wrapperClassName:a,id:c});function f({children:e,onScroll:t=(()=>{}),scrollRef:n}){return i.default.createElement("div",{className:u,onScroll:t,ref:n},e)}var v=i.default.memo((function({id:e,index:t,refs:n}){const r=i.default.useRef(null);return n[t]=r,i.default.createElement("div",{className:l,"data-key":e,"data-index":t,ref:r})})),m=i.default.memo((function({children:e,id:t,index:n,refs:r}){const o=i.default.useRef(null);return r[n]=o,i.default.createElement("div",{className:s,"data-key":t,"data-index":n,ref:o},e)}));function p({children:e,refs:t}){const n=i.default.Children.toArray(e).filter(Boolean),r=n.length;return i.default.createElement(i.default.Fragment,null,n.map(((e,n)=>{var o,l;const s=null===(l=null===(o=e)||void 0===o?void 0:o.props)||void 0===l?void 0:l[c],u=s+"-separator",a=n+1===r;return[i.default.createElement(m,{id:s,key:"menuItem__"+s,refs:t,index:n},e),!a&&i.default.createElement(v,{id:u,refs:t,key:u,index:n+.1})]})))}function h(e,t="smooth",n="end",r="nearest"){e&&window&&window.requestAnimationFrame((()=>e.scrollIntoView({block:r,behavior:t,inline:n})))}function g({items:e,itemsChanged:t,refs:r,options:o}){const l=i.default.useRef(),[s,u]=i.default.useState([]),a=i.default.useRef(+setTimeout((()=>{}),0)),c=i.default.useCallback((t=>{const r=function(e,t){return[...e].map((e=>{var n,r;const i=e.target,o=(null===(n=null==i?void 0:i.dataset)||void 0===n?void 0:n.key)||"";return[o,{index:String((null===(r=null==i?void 0:i.dataset)||void 0===r?void 0:r.index)||""),key:o,entry:e,visible:e.intersectionRatio>=t.ratio}]}))}(t,o);e.set(r),n.g.clearTimeout(a.current),a.current=+setTimeout((()=>n.g.requestAnimationFrame((()=>{u((t=>{const n=e.getVisible().map((e=>e[1].key));return JSON.stringify(t)!==JSON.stringify(n)?n:t}))}))),o.throttle)}),[e,o]);return i.default.useLayoutEffect((()=>{const e=(e=>Object.values(e).map((e=>e.current)).filter(Boolean))(r);return l.current=new IntersectionObserver(c,o),e.forEach((e=>{var t;return null===(t=l.current)||void 0===t?void 0:t.observe(e)})),()=>{var e;clearTimeout(a.current),null===(e=l.current)||void 0===e||e.disconnect(),l.current=void 0}}),[c,t,o,r]),{visibleItems:s}}class b extends Map{toArr(){return[...this]}onlyDigits(e){return String(e).replace(/[^0-9.]/g,"")}sort(e){return e.sort(((e,t)=>+this.onlyDigits(e[1].index)-+this.onlyDigits(t[1].index)))}set(e,t){return Array.isArray(e)?this.sort(e).forEach((e=>{super.set(e[0],e[1])})):super.set(e,t),this}first(){var e;return null===(e=this.toArr()[0])||void 0===e?void 0:e[1]}last(){var e,t;return null===(t=null===(e=this.toArr().slice(-1))||void 0===e?void 0:e[0])||void 0===t?void 0:t[1]}filter(e){return this.toArr().filter(e)}find(e){return this.toArr().find(e)}findIndex(e){return this.toArr().findIndex(e)}prev(e){var t;const n=this.toArr(),r=n.findIndex((t=>t[0]===e||t[1]===e));return-1!==r?null===(t=n[r-1])||void 0===t?void 0:t[1]:void 0}next(e){var t;const n=this.toArr(),r=n.findIndex((t=>t[0]===e||t[1]===e));return-1!==r?null===(t=n[r+1])||void 0===t?void 0:t[1]:void 0}getVisible(){return this.filter((e=>e[1].visible))}}const x={rootMargin:"5px",threshold:[.05,.5,.75,.95],ratio:.9,throttle:100},y=i.default.createContext({});e.ScrollMenu=function({LeftArrow:e,RightArrow:t,children:n,onInit:r=(()=>{}),onMouseDown:o,onMouseUp:l,onMouseMove:s,onScroll:u=(()=>{}),onWheel:d=(()=>{}),options:v=x,wrapperClassName:m=""}){const w=i.default.useRef(null),[S]=i.default.useState({}),C=i.default.useMemo((()=>Object.assign(Object.assign(Object.assign({},x),v),{root:w.current})),[v]),T=function(e,t){const[n,r]=i.default.useState("");return i.default.useLayoutEffect((()=>{const t=(e?i.default.Children.toArray(e):[]).map((e=>{var t,n;return null===(n=null===(t=e)||void 0===t?void 0:t.props)||void 0===n?void 0:n[c]})).filter(Boolean).join("");r(t)}),[e,t]),n}(n,S),j=i.default.useRef(new b).current,{visibleItems:E}=g({items:j,itemsChanged:T,options:C,refs:S}),I=function(e=(()=>{})){const[t,n]=i.default.useState(!1);return i.default.useLayoutEffect((()=>{t||(n(!0),e())}),[e,t]),t}((()=>r(N))),k=i.default.useMemo((()=>function(e,t=[]){var n,r;const i=t.filter((e=>!/separator/.test(String(e)))),o=!!(null===(n=e.first())||void 0===n?void 0:n.visible),l=!!(null===(r=e.last())||void 0===r?void 0:r.visible),s=t=>{var n;return null===(n=e.find((e=>e[1].key===String(t))))||void 0===n?void 0:n[1]},u=()=>{var t,n;return e.prev(null===(n=null===(t=e.getVisible())||void 0===t?void 0:t[0])||void 0===n?void 0:n[1])},a=()=>{var t,n,r,i;return e.next(null===(i=null===(r=null===(n=null===(t=e.getVisible())||void 0===t?void 0:t.slice)||void 0===n?void 0:n.call(t,-1))||void 0===r?void 0:r[0])||void 0===i?void 0:i[1])};return{getItemById:s,getItemByIndex:t=>{var n;return null===(n=e.find((e=>String(e[1].index)===String(t))))||void 0===n?void 0:n[1]},getNextItem:a,getPrevItem:u,isFirstItemVisible:o,isItemVisible:e=>{var t;return Boolean(null===(t=s(e))||void 0===t?void 0:t.visible)},isLastItem:t=>e.last()===s(t),isLastItemVisible:l,scrollNext:(e="smooth",t="start",n="nearest")=>{var r,i;return h(null===(i=null===(r=a())||void 0===r?void 0:r.entry)||void 0===i?void 0:i.target,e,t,n)},scrollPrev:(e="smooth",t="end",n="nearest")=>{var r,i;return h(null===(i=null===(r=u())||void 0===r?void 0:r.entry)||void 0===i?void 0:i.target,e,t,n)},scrollToItem:h,visibleItemsWithoutSeparators:i}}(j,E)),[j,E]),N=i.default.useMemo((()=>Object.assign(Object.assign({},k),{initComplete:I,items:j,scrollContainer:w,visibleItems:E})),[k,I,j,E]),M=i.default.useCallback((e=>u(N,e)),[u,N]),O=i.default.useCallback((e=>d(N,e)),[d,N]);return i.default.createElement("div",{className:`${a} ${m}`,onWheel:O,onMouseDown:null==o?void 0:o(N),onMouseUp:null==l?void 0:l(N),onMouseMove:null==s?void 0:s(N)},i.default.createElement(y.Provider,{value:N},i.default.createElement(e,null),i.default.createElement(f,{onScroll:M,scrollRef:w},i.default.createElement(p,{refs:S},n)),i.default.createElement(t,null)))},e.VisibilityContext=y,e.constants=d,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(7294))}},function(e){e.O(0,[774],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);