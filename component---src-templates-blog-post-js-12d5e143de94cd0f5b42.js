(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{M4XY:function(e,t,n){(function(t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",l="["+a+"]",o="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",u="\\d+",i="[\\u2700-\\u27bf]",f="[a-z\\xdf-\\xf6\\xf8-\\xff]",c="[^\\ud800-\\udfff"+a+u+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",m="[A-Z\\xc0-\\xd6\\xd8-\\xde]",p="(?:"+f+"|"+c+")",x="(?:"+m+"|"+c+")",b="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",E="[\\ufe0e\\ufe0f]?"+b+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",d,s].join("|")+")[\\ufe0e\\ufe0f]?"+b+")*"),g="(?:"+[i,d,s].join("|")+")"+E,v=RegExp("['’]","g"),y=RegExp(o,"g"),h=RegExp([m+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[l,m,"$"].join("|")+")",x+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[l,m+p,"$"].join("|")+")",m+"?"+p+"+(?:['’](?:d|ll|m|re|s|t|ve))?",m+"+(?:['’](?:D|LL|M|RE|S|T|VE))?",u,g].join("|"),"g"),A=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,O="object"==typeof t&&t&&t.Object===Object&&t,j="object"==typeof self&&self&&self.Object===Object&&self,S=O||j||Function("return this")();var w,L=(w={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==w?void 0:w[e]});var I=Object.prototype.toString,C=S.Symbol,U=C?C.prototype:void 0,k=U?U.toString:void 0;function z(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==I.call(e)}(e))return k?k.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function T(e){return null==e?"":z(e)}var R,Z=(R=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,r){var a=-1,l=e?e.length:0;for(r&&l&&(n=e[++a]);++a<l;)n=t(n,e[a],a,e);return n}(function(e,t,r){return e=T(e),void 0===(t=r?void 0:t)?function(e){return A.test(e)}(e)?function(e){return e.match(h)||[]}(e):function(e){return e.match(n)||[]}(e):e.match(t)||[]}(function(e){return(e=T(e))&&e.replace(r,L).replace(y,"")}(e).replace(v,"")),R,"")});e.exports=Z}).call(this,n("yLpj"))},yZlL:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("Wbzz"),o=n("M4XY"),u=n.n(o),i=n("6Gk8"),f=n("Bl7J"),c=n("vrFN"),d=function(e){var t=e.tableOfContents;e.currentHeaderUrl;return t&&t.length>0?a.a.createElement("div",{className:"toc"},a.a.createElement("title",null,"Table of contents"),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})):null},s=n("ORnI");function m(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(e){var t,n=e.data,o=e.location,p=n.markdownRemark,x=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",b=n.site.siteMetadata.siteUrl+o.pathname,E=n.previous,g=n.next,v=Object(r.useState)(void 0),y=v[0],h=v[1],A={url:b,identifier:p.id,title:p.frontmatter.title};return console.log(p),Object(r.useEffect)((function(){var e=function(){for(var e,t,n=window.pageYOffset,r=document.querySelectorAll(".anchor-header"),a=m(r);!(t=a()).done;){var l=t.value,u=l.getBoundingClientRect().top+n,i=l===r[r.length-1];if(n<u-0){e&&h(e.split(o.origin)[1]),!e&&h(void 0);break}i&&h(l.href.split(o.origin)[1]),!i&&(e=l.href)}};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),a.a.createElement(f.a,{location:o,title:x},a.a.createElement(c.a,{title:p.frontmatter.title,description:p.frontmatter.description||p.excerpt}),a.a.createElement("div",null,a.a.createElement(d,{tableOfContents:p.tableOfContents,currentHeaderUrl:y}),a.a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},a.a.createElement("header",null,a.a.createElement("h1",{itemProp:"headline"},p.frontmatter.title),a.a.createElement("p",null,p.frontmatter.date)),a.a.createElement("section",{dangerouslySetInnerHTML:{__html:p.html},itemProp:"articleBody"}),a.a.createElement("hr",null),a.a.createElement("div",{className:"tags"},a.a.createElement("ul",null,p.frontmatter.tags?p.frontmatter.tags.map((function(e){return a.a.createElement("li",{key:u()(e)},a.a.createElement(l.Link,{to:"/tags/"+u()(e)},u()(e)))})):null)),a.a.createElement("footer",null,a.a.createElement(i.a,null))),a.a.createElement("nav",{className:"blog-post-nav"},a.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.a.createElement("li",null,E&&a.a.createElement(l.Link,{to:E.fields.slug,rel:"prev"},"← ",E.frontmatter.title)),a.a.createElement("li",null,g&&a.a.createElement(l.Link,{to:g.fields.slug,rel:"next"},g.frontmatter.title," →")))),a.a.createElement(s.CommentCount,{config:A,placeholder:"..."}),a.a.createElement(s.Disqus,{config:A})))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-12d5e143de94cd0f5b42.js.map