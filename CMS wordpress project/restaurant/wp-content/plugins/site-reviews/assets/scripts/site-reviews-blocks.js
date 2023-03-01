/*! For license information please see site-reviews-blocks.js.LICENSE.txt */
!function(){var e={7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}},2858:function(e){e.exports=function(e){if(Array.isArray(e))return e}},7154:function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},t.apply(this,arguments)}e.exports=t},3884:function(e){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,s=!1,r=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){s=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(s)throw r}}return n}}},521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},6479:function(e,t,n){var i=n(7316);e.exports=function(e,t){if(null==e)return{};var n,s,r=i(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}},7316:function(e){e.exports=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}},3038:function(e,t,n){var i=n(2858),s=n(3884),r=n(379),a=n(521);e.exports=function(e,t){return i(e)||s(e,t)||r(e,t)||a()}},379:function(e,t,n){var i=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}},2408:function(e,t,n){"use strict";var i=n(9424),s="function"==typeof Symbol&&Symbol.for,r=s?Symbol.for("react.element"):60103,a=s?Symbol.for("react.portal"):60106,o=s?Symbol.for("react.fragment"):60107,l=s?Symbol.for("react.strict_mode"):60108,u=s?Symbol.for("react.profiler"):60114,c=s?Symbol.for("react.provider"):60109,d=s?Symbol.for("react.context"):60110,p=s?Symbol.for("react.forward_ref"):60112,m=s?Symbol.for("react.suspense"):60113,v=s?Symbol.for("react.memo"):60115,f=s?Symbol.for("react.lazy"):60116,g="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function b(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||h}function x(){}function _(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=b.prototype;var S=_.prototype=new x;S.constructor=_,i(S,b.prototype),S.isPureReactComponent=!0;var j={current:null},C=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var i,s={},a=null,o=null;if(null!=t)for(i in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(a=""+t.key),t)C.call(t,i)&&!k.hasOwnProperty(i)&&(s[i]=t[i]);var l=arguments.length-2;if(1===l)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===s[i]&&(s[i]=l[i]);return{$$typeof:r,type:e,key:a,ref:o,props:s,_owner:j.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var I=/\/+/g,L=[];function A(e,t,n,i){if(L.length){var s=L.pop();return s.result=e,s.keyPrefix=t,s.func=n,s.context=i,s.count=0,s}return{result:e,keyPrefix:t,func:n,context:i,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>L.length&&L.push(e)}function E(e,t,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var o=!1;if(null===e)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case r:case a:o=!0}}if(o)return n(i,e,""===t?"."+G(e,0):t),1;if(o=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=t+G(s=e[l],l);o+=E(s,u,n,i)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=g&&e[g]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)o+=E(s=s.value,u=t+G(s,l++),n,i);else if("object"===s)throw n=""+e,Error(y(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return o}function P(e,t,n){return null==e?0:E(e,"",t,n)}function G(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function N(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var i=e.result,s=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?z(e,i,n,(function(e){return e})):null!=e&&(O(e)&&(e=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,s+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(I,"$&/")+"/")+n)),i.push(e))}function z(e,t,n,i,s){var r="";null!=n&&(r=(""+n).replace(I,"$&/")+"/"),P(e,M,t=A(t,r,i,s)),D(t)}var U={current:null};function $(){var e=U.current;if(null===e)throw Error(y(321));return e}t.createElement=R},7294:function(e,t,n){"use strict";e.exports=n(2408)},9424:function(e){"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function s(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var a,o,l=s(e),u=1;u<arguments.length;u++){for(var c in a=Object(arguments[u]))n.call(a,c)&&(l[c]=a[c]);if(t){o=t(a);for(var d=0;d<o.length;d++)i.call(a,o[d])&&(l[o[d]]=a[o[d]])}}return l}}},t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=n(7294),t=n(3038),i=n.n(t),s=wp.components.CheckboxControl,r=wp.element.useState,a=function(t,n,a){var o=[];return jQuery.each(t,(function(t,l){var u=r(!1),c=i()(u,2),d=c[0],p=c[1],m=n.split(",").indexOf(t)>-1;o.push((0,e.createElement)(s,{key:"hide-".concat(t),className:"glsr-checkbox-control",checked:m||d,label:l,onChange:function(e){p(e),n=_.without(_.without(n.split(","),""),t),e&&n.push(t),a({hide:n.toString()})}}))})),o},o=(0,e.createElement)("svg",{width:"22px",height:"22px",viewBox:"0 0 22 22",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M11 2l-3 6-6 .75 4.13 4.62-1.13 6.63 6-3 6 3-1.12-6.63 4.12-4.62-6-.75-3-6zm0 2.24l2.34 4.69 4.65.58-3.18 3.56.87 5.15-4.68-2.34v-11.64zm8.28-.894v.963h-3.272v2.691h-1.017v-6.3h4.496v.963h-3.479v1.683h3.272z"})),l=(0,e.createElement)("svg",{width:"22px",height:"22px",viewBox:"0 0 22 22",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M11 2l-3 6-6 .75 4.13 4.62-1.13 6.63 6-3 6 3-1.12-6.63 4.12-4.62-6-.75-3-6zm0 2.24l2.34 4.69 4.65.58-3.18 3.56.87 5.15-4.68-2.34v-11.64zm3.681-3.54h2.592c1.449 0 2.232.648 2.232 1.823 0 1.071-.819 1.782-2.102 1.827l2.075 2.651h-1.26l-2.007-2.651h-.513v2.651h-1.017v-6.3zm2.565.954h-1.548v1.773h1.548c.819 0 1.202-.297 1.202-.905 0-.599-.405-.869-1.202-.869z"})),u=(0,e.createElement)("svg",{width:"22px",height:"22px",viewBox:"0 0 22 22",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M11 2l-3 6-6 .75 4.13 4.62-1.13 6.63 6-3 6 3-1.12-6.63 4.12-4.62-6-.75-3-6zm0 2.24l2.34 4.69 4.65.58-3.18 3.56.87 5.15-4.68-2.34v-11.64zm8.415-2.969l-.518.824c-.536-.342-1.13-.54-1.769-.54-.842 0-1.418.365-1.418.941 0 .522.491.725 1.31.842l.437.059c1.022.14 2.03.563 2.03 1.733 0 1.283-1.161 1.985-2.525 1.985-.855 0-1.881-.284-2.534-.846l.554-.81c.432.396 1.247.693 1.976.693.824 0 1.472-.351 1.472-.932 0-.495-.495-.725-1.418-.851l-.491-.068c-.936-.131-1.868-.572-1.868-1.742 0-1.265 1.121-1.967 2.484-1.967.918 0 1.643.257 2.277.68z"})),c=wp.i18n._x,d=[{label:"- "+c("Select","admin-text","site-reviews")+" -",value:""},{label:"- "+c("Select Multiple Post IDs","admin-text","site-reviews")+" -",value:"custom"},{label:c("Assign to the Current Page","admin-text","site-reviews"),value:"post_id"},{label:c("Assign to the Parent Page","admin-text","site-reviews"),value:"parent_id"}],p=wp.i18n._x,m=[],v={label:"- "+p("Select","admin-text","site-reviews")+" -",value:""},f={label:"- "+p("Select Multiple Categories","admin-text","site-reviews")+" -",value:"glsr_custom"};wp.apiFetch({path:"/site-reviews/v1/categories?per_page=50"}).then((function(e){m.push(v),m.push(f),jQuery.each(e,(function(e,t){m.push({label:"".concat(t.name," (").concat(t.slug,")"),value:t.id})}))}));var g=m,y=wp.i18n._x,h=[],w={label:"- "+y("Select","admin-text","site-reviews")+" -",value:""},b={label:"- "+y("Select Multiple Users","admin-text","site-reviews")+" -",value:"glsr_custom"};wp.apiFetch({path:"/wp/v2/users?per_page=50"}).then((function(e){h.push(w),h.push(b),jQuery.each(e,(function(e,t){h.push({label:t.name+" ("+t.slug+")",value:t.id})}))}));var x=h,S=n(7154),j=n.n(S),C=n(6479),k=n.n(C),R=(wp.i18n._x,wp.components),O=R.BaseControl,I=(R.TextControl,lodash.isEmpty),L=wp.compose.useInstanceId;function A(t){var n=t.children,i=t.custom_value,s=void 0===i?"custom":i,r=t.help,a=t.label,o=t.onChange,l=t.options,u=void 0===l?[]:l,c=t.className,d=t.hideLabelFromVision,p=(t.selectedValue,k()(t,["children","custom_value","help","label","onChange","options","className","hideLabelFromVision","selectedValue"])),m=L(A),v="inspector-select-control-".concat(m),f=p.value;return!I(u)&&(0,e.createElement)(O,{label:a,hideLabelFromVision:d,id:v,help:r,className:c},(0,e.createElement)("select",j()({id:v,className:"components-select-control__input",onChange:function(e){o(e.target.value)},"aria-describedby":r?"".concat(v,"__help"):void 0},p),u.map((function(t,n){return(0,e.createElement)("option",{key:"".concat(t.label,"-").concat(t.value,"-").concat(n),value:t.value,disabled:t.disabled},t.label)}))),s===f&&n)}var D=wp.i18n._x,E=wp.blocks.registerBlockType,P=wp.blockEditor,G=P.InspectorAdvancedControls,N=P.InspectorControls,M=wp.components,z=M.PanelBody,U=(M.SelectControl,M.TextControl),$=wp.serverSideRender,Q=GLSR.nameprefix+"/form",T=(E(Q,{attributes:{assign_to:{default:"",type:"string"},assigned_posts:{default:"",type:"string"},assigned_terms:{default:"",type:"string"},assigned_users:{default:"",type:"string"},category:{default:"",type:"string"},className:{default:"",type:"string"},hide:{default:"",type:"string"},id:{default:"",type:"string"},user:{default:"",type:"string"}},category:GLSR.nameprefix,description:D("Display a review form.","admin-text","site-reviews"),edit:function(t){var n=t.attributes,i=n.assign_to,s=n.assigned_posts,r=n.assigned_terms,o=n.assigned_users,l=n.category,u=n.hide,c=n.id,p=n.user,m=(t.className,t.setAttributes),v={assign_to:(0,e.createElement)(A,{key:"assigned_posts",label:D("Assign Reviews to a Post ID","admin-text","site-reviews"),onChange:function(e){return m({assign_to:e,assigned_posts:"custom"===e?s:""})},options:d,value:i},(0,e.createElement)(U,{className:"glsr-base-conditional-control",help:D("Separate with commas.","admin-text","site-reviews"),onChange:function(e){return m({assigned_posts:e})},placeholder:D("Enter the Post IDs","admin-text","site-reviews"),type:"text",value:s})),category:(0,e.createElement)(A,{key:"assigned_terms",custom_value:"glsr_custom",label:D("Assign Reviews to a Category","admin-text","site-reviews"),onChange:function(e){return m({category:e,assigned_terms:"glsr_custom"===e?r:""})},options:g,value:l},(0,e.createElement)(U,{className:"glsr-base-conditional-control",help:D("Separate with commas.","admin-text","site-reviews"),onChange:function(e){return m({assigned_terms:e})},placeholder:D("Enter the Category IDs or slugs","admin-text","site-reviews"),type:"text",value:r})),user:(0,e.createElement)(A,{key:"assigned_users",custom_value:"glsr_custom",label:D("Assign Reviews to a User","admin-text","site-reviews"),onChange:function(e){return m({user:e,assigned_users:"glsr_custom"===e?o:""})},options:x,value:p},(0,e.createElement)(U,{className:"glsr-base-conditional-control",help:D("Separate with commas.","admin-text","site-reviews"),onChange:function(e){return m({assigned_users:e})},placeholder:D("Enter the User IDs or usernames","admin-text","site-reviews"),type:"text",value:o})),hide:a(GLSR.hideoptions.site_reviews_form,u,m)},f={id:(0,e.createElement)(U,{label:D("Custom ID","admin-text","site-reviews"),onChange:function(e){return m({id:e})},value:c})};return[(0,e.createElement)(N,null,(0,e.createElement)(z,{title:D("Settings","admin-text","site-reviews")},Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".form.InspectorControls",v,t)))),(0,e.createElement)(G,null,Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".form.InspectorAdvancedControls",f,t))),(0,e.createElement)($,{block:Q,attributes:t.attributes})]},example:{},icon:{src:o},keywords:["reviews","form"],save:function(){return null},title:D("Submit a Review","admin-text","site-reviews")}),wp.i18n._x),q=[{label:"- "+T("Select","admin-text","site-reviews")+" -",value:""},{label:"- "+T("Select Multiple Post IDs","admin-text","site-reviews")+" -",value:"custom"},{label:T("Assigned to the Current Page","admin-text","site-reviews"),value:"post_id"},{label:T("Assigned to the Parent Page","admin-text","site-reviews"),value:"parent_id"}],B={label:"- "+(0,wp.i18n._x)("Select","admin-text","site-reviews")+" -",value:""},F=[];wp.apiFetch({path:"/site-reviews/v1/types?per_page=50"}).then((function(e){e.length<2||(F.push(B),jQuery.each(e,(function(e,t){F.push({label:t.name,value:t.id})})))}));var V=F,H=wp.i18n._x,J=wp.blocks.registerBlockType,K=wp.blockEditor,W=K.InspectorAdvancedControls,X=K.InspectorControls,Y=wp.components,Z=Y.PanelBody,ee=Y.RangeControl,te=Y.SelectControl,ne=Y.TextControl,ie=Y.ToggleControl,se=wp.serverSideRender,re=GLSR.nameprefix+"/reviews";wp.hooks.addFilter("blocks.getBlockAttributes",re,(function(e,t,n,i){return i&&i.count&&(e.display=i.count),e}));J(re,{attributes:{assigned_to:{default:"",type:"string"},assigned_posts:{default:"",type:"string"},assigned_terms:{default:"",type:"string"},assigned_users:{default:"",type:"string"},category:{default:"",type:"string"},className:{default:"",type:"string"},display:{default:5,type:"number"},hide:{default:"",type:"string"},id:{default:"",type:"string"},pagination:{default:"",type:"string"},post_id:{default:"",type:"string"},rating:{default:0,type:"number"},schema:{default:!1,type:"boolean"},type:{default:"local",type:"string"},user:{default:"",type:"string"}},category:GLSR.nameprefix,description:H("Display your most recent reviews.","admin-text","site-reviews"),edit:function(t){t.attributes.post_id=jQuery("#post_ID").val();var n=t.attributes,i=n.assigned_to,s=n.assigned_posts,r=n.assigned_terms,o=n.assigned_users,l=n.category,u=n.display,c=n.hide,d=n.id,p=n.pagination,m=n.rating,v=n.schema,f=n.type,y=n.user,h=(t.className,t.setAttributes),w={assigned_to:(0,e.createElement)(A,{key:"assigned_posts",label:H("Limit Reviews to an Assigned Post ID","admin-text","site-reviews"),onChange:function(e){return h({assigned_to:e,assigned_posts:"custom"===e?s:""})},options:q,value:i},(0,e.createElement)(ne,{className:"glsr-base-conditional-control",help:H("Separate with commas.","admin-text","site-reviews"),onChange:function(e){return h({assigned_posts:e})},placeholder:H("Enter the Post IDs","admin-text","site-reviews"),type:"text",value:s})),category:(0,e.createElement)(A,{key:"assigned_terms",custom_value:"glsr_custom",label:H("Limit Reviews to an Assigned Category","admin-text","site-reviews"),onChange:function(e){return h({category:e,assigned_terms:"glsr_custom"===e?r:""})},options:g,value:l},(0,e.createElement)(ne,{className:"glsr-base-conditional-control",help:H("Separate with commas.","admin-text","site-reviews"),onChange:function(e){return h({assigned_terms:e})},placeholder:H("Enter the Category IDs or slugs","admin-text","site-reviews"),type:"text",value:r})),user:(0,e.createElement)(A,{key:"assigned_users",custom_value:"glsr_custom",label:H("Limit Reviews to an Assigned User","admin-text","site-reviews"),onChange:function(e){return h({user:e,assigned_users:"glsr_custom"===e?o:""})},options:x,value:y},(0,e.createElement)(ne,{className:"glsr-base-conditional-control",help:H("Separate with commas.","admin-text","site-reviews"),onChange:function(e){return h({assigned_users:e})},placeholder:H("Enter the User IDs or usernames","admin-text","site-reviews"),type:"text",value:o})),pagination:(0,e.createElement)(te,{key:"pagination",label:H("Enable Pagination","admin-text","site-reviews"),onChange:function(e){return h({pagination:e})},options:[{label:"- "+H("Select","admin-text","site-reviews")+" -",value:""},{label:H("Enabled","admin-text","site-reviews"),value:"true"},{label:H("Enabled (using ajax)","admin-text","site-reviews"),value:"ajax"}],value:p}),type:(0,e.createElement)(te,{key:"type",label:H("Limit the Type of Reviews","admin-text","site-reviews"),onChange:function(e){return h({type:e})},options:V,value:f}),display:(0,e.createElement)(ee,{key:"display",label:H("Reviews Per Page","admin-text","site-reviews"),min:1,max:50,onChange:function(e){return h({display:e})},value:u}),rating:(0,e.createElement)(ee,{key:"rating",label:H("Minimum Rating","admin-text","site-reviews"),min:0,max:GLSR.maxrating,onChange:function(e){return h({rating:e})},value:m}),schema:(0,e.createElement)(ie,{key:"schema",checked:v,help:H("The schema should only be enabled once per page.","admin-text","site-reviews"),label:H("Enable the schema?","admin-text","site-reviews"),onChange:function(e){return h({schema:e})}}),hide:a(GLSR.hideoptions.site_reviews,c,h)},b={id:(0,e.createElement)(ne,{label:H("Custom ID","admin-text","site-reviews"),onChange:function(e){return h({id:e})},value:d})};return[(0,e.createElement)(X,null,(0,e.createElement)(Z,{title:H("Settings","admin-text","site-reviews")},Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".reviews.InspectorControls",w,t)))),(0,e.createElement)(W,null,Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".reviews.InspectorAdvancedControls",b,t))),(0,e.createElement)(se,{block:re,attributes:t.attributes})]},example:{attributes:{display:2,pagination:"ajax",rating:0}},icon:{src:l},keywords:["reviews"],save:function(){return null},title:H("Latest Reviews","admin-text","site-reviews")});var ae=wp.i18n._x,oe=wp.blocks.registerBlockType,le=wp.blockEditor,ue=le.InspectorAdvancedControls,ce=le.InspectorControls,de=wp.components,pe=de.PanelBody,me=de.RangeControl,ve=de.SelectControl,fe=de.TextControl,ge=de.ToggleControl,ye=wp.serverSideRender,he=GLSR.nameprefix+"/summary";oe(he,{attributes:{assigned_to:{default:"",type:"string"},assigned_posts:{default:"",type:"string"},assigned_terms:{default:"",type:"string"},assigned_users:{default:"",type:"string"},category:{default:"",type:"string"},className:{default:"",type:"string"},hide:{default:"",type:"string"},post_id:{default:"",type:"string"},rating:{default:0,type:"number"},schema:{default:!1,type:"boolean"},type:{default:"local",type:"string"},user:{default:"",type:"string"}},category:GLSR.nameprefix,description:ae("Display a summary of your reviews.","admin-text","site-reviews"),edit:function(t){t.attributes.post_id=jQuery("#post_ID").val();var n=t.attributes,i=n.assigned_to,s=n.assigned_posts,r=n.assigned_terms,o=n.assigned_users,l=n.category,u=(n.display,n.hide),c=(n.id,n.pagination,n.rating),d=n.schema,p=n.type,m=n.user,v=(t.className,t.setAttributes),f={assigned_to:(0,e.createElement)(A,{key:"assigned_posts",label:ae("Limit Reviews to an Assigned Post ID","admin-text","site-reviews"),onChange:function(e){return v({assigned_to:e,assigned_posts:"custom"===e?s:""})},options:q,value:i},(0,e.createElement)(fe,{className:"glsr-base-conditional-control",help:ae("Separate multiple IDs with commas.","admin-text","site-reviews"),onChange:function(e){return v({assigned_posts:e})},placeholder:ae("Enter the Post IDs","admin-text","site-reviews"),type:"text",value:s})),category:(0,e.createElement)(A,{key:"assigned_terms",custom_value:"glsr_custom",label:ae("Limit Reviews to an Assigned Category","admin-text","site-reviews"),onChange:function(e){return v({category:e,assigned_terms:"glsr_custom"===e?r:""})},options:g,value:l},(0,e.createElement)(fe,{className:"glsr-base-conditional-control",help:ae("Separate with commas.","admin-text","site-reviews"),onChange:function(e){return v({assigned_terms:e})},placeholder:ae("Enter the Category IDs or slugs","admin-text","site-reviews"),type:"text",value:r})),user:(0,e.createElement)(A,{key:"assigned_users",custom_value:"glsr_custom",label:ae("Limit Reviews to an Assigned User","admin-text","site-reviews"),onChange:function(e){return v({user:e,assigned_users:"glsr_custom"===e?o:""})},options:x,value:m},(0,e.createElement)(fe,{className:"glsr-base-conditional-control",help:ae("Separate with commas.","admin-text","site-reviews"),onChange:function(e){return v({assigned_users:e})},placeholder:ae("Enter the User IDs or usernames","admin-text","site-reviews"),type:"text",value:o})),type:(0,e.createElement)(ve,{key:"type",label:ae("Limit the Type of Reviews","admin-text","site-reviews"),onChange:function(e){return v({type:e})},options:V,value:p}),rating:(0,e.createElement)(me,{key:"rating",label:ae("Minimum Rating","admin-text","site-reviews"),min:0,max:GLSR.maxrating,onChange:function(e){return v({rating:e})},value:c}),schema:(0,e.createElement)(ge,{key:"schema",checked:d,help:ae("The schema should only be enabled once per page.","admin-text","site-reviews"),label:ae("Enable the schema?","admin-text","site-reviews"),onChange:function(e){return v({schema:e})}}),hide:a(GLSR.hideoptions.site_reviews_summary,u,v)};return[(0,e.createElement)(ce,null,(0,e.createElement)(pe,{title:ae("Settings","admin-text","site-reviews")},Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".summary.InspectorControls",f,t)))),(0,e.createElement)(ue,null,Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".summary.InspectorAdvancedControls",{},t))),(0,e.createElement)(ye,{block:he,attributes:t.attributes})]},example:{},icon:{src:u},keywords:["reviews","summary"],save:function(){return null},title:ae("Summary","admin-text","site-reviews")})}()}();