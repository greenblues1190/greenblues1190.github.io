(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4M6O":function(e,t,n){"use strict";var o=n("TqRt");t.__esModule=!0,t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o;return function(){var r=this,i=arguments,a=function(){o=null,n||e.apply(r,i)},s=n&&!o;window.clearTimeout(o),o=setTimeout(a,t),s&&e.apply(r,i)}},t.isReactElement=a,t.shallowComparison=function e(t,n){var o,i=new Set(Object.keys(t).concat(Object.keys(n)));return 0!==(o=[]).concat.apply(o,(0,r.default)(i)).filter((function(o){if("object"==typeof t[o]){if(e(t[o],n[o]))return!0}else if(t[o]!==n[o]&&!a(t[o]))return!0})).length};var r=o(n("RIqP")),i=o(n("q1tI"));function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},"6Gk8":function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),i=n("Wbzz");t.a=function(){var e,t,n=Object(i.useStaticQuery)("1152384417"),o=null===(e=n.site.siteMetadata)||void 0===e?void 0:e.author,a=null===(t=n.site.siteMetadata)||void 0===t?void 0:t.social;return r.a.createElement("div",{className:"bio"},(null==o?void 0:o.name)&&r.a.createElement("div",null,(null==o?void 0:o.summary)||null," ",r.a.createElement("strong",null,o.name),"입니다.",r.a.createElement("div",{className:"bio-social-link"},r.a.createElement("a",{href:"https://github.com/"+((null==a?void 0:a.github)||"")},r.a.createElement("img",{src:"/social_logo/GitHub-Mark-32px.png",alt:"github"})),"·",r.a.createElement("a",{href:"https://subsequent-motorcycle-de8.notion.site/78f84d8375a547e69b5a7e7c2ed3bc93"},"노션 이력서"))))}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},Ijbi:function(e,t,n){var o=n("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},ORnI:function(e,t,n){"use strict";var o=n("TqRt");t.__esModule=!0,t.default=void 0;var r=o(n("VUT9"));t.Disqus=r.default;var i=o(n("qASQ"));t.CommentCount=i.default;var a=o(n("vAJ3"));t.CommentEmbed=a.default;var s=r.default;t.default=s},RIqP:function(e,t,n){var o=n("Ijbi"),r=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return o(e)||r(e)||i(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},RXBc:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),i=n("Wbzz"),a=n("6Gk8"),s=n("Bl7J"),l=n("vrFN"),u=n("ORnI");t.default=function(e){var t,n=e.data,o=e.location,d=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",c=n.allMarkdownRemark.nodes;return 0===c.length?r.a.createElement(s.a,{location:o,title:d},r.a.createElement(l.a,{title:"Home"}),r.a.createElement(a.a,null),r.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):r.a.createElement(s.a,{location:o,title:d},r.a.createElement(l.a,{title:"Home"}),r.a.createElement(a.a,null),r.a.createElement("ol",{style:{listStyle:"none"}},c.map((function(e){var t=e.frontmatter.title||e.fields.slug,o={url:n.site.siteMetadata.siteUrl+e.fields.slug,identifier:e.id,title:t};return r.a.createElement("li",{key:e.fields.slug},r.a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},r.a.createElement("header",null,r.a.createElement("h2",null,r.a.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},r.a.createElement("span",{itemProp:"headline"},t))),r.a.createElement("div",{className:"postPreview"},r.a.createElement("small",null,e.frontmatter.date),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon",viewBox:"0 0 20 20",fill:"#B3B3B3"},r.a.createElement("path",{d:"M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"}),r.a.createElement("path",{d:"M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"})),r.a.createElement("small",null,r.a.createElement(u.CommentCount,{config:o,placeholder:"..."})))),r.a.createElement("section",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}},VUT9:function(e,t,n){"use strict";var o=n("TqRt");t.__esModule=!0,t.default=void 0;var r=o(n("pVnL")),i=o(n("8OQS")),a=o(n("VbXa")),s=o(n("q1tI")),l=o(n("17x9")),u=n("4M6O"),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="woojeongmin",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,u.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,u.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);if(window.document.querySelector('[id^="dsq-app"]')){var t=window.document.getElementById(window.document.querySelector('[id^="dsq-app"]').id);t.parentNode.removeChild(t)}},n.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return s.default.createElement("div",(0,r.default)({id:"disqus_thread"},t,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86,columnNumber:7}}))},t}(s.default.Component);t.default=d,d.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string,language:l.default.string,remoteAuthS3:l.default.string,apiKey:l.default.string})}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o},e.exports.default=e.exports,e.exports.__esModule=!0},ZhPi:function(e,t,n){var o=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},qASQ:function(e,t,n){"use strict";var o=n("TqRt");t.__esModule=!0,t.default=void 0;var r=o(n("pVnL")),i=o(n("8OQS")),a=o(n("VbXa")),s=o(n("q1tI")),l=o(n("17x9")),u=n("4M6O"),d=(0,u.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="woojeongmin",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?d():(0,u.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,u.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,o=(0,i.default)(e,["config","placeholder"]);return s.default.createElement("span",(0,r.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},o,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:53,columnNumber:7}}),n)},t}(s.default.Component);t.default=c,c.defaultProps={placeholder:"..."},c.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string}},vAJ3:function(e,t,n){"use strict";var o=n("TqRt");t.__esModule=!0,t.default=void 0;var r=o(n("VbXa")),i=o(n("q1tI")),a=o(n("17x9")),s=function(e){function t(){return e.apply(this,arguments)||this}(0,r.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},t}(i.default.Component);t.default=s,s.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},s.propTypes={commentId:a.default.string.isRequired,width:a.default.number,height:a.default.number,showMedia:a.default.bool,showParentComment:a.default.bool}}}]);
//# sourceMappingURL=component---src-pages-index-js-3614adee676fa2a72b9f.js.map