"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[206],{235:function(t,n,e){e.d(n,{NG:function(){return o},Rl:function(){return l},fn:function(){return f},iJ:function(){return i},rc:function(){return d}});var r=e(861),c=e(757),u=e.n(c),a="c842d6df69ab537d9e67db332ce4bf5c";function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(a));case 2:return n=t.sent,t.next=5,n.json();case 5:return e=t.sent,t.abrupt("return",e.results);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("\n    https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&query=").concat(n));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("\n    https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(a));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(a));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(a));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},71:function(t,n,e){e.d(n,{Z:function(){return u}});var r=e(501),c=e(184);function u(t){var n=t.data,e=t.state;if(n){var u=n.map((function(t){return(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{to:"/movies/".concat(t.id),state:{from:e},children:t.title})},t.id)}));return(0,c.jsx)("ul",{children:u})}}},206:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});var r=e(885),c=e(791),u=e(71),a=e(235),i=e(184);function s(){var t=(0,c.useState)([]),n=(0,r.Z)(t,2),e=n[0],s=n[1];return(0,c.useEffect)((function(){(0,a.iJ)().then((function(t){return s(t)}))}),[]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Trending today"}),(0,i.jsx)(u.Z,{data:e,state:"/"})]})}}}]);
//# sourceMappingURL=206.33bab168.chunk.js.map