/*! For license information please see script.js.LICENSE.txt */
(()=>{"use strict";var e={388:(e,t,o)=>{o.r(t),o.d(t,{Properties:()=>r,VariableDescriptor:()=>n,bootstrapExtra:()=>$,findLayerBoundaries:()=>p,findLayersBoundaries:()=>u,getAllVariables:()=>a,getLayersMap:()=>l,initDoors:()=>H,initPropertiesTemplates:()=>M,initVariableActionLayer:()=>q});class r{constructor(e){this.properties=null!=e?e:[]}get(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.value));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const o=this.get(e);if(void 0!==o){if(typeof o!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return o}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const o=this.get(e);if(void 0===o)throw new Error('Property "'+e+'" is missing');if(typeof o!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return o}getType(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.type));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}}class n{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new r(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return!e||WA.player.tags.includes(e)}get isWritable(){const e=this.properties.getString("writableBy");return!e||WA.player.tags.includes(e)}}async function a(){const e=await WA.room.getTiledMap(),t=new Map;return s(e.layers,t),t}function s(e,t){for(const o of e)if("objectgroup"===o.type)for(const e of o.objects)"variable"===e.type&&t.set(e.name,new n(e));else"group"===o.type&&s(o.layers,t)}let i;async function l(){return void 0===i&&(i=async function(){return function(e){const t=new Map;return c(e.layers,"",t),t}(await WA.room.getTiledMap())}()),i}function c(e,t,o){for(const r of e)"group"===r.type?c(r.layers,t+r.name+"/",o):(r.name=t+r.name,o.set(r.name,r))}function p(e){let t=1/0,o=1/0,r=0,n=0;const a=e.data;if("string"==typeof a)throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<e.height;s++)for(let i=0;i<e.width;i++)0!==a[i+s*e.width]&&(t=Math.min(t,i),n=Math.max(n,i),o=Math.min(o,s),r=Math.max(r,s));return{top:o,left:t,right:n+1,bottom:r+1}}function u(e){let t=1/0,o=1/0,r=0,n=0;for(const a of e){const e=p(a);e.left<t&&(t=e.left),e.top<o&&(o=e.top),e.right>n&&(n=e.right),e.bottom>r&&(r=e.bottom)}return{top:o,left:t,right:n,bottom:r}}var h=Object.prototype.toString,f=Array.isArray||function(e){return"[object Array]"===h.call(e)};function g(e){return"function"==typeof e}function d(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function m(e,t){return null!=e&&"object"==typeof e&&t in e}var y=RegExp.prototype.test,v=/\S/;var b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},w=/\s*/,A=/\s+/,W=/\s*=/,S=/\s*\}/,k=/#|\^|\/|>|\{|&|=|!/;function E(e){this.string=e,this.tail=e,this.pos=0}function C(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function x(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}E.prototype.eos=function(){return""===this.tail},E.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var o=t[0];return this.tail=this.tail.substring(o.length),this.pos+=o.length,o},E.prototype.scanUntil=function(e){var t,o=this.tail.search(e);switch(o){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,o),this.tail=this.tail.substring(o)}return this.pos+=t.length,t},C.prototype.push=function(e){return new C(e,this)},C.prototype.lookup=function(e){var t,o,r,n=this.cache;if(n.hasOwnProperty(e))t=n[e];else{for(var a,s,i,l=this,c=!1;l;){if(e.indexOf(".")>0)for(a=l.view,s=e.split("."),i=0;null!=a&&i<s.length;)i===s.length-1&&(c=m(a,s[i])||(o=a,r=s[i],null!=o&&"object"!=typeof o&&o.hasOwnProperty&&o.hasOwnProperty(r))),a=a[s[i++]];else a=l.view[e],c=m(l.view,e);if(c){t=a;break}l=l.parent}n[e]=t}return g(t)&&(t=t.call(this.view)),t},x.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},x.prototype.parse=function(e,t){var o=this.templateCache,r=e+":"+(t||P.tags).join(":"),n=void 0!==o,a=n?o.get(r):void 0;return null==a&&(a=function(e,t){if(!e)return[];var o,r,n,a,s=!1,i=[],l=[],c=[],p=!1,u=!1,h="",g=0;function m(){if(p&&!u)for(;c.length;)delete l[c.pop()];else c=[];p=!1,u=!1}function b(e){if("string"==typeof e&&(e=e.split(A,2)),!f(e)||2!==e.length)throw new Error("Invalid tags: "+e);o=new RegExp(d(e[0])+"\\s*"),r=new RegExp("\\s*"+d(e[1])),n=new RegExp("\\s*"+d("}"+e[1]))}b(t||P.tags);for(var C,x,L,V,T,M,D=new E(e);!D.eos();){if(C=D.pos,L=D.scanUntil(o))for(var Z=0,R=L.length;Z<R;++Z)a=V=L.charAt(Z),function(e,t){return y.call(e,t)}(v,a)?(u=!0,s=!0,h+=" "):(c.push(l.length),h+=V),l.push(["text",V,C,C+1]),C+=1,"\n"===V&&(m(),h="",g=0,s=!1);if(!D.scan(o))break;if(p=!0,x=D.scan(k)||"name",D.scan(w),"="===x?(L=D.scanUntil(W),D.scan(W),D.scanUntil(r)):"{"===x?(L=D.scanUntil(n),D.scan(S),D.scanUntil(r),x="&"):L=D.scanUntil(r),!D.scan(r))throw new Error("Unclosed tag at "+D.pos);if(T=">"==x?[x,L,C,D.pos,h,g,s]:[x,L,C,D.pos],g++,l.push(T),"#"===x||"^"===x)i.push(T);else if("/"===x){if(!(M=i.pop()))throw new Error('Unopened section "'+L+'" at '+C);if(M[1]!==L)throw new Error('Unclosed section "'+M[1]+'" at '+C)}else"name"===x||"{"===x||"&"===x?u=!0:"="===x&&b(L)}if(m(),M=i.pop())throw new Error('Unclosed section "'+M[1]+'" at '+D.pos);return function(e){for(var t,o=[],r=o,n=[],a=0,s=e.length;a<s;++a)switch((t=e[a])[0]){case"#":case"^":r.push(t),n.push(t),r=t[4]=[];break;case"/":n.pop()[5]=t[2],r=n.length>0?n[n.length-1][4]:o;break;default:r.push(t)}return o}(function(e){for(var t,o,r=[],n=0,a=e.length;n<a;++n)(t=e[n])&&("text"===t[0]&&o&&"text"===o[0]?(o[1]+=t[1],o[3]=t[3]):(r.push(t),o=t));return r}(l))}(e,t),n&&o.set(r,a)),a},x.prototype.render=function(e,t,o,r){var n=this.getConfigTags(r),a=this.parse(e,n),s=t instanceof C?t:new C(t,void 0);return this.renderTokens(a,s,o,e,r)},x.prototype.renderTokens=function(e,t,o,r,n){for(var a,s,i,l="",c=0,p=e.length;c<p;++c)i=void 0,"#"===(s=(a=e[c])[0])?i=this.renderSection(a,t,o,r,n):"^"===s?i=this.renderInverted(a,t,o,r,n):">"===s?i=this.renderPartial(a,t,o,n):"&"===s?i=this.unescapedValue(a,t):"name"===s?i=this.escapedValue(a,t,n):"text"===s&&(i=this.rawValue(a)),void 0!==i&&(l+=i);return l},x.prototype.renderSection=function(e,t,o,r,n){var a=this,s="",i=t.lookup(e[1]);if(i){if(f(i))for(var l=0,c=i.length;l<c;++l)s+=this.renderTokens(e[4],t.push(i[l]),o,r,n);else if("object"==typeof i||"string"==typeof i||"number"==typeof i)s+=this.renderTokens(e[4],t.push(i),o,r,n);else if(g(i)){if("string"!=typeof r)throw new Error("Cannot use higher-order sections without the original template");null!=(i=i.call(t.view,r.slice(e[3],e[5]),(function(e){return a.render(e,t,o,n)})))&&(s+=i)}else s+=this.renderTokens(e[4],t,o,r,n);return s}},x.prototype.renderInverted=function(e,t,o,r,n){var a=t.lookup(e[1]);if(!a||f(a)&&0===a.length)return this.renderTokens(e[4],t,o,r,n)},x.prototype.indentPartial=function(e,t,o){for(var r=t.replace(/[^ \t]/g,""),n=e.split("\n"),a=0;a<n.length;a++)n[a].length&&(a>0||!o)&&(n[a]=r+n[a]);return n.join("\n")},x.prototype.renderPartial=function(e,t,o,r){if(o){var n=this.getConfigTags(r),a=g(o)?o(e[1]):o[e[1]];if(null!=a){var s=e[6],i=e[5],l=e[4],c=a;0==i&&l&&(c=this.indentPartial(a,l,s));var p=this.parse(c,n);return this.renderTokens(p,t,o,c,r)}}},x.prototype.unescapedValue=function(e,t){var o=t.lookup(e[1]);if(null!=o)return o},x.prototype.escapedValue=function(e,t,o){var r=this.getConfigEscape(o)||P.escape,n=t.lookup(e[1]);if(null!=n)return"number"==typeof n&&r===P.escape?String(n):r(n)},x.prototype.rawValue=function(e){return e[1]},x.prototype.getConfigTags=function(e){return f(e)?e:e&&"object"==typeof e?e.tags:void 0},x.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!f(e)?e.escape:void 0};var P={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){L.templateCache=e},get templateCache(){return L.templateCache}},L=new x;P.clearCache=function(){return L.clearCache()},P.parse=function(e,t){return L.parse(e,t)},P.render=function(e,t,o,r){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(f(n=e)?"array":typeof n)+'" was given as the first argument for mustache#render(template, view, partials)');var n;return L.render(e,t,o,r)},P.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return b[e]}))},P.Scanner=E,P.Context=C,P.Writer=x;const V=P;class T{constructor(e,t){this.template=e,this.state=t,this.ast=V.parse(e)}getValue(){return void 0===this.value&&(this.value=V.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const o of this.getUsedVariables().values())t.push(this.state.onVariableChange(o).subscribe((()=>{const t=V.render(this.template,this.state);t!==this.value&&(this.value=t,e(this.value))})));return{unsubscribe:()=>{for(const e of t)e.unsubscribe()}}}isPureString(){return 0===this.ast.length||1===this.ast.length&&"text"===this.ast[0][0]}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const o of e){const e=o[0],r=o[1],n=o[4];["name","&","#","^"].includes(e)&&t.add(r),void 0!==n&&"string"!=typeof n&&this.recursiveGetUsedVariables(n,t)}}}async function M(){var e;const t=await l();for(const[o,r]of t.entries()){const t=null!==(e=r.properties)&&void 0!==e?e:[];for(const e of t){if("int"===e.type||"bool"===e.type||"object"===e.type)continue;const t=new T(e.value,WA.state);if(t.isPureString())continue;const r=t.getValue();D(o,e.name,r),t.onChange((t=>{D(o,e.name,t)}))}}}function D(e,t,o){WA.room.setProperty(e,t,o),"visible"===t&&(o?WA.room.showLayer(e):WA.room.hideLayer(e))}const Z="https://unpkg.com/@workadventure/scripting-api-extra@1.0.4/dist";let R,U=0,G=0;function B(e){if(WA.state[e.name]){let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.showLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.hideLayer(e)}else{let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.hideLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.showLayer(e)}}function j(e){return e.map((e=>R.get(e))).filter((e=>"tilelayer"===(null==e?void 0:e.type)))}function z(e){const t=u(j(e)),o=32*((t.right-t.left)/2+t.left),r=32*((t.bottom-t.top)/2+t.top);return Math.sqrt(Math.pow(U-o,2)+Math.pow(G-r,2))}function O(e){WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]?function(e){const t=e.properties.getString("openSound"),o=e.properties.getNumber("soundRadius");let r=1;if(o){const t=z(e.properties.mustGetString("openLayer").split("\n"));if(t>o)return;r=1-t/o}t&&WA.sound.loadSound(t).play({volume:r})}(e):function(e){const t=e.properties.getString("closeSound"),o=e.properties.getNumber("soundRadius");let r=1;if(o){const t=z(e.properties.mustGetString("closeLayer").split("\n"));if(t>o)return;r=1-t/o}t&&WA.sound.loadSound(t).play({volume:r})}(e),B(e)})),B(e)}function N(e,t,o,r){const n=e.name;let a,s,i=!1;const l=o.getString("zone");if(!l)throw new Error('Missing "zone" property on doorstep layer "'+n+'"');const c=o.getString("tag");let p=!0;c&&!WA.player.tags.includes(c)&&(p=!1);const h=!!c;function f(){var e;a&&a.remove(),a=WA.ui.displayActionMessage({message:null!==(e=o.getString("closeTriggerMessage"))&&void 0!==e?e:"Press SPACE to close the door",callback:()=>{WA.state[t.name]=!1,g()}})}function g(){var e;a&&a.remove(),a=WA.ui.displayActionMessage({message:null!==(e=o.getString("openTriggerMessage"))&&void 0!==e?e:"Press SPACE to open the door",callback:()=>{WA.state[t.name]=!0,f()}})}function d(){s&&(WA.room.website.delete(s.name),s=void 0)}WA.room.onEnterZone(l,(()=>{i=!0,o.getBoolean("autoOpen")&&p?WA.state[t.name]=!0:WA.state[t.name]||(!h||p)&&h||!o.getString("code")&&!o.getString("codeVariable")?p&&(WA.state[t.name]?f():g()):function(e){const o=u(j(t.properties.mustGetString("closeLayer").split("\n")));s=WA.room.website.create({name:"doorKeypad"+e,url:r+"/keypad.html#"+encodeURIComponent(e),position:{x:32*o.right,y:32*o.top,width:96,height:128},allowApi:!0})}(n)})),WA.room.onLeaveZone(l,(()=>{i=!1,o.getBoolean("autoClose")&&(WA.state[t.name]=!1),a&&a.remove(),d()})),WA.state.onVariableChange(t.name).subscribe((()=>{i&&(o.getBoolean("autoClose")||!0!==WA.state[t.name]||f(),s&&!0===WA.state[t.name]&&d(),o.getBoolean("autoOpen")||!1!==WA.state[t.name]||g())}))}function _(e){void 0===WA.state[e.name]&&(WA.state[e.name]=0),WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]&&function(e){const t=e.properties.mustGetString("bellSound"),o=e.properties.getNumber("soundRadius");let r=1;if(o){const t=Math.sqrt(Math.pow(e.x-U,2)+Math.pow(e.y-G,2));if(t>o)return;r=1-t/o}WA.sound.loadSound(t).play({volume:r})}(e)}))}function I(e,t){let o;const r=t.mustGetString("zone"),n=t.getString("bellPopup");WA.room.onEnterZone(r,(()=>{var r;n?o=WA.ui.openPopup(n,"",[{label:null!==(r=t.getString("bellButtonText"))&&void 0!==r?r:"Ring",callback:()=>{WA.state[e]=WA.state[e]+1}}]):WA.state[e]=WA.state[e]+1})),WA.room.onLeaveZone(r,(()=>{o&&(o.close(),o=void 0)}))}async function H(e){e=null!=e?e:Z;const t=await a();R=await l();for(const e of t.values())e.properties.get("door")&&O(e),e.properties.get("bell")&&_(e);for(const o of R.values()){const n=new r(o.properties),a=n.getString("doorVariable");if(a&&"tilelayer"===o.type){const r=t.get(a);if(void 0===r)throw new Error('Cannot find variable "'+a+'" referred in the "doorVariable" property of layer "'+o.name+'"');N(o,r,n,e)}const s=n.getString("bellVariable");s&&I(s,n)}WA.player.onPlayerMove((e=>{U=e.x,G=e.y}))}function q(e){const t=e.getString("bindVariable");if(t){const o=e.getString("zone");if(!o)throw new Error('A layer with a "bindVariable" property must ALSO have a "zone" property.');!function(e,t,o,r,n,a){a&&!WA.player.tags.includes(a)||(void 0!==o&&WA.room.onEnterZone(t,(()=>{n||(WA.state[e]=o)})),void 0!==r&&WA.room.onLeaveZone(t,(()=>{WA.state[e]=r})))}(t,o,e.get("enterValue"),e.get("leaveValue"),e.getString("triggerMessage"),e.getString("tag"))}}function $(){return WA.onInit().then((()=>{H().catch((e=>console.error(e))),async function(){const e=await l();for(const t of e.values())q(new r(t.properties))}().catch((e=>console.error(e))),async function(e){const t=(await WA.room.getTiledMap()).layers.find((e=>"configuration"===e.name));if(t){const o=new r(t.properties).getString("tag");o&&!WA.player.tags.includes(o)||WA.ui.registerMenuCommand("Configure the room",(()=>{e=null!=e?e:Z,WA.nav.openCoWebSite(e+"configuration.html",!0)}))}}().catch((e=>console.error(e))),M().catch((e=>console.error(e)))}))}},607:function(e,t,o){var r=this&&this.__awaiter||function(e,t,o,r){return new(o||(o=Promise))((function(n,a){function s(e){try{l(r.next(e))}catch(e){a(e)}}function i(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,i)}l((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const n=o(388);let a,s;console.log("Script started successfully"),function(){r(this,void 0,void 0,(function*(){try{yield n.bootstrapExtra(),console.log("Scripting API Extra loaded successfully");const e=yield WA.room.website.get("cinemaScreen");e.x=1670,e.y=802,e.width=320,e.height=240;const t=yield WA.room.website.get("githubRepository");t.x=3328,t.y=1120,t.width=400,t.height=300}catch(e){console.error("Scripting API Extra ERROR",e)}}))}(),WA.room.onEnterZone("scrollMonitor",(()=>{WA.room.hideLayer("inactiveMonitor")})),WA.room.onLeaveZone("scrollMonitor",(()=>{WA.room.showLayer("inactiveMonitor")})),WA.room.onEnterZone("toRoom3",(()=>{WA.room.hideLayer("doorTipSwitch")})),WA.room.onLeaveZone("toRoom3",(()=>{WA.room.showLayer("doorTipSwitch")})),WA.room.onEnterZone("doorCode",(()=>{WA.room.hideLayer("ctaDigitCodeSwitch")})),WA.room.onLeaveZone("doorCode",(()=>{WA.room.showLayer("ctaDigitCodeSwitch")}));const i=[{zone:"needHelp",message:"Do you need some guidance? We are happy to help you out.",cta:[{label:"Meet us",className:"primary",callback:()=>WA.nav.openTab("https://play.workadventu.re/@/tcm/workadventure/welcome#meet-us")}]},{zone:"followUs",message:"Hey! Have you already started following us?",cta:[{label:"LinkedIn",className:"primary",callback:()=>WA.nav.openTab("https://www.linkedin.com/company/workadventu-re")},{label:"Twitter",className:"primary",callback:()=>WA.nav.openTab("https://twitter.com/workadventure_")}]},{zone:"doorCode",message:"Hello, I'm Mr Robot. The code is 5300.",cta:[]},{zone:"toRoom3",message:"Want to access the gaming room? Mr Robot can help you!",cta:[]},{zone:"gatherDesk",message:"Learn more about WorkAdventure events and our ProductHunt launch!",cta:[{label:"Dismiss",className:"normal",callback:()=>WA.state.saveVariable("dontShowGatherPopup",!0).then((()=>c()))}]},{zone:"workDesk",message:"See how your virtual office could be. This is a small example of course ;)",cta:[{label:"Dismiss",className:"normal",callback:()=>WA.state.saveVariable("dontShowWorkPopup",!0).then((()=>c()))}]},{zone:"collaborateDesk",message:"Test and feel live integrations of collaborative software!",cta:[{label:"Dismiss",className:"normal",callback:()=>WA.state.saveVariable("dontShowCollaboratePopup",!0).then((()=>c()))}]},{zone:"playDesk",message:"Experience multi and solo games, directly embedded into WorkAdventure!",cta:[{label:"Dismiss",className:"normal",callback:()=>WA.state.saveVariable("dontShowPlayPopup",!0).then((()=>c()))}]},{zone:"createDesk",message:"Do you want to create your own map by yourself? See how here!",cta:[{label:"Dismiss",className:"normal",callback:()=>WA.state.saveVariable("dontShowCreatePopup",!0).then((()=>c()))}]}];function l(e){a=e;const t=e+"Popup",o=i.find((t=>t.zone==e));void 0!==o&&(s=WA.ui.openPopup(t,o.message,o.cta))}function c(){void 0!==s&&(s.close(),s=void 0)}WA.room.onEnterZone("needHelp",(()=>{l("needHelp")})),WA.room.onLeaveZone("needHelp",c),WA.room.onEnterZone("followUs",(()=>{l("followUs")})),WA.room.onLeaveZone("followUs",c),WA.room.onEnterZone("gatherDesk",(()=>{WA.state.loadVariable("dontShowGatherPopup")||l("gatherDesk")})),WA.room.onLeaveZone("gatherDesk",c),WA.room.onEnterZone("workDesk",(()=>{WA.state.loadVariable("dontShowWorkPopup")||l("workDesk")})),WA.room.onLeaveZone("workDesk",c),WA.room.onEnterZone("collaborateDesk",(()=>{WA.state.loadVariable("dontShowCollaboratePopup")||l("collaborateDesk")})),WA.room.onLeaveZone("collaborateDesk",c),WA.room.onEnterZone("playDesk",(()=>{WA.state.loadVariable("dontShowPlayPopup")||l("playDesk")})),WA.room.onLeaveZone("playDesk",c),WA.room.onEnterZone("createDesk",(()=>{WA.state.loadVariable("dontShowCreatePopup")||l("createDesk")})),WA.room.onLeaveZone("createDesk",c),WA.room.onEnterZone("doorCode",(()=>{l("doorCode")})),WA.room.onLeaveZone("doorCode",c),WA.room.onEnterZone("toRoom3",(()=>{WA.state.loadVariable("room3Door")||l("toRoom3")})),WA.room.onLeaveZone("toRoom3",c)}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,o),a.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(607)})();
//# sourceMappingURL=script.js.map