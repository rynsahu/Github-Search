(this["webpackJsonpgithub-search"]=this["webpackJsonpgithub-search"]||[]).push([[0],{34:function(e,t,a){e.exports=a(67)},39:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),l=a.n(c),o=a(14);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=a(8),i=a(9),s=a(11),h=a(10),m=a(12),p=a(6),b=(a(39),function(e){var t=e.placeholder,a=e.value,n=e.handleChange,c=e.type,l=void 0===c?"text":c;return r.a.createElement("input",{className:"form-control",type:l,placeholder:t,value:a,onChange:n})}),f=function(e){var t=e.label;return r.a.createElement("button",{className:"btn btn-primary"},t)},v=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={query:""},a.handleChange=function(e){var t=e.currentTarget;a.setState({query:t.value})},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state.query)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.query;return r.a.createElement("div",{className:"container search-container home-style"},r.a.createElement("img",{src:"https://github.githubassets.com/images/modules/logos_page/Octocat.png",alt:"GitHub search",width:"200px",height:"auto"}),r.a.createElement("h1",null,"GitHub Search"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(b,{placeholder:"Enter username",value:e,handleChange:this.handleChange}),r.a.createElement(o.b,{to:"/".concat(e)},r.a.createElement(f,{label:"Search"}))))}}]),t}(r.a.Component),g=a(13),d=a.n(g),y=a(16),E=a(33),O=a.n(E),j="https://api.github.com/users/";function w(e){return k.apply(this,arguments)}function k(){return(k=Object(y.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get(j+t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",profile_url:"",avatar_url:""},a.getAllData=Object(y.a)(d.a.mark((function e(){var t,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match,e.next=3,w(t.params.id);case 3:n=e.sent,r=n.data,console.log(r),a.setState({profile_url:r.html_url,avatar_url:r.avatar_url,name:r.name});case 7:case"end":return e.stop()}}),e)}))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getAllData()}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.profile_url,n=e.avatar_url;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Welcome to knowledge panel"),r.a.createElement("img",{src:n,alt:t,width:"200px",height:"200px"}),r.a.createElement("h2",null,r.a.createElement("a",{href:a,target:"_blanck"},t))))}}]),t}(r.a.Component),_=(a(63),function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/:id",component:x}),r.a.createElement(p.a,{path:"/",component:v}))}}]),t}(r.a.Component));a(64),a(65),a(66);l.a.render(r.a.createElement(o.a,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.94b80bef.chunk.js.map