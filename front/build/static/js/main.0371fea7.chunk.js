(this.webpackJsonpwebproject=this.webpackJsonpwebproject||[]).push([[0],{41:function(A,e,t){},42:function(A,e,t){},62:function(A,e,t){},63:function(A,e,t){},67:function(A,e,t){},68:function(A,e,t){},69:function(A,e,t){},71:function(A,e,t){"use strict";t.r(e);var c=t(0),n=t(1),a=t.n(n),r=t(29),s=t.n(r),i=(t(41),t(9)),o=t(10),j=t(12),l=t(11),d=(t(42),t(8)),b=t(3),h=t(30);var u=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h2",{children:"Portfolio"})})},v=t(17),m=(t(62),t.p+"static/media/landingPageLogo.83866639.png"),p=t.p+"static/media/img2.efbb2946.png",O=function(A){Object(j.a)(t,A);var e=Object(l.a)(t);function t(){return Object(i.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(c.jsx)("div",{class:"landingPage",children:Object(c.jsxs)(v.ParallaxProvider,{children:[Object(c.jsx)("h1",{children:"Home"}),Object(c.jsx)(v.Parallax,{y:[-80,100],children:Object(c.jsx)("div",{class:"logoWrapper",children:Object(c.jsx)("img",{class:"landingPageLogo",src:m,alt:""})})}),Object(c.jsx)(v.Parallax,{y:[0,0],children:Object(c.jsx)("img",{class:"landingPageLogo",src:p,alt:""})})]})})}}]),t}(a.a.Component),x=t(35),f=(t(63),t(33)),g=t.n(f),V=function(A){Object(j.a)(t,A);var e=Object(l.a)(t);function t(A){var c;return Object(i.a)(this,t),(c=e.call(this,A)).state={goods:[],sortColumn:{path:"production_date",order:"asc"}},c}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var A=this;fetch("/api/goods/").then((function(A){return A.json()})).then((function(e){A.setState({goods:e})}))}},{key:"handleSort",value:function(A){var e=Object(x.a)({},this.state.sortColumn);e.path===A?e.order="asc"===e.order?"desc":"asc":(e.path=A,e.order="asc"),this.setState({sortColumn:e})}},{key:"render",value:function(){var A=this,e=this.state,t=e.sortColumn,n=e.goods,a=g.a.orderBy(n,[t.path],[t.order]);return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"itemListNav",children:[Object(c.jsx)("button",{onClick:function(){return A.handleSort("production_date")},children:"\ub0a0\uc9dc"}),Object(c.jsx)("button",{onClick:function(){return A.handleSort("price")},children:"\uac00\uaca9"}),Object(c.jsx)("button",{onClick:function(){return A.handleSort("name")},children:"\uc774\ub984"})]}),Object(c.jsx)("div",{className:"itemContainerWrapper",children:Object(c.jsx)("div",{className:"itemContainer",children:a.map((function(e){return Object(c.jsx)(d.b,{to:A.props.match.path+"/"+e.name,children:Object(c.jsxs)("div",{className:"item",children:[Object(c.jsxs)("div",{className:"frameWrapper",children:[Object(c.jsx)("img",{className:"frame",src:"data:image/png;base64,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"}),Object(c.jsx)("img",{className:"thumbnail",src:e.thumbnail})]}),Object(c.jsx)("span",{children:e.name}),Object(c.jsx)("span",{children:e.price})]})},e.id)}))})})]})}}]),t}(a.a.Component),y=(t(67),function(A){var e=A.color;return Object(c.jsx)("hr",{style:{borderColor:e}})}),q=function(A){Object(j.a)(t,A);var e=Object(l.a)(t);function t(A){var c;return Object(i.a)(this,t),(c=e.call(this,A)).state={name:"",image:"",detail:"",price:0},c.state={name:A.match.params.name,path:A.match.path},c}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var A=this,e=this.state.name;console.log(e),console.log(typeof e),fetch("/api/goods/"+e).then((function(A){return A.json()})).then((function(e){console.log(e),A.setState(e)}))}},{key:"render",value:function(){return Object(c.jsx)("div",{className:"itemDetailContainerWrapper",children:Object(c.jsx)("div",{className:"itemDetailContainer",children:Object(c.jsxs)("div",{className:"itemDetail",children:[Object(c.jsx)("div",{className:"detailImage",children:Object(c.jsx)("img",{src:this.state.image})}),Object(c.jsxs)("div",{className:"info",children:[Object(c.jsxs)("h3",{children:[this.state.name," "]}),Object(c.jsx)(y,{color:"gray"}),Object(c.jsxs)("span",{children:["price: ",this.state.price,"  "]}),Object(c.jsx)(y,{color:"gray"}),Object(c.jsxs)("span",{children:["link ",Object(c.jsx)("a",{href:"https://smartstore.naver.com/kwonthefactory",children:"\uc2a4\ud1a0\uc5b4"}),"  "]}),Object(c.jsx)(y,{color:"gray"}),Object(c.jsx)("span",{children:this.state.detail})]})]})})})}}]),t}(a.a.Component),w=t.p+"static/media/logo.0feb143d.png",L=(t(68),function(A){var e=A.color;return Object(c.jsx)("hr",{style:{borderColor:e}})});var N=function(A){var e=A.match;return Object(c.jsxs)("div",{className:"shopContent",children:[Object(c.jsxs)("div",{className:"body",children:[Object(c.jsx)(b.a,{exact:!0,path:e.path,component:V}),Object(c.jsx)(b.a,{path:"".concat(e.path,"/:name"),component:q})]}),Object(c.jsx)("div",{className:"footer",children:Object(c.jsxs)("div",{className:"footerContent",children:[Object(c.jsx)(d.b,{to:"/",children:Object(c.jsx)("img",{className:"footerLogo",src:w,alt:"logo"})}),Object(c.jsx)("span",{}),Object(c.jsx)(L,{color:"gray"})]})})]})};t(69);var S=function(){return Object(c.jsxs)("div",{className:"nav",children:[Object(c.jsx)("div",{className:"logoWrapper",children:Object(c.jsx)(d.b,{to:"/",children:Object(c.jsx)("img",{className:"logo",src:w,alt:"logo"})})}),Object(c.jsx)("div",{className:"linkWrapper",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:"/shop",style:{textDecoration:"none"},children:"SHOP"})}),Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:"/Portfolio",style:{textDecoration:"none"},children:"PORTFOLIO"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://www.instagram.com/kwon_thefact0ry",target:"_blank",rel:"noreferrer noopener",style:{textDecoration:"none"},children:"CONTACT"})})]})}),Object(c.jsx)("div",{className:"imageWrapper",children:Object(c.jsx)(d.b,{to:"/",children:Object(c.jsx)("img",{className:"image",src:p,alt:"img2"})})})]})},W=function(A){Object(j.a)(t,A);var e=Object(l.a)(t);function t(){return Object(i.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(c.jsx)(d.a,{children:Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsx)(h.a,{children:Object(c.jsx)("title",{children:"KWON_theFACT0RY"})}),Object(c.jsx)(S,{}),Object(c.jsx)(n.Fragment,{children:Object(c.jsx)("div",{class:"contentContainer",children:Object(c.jsxs)(b.c,{children:[Object(c.jsx)(b.a,{exact:!0,path:"/",component:O}),Object(c.jsx)(b.a,{path:"/shop",component:N}),Object(c.jsx)(b.a,{path:"/portfolio",component:u})]})})})]})})}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B;t(70);s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(W,{})}),document.getElementById("root")),window.addEventListener("resize",(function(){document.body.classList.add("resize-animation-stopper"),clearTimeout(B),B=setTimeout((function(){document.body.classList.remove("resize-animation-stopper")}),2)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()})).catch((function(A){console.error(A.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.0371fea7.chunk.js.map