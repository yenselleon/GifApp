(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(8),a=n.n(c),i=(n(6),n(2)),s=n(11),u=n(9),o=n.n(u),j=n(0),p=function(t){var e=t.setCategories,n=Object(r.useState)("one punch"),c=Object(i.a)(n,2),a=c[0],u=c[1];return Object(j.jsx)("form",{onSubmit:function(t){if(t.preventDefault(),a.trim().length>2)return e((function(t){return[a].concat(Object(s.a)(t))})),u(t.target.value="")},children:Object(j.jsx)("input",{type:"text",value:a,onChange:function(t){u(t.target.value)}})})};p.prototypes={setCategories:o.a.func.isRequired};var d=n(12),f=function(t){var e=t.title,n=t.url;t.id;return Object(j.jsxs)("div",{className:"wrapper__Card",children:[Object(j.jsx)("img",{src:n,alt:e}),Object(j.jsxs)("h1",{children:[" ",e," "]})]})},l=n(7),b=n.n(l),h=n(10),g=function(){var t=Object(h.a)(b.a.mark((function t(e){var n,r,c,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="http://api.giphy.com/v1/gifs/search?api_key=kgwQ2cxgmP3eHEgUpqBwKmSjsy8Bvt6s&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json().then((function(t){return t.data}));case 6:return c=t.sent,t.next=9,c.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}}));case 9:return a=t.sent,t.abrupt("return",a);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){setTimeout((function(){g(t).then((function(t){a({data:t,loading:!1})}))}),3e3)}),[t]),c}(e),c=n.data,a=n.loading;return Object(j.jsxs)(j.Fragment,{children:[a&&Object(j.jsx)("p",{children:"Cargando"}),Object(j.jsxs)("div",{className:"wrapper__container",children:[Object(j.jsx)("h3",{children:e}),c.map((function(t){return Object(j.jsx)(f,Object(d.a)({},t),t.id)}))]})]})},m=function(){var t=Object(r.useState)([""]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"GifExpertApp"}),Object(j.jsx)(p,{setCategories:c}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:n.map((function(t){return Object(j.jsx)(O,{category:t},t)}))})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),r(t),c(t),a(t),i(t)}))};a.a.render(Object(j.jsx)(m,{}),document.getElementById("root")),x()},6:function(t,e,n){}},[[21,1,2]]]);
//# sourceMappingURL=main.fc545d8d.chunk.js.map