(this.webpackJsonpjsonplaceholder=this.webpackJsonpjsonplaceholder||[]).push([[4],{80:function(t,e,c){"use strict";c.d(e,"a",(function(){return o}));var n=c(25),s=c(11),i=c(27),o=function(){var t=Object(n.b)();return Object(s.b)(i.a,t)}},81:function(t,e,c){"use strict";c.d(e,"a",(function(){return n}));var n=c(25).c},82:function(t,e,c){},83:function(t,e,c){},84:function(t,e,c){"use strict";var n=c(10),s=c(26),i=c(0),o=c(14),r=(c(82),c(1)),a=function(t){var e=t.email,c=t.body,n=t.name;return Object(r.jsxs)("div",{className:"comment",children:[Object(r.jsx)("p",{className:"comment-name",children:Object(r.jsx)("strong",{children:n})}),Object(r.jsx)("p",{className:"comment-body",children:c}),Object(r.jsx)("p",{className:"comment-email",children:e})]})};c(83),e.a=function(t){t.userId;var e=t.id,c=t.title,j=t.body,d=t.comments,l=Object(i.useState)(!0),u=Object(s.a)(l,2),b=u[0],m=u[1];return Object(r.jsxs)("div",{className:"posts-details",children:[Object(r.jsx)(o.b,{to:"/posts/".concat(e),children:Object(r.jsx)("h3",{className:"title",children:c})}),Object(r.jsx)("p",{className:"body",children:j}),d&&Object(r.jsx)("div",{className:"comment-title",onClick:function(){return m((function(t){return!t}))},children:b?Object(r.jsxs)("p",{children:[null===d||void 0===d?void 0:d.length," comments (click to hide)"]}):Object(r.jsx)("p",{children:"(click to show comments)"})}),b&&(null===d||void 0===d?void 0:d.map((function(t){return Object(r.jsx)(a,Object(n.a)({},t),t.id)})))]})}},87:function(t,e,c){"use strict";c.r(e);var n=c(10),s=c(0),i=c(3),o=c(80),r=c(81),a=c(84),j=c(1);e.default=function(){var t=Object(o.a)().fetchPost,e=Object(r.a)((function(t){return t.posts})),c=e.post,d=e.error,l=e.loading,u=Object(i.f)().postId;return Object(s.useEffect)((function(){t({id:parseInt(u)})}),[u]),l?Object(j.jsx)("h3",{children:"Loading..."}):c?d?Object(j.jsx)("div",{children:d}):Object(j.jsx)("div",{children:Object(j.jsx)(a.a,Object(n.a)({},c))}):Object(j.jsx)("h3",{children:"Post did not found!"})}}}]);
//# sourceMappingURL=4.cc8e582b.chunk.js.map