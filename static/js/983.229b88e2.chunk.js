"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{684:function(r,t,e){e.d(t,{Ku:function(){return f},Pg:function(){return o},dY:function(){return i},fI:function(){return p},z1:function(){return s}});var n=e(861),a=e(757),u=e.n(a),c=e(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"d91911ebb88751cf9e5c4b8fdf4412c9"}}),s=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("search/movie",{params:{query:t}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(u().mark((function r(){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/popular");case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(t));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},732:function(r,t,e){e.d(t,{Z:function(){return o}});var n=e(87),a=e(689),u="movie-list_list__h0XkG",c="movie-list_item__DcRFB",s=e(184),i=function(r){var t=r.items,e=(0,a.TH)(),i=t.map((function(r){var t=r.id,a=r.title,u=r.name;return(0,s.jsx)(n.rU,{className:c,to:"/movies/".concat(t),state:{from:e},children:(0,s.jsx)("li",{children:(0,s.jsx)("p",{children:a||u})})},t)}));return(0,s.jsx)("ul",{className:u,children:i})},o=i;i.defaultProps={items:[]}},983:function(r,t,e){e.r(t);var n=e(433),a=e(861),u=e(439),c=e(757),s=e.n(c),i=e(791),o=e(732),f=e(684),p=e(184);t.default=function(){var r=(0,i.useState)(null),t=(0,u.Z)(r,2),e=t[0],c=t[1],v=(0,i.useState)(""),l=(0,u.Z)(v,2),d=l[0],h=l[1],m=(0,i.useState)(!1),x=(0,u.Z)(m,2),w=x[0],k=x[1];return(0,i.useEffect)((function(){k(!0);var r=function(){var r=(0,a.Z)(s().mark((function r(){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,f.dY)();case 3:t=r.sent,c((0,n.Z)(t.results)),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),h(r.t0);case 10:return r.prev=10,k(!1),r.finish(10);case 13:case"end":return r.stop()}}),r,null,[[0,7,10,13]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Trending movies today"}),w&&(0,p.jsx)("p",{children:"loading"}),d&&(0,p.jsx)("p",{children:"error"}),e&&(0,p.jsx)(o.Z,{items:e})]})}}}]);
//# sourceMappingURL=983.229b88e2.chunk.js.map