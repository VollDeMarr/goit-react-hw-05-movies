"use strict";(self.webpackChunkgoit_react_hw_05_movies_new=self.webpackChunkgoit_react_hw_05_movies_new||[]).push([[405],{235:function(t,e,n){n.d(e,{NG:function(){return o},Rl:function(){return l},fn:function(){return f},iJ:function(){return s},rc:function(){return v}});var r=n(861),u=n(757),c=n.n(u),a="c842d6df69ab537d9e67db332ce4bf5c";function s(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(a));case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n.results);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("\n    https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&query=").concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("\n    https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(a));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(a));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(a));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},71:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(501),u=n(184);function c(t){var e=t.data,n=t.state;if(e){var c=e.map((function(t){return(0,u.jsx)("li",{children:(0,u.jsx)(r.rU,{to:"/movies/".concat(t.id),state:{from:n},children:t.title})},t.id)}));return(0,u.jsx)("ul",{children:c})}}},405:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(885),u=n(501),c=n(791),a=n(235),s=n(71),i=n(184);function o(t){var e=t.setSearchParams,n=(0,c.useState)(""),u=(0,r.Z)(n,2),a=u[0],s=u[1];return(0,i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=a.trim().split(" ").join("+");e({query:n})},children:[(0,i.jsx)("input",{onChange:function(t){s(t.currentTarget.value)},type:"text",autoFocus:!0}),(0,i.jsx)("button",{type:"submit",children:"Search"})]})}function p(){var t=(0,u.lr)(),e=(0,r.Z)(t,2),n=e[0],p=e[1],f=(0,c.useState)(""),h=(0,r.Z)(f,2),v=h[0],d=h[1],l=(0,c.useState)(""),m=(0,r.Z)(l,2),x=m[0],y=m[1],b="/movies?query=".concat(x);return(0,c.useEffect)((function(){var t=n.get("query");t&&(y(t),(0,a.NG)(t).then((function(t){d(t.results)})))}),[n]),(0,i.jsxs)("div",{children:[(0,i.jsx)(o,{setSearchParams:p}),(0,i.jsx)(s.Z,{state:b,data:v})]})}}}]);
//# sourceMappingURL=405.64ea3ee0.chunk.js.map