(this.webpackJsonpjsonplaceholder=this.webpackJsonpjsonplaceholder||[]).push([[0],{27:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return r}));var r={};n.r(r),n.d(r,"fetchPosts",(function(){return x})),n.d(r,"fetchPost",(function(){return g}));var c,a=n(11),s=n(39),o=n(24),u=n(10);!function(e){e.FETCH_POSTS="fetch_posts",e.FETCH_POSTS_SUCCESS="fetch_posts_success",e.FETCH_POSTS_ERROR="fetch_posts_error",e.FETCH_POST_SUCCESS="fetch_post_success"}(c||(c={}));var i={loading:!1,error:null,posts:[],post:null},p=Object(a.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.FETCH_POSTS:return Object(u.a)(Object(u.a)({},e),{},{loading:!0,error:null,posts:[]});case c.FETCH_POSTS_SUCCESS:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,error:null,posts:[].concat(Object(o.a)(e.posts),Object(o.a)(t.payload))});case c.FETCH_POSTS_ERROR:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,error:t.payload,posts:[],post:null});case c.FETCH_POST_SUCCESS:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,error:null,post:Object(u.a)(Object(u.a)({},t.payload.post),{},{comments:t.payload.comments})});default:return e}}}),l=Object(a.d)(p,{},Object(a.a)(s.a)),d=n(26),j=n(8),O=n.n(j),b=n(12),h=n(40),f=n(41),S=n(42),v=n.n(S).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),m=function(){function e(){Object(h.a)(this,e)}return Object(f.a)(e,null,[{key:"getPosts",value:function(){var e=Object(b.a)(O.a.mark((function e(t){var n,r,c,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.page,r=void 0===n?1:n,e.next=3,v.get("/posts?_page=".concat(r));case 3:return c=e.sent,a=c.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSinglePost",value:function(){var e=Object(b.a)(O.a.mark((function e(t){var n,r,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,v.get("/posts/".concat(n));case 3:return r=e.sent,c=r.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPostComments",value:function(){var e=Object(b.a)(O.a.mark((function e(t){var n,r,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,v.get("/posts/".concat(n,"/comments"));case 3:return r=e.sent,c=r.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),x=function(e){var t=e.page;return function(){var e=Object(b.a)(O.a.mark((function e(n){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 1===t&&n({type:c.FETCH_POSTS}),e.prev=1,e.next=4,m.getPosts({page:t});case 4:r=e.sent,n({type:c.FETCH_POSTS_SUCCESS,payload:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n({type:c.FETCH_POSTS_ERROR,payload:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},g=function(e){var t=e.id;return function(){var e=Object(b.a)(O.a.mark((function e(n){var r,a,s,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:c.FETCH_POSTS}),e.prev=1,e.next=4,Promise.all([m.getSinglePost({id:t}),m.getPostComments({id:t})]);case 4:r=e.sent,a=Object(d.a)(r,2),s=a[0],o=a[1],n({type:c.FETCH_POST_SUCCESS,payload:{post:s,comments:o}}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),n({type:c.FETCH_POSTS_ERROR,payload:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()}},72:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(17),a=n.n(c),s=n(25),o=n(14),u=n(3),i=n(27),p=(n(72),n(1)),l=function(){return Object(p.jsx)("header",{className:"header",children:Object(p.jsxs)("nav",{className:"nav",children:[Object(p.jsx)(o.b,{to:"/",children:Object(p.jsx)("h2",{children:"Posts"})}),Object(p.jsx)("div",{className:"nav-links",children:Object(p.jsx)(o.b,{to:"/",children:"Home"})})]})})},d=n.p+"static/media/logo.6ce24c58.svg",j=(n(77),Object(r.lazy)((function(){return n.e(3).then(n.bind(null,88))}))),O=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,87))})),b=function(){return Object(p.jsx)(s.a,{store:i.b,children:Object(p.jsxs)(o.a,{children:[Object(p.jsx)(l,{}),Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(p.jsxs)("p",{children:["Edit ",Object(p.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(p.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Hash Router"})]})}),Object(p.jsx)("main",{children:Object(p.jsx)(r.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading..."}),children:Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{path:"/posts/:postId",component:O}),Object(p.jsx)(u.a,{path:"/",component:j})]})})})]})})};n(78);a.a.render(Object(p.jsx)(r.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.6f12c05d.chunk.js.map