(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`modulepreload`,t=function(e){return`/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function u(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}o=l(i.map(i=>{if(i=t(i,a),i=u(i),i in n)return;n[i]=!0;let o=i.endsWith(`.css`);for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}let s=document.createElement(`link`);if(s.rel=o?`stylesheet`:e,o||(s.as=`script`),s.crossOrigin=``,s.href=i,c&&s.setAttribute(`nonce`,c),document.head.appendChild(s),o)return new Promise((e,t)=>{s.addEventListener(`load`,e),s.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}).filter(e=>e!==void 0))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[])t.status===`rejected`&&s(t.reason);return r().catch(s)})};function i(e){return e.length>1&&e.endsWith(`/`)?e.slice(0,-1):e}function a(e){return i(new URL(e,location.origin).pathname).split(`/`)}function o(e){return e.split(`/`).some(e=>e.startsWith(`:`))}function s(e){return e.split(`/`).filter(e=>e.startsWith(`:`)).length}function c(e){try{return decodeURIComponent(e)}catch{return e}}function l(){return location.pathname+location.search+location.hash}var u={},d=new Set;async function f(e){let t=[...d,...u[e.path]??[]];for(let n of t)if(await n(e)===!1)return!1;return!0}var p={},m=new Set;function h(e,t){if(typeof e==`string`){if(!t)return()=>{};let n=i(e);return p[n]||(p[n]=new Set),p[n].add(t),()=>p[n]?.delete(t)}return m.add(e),()=>m.delete(e)}function ee(e){let t=[...m,...p[e.path]??[]];for(let n of t)n(e)}var te={},g=new Set;function ne(e,t){let n=[...g,...e?te[e.path]??[]:[]];for(let r of n)r(e,t)}function re(e){let t=new Blob([e],{type:`text/javascript`});return URL.createObjectURL(t)}function ie(e){if(e instanceof Element)return{html:e,script:null};let t=document.createElement(`template`);t.innerHTML=e;let n=t.content.querySelector(`script[type="module"]`),r=n?.textContent??null;return n?.remove(),{html:t.innerHTML,script:r}}function ae(e){if(e instanceof Element)return e;let t=document.createElement(`template`);t.innerHTML=e;let n=t.content,r=Array.from(n.childNodes).filter(e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&(e.textContent??``).trim().length>0);return r.length===1&&r[0].nodeType===Node.ELEMENT_NODE?r[0]:n}function oe(e){return Array.from(e.children).filter(e=>{let t=e.tagName.toLowerCase();return t!==`script`&&t!==`style`})}function _(e,t){return e.filter(e=>v(e.path,t)).sort((e,t)=>s(e.path)-s(t.path))[0]}function v(e,t){let n=a(e),r=a(t);return n.length===r.length&&n.every((e,t)=>e.startsWith(`:`)?r[t].length>0:e===r[t])}function se(e,t){let[n,r]=Object.entries(t)[0];return e.find(e=>{switch(n){case`path`:return e.path===i(r);case`html`:case`title`:return e[n]===r;case`startsWith`:return e.path.startsWith(r);case`renderedHtml`:return e.renderedHtml?.isEqualNode(r)??!1;default:return!1}})}var ce={},y=[],b=``,x=null,S=null,C=!1,w=0;function le(e,t){return C&&T(),t&&(ce=Object.freeze(t)),Object.freeze(e),y=Object.entries(e).map(([e,t])=>{let n=typeof t==`string`?{html:t}:t;return{...n,path:i(e),renderedHtml:null,module:null,query:{},hash:``,props:{},meta:n.meta??{}}}),{run:e=>(C&&T(),b=e,fe(),C=!0,window.addEventListener(`popstate`,E),document.addEventListener(`click`,ue),D(de(y),{replace:!0}).catch(()=>null)),stop:T}}function T(){var e;C=!1,b=``,x=null,w++,(e=S?.unmount)==null||e.call(S),S=null,window.removeEventListener(`popstate`,E),document.removeEventListener(`click`,ue)}function E(e){let t=e.state;D(t?.path??l(),{props:t?.props??{},isPopState:!0}).catch(()=>{})}function ue(e){if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;let t=e.target,n=(t?.closest)?.call(t,`a[link]`);if(!n)return;let r=n.getAttribute(`href`);if(!r)return;let i=n.getAttribute(`target`);if(i&&i!==`_self`)return;let a=new URL(r,location.href);a.origin===location.origin&&_(y,a.pathname)&&(e.preventDefault(),D(a.pathname+a.search+a.hash).catch(()=>{}))}function de(e){if(_(e,location.pathname))return l();let t=e.find(e=>e.default||e.path===`/`);if(t)return t.path;let n=e.filter(e=>!o(e.path)).sort((e,t)=>e.path.length-t.path.length)[0];if(n)return n.path;throw Error("No default route found. Please define one by settings its path to `/` or adding the `default` property to the route definitions. Note, it is not possible to set dynamic routes as default routes.")}function fe(){if(!b)throw Error(`No root selector found. Did you start the router?`);let e=document.querySelector(b);if(!e)throw Error(`Invalid root node selector. Please select a valid HTML element.`);return e}function pe(e,t){let n=new URL(e,location.origin),r=n.hash.replace(/^#/,``),a=Object.fromEntries(n.searchParams),o=i(n.pathname),s=_(t,o);if(!s)throw Error(`No matching route found for the path "${o}"`);let l=s.path.split(`/`),u=o.split(`/`),d={};for(let e=0;e<l.length;e++){let t=l[e];t.startsWith(`:`)&&(d[t.substring(1)]=c(u[e]))}return{resolvedPath:o,sourcePath:s.path,params:d,hash:r,query:a}}async function D(e,t={}){var n;let{replace:i=!1,hash:a,query:o,props:s={},isPopState:c=!1}=t,u=++w,d=()=>u===w,p,m=``,h={};try{if(!C)throw Error("Router is not running. Call `defineRouter(...).run(selector)` first.");let t=pe(e,y),{resolvedPath:u,sourcePath:te,params:g}=t;if(m=t.hash,h=t.query,a!==void 0&&(m=a===!1?``:String(a).replace(/^#/,``)),o)for(let e of Object.keys(o))h[e]=String(o[e]);if(p=se(y,{path:te}),!p)throw Error(`Invalid path. Could not match route.`);let{html:ne,script:_}=ie(p.html),v=ae(ne),b=S?.beforeLeave&&await S.beforeLeave();if(b=await f({...p,renderedHtml:v,hash:m,query:h,props:s}),b===!1||!d())return null;let w=null;if(p.loader){try{w=await p.loader(g)}catch(e){if(!p.fallback)throw e;v=ae(p.fallback)}if(!d())return null}let le=new URLSearchParams(h).toString(),T=u+(le?`?${le}`:``)+(m?`#${m}`:``),E=fe();if(x=Object.freeze({...p,path:te,resolvedPath:u,renderedHtml:v,params:g,data:w,hash:m,query:h,props:s}),!c){let e={path:T,props:s};i||T===l()?history.replaceState(e,``,T):history.pushState(e,``,T)}if((n=S?.unmount)==null||n.call(S),S=null,E.replaceChildren(v),_){let e=re(_);try{let t=await r(()=>import(e),[]);if(!d())return null;let n=oe(E);n.length>1&&console.warn(`Page using a <script> should have only 1 root element. Only the first element will be passed as the root when calling mount()`);let i=await t.mount(n[0],{path:u,data:w,props:s,params:g,query:h,navigate:D,provide:ce});S=typeof i==`function`?{unmount:i}:i??null}finally{URL.revokeObjectURL(e)}}if(p.title&&(document.title=p.title),m){let e=document.getElementById(m);e&&typeof e.scrollIntoView==`function`&&e.scrollIntoView()}return ee(x),x}catch(e){throw ne(p?{...p,hash:m,query:h,props:s}:null,e),e}}function me(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var O=me();function he(e){O=e}var k={exec:()=>null};function A(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function j(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(M.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var ge=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),M={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:A(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:A(e=>RegExp(`^ {0,${e}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:A(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:A(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:A(e=>RegExp(`^ {0,${e}}(?:</?(?:${L})(?: +|$|/?>)|<(?:script|pre|style|textarea|!--))`,`i`)),blockquoteBeginRegex:A(e=>RegExp(`^ {0,${e}}>`))},_e=/^(?:[ \t]*(?:\n|$))+/,ve=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ye=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,N=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,be=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,P=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,xe=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Se=j(xe).replace(/bull/g,P).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),Ce=j(xe).replace(/bull/g,P).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),F=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,we=/^[^\n]+/,I=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Te=j(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,I).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ee=j(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,P).getRegex(),L=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,De=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Oe=j(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,De).replace(`tag`,L).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ke=e=>j(F).replace(`hr`,N).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,e).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,L).getRegex(),Ae=ke(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),je=ke(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),Me={blockquote:j(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,je).getRegex(),code:ve,def:Te,fences:ye,heading:be,hr:N,html:Oe,lheading:Se,list:Ee,newline:_e,paragraph:Ae,table:k,text:we},Ne=j(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,N).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,L).getRegex(),Pe={...Me,lheading:Ce,table:Ne,paragraph:j(F).replace(`hr`,N).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Ne).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,L).getRegex()},Fe={...Me,html:j(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,De).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:k,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:j(F).replace(`hr`,N).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,Se).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},Ie=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Le=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Re=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,ze=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,R=/[\p{P}\p{S}]/u,z=/[\s\p{P}\p{S}]/u,B=/[^\s\p{P}\p{S}]/u,Be=j(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,z).getRegex(),Ve=/[\p{Pi}\p{Ps}"']/u,He=/(?!~)[\p{P}\p{S}]/u,Ue=/(?!~)[\s\p{P}\p{S}]/u,We=/(?:[^\s\p{P}\p{S}]|~)/u,Ge=j(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,ge?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Ke=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,qe=j(Ke,`u`).replace(/punct/g,R).getRegex(),Je=j(Ke,`u`).replace(/punct/g,He).getRegex(),Ye=j(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,Ve).replace(/punct/g,R).getRegex(),Xe=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,Ze=j(Xe,`gu`).replace(/notPunctSpace/g,B).replace(/punctSpace/g,z).replace(/punct/g,R).getRegex(),Qe=j(Xe,`gu`).replace(/notPunctSpace/g,We).replace(/punctSpace/g,Ue).replace(/punct/g,He).getRegex(),$e=j(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,B).replace(/punctSpace/g,z).replace(/punct/g,R).getRegex(),et=j(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,B).replace(/punctSpace/g,z).replace(/punct/g,R).getRegex(),tt=j(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,B).replace(/punctSpace/g,z).replace(/punct/g,R).getRegex(),nt=j(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,R).getRegex(),rt=j(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,B).replace(/punctSpace/g,z).replace(/punct/g,R).getRegex(),it=j(/\\(punct)/,`gu`).replace(/punct/g,R).getRegex(),at=j(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),ot=j(De).replace(`(?:-->|$)`,`-->`).getRegex(),st=j(`^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,ot).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ct=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,V=j(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace(`brackets`,ct).getRegex(),lt=j(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,V).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ut=j(/^!?\[(label)\]\[(ref)\]/).replace(`label`,V).replace(`ref`,I).getRegex(),dt=j(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,I).getRegex(),ft=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,pt=j(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace(`brackets`,ct).getRegex(),mt=j(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,j(/^!?\[(label)\]\[(ref)\]/).replace(`label`,pt).replace(`ref`,ft).getRegex()).replace(`nolink`,j(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,ft).getRegex()).getRegex(),ht=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,gt=j(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_t={_backpedal:k,anyPunctuation:it,autolink:at,blockSkip:Ge,br:Re,code:Le,del:k,delLDelim:k,delRDelim:k,emStrongLDelim:qe,emStrongRDelimAst:Ze,emStrongRDelimUnd:et,escape:Ie,link:lt,nolink:dt,punctuation:Be,reflink:ut,reflinkSearch:mt,tag:st,text:ze,url:k},vt={..._t,emStrongLDelim:Ye,emStrongRDelimAst:$e,emStrongRDelimUnd:tt,link:j(/^!?\[(label)\]\((.*?)\)/).replace(`label`,V).getRegex(),reflink:j(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,V).getRegex()},yt={..._t,emStrongRDelimAst:Qe,emStrongLDelim:Je,delLDelim:nt,delRDelim:rt,url:j(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`emailProtocol`,gt).replace(`protocol`,ht).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:j(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace(`protocol`,ht).replace(/emailProtocol/g,/(?:mailto|xmpp):/).getRegex()},bt={...yt,br:j(Re).replace(`{2,}`,`*`).getRegex(),text:j(yt.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},H={normal:Me,gfm:Pe,pedantic:Fe},U={normal:_t,gfm:yt,breaks:bt,pedantic:vt},xt={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},St=e=>xt[e];function W(e,t){if(t){if(M.escapeTest.test(e))return e.replace(M.escapeReplace,St)}else if(M.escapeTestNoEncode.test(e))return e.replace(M.escapeReplaceNoEncode,St);return e}function Ct(e){return e.replace(M.numericCharacterReference,(e,t,n)=>{let r=t===void 0?Number.parseInt(n,16):Number.parseInt(t,10);return r===0||r>1114111||r>=55296&&r<=57343?`�`:String.fromCodePoint(r)})}function wt(e){try{e=encodeURI(e).replace(M.percentDecode,`%`)}catch{return null}return e}function Tt(e,t){let n=e.replace(M.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(M.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t){if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``)}for(;r<n.length;r++)n[r]=n[r].trim().replace(M.slashPipe,`|`);return n}function G(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function Et(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&M.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function K(e){return e.trim().toLowerCase().toUpperCase().toLowerCase()}function Dt(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Ot(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function kt(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`),c=e[0].charAt(0)===`!`;r.state.inLink=!0;let l=r.state.linkEmitted,u=r.state.inRawBlock;r.state.linkEmitted=!1;let d=r.inlineTokens(s),f=r.state.linkEmitted;if(r.state.linkEmitted=l,r.state.inLink=!1,!c){if(f){r.state.inRawBlock=u;return}r.state.linkEmitted=!0}return{type:c?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:d}}function At(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return e.slice(Math.min(r.length,i.length))}).join(`
`)}function jt(e,t,n,r){if(!t.includes(`<`))return!1;for(let i=0;i<t.length;i++){if(t[i]===`\\`){i++;continue}if(t[i]==="`"){let e=r.inline.code.exec(t.slice(i));if(e){i+=e[0].length-1;continue}}if(t[i]!==`<`)continue;let a=e.slice(n+i),o=r.inline.tag.exec(a)||r.inline.autolink.exec(a);if(o){if(o[0].length>t.length-i)return!0;i+=o[0].length-1}}return!1}var q=class{options;rules;lexer;constructor(e){this.options=e||O}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:Et(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=At(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=G(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceTabChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:G(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:G(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=G(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o=0;for(;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=e.join(`
`),o=t.raw+`
`+a.replace(this.rules.other.blockquoteSetextReplace2,``),s=this.blockquote(o);i[i.length-1]=s;let c=o.substring(s.raw.length).replace(/^\n/,``),l=c?c.split(`
`).length:0,d=l?e.slice(0,-l):e;d.length>0&&(n=`${n}
${d.join(`
`)}`),r=r.substring(0,r.length-t.text.length)+s.text;break}if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=t[2].split(`
`,1)[0],l=t[1].length,u=this.options.pedantic?Ot(c,l):c.replace(this.rules.other.leadingSpaceTab,e=>Ot(e,l)),d=e.split(`
`,1)[0],f=!u.trim(),p=0;if(this.options.pedantic?(p=2,s=u.trimStart()):f?p=l+1:(p=u.search(this.rules.other.nonSpaceChar),p=p>4?1:p,s=u.slice(p),p+=l),f&&this.rules.other.blankLine.test(d)&&(r+=d+`
`,e=e.substring(d.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(p),n=this.rules.other.hrRegex(p),i=this.rules.other.fencesBeginRegex(p),a=this.rules.other.headingBeginRegex(p),o=this.rules.other.htmlBeginRegex(p),c=this.rules.other.blockquoteBeginRegex(p);for(;e;){let l=e.split(`
`,1)[0],m;if(d=l,this.options.pedantic?(d=d.replace(this.rules.other.listReplaceNesting,`  `),m=d):m=d.replace(this.rules.other.leadingSpaceTab,e=>e.replace(this.rules.other.tabCharGlobal,`    `)),i.test(d)||a.test(d)||o.test(d)||c.test(d)||t.test(d)||n.test(d))break;if(m.search(this.rules.other.nonSpaceChar)>=p||!d.trim())s+=`
`+m.slice(p);else{if(f||u.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(u)||a.test(u)||n.test(u))break;s+=`
`+d}f=!d.trim(),r+=l+`
`,e=e.substring(l.length+1),u=m.slice(p)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items)if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}for(let e of i.items){let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=Et(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=K(t[1]).replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:G(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Tt(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:G(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(Tt(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:G(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&jt(e,t[1],n,this.rules))return;let r=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let e=G(r.slice(0,-1),`\\`);if((r.length-e.length)%2==0)return}else{let e=Dt(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let i=t[2],a=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(i);e&&(i=e[1],a=e[3])}else a=t[3]?t[3].slice(1,-1):``;return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(i=this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?i.slice(1):i.slice(1,-1)),kt(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,`$1`),title:a&&a.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let r=n[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&jt(e,n[1],r,this.rules))return;let i=t[K((n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `))];if(!i){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return kt(n,i,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let i=[...r[0]].length-1,a,o,s=i,c=0,l=r[0][0],u=n===l,d=l===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(r=d.exec(t))!==null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){s+=o;continue}if(r[5]||r[6]){if(i%3&&!((i+o)%3)){c+=o;continue}if(u)break}if(s-=o,s>0)continue;o=Math.min(o,o+s+c);let t=[...r[0]][0].length,n=e.slice(0,i+r.index+t+o);if(Math.min(i,o)%2){let e=n.slice(1,-1);return{type:`em`,raw:n,text:e,tokens:this.lexer.inlineTokens(e)}}let l=n.slice(2,-2);return{type:`strong`,raw:n,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:e?t[0]:Ct(t[0]),escaped:e}}}},J=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||O,this.options.tokenizer=this.options.tokenizer||new q,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,top:!0};let t={other:M,block:H.normal,inline:U.normal};this.options.pedantic?(t.block=H.pedantic,t.inline=U.pedantic):this.options.gfm&&(t.block=H.gfm,t.inline=this.options.breaks?U.breaks:U.gfm),this.tokenizer.rules=t}static get rules(){return{block:H,inline:U}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(M.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(M.tabCharGlobal,`    `).replace(M.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}linkInText(e){if(!e.includes(`[`))return!1;let t=this.tokenizer.rules.inline.link;for(let n of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(t.test(n[0])&&e.charAt(n.index-1)!==`!`)return!0;for(let t of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let e=t[0],n=e.lastIndexOf(`[`);if(e.charAt(0)!==`!`&&Object.hasOwn(this.tokens.links,K(e.slice(n+1,-1)))&&!(n>1&&this.linkInText(e.slice(1,n-1))))return!0}return!1}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e;if(this.tokens.links&&e.includes(`[`)){let e=this.tokenizer.rules.inline.reflinkSearch,t=n=>{let r=n.lastIndexOf(`[`);if(!Object.hasOwn(this.tokens.links,K(n.slice(r+1,-1))))return n;if(r>1&&n.charAt(0)!==`!`){let i=n.slice(1,r-1);if(this.linkInText(i))return`[`+i.replace(e,t)+`][`+`a`.repeat(n.length-r-2)+`]`}return`[`+`a`.repeat(n.length-2)+`]`};n=n.replace(e,t)}n=n.replace(this.tokenizer.rules.inline.anyPunctuation,e=>`+`.repeat(e.length)),n=n.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},Y=class{options;parser;constructor(e){this.options=e||O}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(M.notSpaceStart)?.[0],i=e?e.replace(M.endingNewline,``)+`
`:``;return r?`<pre><code class="language-`+W(r)+`">`+(n?i:W(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:W(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${W(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,text:n,tokens:r,autolink:i}){let a=i?W(n,!0):this.parser.parseInline(r),o=wt(e);if(o===null)return a;e=W(o,i);let s=`<a href="`+e+`"`;return t&&(s+=` title="`+W(t)+`"`),s+=`>`+a+`</a>`,s}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=wt(e);if(i===null)return W(n);e=i;let a=`<img src="${W(e)}" alt="${W(n)}"`;return t&&(a+=` title="${W(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:W(e.text)}},Mt=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},X=class e{options;renderer;textRenderer;constructor(e){this.options=e||O,this.options.renderer=this.options.renderer||new Y,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Mt}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},Z=class{options;block;constructor(e){this.options=e||O}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?J.lex:J.lexInline}provideParser(e=this.block){return e?X.parse:X.parseInline}},Q=new class{defaults=me();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=X;Renderer=Y;TextRenderer=Mt;Lexer=J;Tokenizer=q;Hooks=Z;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new Y(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new q(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new Z;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];t[r]=Z.passThroughHooks.has(n)?e=>{if(this.defaults.async&&Z.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return J.lex(e,t??this.defaults)}parser(e,t){return X.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?J.lex:J.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?X.parse:X.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?J.lex:J.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?X.parse:X.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+W(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function $(e,t){return Q.parse(e,t)}$.options=$.setOptions=function(e){return Q.setOptions(e),$.defaults=Q.defaults,he($.defaults),$},$.getDefaults=me,$.defaults=O;function Nt(...e){return Q.use(...e),$.defaults=Q.defaults,he($.defaults),$}$.use=Nt,$.walkTokens=function(e,t){return Q.walkTokens(e,t)},$.parseInline=Q.parseInline,$.Parser=X,$.parser=X.parse,$.Renderer=Y,$.TextRenderer=Mt,$.Lexer=J,$.lexer=J.lex,$.Tokenizer=q,$.Hooks=Z,$.parse=$,$.options,$.setOptions,$.walkTokens,$.parseInline,X.parse,J.lex;var Pt=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:`open`});e.innerHTML=`
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      stroke-linejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-0.033203 15.5974H9.9668C9.9668 15.5974 14.9668 15.5974 14.9668 10.5974C14.9668 5.59741 9.9704 5.59741 9.9704 5.59741H1.2418L4.9668 0.597412"
        transform="translate(0.033203 -0.597412)"
        stroke="currentColor"
        stroke-width="2"
      />

      <path
        d="M-0.033203 11H9.9668C9.9668 11 14.9668 11 14.9668 6C14.9668 1 9.9704 1 9.9704 1H1.2418L4.9668 6"
        transform="translate(0.033203 3.999988)"
        stroke="currentColor"
        stroke-width="2"
      />
    </svg>`}},Ft={projects:[{id:`datacentrum-na-byvale-budove-34`,title:`Datacentrum na místě budovy 34`,text:`V rámci spuštění nové Zlin.ai dojde ke stavbě nového datového centra na místě bývalé budovy 34.`,timeline:[[4,`Studie datacentra`],[7,`Projektová dokumentace`],[8,`Zahájení stavby`],[17,`Dokončení stavby`]],gallery:[`/foto1.jpg`,`/foto4.jpg`,`/foto15.jpg`,`/foto12.jpg`]},{id:`zbourani-odhlusovacich-sten`,title:`Zbouraní odhlušovaích stěn u silnic`,text:`Vyhovíme našim starším občanům, ať mají lepší výhled na auta.`,timeline:[[2,`Magistrála`],[7,`Dálnice`],[9,`Oslavy dokončení`]],gallery:[`/foto2.jpg`,`/foto4.jpg`]},{id:`nove-nadrazi`,title:`Vybudování nového hlavního nádraží v Prštném`,text:`Pro zachování památky hlavního nadraží, se v Prštném vybuduje moderní alternativa.`,gallery:[`/foto7.jpg`,`/foto12.jpg`]}],stats:[{title:`16 Pater`,text:`Zlínský mrakodrap má již 16 pater a stále roste!`,image:`/foto1.jpg`},{title:`27 Klouzaček`,text:`Po velkém skluzačkovém suchu, nastává renezance hrišť`,image:`/foto15.jpg`},{title:`4 Úplatky`,text:`Oproti minulému roku úplatky výrazně klesly`,image:`/foto14.jpg`},{title:`14000 Kebabů denně`,text:`Městské kebabárny spotřebují až 8 tun masa za den`,image:`/foto9.jpg`},{title:`25 Korun`,text:`O tolik tento rok zdražilo menu v MAKALU`,image:`/foto8.jpg`},{title:` 950 Holubů`,text:`Máme mnoho okřídlených přátel`,image:`/foto4.jpg`}],gallery:[{title:`Napís Zlín u nádraží tam pořád je“`,image:`/foto10.jpg`},{title:`„Střecha nádraží opět zrezivěla“`,image:`/foto12.jpg`},{title:`„Starosta zvažuje“`,image:`/foto2.jpg`},{title:`„Příště nám zakážete FPV drony, že?“ - mládež`,image:`/foto5.jpg`},{title:`Pohled na zimní stadion, který za chvíli už neuvidíme`,image:`/foto14.jpg`}],food:[{image:`/food/rohlik.jpg`,text:`Předkrm se skládá z rohlíkového raftu, na kterém pluje vyzrátý Eidam 30% s jedním plátkem pikantního paprikáše.`},{image:`/food/polevka.jpg`,text:`Až z Japonska přiletí babička z Nachi-Katsuura, aby nám uvařila čerstvý kuřecí vývar na horský přímořský styl Kumano-kodo.`},{image:`/food/svickova.jpg`,text:`Česká klasika, kterou nikdo nezapře. Svíčková na smetaně s brusinkami a nekonečnou zásobou čerstvých bílých knedlíků.`},{image:`/food/asie.jpg`,text:`Objednávka z legendárního vietnamského bistra s maximálním cenovým limitem 150kč na talíř.`},{image:`/food/desert.jpg`,text:`Čokoládový dort ve tvaru hvězdy, protože každý náš návštěvník je naše velká hvězda uwu. Smetana za malý příplatek.`}]};function It(e){return Ft[e]}var Lt=[`Leden`,`Únor`,`Březen`,`Duben`,`Květen`,`Červen`,`Červenec`,`Srpen`,`Září`,`Říjen`,`Listpoad`,`Prosinec`];function Rt(e){let t=new Date,n=t.getMonth()+e,r=t.getFullYear()+Math.floor(n/12);return`${Lt[n%11]} ${r}`}function zt(e,t){function n(n){n.target&&e&&!e.contains(n.target)&&t()}document.addEventListener(`click`,n)}function Bt(){let e=document.querySelector(`.hamburger`),t=document.querySelector(`nav`);e?.addEventListener(`click`,()=>{e?.classList.toggle(`show`),t?.classList.toggle(`show`)}),(t?.querySelectorAll(`a`))?.forEach(n=>{n?.addEventListener(`click`,()=>{e?.classList.remove(`show`),t?.classList.remove(`show`)})}),zt(document.querySelector(`header`),close);let n=document.querySelector(`.chat-button`);n&&(n.addEventListener(`click`,()=>{n?.nextElementSibling?.classList.toggle(`active`)}),zt(n.parentElement,()=>{n.nextElementSibling?.classList.remove(`active`)}))}var Vt=`<div class="page">\r
  <div class="card">\r
    <div class="container">\r
      <div class="contact-banner">\r
        <div class="image-wrap">\r
          <img src="/foto8.jpg" alt="" />\r
        </div>\r
        <p>Projekt Zlín 180 vznikl z lásky k našemu <br />hezkému městu, které máme rádi i přes jeho chyby.</p>\r
      </div>\r
\r
      <div class="contact-wrap">\r
        <div class="contact-container">\r
          <svg\r
            xmlns="http://www.w3.org/2000/svg"\r
            width="32"\r
            height="32"\r
            viewBox="0 0 256 256"\r
            style="transform: scaleX(-1)"\r
          >\r
            <path\r
              fill="currentColor"\r
              d="M176 160a39.7 39.7 0 0 0-28.6 12.1l-46.1-29.6a40.3 40.3 0 0 0 0-29l46.1-29.6A40 40 0 1 0 136 56a41 41 0 0 0 2.7 14.5l-46.1 29.6a40 40 0 1 0 0 55.8l46.1 29.6A41 41 0 0 0 136 200a40 40 0 1 0 40-40Zm0-128a24 24 0 1 1-24 24a24.1 24.1 0 0 1 24-24ZM64 152a24 24 0 1 1 24-24a24.1 24.1 0 0 1-24 24Zm112 72a24 24 0 1 1 24-24a24.1 24.1 0 0 1-24 24Z"\r
            />\r
          </svg>\r
          <strong>Projekty</strong>\r
          <p>Máte nápad na projekt, který by se měl ve Zlíně realizovat? Napište nám info.</p>\r
        </div>\r
        <div class="contact-container">\r
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">\r
            <path\r
              fill="currentColor"\r
              fill-rule="evenodd"\r
              d="m2.83 10.777l.428-.374a3.05 3.05 0 0 1 4.165.139l4.29 4.29a1.25 1.25 0 0 0 1.602.138l.298-.21a3.75 3.75 0 0 1 4.665.281l1.743 1.57A9.25 9.25 0 1 0 2.83 10.777m16.332 7.078l-1.887-1.699a2.25 2.25 0 0 0-2.8-.168l-.297.21a2.75 2.75 0 0 1-3.526-.306l-4.29-4.29a1.55 1.55 0 0 0-2.117-.07l-1.46 1.278A9.25 9.25 0 0 0 12 21.25a9.23 9.23 0 0 0 7.162-3.395M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M15 7.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M12.25 9a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0"\r
              clip-rule="evenodd"\r
            />\r
          </svg>\r
          <strong>Galerie</strong>\r
          <p>\r
            Máte fotky Zlína, které byste rádi na našem webu prezentovali? Neváhejte nám poslat foto s popiskem na mail.\r
          </p>\r
        </div>\r
        <div class="contact-container">\r
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">\r
            <path\r
              fill="currentColor"\r
              d="M224 112H32a8 8 0 0 0-8 8a104.35 104.35 0 0 0 56 92.28V216a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-3.72A104.35 104.35 0 0 0 232 120a8 8 0 0 0-8-8m-59.34 88a8 8 0 0 0-4.66 7.27V216H96v-8.71a8 8 0 0 0-4.66-7.29a88.29 88.29 0 0 1-51-72h175.29a88.29 88.29 0 0 1-50.97 72M81.77 55c5.35-6.66 6.67-11.16 6.12-13.14c-.42-1.49-2.41-2.26-2.43-2.26A8 8 0 0 1 88 24a8.1 8.1 0 0 1 2.38.36c1 .31 9.91 3.33 12.79 12.76c2.46 8.07-.55 17.45-8.94 27.89c-5.35 6.66-6.67 11.16-6.12 13.14c.42 1.49 2.37 2.24 2.39 2.25A8 8 0 0 1 88 96a8.1 8.1 0 0 1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76c-2.46-8.07.55-17.45 8.94-27.88m40 0c5.35-6.66 6.67-11.16 6.12-13.14c-.42-1.49-2.41-2.26-2.43-2.26A8 8 0 0 1 128 24a8.1 8.1 0 0 1 2.38.36c1 .31 9.91 3.33 12.79 12.76c2.46 8.07-.55 17.45-8.94 27.89c-5.35 6.66-6.67 11.16-6.12 13.14c.42 1.49 2.37 2.24 2.39 2.25A8 8 0 0 1 128 96a8.1 8.1 0 0 1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76c-2.46-8.07.55-17.45 8.94-27.88m40 0c5.35-6.66 6.67-11.16 6.12-13.14c-.42-1.49-2.41-2.26-2.43-2.26A8 8 0 0 1 168 24a8.1 8.1 0 0 1 2.38.36c1 .31 9.91 3.33 12.79 12.76c2.46 8.07-.55 17.45-8.94 27.89c-5.35 6.66-6.67 11.16-6.12 13.14c.42 1.49 2.37 2.24 2.39 2.25A8 8 0 0 1 168 96a8.1 8.1 0 0 1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76c-2.46-8.07.55-17.45 8.94-27.88"\r
            />\r
          </svg>\r
          <strong>Nabízíme</strong>\r
          <p>Máte ve Zlíně oblíbené kavárny, cukrárny, bistra či reastaurace? Napište nám o nich!</p>\r
        </div>\r
      </div>\r
      <div class="center">\r
        <p class="contact-us">Napište nám: info.zlin@email.cz</p>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<style>\r
  .contact-banner {\r
    display: flex;\r
    flex-direction: column;\r
    justify-content: flex-end;\r
    position: relative;\r
    width: 100%;\r
    height: 326px;\r
    padding: var(--space-l);\r
    margin-bottom: var(--space-xxl);\r
\r
    p {\r
      z-index: 10;\r
      position: relative;\r
      color: var(--color-text-white);\r
      font-size: var(--font-l);\r
      font-weight: var(--font-weight-bold);\r
    }\r
\r
    .image-wrap {\r
      position: absolute;\r
      inset: 0;\r
      overflow: hidden;\r
      border-radius: var(--radius-card);\r
\r
      &:before {\r
        content: '';\r
        position: absolute;\r
        bottom: 0;\r
        left: 0;\r
        width: 100%;\r
        height: 75%;\r
        z-index: 2;\r
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) 65%, rgba(0, 0, 0, 0));\r
      }\r
\r
      img {\r
        inset: 0;\r
        position: absolute;\r
        height: 100%;\r
        width: 100%;\r
        object-fit: cover;\r
      }\r
    }\r
  }\r
\r
  .contact-wrap {\r
    display: flex;\r
    flex-wrap: wrap;\r
    justify-content: center;\r
    gap: var(--space-xl);\r
    margin-bottom: var(--space-xxl);\r
\r
    .contact-container {\r
      display: flex;\r
      flex-direction: column;\r
      align-items: center;\r
      text-align: center;\r
      gap: 12px;\r
      width: 30%;\r
\r
      svg {\r
        color: var(--color-primary);\r
      }\r
\r
      strong {\r
        font-size: var(--font-l);\r
        font-weight: var(--font-weight-bold);\r
      }\r
\r
      p {\r
        font-size: var(--font-m);\r
      }\r
    }\r
  }\r
\r
  .center {\r
    display: flex;\r
    justify-content: center;\r
\r
    .contact-us {\r
      display: flex;\r
      align-items: center;\r
      text-decoration: none;\r
      color: var(--color-text-white);\r
      font-size: var(--font-m);\r
      font-weight: var(--font-weight);\r
      padding-inline: var(--space-xl);\r
      background-color: var(--color-primary);\r
      border-radius: 99px;\r
      height: 64px;\r
    }\r
  }\r
\r
  @media screen and (max-width: 520px) {\r
    .contact-wrap {\r
      .contact-container {\r
        width: 50%;\r
      }\r
    }\r
  }\r
</style>\r
`,Ht=`<div class="page">\r
  <template id="gallery">\r
    <div class="gallery-item">\r
      <button class="image-wrap">\r
        <img src="" alt="" />\r
      </button>\r
      <span></span>\r
    </div>\r
  </template>\r
\r
  <div class="modal">\r
    <div class="modal-wrap"></div>\r
    <div class="arrows-wrap">\r
      <button id="btn-left">\r
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">\r
          <path fill="currentColor" d="m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55z" />\r
        </svg>\r
      </button>\r
      <span id="foto-number"></span>\r
      <button id="btn-right">\r
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">\r
          <path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z" />\r
        </svg>\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="card">\r
    <div class="container">\r
      <h1>Galerie</h1>\r
      <p>Momenty, které dělají Zlín naším městem.</p>\r
      <div class="gallery-grid">\r
        <div class="gallery-column"></div>\r
        <div class="gallery-column"></div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<script type="module">\r
  export function mount(root, ctx) {\r
    const col = root.querySelectorAll('.gallery-column')\r
    const template = root.querySelector('#gallery')\r
    const modal = root.querySelector('.modal')\r
    const btnLeft = root.querySelector('#btn-left')\r
    const btnRight = root.querySelector('#btn-right')\r
    const photoNumber = root.querySelector('#foto-number')\r
\r
    const data = ctx.provide.getContent('gallery')\r
    let colIndex = 0\r
    let photoIndex = 0\r
    let activePhotoIndex = 0\r
\r
    // Close modal and hide all images inside of it\r
    function closeModal() {\r
      modal.classList.remove('active')\r
      document.documentElement.style.overflow = 'unset'\r
\r
      for (const image of modal.querySelectorAll('img')) {\r
        image.style.display = 'none'\r
      }\r
    }\r
\r
    //Change photo to (index)\r
    function changePhoto(index) {\r
      const images = modal.querySelectorAll('img')\r
      for (const image of modal.querySelectorAll('img')) {\r
        image.style.display = 'none'\r
      }\r
\r
      images[index].style.display = 'block'\r
      activePhotoIndex = index\r
      photoNumber.textContent = \`\${activePhotoIndex + 1} / \${data.length}\`\r
    }\r
\r
    modal.addEventListener('click', (e) => {\r
      if (e.target.id === 'btn-left' || e.target.id === 'btn-right') return\r
      closeModal()\r
    })\r
\r
    window.addEventListener('keydown', (event) => {\r
      if (event.key === 'Escape') {\r
        closeModal()\r
      }\r
    })\r
\r
    btnLeft.addEventListener('click', () => {\r
      activePhotoIndex = activePhotoIndex > 0 ? activePhotoIndex - 1 : data.length - 1\r
      changePhoto(activePhotoIndex)\r
    })\r
\r
    btnRight.addEventListener('click', () => {\r
      activePhotoIndex = activePhotoIndex < data.length - 1 ? activePhotoIndex + 1 : 0\r
      changePhoto(activePhotoIndex)\r
    })\r
\r
    // Register click listener. It needs to be a method, otherwise the\r
    // \`photoIndex\` will be the value it is at the end of the generation loop,\r
    // instead of the image we are clicking\r
    function registerImageClick(clonedItem, index) {\r
      clonedItem.querySelector('button').addEventListener('click', () => {\r
        modal.classList.add('active')\r
        document.documentElement.style.overflow = 'hidden'\r
        changePhoto(index)\r
      })\r
    }\r
\r
    for (const foto of data) {\r
      const clone = template?.content?.cloneNode(true)\r
      clone.querySelector('span').textContent = foto.title\r
      clone.querySelector('img').src = foto.image\r
      clone.querySelector('img').setAttribute('alt', foto.title)\r
\r
      registerImageClick(clone, photoIndex)\r
\r
      col[colIndex].appendChild(clone)\r
\r
      // Add the image to the modal image as well\r
      const modalImg = document.createElement('img')\r
      modalImg.src = foto.image\r
      modalImg.alt = foto.title\r
      modal.firstElementChild.appendChild(modalImg)\r
\r
      // Change the column index\r
      colIndex = colIndex === 0 ? 1 : 0\r
      photoIndex++\r
    }\r
  }\r
<\/script>\r
\r
<style>\r
  .modal {\r
    position: fixed;\r
    inset: 0;\r
    background-color: rgba(8, 8, 8, 0.7);\r
    opacity: 0;\r
    z-index: -1;\r
    visibility: inherit;\r
    pointer-events: none;\r
    overflow: hidden;\r
\r
    .modal-wrap {\r
      display: flex;\r
      align-items: center;\r
      justify-content: center;\r
      padding: var(--space-l);\r
      width: 100%;\r
      height: 100%;\r
\r
      img {\r
        display: none;\r
        max-width: 100%;\r
        max-height: 100%;\r
        border-radius: var(--radius-card);\r
        object-fit: contain;\r
      }\r
    }\r
\r
    .arrows-wrap {\r
      z-index: 20;\r
      position: absolute;\r
      bottom: var(--space-xl);\r
      left: 50%;\r
      transform: translateX(-50%);\r
      display: flex;\r
      justify-content: space-between;\r
      align-items: center;\r
      overflow: hidden;\r
      border-radius: var(--radius-card);\r
      background-color: var(--color-bg);\r
      box-shadow: var(--shadow-float);\r
      gap: var(--space-s);\r
\r
      span {\r
        font-size: var(--font-s);\r
        font-weight: 800;\r
      }\r
\r
      button {\r
        height: 48px;\r
        width: 48px;\r
\r
        svg {\r
          pointer-events: none;\r
          transform: translateY(2px);\r
        }\r
\r
        &:hover {\r
          background-color: var(--color-bg-low);\r
        }\r
      }\r
    }\r
\r
    &.active {\r
      opacity: 1;\r
      z-index: 10000;\r
      visibility: visible;\r
      pointer-events: all;\r
    }\r
  }\r
\r
  .gallery-grid {\r
    display: grid;\r
    grid-template-columns: repeat(2, 1fr);\r
    gap: var(--space-m);\r
    margin-top: var(--space-xxl);\r
\r
    .gallery-column {\r
      display: flex;\r
      flex-direction: column;\r
      gap: var(--space-l);\r
\r
      .gallery-item {\r
        display: block;\r
\r
        span {\r
          display: block;\r
          font-size: var(--font-s);\r
          font-style: italic;\r
          color: var(--color-text-lighter);\r
          margin-top: 4px;\r
        }\r
\r
        .image-wrap {\r
          img {\r
            border-radius: var(--radius-card);\r
            width: 100%;\r
\r
            [src=''] {\r
              display: none;\r
            }\r
          }\r
        }\r
      }\r
    }\r
  }\r
\r
  @media only screen and (max-width: 980px) {\r
    .gallery-grid {\r
      grid-template-columns: 1fr 1fr;\r
    }\r
  }\r
\r
  @media only screen and (max-width: 576px) {\r
    .gallery-grid {\r
      grid-template-columns: 1fr;\r
    }\r
  }\r
</style>\r
`,Ut=`<div class="page">\r
  <section class="hero">\r
    <div class="container">\r
      <div class="hero-text">\r
        <h1>Zlín 180</h1>\r
        <p>Poznejte plánované proměny a vylepšení našeho milovaného města.</p>\r
\r
        <div class="button-layout">\r
          <a link class="round-button" href="/projekty"> Projekty </a>\r
          <a link class="round-button" href="/galerie"> Galerie </a>\r
        </div>\r
      </div>\r
    </div>\r
    <button class="round-button white">Někam</button>\r
    <div class="hero-bg">\r
      <img src="/foto12.jpg" id="hero-image1" alt="Obrazek Zlina" />\r
      <img src="/foto15.jpg" id="hero-image2" alt="Obrazek Zlina" />\r
      <img src="/foto2.jpg" id="hero-image3" alt="Obrazek Zlina" />\r
      <img src="/foto14.jpg" id="hero-image4" alt="Obrazek Zlina" />\r
      <img src="/foto13.jpg" id="hero-image5" alt="Obrazek Zlina" />\r
      <img src="/foto8.jpg" id="hero-image6" alt="Obrazek Zlina" />\r
      <img src="/foto4.jpg" id="hero-image7" alt="Obrazek Zlina" />\r
    </div>\r
  </section>\r
\r
  <section class="router card">\r
    <template id="router-item">\r
      <a link href="" class="router-item">\r
        <strong></strong>\r
        <div class="image-wrap">\r
          <img src="" alt="" />\r
        </div>\r
      </a>\r
    </template>\r
\r
    <div class="container">\r
      <h2>Nejnovější Zlínské projekty z pohledu, který vám ani budova 21 nenabídne.</h2>\r
      <div class="router-links"></div>\r
    </div>\r
  </section>\r
</div>\r
\r
<script type="module">\r
  export function mount(root, ctx) {\r
    // TODO: add randomized running skeleton\r
\r
    const ANIMATION_LENGTH = 100000\r
    const ANIMATION_PAUSE = 2000\r
\r
    let animation = null\r
    let timeoutId = null\r
\r
    function createAndPlayAnimation() {\r
      const { randomRange } = ctx.provide\r
      const allImages = [...root.querySelectorAll('.hero-bg img')]\r
\r
      for (const img of allImages) {\r
        // img.style.opacity = 0\r
        img.style.zIndex = -1\r
      }\r
\r
      const imageIndex = randomRange(1, allImages.length - 1)\r
      const heroImage = root.querySelector(\`#hero-image\${imageIndex}\`)\r
\r
      heroImage.style.zIndex = 2\r
\r
      const targetX = randomRange(0, 100)\r
      const targetY = randomRange(0, 100)\r
      const zoom = randomRange(4, 10)\r
\r
      heroImage.style.transformOrigin = \`\${targetX}% \${targetY}%\`\r
\r
      const keyframes = new KeyframeEffect(\r
        heroImage,\r
        [{ transform: \`scale(1)\` }, { transform: \`scale(\${zoom})\` }, { transform: \`scale(1)\` }],\r
        {\r
          duration: ANIMATION_LENGTH,\r
          easing: 'linear',\r
        },\r
      )\r
\r
      // Create, play animation and wait until it completes.\r
      animation = new Animation(keyframes, document.timeline)\r
      animation.play()\r
      animation.addEventListener('finish', () => {\r
        // When animation completes, wait some time and start over\r
        timeoutId = setTimeout(() => {\r
          heroImage.style.zIndex = -1\r
          createAndPlayAnimation()\r
        }, ANIMATION_PAUSE)\r
      })\r
    }\r
\r
    createAndPlayAnimation()\r
\r
    const button = root.querySelector('.round-button.white')\r
    button.addEventListener('click', createAndPlayAnimation)\r
\r
    // Homepage links & content sourcing\r
    const stats = ctx.provide.getContent('stats')\r
    const projects = ctx.provide.getContent('projects')\r
    const gallery = ctx.provide.getContent('gallery')\r
    const food = ctx.provide.getContent('food')\r
\r
    const links = [\r
      {\r
        href: '/cisla',\r
        label: \`\${stats.length} Čísel\`,\r
        image: stats[ctx.provide.randomRange(0, stats.length - 1)].image,\r
      },\r
      {\r
        href: '/galerie',\r
        label: \`\${gallery.length} Fotek\`,\r
        image: gallery[ctx.provide.randomRange(0, gallery.length - 1)].image,\r
      },\r
      {\r
        href: '/nabizime',\r
        label: \`\${food.length} Nabízíme\`,\r
        image: food[ctx.provide.randomRange(0, food.length - 1)].image,\r
      },\r
      {\r
        href: '/projekty',\r
        label: \`\${projects.length} Projektů\`,\r
        image: projects[ctx.provide.randomRange(0, projects.length - 1)].gallery[0],\r
      },\r
    ]\r
\r
    const routerTemplate = root.querySelector('#router-item')\r
    const routerLinks = root.querySelector('.router-links')\r
\r
    for (const link of links) {\r
      const cloned = routerTemplate.content.cloneNode(true)\r
      cloned.querySelector('a').href = link.href\r
      cloned.querySelector('strong').textContent = link.label\r
\r
      const img = cloned.querySelector('img')\r
      if (link.image) {\r
        img.src = link.image\r
        img.alt = link.label\r
      } else {\r
        img.parentElement.remove()\r
      }\r
\r
      routerLinks.appendChild(cloned)\r
    }\r
\r
    return {\r
      unmount() {\r
        // When page is closed, we must stop the animation so it doesn't keep\r
        // running in the background\r
        animation && animation.cancel()\r
        clearTimeout(timeoutId)\r
      },\r
    }\r
  }\r
<\/script>\r
\r
<style>\r
  .router {\r
    h2 {\r
      text-align: center;\r
      margin: auto;\r
      max-width: var(--container-size-s);\r
      margin-bottom: var(--space-xl);\r
    }\r
\r
    .router-links {\r
      display: grid;\r
      grid-template-columns: repeat(3, 1fr);\r
      gap: var(--space-m);\r
\r
      .router-item {\r
        display: block;\r
        height: 225px;\r
        background-color: var(--color-primary);\r
        border-radius: var(--radius-card);\r
        overflow: hidden;\r
        position: relative;\r
        background: linear-gradient(156deg, var(--color-secondary), var(--color-primary) 65%);\r
\r
        &:hover {\r
          .image-wrap img {\r
            transform: scale(1.05);\r
          }\r
        }\r
\r
        &:first-child {\r
          grid-column: 1 / 3;\r
        }\r
\r
        &:last-child {\r
          grid-column: 2 / 4;\r
        }\r
\r
        strong {\r
          position: absolute;\r
          bottom: var(--space-l);\r
          left: var(--space-l);\r
          right: var(--space-l);\r
          font-size: var(--font-xl);\r
          color: var(--color-text-white);\r
          z-index: 2;\r
        }\r
\r
        .image-wrap {\r
          position: relative;\r
          height: 100%;\r
          width: 100%;\r
          z-index: 1;\r
\r
          &:before {\r
            content: '';\r
            position: absolute;\r
            bottom: 0;\r
            left: 0;\r
            width: 100%;\r
            height: 55%;\r
            z-index: 2;\r
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));\r
          }\r
\r
          img {\r
            position: absolute;\r
            left: 0;\r
            top: 0;\r
            width: 100%;\r
            height: 100%;\r
            object-fit: cover;\r
            transition: transform 0.2s ease-in-out;\r
          }\r
        }\r
      }\r
    }\r
  }\r
\r
  .hero {\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
    height: 75vh;\r
    width: 100%;\r
    background-color: gray;\r
    border-radius: var(--radius-card);\r
    position: relative;\r
\r
    .round-button.white {\r
      position: absolute;\r
      bottom: 16px;\r
      right: 16px;\r
      z-index: 10;\r
    }\r
\r
    .hero-text {\r
      position: absolute;\r
      top: 50%;\r
      transform: translateY(-50%);\r
      z-index: 5;\r
\r
      .button-layout {\r
        display: flex;\r
        gap: var(--space-s);\r
      }\r
\r
      h1,\r
      p {\r
        color: var(--color-text-white);\r
      }\r
\r
      h1 {\r
        font-size: 6.4rem;\r
      }\r
\r
      p {\r
        font-size: var(--font-l);\r
        margin-bottom: var(--space-l);\r
        max-width: 512px;\r
        line-height: 1.3em;\r
      }\r
    }\r
\r
    .hero-bg {\r
      position: absolute;\r
      inset: 0;\r
      width: 100%;\r
      height: 100%;\r
      overflow: hidden;\r
      border-radius: var(--radius-card);\r
\r
      &:after {\r
        content: '';\r
        background-color: rgba(0, 0, 0, 0.5);\r
        position: absolute;\r
        inset: 0;\r
        z-index: 2;\r
      }\r
\r
      img {\r
        inset: 0;\r
        object-fit: cover;\r
        z-index: -1;\r
        position: absolute;\r
        width: 100%;\r
        height: 100%;\r
        transition: opacity 1s ease-in-out;\r
        transform-origin: 50% 50%;\r
      }\r
    }\r
  }\r
</style>\r
`,Wt=`<div class="page">\r
  <div class="card">\r
    <div class="container s">\r
      <div class="page-header">\r
        <a href="/" link class="link">\r
          Zpět na úvod\r
          <arrow-icon />\r
        </a>\r
        <h1 class="page-title">Zlín nabízí</h1>\r
        <p class="page-description">Kam si rádi zajděte s rodinou i bez.</p>\r
      </div>\r
\r
      <template id="menu">\r
        <div class="food-item">\r
          <div class="food-image">\r
            <img src="" alt="" />\r
          </div>\r
          <p></p>\r
        </div>\r
      </template>\r
\r
      <div class="food-list"></div>\r
    </div>\r
  </div>\r
</div>\r
\r
<script type="module">\r
  export function mount(root, ctx) {\r
    const template = root.querySelector('#menu')\r
    const content = ctx.provide.getContent('food')\r
    const list = root.querySelector('.food-list')\r
\r
    for (const post of content) {\r
      const cloned = template.content.cloneNode(true)\r
      cloned.querySelector('p').textContent = post.text\r
      cloned.querySelector('img').src = post.image\r
      cloned.querySelector('img').alt = post.text\r
      list.appendChild(cloned)\r
    }\r
  }\r
<\/script>\r
\r
<style>\r
  .page-header {\r
    margin-bottom: var(--space-xxl);\r
\r
    h1 {\r
      font-size: 6.6rem;\r
      margin-block: var(--space-l);\r
    }\r
\r
    p {\r
      font-size: 2.4rem;\r
      max-width: 720px;\r
    }\r
\r
    .link {\r
      color: var(--color-text-lighter);\r
\r
      arrow-icon {\r
        bottom: -9px;\r
      }\r
    }\r
  }\r
\r
  .food-list {\r
    display: flex;\r
    flex-direction: column;\r
    gap: var(--space-xl);\r
    margin-top: var(--space-xl);\r
\r
    --img-size: 256px;\r
\r
    .food-item {\r
      display: grid;\r
      grid-template-columns: var(--img-size) 1fr;\r
      grid-template-areas: 'image text';\r
      gap: var(--space-xl);\r
      align-items: center;\r
\r
      &:nth-child(even) {\r
        grid-template-columns: 1fr var(--img-size);\r
        grid-template-areas: 'text image';\r
\r
        p {\r
          text-align: right;\r
        }\r
      }\r
\r
      p {\r
        font-size: var(--font-m);\r
        grid-area: text;\r
        text-align: left;\r
      }\r
\r
      .food-image {\r
        width: var(--img-size);\r
        height: var(--img-size);\r
        border-radius: var(--img-size);\r
        overflow: hidden;\r
        grid-area: image;\r
\r
        img {\r
          width: 100%;\r
          height: 100%;\r
          object-fit: cover;\r
        }\r
      }\r
    }\r
  }\r
\r
  @media screen and (max-width: 920px) {\r
    .food-list {\r
      --img-size: 180px;\r
    }\r
\r
    .page-header {\r
      h1 {\r
        font-size: 4.2rem;\r
      }\r
\r
      p {\r
        font-size: 2rem;\r
      }\r
    }\r
  }\r
\r
  @media screen and (max-width: 512px) {\r
    .food-list {\r
      --img-size: 156px;\r
\r
      .food-item {\r
        display: flex;\r
        flex-direction: column;\r
        gap: var(--space-m);\r
\r
        p {\r
          text-align: center !important;\r
          font-size: var(--font-s);\r
        }\r
      }\r
    }\r
  }\r
</style>\r
`,Gt=`<div class="page">\r
  <div class="card main">\r
    <div class="article-bg">\r
      <img src="" alt="" />\r
    </div>\r
    <div class="container">\r
      <!-- title + timeline are custom -->\r
      <!-- Gallery is placed within the article -->\r
      <div class="article-header">\r
        <a href="/projekty" link class="link">\r
          Zpět na projekty\r
          <arrow-icon />\r
        </a>\r
        <h1></h1>\r
        <p></p>\r
        <div class="article-timeline">\r
          <div class="timeline-line"></div>\r
        </div>\r
      </div>\r
      <article class="article-style"></article>\r
      <!-- Prev & next project -->\r
      <div class="article-buttons">\r
        <div>\r
          <a href="" link>\r
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">\r
              <path fill="currentColor" d="m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55z" />\r
            </svg>\r
            <span>Přechozí</span>\r
            <p></p>\r
          </a>\r
        </div>\r
\r
        <div>\r
          <a href="" link>\r
            <span>Příští</span>\r
            <p></p>\r
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">\r
              <path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z" />\r
            </svg>\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<script type="module">\r
  export function mount(root, ctx) {\r
    const projects = ctx.provide.getContent('projects')\r
\r
    let projectIndex = -1\r
\r
    const project = projects.find((project, index) => {\r
      const result = project.id === ctx.params.id\r
      // Save the index of the positive result\r
      if (result) {\r
        projectIndex = index\r
      }\r
      return result\r
    })\r
\r
    root.querySelector('h1').textContent = project.title\r
    root.querySelector('p').textContent = project.text\r
    root.querySelector('img').src = project.gallery[0]\r
\r
    // Links to other projects\r
    const [prev, next] = root.querySelectorAll('.article-buttons a')\r
\r
    // Check previous\r
    if (projectIndex > 0) {\r
      const prevProject = projects[projectIndex - 1]\r
      prev.href = \`/projekty/\${prevProject.id}\`\r
      prev.querySelector('p').textContent = prevProject.title\r
    } else {\r
      prev.remove()\r
    }\r
\r
    // Check next project\r
    if (projectIndex < projects.length - 1) {\r
      const nextProject = projects[projectIndex + 1]\r
      next.href = \`/projekty/\${nextProject.id}\`\r
      next.querySelector('p').textContent = nextProject.title\r
    } else {\r
      next.remove()\r
    }\r
\r
    // Add markdown content\r
    root.querySelector('article').innerHTML = ctx.data\r
\r
    // Timeline generation\r
    const timelineRef = root.querySelector('.article-timeline')\r
\r
    if (project.timeline) {\r
      for (const [months, title] of project.timeline) {\r
        const el = document.createElement('div')\r
        el.classList.add('timeline-item')\r
\r
        const label = document.createElement('span')\r
        label.textContent = title\r
        label.classList.add('timeline-label')\r
        el.appendChild(label)\r
\r
        const date = document.createElement('span')\r
        date.textContent = ctx.provide.getDateFromNow(months)\r
        date.classList.add('timeline-date')\r
        el.appendChild(date)\r
\r
        timelineRef.appendChild(el)\r
      }\r
    } else {\r
      timelineRef.remove()\r
    }\r
  }\r
<\/script>\r
\r
<style>\r
  .card.main {\r
    padding-top: 0;\r
  }\r
\r
  .article-timeline {\r
    /* TODO: we could try making the timeline horizontally scrollable */\r
    display: flex;\r
    align-items: center;\r
    padding: var(--space-xl);\r
    border-radius: var(--radius-card);\r
    background-color: var(--color-bg-low);\r
    margin-top: var(--space-xl);\r
    justify-content: space-around;\r
    position: relative;\r
    max-width: 100%;\r
    /* overflow-y: auto; */\r
\r
    .timeline-line {\r
      display: block;\r
      position: absolute;\r
      top: 50%;\r
      transform: translateY(-50%);\r
      left: var(--space-l);\r
      right: var(--space-l);\r
      border: 1px dashed var(--color-border);\r
    }\r
\r
    .timeline-item {\r
      position: relative;\r
\r
      &:before {\r
        content: '';\r
        display: block;\r
        position: absolute;\r
        top: 50%;\r
        left: 50%;\r
        transform: translate(-50%, -50%);\r
        width: 8px;\r
        height: 8px;\r
        border-radius: 99px;\r
        background-color: var(--color-primary);\r
      }\r
\r
      .timeline-date {\r
        position: absolute;\r
        top: -28px;\r
        left: 50%;\r
        transform: translateX(-50%);\r
        font-size: var(--font-s);\r
        white-space: nowrap;\r
        font-weight: 700;\r
      }\r
\r
      .timeline-label {\r
        position: absolute;\r
        bottom: -28px;\r
        left: 50%;\r
        transform: translateX(-50%);\r
        font-size: var(--font-s);\r
        white-space: nowrap;\r
      }\r
    }\r
  }\r
\r
  .article-bg {\r
    height: 324px;\r
    position: relative;\r
    overflow: hidden;\r
    display: block;\r
    width: 100%;\r
    margin-bottom: var(--space-xxl);\r
    z-index: 2;\r
    border-radius: var(--radius-card);\r
\r
    &:before {\r
      content: '';\r
      z-index: 3;\r
      position: absolute;\r
      bottom: 0;\r
      left: 0;\r
      right: 0;\r
      height: 50%;\r
      background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));\r
    }\r
\r
    img {\r
      z-index: 1;\r
      position: absolute;\r
      /* inset: 0; */\r
      top: 0;\r
      left: 0;\r
      height: 100%;\r
      width: 100%;\r
      object-fit: cover;\r
      object-position: bottom center;\r
    }\r
  }\r
\r
  .article-header {\r
    margin-bottom: var(--space-xl);\r
\r
    h1 {\r
      font-size: 6.6rem;\r
      margin-block: var(--space-xl);\r
    }\r
\r
    p {\r
      font-size: 2.4rem;\r
      max-width: 720px;\r
    }\r
\r
    .link {\r
      color: var(--color-text-lighter);\r
\r
      arrow-icon {\r
        bottom: -9px;\r
      }\r
    }\r
  }\r
\r
  .article-buttons {\r
    display: grid;\r
    grid-template-columns: 1fr 1fr;\r
    gap: var(--space-m);\r
    align-items: center;\r
    margin-top: var(--space-xxxl);\r
\r
    & > div {\r
      &:last-child a {\r
        text-align: right;\r
\r
        svg {\r
          left: unset;\r
          right: -8px;\r
        }\r
\r
        &:hover {\r
          span,\r
          p {\r
            transform: translateX(-3px);\r
          }\r
\r
          svg {\r
            transform: translate(11px, -50%);\r
          }\r
        }\r
      }\r
    }\r
\r
    a {\r
      display: block;\r
      text-decoration: none;\r
      position: relative;\r
      padding: var(--space-l);\r
      border-radius: var(--radius-card);\r
      color: var(--color-text);\r
      background-color: var(--color-bg);\r
      border: 1px solid var(--color-border);\r
\r
      svg {\r
        opacity: 0;\r
        position: absolute;\r
        top: 50%;\r
        left: -8px;\r
        transform: translate(0, -50%);\r
        transition: 0.2s all ease-in-out;\r
        color: var(--color-primary);\r
      }\r
\r
      &:hover {\r
        span,\r
        p {\r
          color: var(--color-primary);\r
          transform: translateX(3px);\r
        }\r
\r
        svg {\r
          opacity: 1;\r
          transform: translate(-11px, -50%);\r
        }\r
      }\r
\r
      span,\r
      p {\r
        transition: all 0.2s ease-in;\r
        transform: translateX(0);\r
      }\r
\r
      span {\r
        display: block;\r
        font-size: var(--font-s);\r
        color: var(--color-text-lighter);\r
      }\r
\r
      p {\r
        display: block;\r
        font-size: var(--font-m);\r
        overflow: hidden;\r
        white-space: nowrap;\r
        text-overflow: ellipsis;\r
      }\r
    }\r
  }\r
\r
  .article-style {\r
    p {\r
      display: block;\r
      font-size: 1.8rem;\r
      line-height: 1.3em;\r
      margin-bottom: 32px;\r
    }\r
\r
    hr {\r
      margin: 40px 0;\r
      border: 0;\r
      border-bottom: 2px solid var(--color-border);\r
    }\r
\r
    em {\r
      font-style: italic;\r
    }\r
\r
    strong {\r
      font-weight: 600;\r
      font-size: inherit;\r
    }\r
\r
    u {\r
      font-size: inherit;\r
      text-decoration-style: dotted;\r
      text-decoration-thickness: 2px;\r
      text-decoration-color: var(--color-text-lighter);\r
    }\r
\r
    a {\r
      color: var(--color-accent);\r
      font-size: inherit;\r
      text-decoration: underline;\r
      text-decoration-thickness: 1px;\r
      text-underline-offset: 5px;\r
\r
      &:hover {\r
        text-decoration: none;\r
      }\r
    }\r
\r
    h1,\r
    h2,\r
    h3,\r
    h4,\r
    h5,\r
    h6 {\r
      font-weight: 800;\r
      margin-top: 48px;\r
      margin-bottom: 16px;\r
    }\r
\r
    h4,\r
    h5,\r
    h6 {\r
      font-weight: 600;\r
    }\r
\r
    h1 {\r
      font-size: 5rem;\r
    }\r
\r
    h2 {\r
      font-size: 4rem;\r
    }\r
\r
    h3 {\r
      font-size: 3rem;\r
    }\r
\r
    h4,\r
    h5,\r
    h6 {\r
      font-size: 2.2rem;\r
      text-transform: uppercase;\r
    }\r
\r
    ol,\r
    ul {\r
      list-style: none;\r
      margin-bottom: 20px;\r
      padding-left: 20px;\r
\r
      li {\r
        display: block;\r
        margin-bottom: 10px;\r
        position: relative;\r
        padding-left: 30px;\r
        font-size: 2rem;\r
        line-height: 1.3em;\r
\r
        p {\r
          margin: 0;\r
        }\r
\r
        ul {\r
          padding-top: 8px;\r
        }\r
\r
        &:before {\r
          content: '';\r
          position: absolute;\r
          width: 6px;\r
          height: 6px;\r
          top: 10px;\r
          left: 0;\r
          background-color: var(--color-text-lighter);\r
        }\r
\r
        &:last-of-type {\r
          margin-bottom: 0;\r
        }\r
      }\r
    }\r
\r
    ol {\r
      counter-reset: ol;\r
      li {\r
        counter-increment: ol;\r
\r
        &:before {\r
          content: counter(ol) '.';\r
          width: unset;\r
          height: unset;\r
          background-color: transparent;\r
          top: 0;\r
          color: var(--color-text-lighter);\r
        }\r
      }\r
    }\r
\r
    code {\r
      background-color: var(--color-black);\r
      color: var(--color-white);\r
      padding: 1px 5px;\r
      border-radius: 99px;\r
      font-size: 1.6rem;\r
\r
      &.hljs {\r
        overflow: unset;\r
      }\r
    }\r
\r
    img {\r
      max-width: 100%;\r
      width: 100%;\r
      max-height: 640px;\r
      margin: auto;\r
      border-radius: var(--radius-card);\r
    }\r
\r
    pre {\r
      background-color: var(--color-black-static);\r
      color: var(--color-white-static);\r
      font-size: 1.6rem;\r
      margin-bottom: 32px;\r
      padding: 16px;\r
\r
      word-break: break-word;\r
      white-space: break-spaces;\r
\r
      p {\r
        margin: 0;\r
      }\r
\r
      code {\r
        color: var(--color-white-static);\r
        font-size: 1.4rem;\r
        line-height: 1.3em;\r
        background-color: transparent;\r
        border-radius: 0;\r
        padding: 0 !important;\r
      }\r
    }\r
  }\r
\r
  @media screen and (max-width: 980px) {\r
    .article-timeline {\r
      flex-direction: column;\r
      align-items: flex-start;\r
      gap: var(--space-l);\r
\r
      .timeline-line {\r
        top: var(--space-xl);\r
        bottom: var(--space-xl);\r
        left: var(--space-xl);\r
        right: unset;\r
        transform: unset;\r
      }\r
\r
      .timeline-item {\r
        display: flex;\r
        flex-direction: column;\r
        gap: var(--space-s);\r
        padding-left: var(--space-l);\r
\r
        &:before {\r
          left: -3px;\r
          transform: translateY(-50%);\r
        }\r
\r
        .timeline-date,\r
        .timeline-label {\r
          display: block;\r
          position: relative;\r
          transform: unset;\r
          top: unset;\r
          left: unset;\r
          bottom: unset;\r
        }\r
      }\r
    }\r
\r
    .article-bg {\r
      margin-bottom: var(--space-l);\r
    }\r
\r
    .article-header {\r
      h1 {\r
        font-size: 4.2rem;\r
      }\r
\r
      p {\r
        font-size: 2rem;\r
      }\r
    }\r
\r
    .article-buttons {\r
      display: flex;\r
      flex-direction: column;\r
\r
      & > div {\r
        width: 100%;\r
\r
        &:last-child a {\r
          svg {\r
            right: unset;\r
          }\r
        }\r
      }\r
\r
      a {\r
        display: flex;\r
        gap: var(--space-xs);\r
        align-items: center;\r
        padding: var(--space-m);\r
\r
        &:hover {\r
          svg,\r
          p,\r
          span {\r
            transform: unset !important;\r
          }\r
        }\r
\r
        svg {\r
          position: relative;\r
          transform: unset;\r
          top: unset;\r
          left: unset;\r
          opacity: 1;\r
          width: 20px;\r
          min-width: 20px;\r
        }\r
\r
        span {\r
          display: none;\r
        }\r
\r
        p {\r
          font-size: var(--font-s);\r
        }\r
      }\r
    }\r
  }\r
</style>\r
`,Kt=`<div class="page">\r
  <template id="project">\r
    <div class="project">\r
      <div class="content-wrap">\r
        <h2></h2>\r
        <p></p>\r
        <div>\r
          <a class="round-button" href="" link>Detaily</a>\r
        </div>\r
      </div>\r
      <div class="image-gallery">\r
        <div class="image-wrap"></div>\r
        <button class="btn prev">\r
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">\r
            <path fill="currentColor" d="m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55z" />\r
          </svg>\r
        </button>\r
        <button class="btn next">\r
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">\r
            <path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z" />\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
  </template>\r
\r
  <div class="card">\r
    <div class="container">\r
      <h1>Projekty</h1>\r
      <p>Plánované proměny Zlína v lepší město pro mě i pro tebe (či Vás).</p>\r
      <div class="project-list"></div>\r
    </div>\r
  </div>\r
</div>\r
\r
<script type="module">\r
  export function mount(root, ctx) {\r
    const data = ctx.provide.getContent('projects')\r
    const template = root.querySelector('#project')\r
    const grid = root.querySelector('.project-list')\r
\r
    data.forEach((project, index) => {\r
      const cloned = template.content.cloneNode(true)\r
      cloned.querySelector('h2').textContent = project.title\r
      cloned.querySelector('p').textContent = project.text\r
      cloned.querySelector('a').href = \`/projekty/\${project.id}\`\r
\r
      // Generate gallery\r
      const wrap = cloned.querySelector('.image-wrap')\r
\r
      for (const imagePath of project.gallery) {\r
        const img = document.createElement('img')\r
        img.src = imagePath\r
        wrap.appendChild(img)\r
      }\r
\r
      const prev = cloned.querySelector('.btn.prev')\r
      const next = cloned.querySelector('.btn.next')\r
\r
      let activeIndex = 0\r
\r
      prev.addEventListener('click', () => {\r
        activeIndex = Math.max(activeIndex - 1, 0)\r
        updateSlider()\r
      })\r
      next.addEventListener('click', () => {\r
        activeIndex = Math.min(activeIndex + 1, project.gallery.length - 1)\r
        updateSlider()\r
      })\r
\r
      function updateSlider() {\r
        wrap.style.left = -activeIndex * wrap.firstElementChild.getBoundingClientRect().width + 'px'\r
      }\r
\r
      grid.appendChild(cloned)\r
    })\r
  }\r
<\/script>\r
\r
<style>\r
  .project-list {\r
    display: flex;\r
    flex-direction: column;\r
    gap: var(--space-xxxl);\r
    margin-top: var(--space-xxl);\r
\r
    .project {\r
      --image-width: 518px;\r
      --image-height: 324px;\r
\r
      display: grid;\r
      grid-template-columns: 1fr var(--image-width);\r
      grid-template-areas: 'content gallery';\r
      gap: var(--space-l);\r
\r
      &:nth-child(odd) {\r
        grid-template-columns: var(--image-width) 1fr;\r
        grid-template-areas: 'gallery content';\r
      }\r
\r
      .content-wrap {\r
        display: flex;\r
        flex-direction: column;\r
        justify-content: center;\r
        grid-area: content;\r
\r
        p {\r
          color: var(--color-text-lighter);\r
          font-size: var(--font-m);\r
          text-wrap: balance;\r
          margin-bottom: var(--space-l);\r
        }\r
      }\r
\r
      .image-gallery {\r
        position: relative;\r
        overflow: hidden;\r
        width: var(--image-width);\r
        height: var(--image-height);\r
        grid-area: gallery;\r
        border-radius: var(--radius-card);\r
\r
        .btn {\r
          display: flex;\r
          align-items: center;\r
          justify-content: center;\r
          width: 48px;\r
          height: 48px;\r
          position: absolute;\r
          bottom: 0;\r
          right: 0;\r
          background-color: var(--color-bg);\r
          color: var(--color-primary);\r
\r
          &:hover {\r
            background-color: var(--color-bg-low);\r
          }\r
\r
          &.prev {\r
            right: 48px;\r
            border-top-left-radius: var(--radius-card);\r
          }\r
        }\r
\r
        .image-wrap {\r
          display: flex;\r
          flex-wrap: nowrap;\r
          position: absolute;\r
          top: 0;\r
          bottom: 0;\r
          left: 0;\r
          transition: left 0.3s linear;\r
\r
          img {\r
            display: block;\r
            width: var(--image-width);\r
            height: var(--image-height);\r
            object-fit: cover;\r
          }\r
        }\r
      }\r
    }\r
  }\r
\r
  @media screen and (max-width: 1024px) {\r
    .project-list {\r
      .project {\r
        --image-width: 420px;\r
      }\r
    }\r
  }\r
\r
  /* Gives us the width of the container converted to pixel value (instead of %) */\r
  @property --container-width {\r
    syntax: '<length>';\r
    inherits: true;\r
    initial-value: 0px;\r
  }\r
\r
  @media screen and (max-width: 796px) {\r
    .project-list {\r
      container-type: inline-size;\r
\r
      .project {\r
        --container-width: 100cqw;\r
        --image-width: calc(var(--container-width) - calc(var(--space-l) * 2));\r
\r
        border: 1px solid var(--color-border-weak);\r
        border-radius: var(--radius-card);\r
        padding: var(--space-l);\r
        display: flex;\r
        flex-direction: column;\r
      }\r
    }\r
  }\r
\r
  @media screen and (max-width: 512px) {\r
    .project-list {\r
      gap: var(--space-m);\r
\r
      .project .content-wrap p {\r
        font-size: var(--font-s);\r
        text-wrap: initial;\r
      }\r
    }\r
  }\r
</style>\r
`,qt=`<div class="page">\r
  <template id="stat">\r
    <div class="stat-item">\r
      <div class="image-wrap">\r
        <img src="" alt="" />\r
      </div>\r
      <strong></strong>\r
      <p></p>\r
    </div>\r
  </template>\r
\r
  <div class="card">\r
    <div class="container">\r
      <h1>V Číslech</h1>\r
      <p>Zajímavé statistky ohledně města a jeho rozvoje</p>\r
      <div class="stats-grid"></div>\r
    </div>\r
  </div>\r
</div>\r
\r
<script type="module">\r
  export function mount(root, ctx) {\r
    const grid = root.querySelector('.stats-grid')\r
    const template = root.querySelector('#stat')\r
    const data = ctx.provide.getContent('stats')\r
\r
    for (const stat of data) {\r
      const cloned = template?.content?.cloneNode(true)\r
      cloned.querySelector('strong').textContent = stat.title\r
      cloned.querySelector('p').textContent = stat.text\r
      cloned.querySelector('img').src = stat.image\r
      grid?.appendChild(cloned)\r
    }\r
  }\r
<\/script>\r
\r
<style>\r
  .stats-grid {\r
    display: grid;\r
    grid-template-columns: repeat(3, 1fr);\r
    grid-auto-rows: 200px auto auto;\r
    gap: var(--space-m);\r
    margin-top: var(--space-xxl);\r
\r
    .stat-item {\r
      display: grid;\r
      grid-template-rows: subgrid;\r
      grid-row: span 3;\r
      position: relative;\r
      z-index: 5;\r
      padding: var(--space-l);\r
      gap: var(--space-xs);\r
\r
      strong,\r
      p {\r
        color: var(--color-text-white);\r
      }\r
\r
      strong {\r
        font-size: var(--font-l);\r
        font-weight: 900;\r
        grid-row: 2;\r
        align-self: end;\r
      }\r
\r
      p {\r
        align-self: start;\r
        margin-top: var(--space-s);\r
        font-size: var(--font-m);\r
        opacity: 0.85;\r
        grid-row: 3;\r
      }\r
\r
      .image-wrap {\r
        z-index: -1;\r
        inset: 0;\r
        position: absolute;\r
        overflow: hidden;\r
        border-radius: var(--radius-card);\r
        background-color: var(--color-bg-low);\r
\r
        &:before {\r
          content: '';\r
          position: absolute;\r
          bottom: 0;\r
          left: 0;\r
          width: 100%;\r
          height: 75%;\r
          z-index: 2;\r
          background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) 65%, rgba(0, 0, 0, 0));\r
        }\r
\r
        img {\r
          position: absolute;\r
          inset: 0;\r
          width: 100%;\r
          height: 100%;\r
          object-fit: cover;\r
          transform: scale(2);\r
\r
          [src=''] {\r
            display: none;\r
          }\r
        }\r
      }\r
    }\r
  }\r
\r
  @media only screen and (max-width: 980px) {\r
    .stats-grid {\r
      grid-template-columns: 1fr 1fr;\r
    }\r
  }\r
\r
  @media only screen and (max-width: 576px) {\r
    .stats-grid {\r
      grid-template-columns: 1fr;\r
    }\r
  }\r
</style>\r
`;function Jt(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}customElements.define(`arrow-icon`,Pt),le({"/":{html:Ut,title:`Úvod | Zlín 180`},"/cisla":{html:qt,title:`Zlín v číslech | Zlín 180`},"/galerie":{html:Ht,title:`Viděli jste? | Zlín 180`},"/kontakt":{html:Vt,title:`Kontakt | Zlín 180`},"/nabizime":{html:Wt,title:`Připravujeme | Zlín 180`},"/projekty":{html:Kt,title:`Projekty | Zlín 180`},"/projekty/:id":{html:Gt,title:`Projekt | Zlín 180`,async loader(e){return new Promise(t=>{let{href:n}=new URL(`/content/${e.id}.md`,window.location.href);fetch(n).then(e=>e.text()).then(e=>{t($.parse(e))})})}}},{randomRange:Jt,getContent:It,getDateFromNow:Rt}).run(`#app`);var Yt=Array.from(document.querySelectorAll(`nav ul a`)),Xt=document.querySelector(`footer`)?.getBoundingClientRect().height;h(e=>{for(let t of Yt)t.getAttribute(`href`)===e.resolvedPath?t.classList.add(`active`):t.classList.remove(`active`);requestAnimationFrame(()=>{let e=document.querySelector(`main`);e&&Xt&&(e.getBoundingClientRect().height>window.innerHeight?document.querySelector(`footer`)?.classList.add(`long`):document.querySelector(`footer`)?.classList.remove(`long`))})}),Bt();