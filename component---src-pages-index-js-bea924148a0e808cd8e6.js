(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),l=r(a("VbXa")),s=r(a("8OQS")),c=r(a("pVnL")),o=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,c.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},m=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),p=function(e){var t=u(e),a=m(t);return f[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,E=h&&window.IntersectionObserver,v=new WeakMap;function b(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),o.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+o+l+s+a+r+t+i+n+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=o.default.createElement(O,(0,c.default)({src:t},n));return a.length>1?o.default.createElement("picture",null,r(a),i):i},O=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,d=e.onError,u=e.loading,m=e.draggable,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return o.default.createElement("img",(0,c.default)({sizes:a,srcSet:r,src:n},f,{onLoad:l,onError:d,ref:t,loading:u,draggable:m,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));O.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,s=void 0===l?{}:l,d=e.placeholderStyle,m=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,E=e.durationFadeIn,v=e.Tag,y=e.itemProp,N=e.loading,L=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,c.default)({opacity:R?1:0,transition:z?"opacity "+E+"ms":"none"},s),C="boolean"==typeof h?"lightgray":h,P={transitionDelay:E+"ms"},x=(0,c.default)({opacity:this.state.imgLoaded?0:1},z&&P,{},s,{},m),T={title:t,alt:this.state.isVisible?"":a,style:x,className:f,itemProp:y};if(p){var j=p,q=j[0];return o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},o.default.createElement(v,{style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),C&&o.default.createElement(v,{title:t,style:(0,c.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&P)}),q.base64&&o.default.createElement(k,{src:q.base64,spreadProps:T,imageVariants:j,generateSources:w}),q.tracedSVG&&o.default.createElement(k,{src:q.tracedSVG,spreadProps:T,imageVariants:j,generateSources:S}),this.state.isVisible&&o.default.createElement("picture",null,b(j),o.default.createElement(O,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:N,draggable:L})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)({alt:a,title:t,loading:N},q,{imageVariants:j}))}}))}if(g){var F=g,_=F[0],M=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_.width,height:_.height},i);return"inherit"===i.display&&delete M.display,o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(_.srcSet)},C&&o.default.createElement(v,{title:t,style:(0,c.default)({backgroundColor:C,width:_.width,opacity:this.state.imgLoaded?0:1,height:_.height},z&&P)}),_.base64&&o.default.createElement(k,{src:_.base64,spreadProps:T,imageVariants:F,generateSources:w}),_.tracedSVG&&o.default.createElement(k,{src:_.tracedSVG,spreadProps:T,imageVariants:F,generateSources:S}),this.state.isVisible&&o.default.createElement("picture",null,b(F),o.default.createElement(O,{alt:a,title:t,width:_.width,height:_.height,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:N,draggable:L})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)({alt:a,title:t,loading:N},_,{imageVariants:F}))}}))}return null},t}(o.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),V=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});R.propTypes={resolutions:z,sizes:V,fixed:d.default.oneOfType([z,d.default.arrayOf(z)]),fluid:d.default.oneOfType([V,d.default.arrayOf(V)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var C=R;t.default=C},OGtf:function(e,t,a){var r=a("XKFU"),n=a("eeVq"),i=a("vhPU"),l=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(l,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),l=a("Bl7J"),s=a("vrFN"),c=(a("9eSz"),function(){return n.a.createElement("section",{className:"hero_section"},n.a.createElement("div",{className:"container"},n.a.createElement("nav",null,n.a.createElement(i.Link,{to:"/",className:"brand"},n.a.createElement("img",{src:"/logo.svg",className:"logo"})),n.a.createElement("h1",null,"Maker of this!"),n.a.createElement("p",null,"If you are curios to know who actually make your faviroute products check here"),n.a.createElement("ul",{className:"links links-share"},n.a.createElement("li",null,n.a.createElement("a",{className:"btn-tw",href:"https://twitter.com/intent/tweet?text=Design%20awesome%20landing%20page,%20mockup%20and%20presentations%20with%20this%20open-source%20illlustrations%20library.%20%20https://illlustrations.co%20by%20@realvjy"},"Share on twitter ",n.a.createElement("img",{src:"/twitter.svg"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"btn-tw",href:"https://twitter.com/intent/tweet?text=Design%20awesome%20landing%20page,%20mockup%20and%20presentations%20with%20this%20open-source%20illlustrations%20library.%20%20https://illlustrations.co%20by%20@realvjy"},"Share on twitter ",n.a.createElement("img",{src:"/twitter.svg"})))))))});a.d(t,"pageQuery",(function(){return d}));var o=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title;e.allMarkdownRemark.edges;return n.a.createElement(l.a,{location:this.props.location,title:t},n.a.createElement(s.a,{title:"illlustrations - open source illustrations kit"}),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"announce-wrapper ph"}),n.a.createElement(c,null),n.a.createElement("section",{className:"mot_section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"content-box-wrap"},n.a.createElement("div",{className:"sidebar"},n.a.createElement("div",{className:"menu-wrap"},n.a.createElement("h4",null,"Filter By"),n.a.createElement("ul",{className:"menu-list"},n.a.createElement("li",{className:"menu"},n.a.createElement("a",{href:"#"},"Featured")),n.a.createElement("li",{className:"menu active"},n.a.createElement("a",{href:"#"},"Social Network ",n.a.createElement("span",null,"12"))),n.a.createElement("li",{className:"menu"},n.a.createElement("a",{href:"#"},"Productivity ",n.a.createElement("span",null,"12"))),n.a.createElement("li",{className:"menu"},n.a.createElement("a",{href:"#"},"Featured"))),n.a.createElement("a",{href:"",className:"submit"},"Submit"))),n.a.createElement("div",{className:"products-list-wrap"},n.a.createElement("div",{className:"product-list"},n.a.createElement("div",{className:"product"},n.a.createElement("div",{className:"p-img"},n.a.createElement("img",{src:"/placeholder.png"})),n.a.createElement("div",{className:"p-info"},n.a.createElement("div",{className:"p-meta"},n.a.createElement("h1",null,"Dribbble"),n.a.createElement("ul",null,n.a.createElement("li",null,"Only plave you ever want to go "),n.a.createElement("li",null,"Evan Sharp")),n.a.createElement("h4",null,"pinterest.com")),n.a.createElement("div",{className:"p-lnk"},n.a.createElement("a",{href:"#"},n.a.createElement("img",{src:"/twitter.svg"}))))),n.a.createElement("div",{className:"product"},n.a.createElement("div",{className:"p-img"},n.a.createElement("img",{src:"/placeholder.png"})),n.a.createElement("div",{className:"p-info"},n.a.createElement("div",{className:"p-meta"},n.a.createElement("h1",null,"Behance"),n.a.createElement("ul",null,n.a.createElement("li",null,"Show your work here "),n.a.createElement("li",null,"Evan Sharp")),n.a.createElement("h4",null,"pinterest.com")),n.a.createElement("div",{className:"p-lnk"},n.a.createElement("a",{href:"#"},n.a.createElement("img",{src:"/twitter.svg"}))))),n.a.createElement("div",{className:"product"},n.a.createElement("div",{className:"p-img"},n.a.createElement("img",{src:"/placeholder.png"})),n.a.createElement("div",{className:"p-info"},n.a.createElement("div",{className:"p-meta"},n.a.createElement("h1",null,"Pinterest"),n.a.createElement("ul",null,n.a.createElement("li",null,"Idea board everything "),n.a.createElement("li",null,"Evan Sharp")),n.a.createElement("h4",null,"pinterest.com")),n.a.createElement("div",{className:"p-lnk"},n.a.createElement("a",{href:"#"},n.a.createElement("img",{src:"/twitter.svg"}))))),n.a.createElement("div",{className:"product"},n.a.createElement("div",{className:"p-img"},n.a.createElement("img",{src:"/placeholder.png"})),n.a.createElement("div",{className:"p-info"},n.a.createElement("div",{className:"p-meta"},n.a.createElement("h1",null,"Pinterest"),n.a.createElement("ul",null,n.a.createElement("li",null,"Idea board everything"),n.a.createElement("li",null,"Evan Sharp")),n.a.createElement("h4",null,"pinterest.com")),n.a.createElement("div",{className:"p-lnk"},n.a.createElement("a",{href:"#"},n.a.createElement("img",{src:"/twitter.svg"}))))))))))))},r}(n.a.Component),d=(t.default=o,"2785444898")}}]);
//# sourceMappingURL=component---src-pages-index-js-bea924148a0e808cd8e6.js.map