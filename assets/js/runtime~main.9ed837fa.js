!function(){"use strict";var e,a,f,t,c,b={},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var f=n[e]={id:e,loaded:!1,exports:{}};return b[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=b,r.c=n,e=[],r.O=function(a,f,t,c){if(!f){var b=1/0;for(u=0;u<e.length;u++){f=e[u][0],t=e[u][1],c=e[u][2];for(var n=!0,d=0;d<f.length;d++)(!1&c||b>=c)&&Object.keys(r.O).every((function(e){return r.O[e](f[d])}))?f.splice(d--,1):(n=!1,c<b&&(b=c));if(n){e.splice(u--,1);var o=t();void 0!==o&&(a=o)}}return a}c=c||0;for(var u=e.length;u>0&&e[u-1][2]>c;u--)e[u]=e[u-1];e[u]=[f,t,c]},r.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(a,{a:a}),a},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var c=Object.create(null);r.r(c);var b={};a=a||[null,f({}),f([]),f(f)];for(var n=2&t&&e;"object"==typeof n&&!~a.indexOf(n);n=f(n))Object.getOwnPropertyNames(n).forEach((function(a){b[a]=function(){return e[a]}}));return b.default=function(){return e},r.d(c,b),c},r.d=function(e,a){for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(a,f){return r.f[f](e,a),a}),[]))},r.u=function(e){return"assets/js/"+({53:"935f2afb",365:"04994dd7",421:"a54d478f",584:"3da68303",678:"51917f2b",761:"72641a3b",948:"8717b14a",1418:"db589b3c",1421:"0c08ae2c",1587:"1ab0be69",1593:"6a45d440",1914:"d9f32620",1976:"b647b723",2217:"1ecb7b9e",2267:"59362658",2362:"e273c56f",2446:"1696fafc",2535:"814f3328",2752:"eeb7ce5e",2867:"772176c5",2914:"f2f02b05",3016:"476abd87",3085:"1f391b9e",3089:"a6aa9e1f",3249:"92a00d83",3265:"c06b3fbf",3299:"c6c65275",3514:"73664a40",3520:"b0ab1070",3563:"1bd29514",3608:"9e4087bc",3718:"8a24f3cd",3992:"e28b30e2",4013:"01a85c17",4155:"64e0144d",4195:"c4f5d8e4",4461:"12b098a4",4758:"bdcf14e1",5350:"d6d0447d",5834:"dbcbcb8e",5923:"cdae5aa7",6073:"7722217f",6103:"ccc49370",6107:"ab76b7ee",6975:"131c70a1",7098:"009f8263",7192:"a3326843",7259:"afe0090b",7305:"ebfee794",7394:"999e5ba8",7414:"393be207",7491:"1b6b8e9a",7501:"3228d4af",7879:"fcdfc8aa",7918:"17896441",8010:"278582e9",8211:"ec789025",8450:"f21bad89",8610:"6875c492",8636:"f4f34a3a",8807:"ab8d38c6",9003:"925b3f96",9170:"b1ef6c7c",9199:"5fb5304d",9310:"64fe763a",9331:"ffeae624",9386:"347c9ef9",9388:"d47ef993",9514:"1be78505",9642:"7661071f",9885:"c2b4e041",9970:"9005de10"}[e]||e)+"."+{53:"6b2ef5da",365:"4edd1ebd",421:"44097696",584:"8742e3d5",678:"0cdd69aa",761:"ff81c7bb",948:"e8b49afb",1418:"e1a790bf",1421:"d04c10f7",1587:"7ec46705",1593:"d74eb957",1914:"b43a450e",1976:"ec699a16",2217:"15cb6d4a",2267:"ee95e9e4",2362:"fe15d313",2446:"8cb013b5",2535:"f45c8036",2572:"ead136a0",2752:"9ccf39e5",2867:"d4149c7d",2914:"4fc61eda",3016:"998349fe",3085:"1c108716",3089:"f89164fe",3249:"6e93bbea",3265:"7ee3a5e3",3299:"520d0fc1",3514:"b9843459",3520:"7e7f552a",3563:"1a11f8f3",3608:"b4f5194e",3718:"b9c2185c",3938:"9a4a967e",3992:"52b61644",4013:"f77c3253",4155:"867f08a1",4195:"a38e8f13",4461:"7e4216e4",4608:"737f1e1b",4758:"3768075f",5350:"8ac6f1d2",5684:"61d1b8af",5834:"9f09c3d5",5923:"d6322309",6073:"bb01e12b",6103:"4dd8b00b",6107:"4546a12e",6159:"9399aab7",6975:"aea22469",7098:"3ddfcded",7192:"27b8acd3",7259:"d6499af6",7305:"d401e43e",7394:"591c8b50",7414:"b62579ac",7491:"ad7510bd",7501:"df56544e",7566:"9e6f4f89",7879:"52fd3311",7918:"0f154dad",8010:"9bbc993d",8211:"07fc3a53",8450:"320cc46f",8610:"012cd8b5",8636:"e6e06271",8807:"3f380a21",9003:"c3a2d0eb",9170:"a1bb529d",9199:"1ddf5ee0",9310:"03b2a2b2",9331:"c643a8e4",9386:"c311cfbe",9388:"c91e26db",9514:"6fed2901",9642:"2d31c506",9727:"fd45a047",9885:"58022616",9970:"7f0d12c3"}[e]+".js"},r.miniCssF=function(e){return"assets/css/styles.ba08b36c.css"},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t={},c="mg-af-docusaurus:",r.l=function(e,a,f,b){if(t[e])t[e].push(a);else{var n,d;if(void 0!==f)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==c+f){n=i;break}}n||(d=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,r.nc&&n.setAttribute("nonce",r.nc),n.setAttribute("data-webpack",c+f),n.src=e),t[e]=[a];var s=function(a,f){n.onerror=n.onload=null,clearTimeout(l);var c=t[e];if(delete t[e],n.parentNode&&n.parentNode.removeChild(n),c&&c.forEach((function(e){return e(f)})),a)return a(f)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=s.bind(null,n.onerror),n.onload=s.bind(null,n.onload),d&&document.head.appendChild(n)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/data-detective/",r.gca=function(e){return e={17896441:"7918",59362658:"2267","935f2afb":"53","04994dd7":"365",a54d478f:"421","3da68303":"584","51917f2b":"678","72641a3b":"761","8717b14a":"948",db589b3c:"1418","0c08ae2c":"1421","1ab0be69":"1587","6a45d440":"1593",d9f32620:"1914",b647b723:"1976","1ecb7b9e":"2217",e273c56f:"2362","1696fafc":"2446","814f3328":"2535",eeb7ce5e:"2752","772176c5":"2867",f2f02b05:"2914","476abd87":"3016","1f391b9e":"3085",a6aa9e1f:"3089","92a00d83":"3249",c06b3fbf:"3265",c6c65275:"3299","73664a40":"3514",b0ab1070:"3520","1bd29514":"3563","9e4087bc":"3608","8a24f3cd":"3718",e28b30e2:"3992","01a85c17":"4013","64e0144d":"4155",c4f5d8e4:"4195","12b098a4":"4461",bdcf14e1:"4758",d6d0447d:"5350",dbcbcb8e:"5834",cdae5aa7:"5923","7722217f":"6073",ccc49370:"6103",ab76b7ee:"6107","131c70a1":"6975","009f8263":"7098",a3326843:"7192",afe0090b:"7259",ebfee794:"7305","999e5ba8":"7394","393be207":"7414","1b6b8e9a":"7491","3228d4af":"7501",fcdfc8aa:"7879","278582e9":"8010",ec789025:"8211",f21bad89:"8450","6875c492":"8610",f4f34a3a:"8636",ab8d38c6:"8807","925b3f96":"9003",b1ef6c7c:"9170","5fb5304d":"9199","64fe763a":"9310",ffeae624:"9331","347c9ef9":"9386",d47ef993:"9388","1be78505":"9514","7661071f":"9642",c2b4e041:"9885","9005de10":"9970"}[e]||e,r.p+r.u(e)},function(){var e={1303:0,532:0};r.f.j=function(a,f){var t=r.o(e,a)?e[a]:void 0;if(0!==t)if(t)f.push(t[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var c=new Promise((function(f,c){t=e[a]=[f,c]}));f.push(t[2]=c);var b=r.p+r.u(a),n=new Error;r.l(b,(function(f){if(r.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var c=f&&("load"===f.type?"missing":f.type),b=f&&f.target&&f.target.src;n.message="Loading chunk "+a+" failed.\n("+c+": "+b+")",n.name="ChunkLoadError",n.type=c,n.request=b,t[1](n)}}),"chunk-"+a,a)}},r.O.j=function(a){return 0===e[a]};var a=function(a,f){var t,c,b=f[0],n=f[1],d=f[2],o=0;if(b.some((function(a){return 0!==e[a]}))){for(t in n)r.o(n,t)&&(r.m[t]=n[t]);if(d)var u=d(r)}for(a&&a(f);o<b.length;o++)c=b[o],r.o(e,c)&&e[c]&&e[c][0](),e[b[o]]=0;return r.O(u)},f=self.webpackChunkmg_af_docusaurus=self.webpackChunkmg_af_docusaurus||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))}()}();