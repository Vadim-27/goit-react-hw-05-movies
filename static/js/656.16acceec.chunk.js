"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[656],{684:function(e,r,t){t.d(r,{Ku:function(){return p},Pg:function(){return i},dY:function(){return o},fI:function(){return f},z1:function(){return s}});var n=t(861),a=t(757),c=t.n(a),u=t(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"d91911ebb88751cf9e5c4b8fdf4412c9"}}),s=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("search/movie",{params:{query:r}});case 2:return t=e.sent,n=t.data,console.log(n,"api"),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/popular");case 2:return r=e.sent,t=r.data,console.log(t,"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456\u0435"),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,console.log(n,"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456\u0435"),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},732:function(e,r,t){t.d(r,{Z:function(){return i}});var n=t(87),a=t(689),c="movie-list_list__h0XkG",u="movie-list_item__DcRFB",s=t(184),o=function(e){var r=e.items,t=(0,a.TH)(),o=r.map((function(e){var r=e.id,a=e.title,c=e.name;return(0,s.jsx)(n.rU,{className:u,to:"/movies/".concat(r),state:{from:t},children:(0,s.jsx)("li",{children:(0,s.jsx)("p",{children:a||c})})},r)}));return(0,s.jsx)("ul",{className:c,children:o})},i=o;o.defaultProps={items:[]}},656:function(e,r,t){t.r(r);var n=t(433),a=t(861),c=t(439),u=t(757),s=t.n(u),o=t(791),i=t(87),p=t(732),f=t(684),l=t(184);r.default=function(){var e=(0,o.useState)([]),r=(0,c.Z)(e,2),t=r[0],u=r[1],h=(0,o.useState)(""),v=(0,c.Z)(h,2),m=v[0],d=v[1],x=(0,o.useState)(!1),b=(0,c.Z)(x,2),w=b[0],g=b[1],k=(0,i.lr)(),Z=(0,c.Z)(k,2),j=Z[0],_=Z[1],y=j.get("search");(0,o.useEffect)((function(){if(""!==y&&null!==y){g(!0);var e=function(){var e=(0,a.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.z1)(y);case 3:r=e.sent,u((0,n.Z)(r.results)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),d((0,l.jsx)("p",{children:"error"}));case 10:return e.prev=10,g(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}}),[y]);return console.log(t,"items"),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault();var r=e.currentTarget;_({search:r.elements.search.value}),console.log(r.elements.search.value,"form"),r.reset()},children:[(0,l.jsx)("label",{htmlFor:"",children:" Search movies"}),(0,l.jsx)("input",{type:"text",name:"search",placeholder:"Search movies"}),(0,l.jsx)("button",{type:"submit",children:"Search"})]}),w&&(0,l.jsx)("p",{children:"loading"}),m&&(0,l.jsx)("p",{children:"error"}),t&&(0,l.jsx)(p.Z,{items:t})]})}}}]);
//# sourceMappingURL=656.16acceec.chunk.js.map