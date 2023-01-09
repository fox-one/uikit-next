var Ve=Object.defineProperty;var t=(r,e)=>Ve(r,"name",{value:e,configurable:!0});import{g as Ke}from"./iframe.44f7c4d0.js";var je={exports:{}},Z={exports:{}},Ne=t(function(e,a){return t(function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(a,n)},"wrap")},"bind"),Xe=Ne,g=Object.prototype.toString;function Q(r){return g.call(r)==="[object Array]"}t(Q,"isArray");function G(r){return typeof r>"u"}t(G,"isUndefined");function We(r){return r!==null&&!G(r)&&r.constructor!==null&&!G(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}t(We,"isBuffer");function Ge(r){return g.call(r)==="[object ArrayBuffer]"}t(Ge,"isArrayBuffer");function Ye(r){return typeof FormData<"u"&&r instanceof FormData}t(Ye,"isFormData");function Ze(r){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&r.buffer instanceof ArrayBuffer,e}t(Ze,"isArrayBufferView");function Qe(r){return typeof r=="string"}t(Qe,"isString");function er(r){return typeof r=="number"}t(er,"isNumber");function Pe(r){return r!==null&&typeof r=="object"}t(Pe,"isObject");function j(r){if(g.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}t(j,"isPlainObject");function rr(r){return g.call(r)==="[object Date]"}t(rr,"isDate");function tr(r){return g.call(r)==="[object File]"}t(tr,"isFile");function nr(r){return g.call(r)==="[object Blob]"}t(nr,"isBlob");function Te(r){return g.call(r)==="[object Function]"}t(Te,"isFunction");function ar(r){return Pe(r)&&Te(r.pipe)}t(ar,"isStream");function sr(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}t(sr,"isURLSearchParams");function ir(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}t(ir,"trim");function or(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}t(or,"isStandardBrowserEnv");function ee(r,e){if(!(r===null||typeof r>"u"))if(typeof r!="object"&&(r=[r]),Q(r))for(var a=0,s=r.length;a<s;a++)e.call(null,r[a],a,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}t(ee,"forEach");function Y(){var r={};function e(n,i){j(r[i])&&j(n)?r[i]=Y(r[i],n):j(n)?r[i]=Y({},n):Q(n)?r[i]=n.slice():r[i]=n}t(e,"assignValue");for(var a=0,s=arguments.length;a<s;a++)ee(arguments[a],e);return r}t(Y,"merge");function ur(r,e,a){return ee(e,t(function(n,i){a&&typeof n=="function"?r[i]=Xe(n,a):r[i]=n},"assignValue")),r}t(ur,"extend");function fr(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}t(fr,"stripBOM");var y={isArray:Q,isArrayBuffer:Ge,isBuffer:We,isFormData:Ye,isArrayBufferView:Ze,isString:Qe,isNumber:er,isObject:Pe,isPlainObject:j,isUndefined:G,isDate:rr,isFile:tr,isBlob:nr,isFunction:Te,isStream:ar,isURLSearchParams:sr,isStandardBrowserEnv:or,forEach:ee,merge:Y,extend:ur,trim:ir,stripBOM:fr},x=y;function ie(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t(ie,"encode");var Ue=t(function(e,a,s){if(!a)return e;var n;if(s)n=s(a);else if(x.isURLSearchParams(a))n=a.toString();else{var i=[];x.forEach(a,t(function(d,o){d===null||typeof d>"u"||(x.isArray(d)?o=o+"[]":d=[d],x.forEach(d,t(function(p){x.isDate(p)?p=p.toISOString():x.isObject(p)&&(p=JSON.stringify(p)),i.push(ie(o)+"="+ie(p))},"parseValue")))},"serialize")),n=i.join("&")}if(n){var u=e.indexOf("#");u!==-1&&(e=e.slice(0,u)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},"buildURL"),cr=y;function P(){this.handlers=[]}t(P,"InterceptorManager$1");P.prototype.use=t(function(e,a,s){return this.handlers.push({fulfilled:e,rejected:a,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1},"use");P.prototype.eject=t(function(e){this.handlers[e]&&(this.handlers[e]=null)},"eject");P.prototype.forEach=t(function(e){cr.forEach(this.handlers,t(function(s){s!==null&&e(s)},"forEachHandler"))},"forEach");var lr=P,dr=y,hr=t(function(e,a){dr.forEach(e,t(function(n,i){i!==a&&i.toUpperCase()===a.toUpperCase()&&(e[a]=n,delete e[i])},"processHeader"))},"normalizeHeaderName"),ke=t(function(e,a,s,n,i){return e.config=a,s&&(e.code=s),e.request=n,e.response=i,e.isAxiosError=!0,e.toJSON=t(function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},"toJSON"),e},"enhanceError"),k,oe;function Le(){if(oe)return k;oe=1;var r=ke;return k=t(function(a,s,n,i,u){var f=new Error(a);return r(f,s,n,i,u)},"createError"),k}t(Le,"requireCreateError");var L,ue;function pr(){if(ue)return L;ue=1;var r=Le();return L=t(function(a,s,n){var i=n.config.validateStatus;!n.status||!i||i(n.status)?a(n):s(r("Request failed with status code "+n.status,n.config,null,n.request,n))},"settle"),L}t(pr,"requireSettle");var B,fe;function mr(){if(fe)return B;fe=1;var r=y;return B=r.isStandardBrowserEnv()?t(function(){return{write:t(function(s,n,i,u,f,d){var o=[];o.push(s+"="+encodeURIComponent(n)),r.isNumber(i)&&o.push("expires="+new Date(i).toGMTString()),r.isString(u)&&o.push("path="+u),r.isString(f)&&o.push("domain="+f),d===!0&&o.push("secure"),document.cookie=o.join("; ")},"write"),read:t(function(s){var n=document.cookie.match(new RegExp("(^|;\\s*)("+s+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},"read"),remove:t(function(s){this.write(s,"",Date.now()-864e5)},"remove")}},"standardBrowserEnv")():t(function(){return{write:t(function(){},"write"),read:t(function(){return null},"read"),remove:t(function(){},"remove")}},"nonStandardBrowserEnv")(),B}t(mr,"requireCookies");var D,ce;function vr(){return ce||(ce=1,D=t(function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},"isAbsoluteURL")),D}t(vr,"requireIsAbsoluteURL");var $,le;function yr(){return le||(le=1,$=t(function(e,a){return a?e.replace(/\/+$/,"")+"/"+a.replace(/^\/+/,""):e},"combineURLs")),$}t(yr,"requireCombineURLs");var I,de;function br(){if(de)return I;de=1;var r=vr(),e=yr();return I=t(function(s,n){return s&&!r(n)?e(s,n):n},"buildFullPath"),I}t(br,"requireBuildFullPath");var F,he;function wr(){if(he)return F;he=1;var r=y,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return F=t(function(s){var n={},i,u,f;return s&&r.forEach(s.split(`
`),t(function(o){if(f=o.indexOf(":"),i=r.trim(o.substr(0,f)).toLowerCase(),u=r.trim(o.substr(f+1)),i){if(n[i]&&e.indexOf(i)>=0)return;i==="set-cookie"?n[i]=(n[i]?n[i]:[]).concat([u]):n[i]=n[i]?n[i]+", "+u:u}},"parser")),n},"parseHeaders"),F}t(wr,"requireParseHeaders");var H,pe;function Er(){if(pe)return H;pe=1;var r=y;return H=r.isStandardBrowserEnv()?t(function(){var a=/(msie|trident)/i.test(navigator.userAgent),s=document.createElement("a"),n;function i(u){var f=u;return a&&(s.setAttribute("href",f),f=s.href),s.setAttribute("href",f),{href:s.href,protocol:s.protocol?s.protocol.replace(/:$/,""):"",host:s.host,search:s.search?s.search.replace(/^\?/,""):"",hash:s.hash?s.hash.replace(/^#/,""):"",hostname:s.hostname,port:s.port,pathname:s.pathname.charAt(0)==="/"?s.pathname:"/"+s.pathname}}return t(i,"resolveURL"),n=i(window.location.href),t(function(f){var d=r.isString(f)?i(f):f;return d.protocol===n.protocol&&d.host===n.host},"isURLSameOrigin")},"standardBrowserEnv")():t(function(){return t(function(){return!0},"isURLSameOrigin")},"nonStandardBrowserEnv")(),H}t(Er,"requireIsURLSameOrigin");var M,me;function ve(){if(me)return M;me=1;var r=y,e=pr(),a=mr(),s=Ue,n=br(),i=wr(),u=Er(),f=Le();return M=t(function(o){return new Promise(t(function(p,h){var l=o.data,S=o.headers,O=o.responseType;r.isFormData(l)&&delete S["Content-Type"];var c=new XMLHttpRequest;if(o.auth){var Je=o.auth.username||"",ze=o.auth.password?unescape(encodeURIComponent(o.auth.password)):"";S.Authorization="Basic "+btoa(Je+":"+ze)}var ne=n(o.baseURL,o.url);c.open(o.method.toUpperCase(),s(ne,o.params,o.paramsSerializer),!0),c.timeout=o.timeout;function ae(){if(!!c){var E="getAllResponseHeaders"in c?i(c.getAllResponseHeaders()):null,w=!O||O==="text"||O==="json"?c.responseText:c.response,A={data:w,status:c.status,statusText:c.statusText,headers:E,config:o,request:c};e(p,h,A),c=null}}if(t(ae,"onloadend"),"onloadend"in c?c.onloadend=ae:c.onreadystatechange=t(function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(ae)},"handleLoad"),c.onabort=t(function(){!c||(h(f("Request aborted",o,"ECONNABORTED",c)),c=null)},"handleAbort"),c.onerror=t(function(){h(f("Network Error",o,null,c)),c=null},"handleError"),c.ontimeout=t(function(){var w="timeout of "+o.timeout+"ms exceeded";o.timeoutErrorMessage&&(w=o.timeoutErrorMessage),h(f(w,o,o.transitional&&o.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",c)),c=null},"handleTimeout"),r.isStandardBrowserEnv()){var se=(o.withCredentials||u(ne))&&o.xsrfCookieName?a.read(o.xsrfCookieName):void 0;se&&(S[o.xsrfHeaderName]=se)}"setRequestHeader"in c&&r.forEach(S,t(function(w,A){typeof l>"u"&&A.toLowerCase()==="content-type"?delete S[A]:c.setRequestHeader(A,w)},"setRequestHeader")),r.isUndefined(o.withCredentials)||(c.withCredentials=!!o.withCredentials),O&&O!=="json"&&(c.responseType=o.responseType),typeof o.onDownloadProgress=="function"&&c.addEventListener("progress",o.onDownloadProgress),typeof o.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",o.onUploadProgress),o.cancelToken&&o.cancelToken.promise.then(t(function(w){!c||(c.abort(),h(w),c=null)},"onCanceled")),l||(l=null),c.send(l)},"dispatchXhrRequest"))},"xhrAdapter"),M}t(ve,"requireXhr");var m=y,ye=hr,gr=ke,xr={"Content-Type":"application/x-www-form-urlencoded"};function be(r,e){!m.isUndefined(r)&&m.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}t(be,"setContentTypeIfUnset");function Rr(){var r;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(r=ve()),r}t(Rr,"getDefaultAdapter");function Cr(r,e,a){if(m.isString(r))try{return(e||JSON.parse)(r),m.trim(r)}catch(s){if(s.name!=="SyntaxError")throw s}return(a||JSON.stringify)(r)}t(Cr,"stringifySafely");var T={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:Rr(),transformRequest:[t(function(e,a){return ye(a,"Accept"),ye(a,"Content-Type"),m.isFormData(e)||m.isArrayBuffer(e)||m.isBuffer(e)||m.isStream(e)||m.isFile(e)||m.isBlob(e)?e:m.isArrayBufferView(e)?e.buffer:m.isURLSearchParams(e)?(be(a,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):m.isObject(e)||a&&a["Content-Type"]==="application/json"?(be(a,"application/json"),Cr(e)):e},"transformRequest")],transformResponse:[t(function(e){var a=this.transitional,s=a&&a.silentJSONParsing,n=a&&a.forcedJSONParsing,i=!s&&this.responseType==="json";if(i||n&&m.isString(e)&&e.length)try{return JSON.parse(e)}catch(u){if(i)throw u.name==="SyntaxError"?gr(u,this,"E_JSON_PARSE"):u}return e},"transformResponse")],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:t(function(e){return e>=200&&e<300},"validateStatus")};T.headers={common:{Accept:"application/json, text/plain, */*"}};m.forEach(["delete","get","head"],t(function(e){T.headers[e]={}},"forEachMethodNoData"));m.forEach(["post","put","patch"],t(function(e){T.headers[e]=m.merge(xr)},"forEachMethodWithData"));var re=T,Sr=y,Or=re,Ar=t(function(e,a,s){var n=this||Or;return Sr.forEach(s,t(function(u){e=u.call(n,e,a)},"transform")),e},"transformData"),_,we;function Be(){return we||(we=1,_=t(function(e){return!!(e&&e.__CANCEL__)},"isCancel")),_}t(Be,"requireIsCancel");var Ee=y,J=Ar,qr=Be(),jr=re;function z(r){r.cancelToken&&r.cancelToken.throwIfRequested()}t(z,"throwIfCancellationRequested");var Nr=t(function(e){z(e),e.headers=e.headers||{},e.data=J.call(e,e.data,e.headers,e.transformRequest),e.headers=Ee.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Ee.forEach(["delete","get","head","post","put","patch","common"],t(function(n){delete e.headers[n]},"cleanHeaderConfig"));var a=e.adapter||jr.adapter;return a(e).then(t(function(n){return z(e),n.data=J.call(e,n.data,n.headers,e.transformResponse),n},"onAdapterResolution"),t(function(n){return qr(n)||(z(e),n&&n.response&&(n.response.data=J.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)},"onAdapterRejection"))},"dispatchRequest"),v=y,De=t(function(e,a){a=a||{};var s={},n=["url","method","data"],i=["headers","auth","proxy","params"],u=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],f=["validateStatus"];function d(h,l){return v.isPlainObject(h)&&v.isPlainObject(l)?v.merge(h,l):v.isPlainObject(l)?v.merge({},l):v.isArray(l)?l.slice():l}t(d,"getMergedValue");function o(h){v.isUndefined(a[h])?v.isUndefined(e[h])||(s[h]=d(void 0,e[h])):s[h]=d(e[h],a[h])}t(o,"mergeDeepProperties"),v.forEach(n,t(function(l){v.isUndefined(a[l])||(s[l]=d(void 0,a[l]))},"valueFromConfig2")),v.forEach(i,o),v.forEach(u,t(function(l){v.isUndefined(a[l])?v.isUndefined(e[l])||(s[l]=d(void 0,e[l])):s[l]=d(void 0,a[l])},"defaultToConfig2")),v.forEach(f,t(function(l){l in a?s[l]=d(e[l],a[l]):l in e&&(s[l]=d(void 0,e[l]))},"merge"));var C=n.concat(i).concat(u).concat(f),p=Object.keys(e).concat(Object.keys(a)).filter(t(function(l){return C.indexOf(l)===-1},"filterAxiosKeys"));return v.forEach(p,o),s},"mergeConfig");const Pr="axios",Tr="0.21.4",Ur="Promise based HTTP client for the browser and node.js",kr="index.js",Lr={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},Br={type:"git",url:"https://github.com/axios/axios.git"},Dr=["xhr","http","ajax","promise","node"],$r="Matt Zabriskie",Ir="MIT",Fr={url:"https://github.com/axios/axios/issues"},Hr="https://axios-http.com",Mr={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},_r={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},Jr="dist/axios.min.js",zr="dist/axios.min.js",Vr="./index.d.ts",Kr={"follow-redirects":"^1.14.0"},Xr=[{path:"./dist/axios.min.js",threshold:"5kB"}],Wr={name:Pr,version:Tr,description:Ur,main:kr,scripts:Lr,repository:Br,keywords:Dr,author:$r,license:Ir,bugs:Fr,homepage:Hr,devDependencies:Mr,browser:_r,jsdelivr:Jr,unpkg:zr,typings:Vr,dependencies:Kr,bundlesize:Xr};var $e=Wr,te={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){te[r]=t(function(s){return typeof s===r||"a"+(e<1?"n ":" ")+r},"validator")});var ge={},Gr=$e.version.split(".");function Ie(r,e){for(var a=e?e.split("."):Gr,s=r.split("."),n=0;n<3;n++){if(a[n]>s[n])return!0;if(a[n]<s[n])return!1}return!1}t(Ie,"isOlderVersion");te.transitional=t(function(e,a,s){var n=a&&Ie(a);function i(u,f){return"[Axios v"+$e.version+"] Transitional option '"+u+"'"+f+(s?". "+s:"")}return t(i,"formatMessage"),function(u,f,d){if(e===!1)throw new Error(i(f," has been removed in "+a));return n&&!ge[f]&&(ge[f]=!0,console.warn(i(f," has been deprecated since v"+a+" and will be removed in the near future"))),e?e(u,f,d):!0}},"transitional");function Yr(r,e,a){if(typeof r!="object")throw new TypeError("options must be an object");for(var s=Object.keys(r),n=s.length;n-- >0;){var i=s[n],u=e[i];if(u){var f=r[i],d=f===void 0||u(f,i,r);if(d!==!0)throw new TypeError("option "+i+" must be "+d);continue}if(a!==!0)throw Error("Unknown option "+i)}}t(Yr,"assertOptions");var Zr={isOlderVersion:Ie,assertOptions:Yr,validators:te},Fe=y,Qr=Ue,xe=lr,Re=Nr,U=De,He=Zr,R=He.validators;function q(r){this.defaults=r,this.interceptors={request:new xe,response:new xe}}t(q,"Axios$1");q.prototype.request=t(function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=U(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var a=e.transitional;a!==void 0&&He.assertOptions(a,{silentJSONParsing:R.transitional(R.boolean,"1.0.0"),forcedJSONParsing:R.transitional(R.boolean,"1.0.0"),clarifyTimeoutError:R.transitional(R.boolean,"1.0.0")},!1);var s=[],n=!0;this.interceptors.request.forEach(t(function(h){typeof h.runWhen=="function"&&h.runWhen(e)===!1||(n=n&&h.synchronous,s.unshift(h.fulfilled,h.rejected))},"unshiftRequestInterceptors"));var i=[];this.interceptors.response.forEach(t(function(h){i.push(h.fulfilled,h.rejected)},"pushResponseInterceptors"));var u;if(!n){var f=[Re,void 0];for(Array.prototype.unshift.apply(f,s),f=f.concat(i),u=Promise.resolve(e);f.length;)u=u.then(f.shift(),f.shift());return u}for(var d=e;s.length;){var o=s.shift(),C=s.shift();try{d=o(d)}catch(p){C(p);break}}try{u=Re(d)}catch(p){return Promise.reject(p)}for(;i.length;)u=u.then(i.shift(),i.shift());return u},"request");q.prototype.getUri=t(function(e){return e=U(this.defaults,e),Qr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},"getUri");Fe.forEach(["delete","get","head","options"],t(function(e){q.prototype[e]=function(a,s){return this.request(U(s||{},{method:e,url:a,data:(s||{}).data}))}},"forEachMethodNoData"));Fe.forEach(["post","put","patch"],t(function(e){q.prototype[e]=function(a,s,n){return this.request(U(n||{},{method:e,url:a,data:s}))}},"forEachMethodWithData"));var et=q,V,Ce;function Me(){if(Ce)return V;Ce=1;function r(e){this.message=e}return t(r,"Cancel"),r.prototype.toString=t(function(){return"Cancel"+(this.message?": "+this.message:"")},"toString"),r.prototype.__CANCEL__=!0,V=r,V}t(Me,"requireCancel");var K,Se;function rt(){if(Se)return K;Se=1;var r=Me();function e(a){if(typeof a!="function")throw new TypeError("executor must be a function.");var s;this.promise=new Promise(t(function(u){s=u},"promiseExecutor"));var n=this;a(t(function(u){n.reason||(n.reason=new r(u),s(n.reason))},"cancel"))}return t(e,"CancelToken"),e.prototype.throwIfRequested=t(function(){if(this.reason)throw this.reason},"throwIfRequested"),e.source=t(function(){var s,n=new e(t(function(u){s=u},"executor"));return{token:n,cancel:s}},"source"),K=e,K}t(rt,"requireCancelToken");var X,Oe;function tt(){return Oe||(Oe=1,X=t(function(e){return t(function(s){return e.apply(null,s)},"wrap")},"spread")),X}t(tt,"requireSpread");var W,Ae;function nt(){return Ae||(Ae=1,W=t(function(e){return typeof e=="object"&&e.isAxiosError===!0},"isAxiosError")),W}t(nt,"requireIsAxiosError");var qe=y,at=Ne,N=et,st=De,it=re;function _e(r){var e=new N(r),a=at(N.prototype.request,e);return qe.extend(a,N.prototype,e),qe.extend(a,e),a}t(_e,"createInstance");var b=_e(it);b.Axios=N;b.create=t(function(e){return _e(st(b.defaults,e))},"create");b.Cancel=Me();b.CancelToken=rt();b.isCancel=Be();b.all=t(function(e){return Promise.all(e)},"all");b.spread=tt();b.isAxiosError=nt();Z.exports=b;Z.exports.default=b;(function(r){r.exports=Z.exports})(je);const ft=Ke(je.exports);export{ft as a};
//# sourceMappingURL=index.b6a74731.js.map
