(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,l){"use strict";l.r(t);var a=l("q1tI"),n=l.n(a),r=l("Wbzz"),o=l("6Gk8"),i=l("Bl7J"),c=l("vrFN"),s=l("ORnI");t.default=function(e){var t,l=e.data,a=e.location,m=l.site.siteMetadata.siteUrl,d=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",u=l.allMarkdownRemark.nodes;return console.log(u),0===u.length?n.a.createElement(i.a,{location:a,title:d},n.a.createElement(c.a,{title:"Home"}),n.a.createElement(o.a,null),n.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.a.createElement(i.a,{location:a,title:d},n.a.createElement(c.a,{title:"Home"}),n.a.createElement(o.a,null),n.a.createElement("ol",{style:{listStyle:"none"}},u.map((function(e){var t=e.frontmatter.title||e.fields.slug,l={url:m+e.fields.slug,identifier:e.id,title:t};return console.log(l),n.a.createElement("li",{key:e.fields.slug},n.a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.a.createElement("header",null,n.a.createElement("h2",null,n.a.createElement(r.Link,{to:e.fields.slug,itemProp:"url"},n.a.createElement("span",{itemProp:"headline"},t))),n.a.createElement("div",null,n.a.createElement("small",null,e.frontmatter.date),n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},n.a.createElement("path",{d:"M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"}),n.a.createElement("path",{d:"M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"})),n.a.createElement(s.CommentCount,{config:l,placeholder:"..."}))),n.a.createElement("section",null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-58fad7629fca87328434.js.map