(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){},38:function(e,t,a){e.exports=a(67)},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(35),i=a.n(s),r=a(7),c=a(8),o=a(11),u=a(9),h=a(2),m=a(10),p=a(14),d=a(13),g=(a(23),a(12)),v=a.n(g),b=a(17),k=a.n(b),y={"Content-Type":"application/x-www-form-urlencoded"},E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={username:"",password:""},a.handleClick=a.handleClick.bind(Object(h.a)(a)),a.handleUsername=a.handleUsername.bind(Object(h.a)(a)),a.handlePassword=a.handlePassword.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){var e=this,t=k.a.stringify({username:this.state.username,password:this.state.password});v.a.post("https://api.stya.net/nim/login",t,y).then(function(t){alert(t.data.token),"OK"===t.data.status?(console.log("success"),e.props.history.push("/search",{token:t.data.token,username:e.state.username})):console.log(t.data.status)})}},{key:"handleUsername",value:function(e){this.setState({username:e.target.value})}},{key:"handlePassword",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",null,l.a.createElement("span",{className:"loginTitle"}," Login "),l.a.createElement("div",null,l.a.createElement("input",{className:"input",type:"text",name:"username",placeholder:"username",onChange:this.handleUsername,required:!0}),l.a.createElement("input",{className:"input",type:"password",name:"password",placeholder:"password",onChange:this.handlePassword,required:!0}),l.a.createElement("button",{className:"loginBtn",onClick:this.handleClick}," Login ")),l.a.createElement("h5",null,l.a.createElement(p.b,{to:"/register"},"Sign up here"))))}}]),t}(l.a.Component),f=Object(d.e)(E),N={"Content-Type":"application/x-www-form-urlencoded"},j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(h.a)(a)),a.handleUsername=a.handleUsername.bind(Object(h.a)(a)),a.handlePassword=a.handlePassword.bind(Object(h.a)(a)),a.state={username:"",password:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){var e=k.a.stringify({username:this.state.username,password:this.state.password});v.a.post("https://api.stya.net/nim/register",e,N).then(function(e){console.log(e.data.status)}).then(this.props.history.push("/"))}},{key:"handleUsername",value:function(e){this.setState({username:e.target.value})}},{key:"handlePassword",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("form",null,l.a.createElement("span",{className:"loginTitle"}," Sign Up "),l.a.createElement("div",null,l.a.createElement("input",{className:"input",type:"text",name:"username",placeholder:"username",onChange:this.handleUsername,required:!0}),l.a.createElement("input",{className:"input",type:"password",name:"password",placeholder:"password",onChange:this.handlePassword,required:!0}),l.a.createElement("button",{className:"loginBtn",onClick:this.handleClick}," Sign Up "))))}}]),t}(l.a.Component),O=Object(d.e)(j),C=(a(66),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={page:0,availNext:!0},a.handleClick=a.handleClick.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({page:e.page}),this.setState({availNext:e.availNext})}},{key:"handleClick",value:function(e){this.props.onChange(e.target.value-1)}},{key:"render",value:function(){return null===this.state.page?l.a.createElement("h1",null,"boom"):0===this.state.page&&this.state.availNext?l.a.createElement("ul",{className:"Navigation"},l.a.createElement("li",null," ",this.state.page+1," "),l.a.createElement("li",{onClick:this.handleClick,value:this.state.page+2,className:"ableNav"}," ",this.state.page+2," "),l.a.createElement("li",{onClick:this.handleClick,value:this.state.page+2,className:"ableNav"}," Next ")):0!==this.state.page||this.state.availNext?this.state.availNext?l.a.createElement("ul",{className:"Navigation"},l.a.createElement("li",{onClick:this.handleClick,value:this.state.page,className:"ableNav"}," Prev "),l.a.createElement("li",{onClick:this.handleClick,value:this.state.page,className:"ableNav"},this.state.page),l.a.createElement("li",null,this.state.page+1),l.a.createElement("li",{onClick:this.handleClick,value:this.state.page+2,className:"ableNav"},this.state.page+2),l.a.createElement("li",{onClick:this.handleClick,value:this.state.page+2,className:"ableNav"}," Next ")):l.a.createElement("ul",{className:"Navigation"},l.a.createElement("li",{onClick:this.handleClick,value:this.state.page,className:"ableNav"}," Prev "),l.a.createElement("li",null,this.state.page+1)):l.a.createElement("ul",{class:"Navigation"},l.a.createElement("li",null," ",this.state.page+1))}}]),t}(l.a.Component));var w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={data:[],query:"",test:!1},a.changePage=a.changePage.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"changePage",value:function(e){this.setState({page:e})}},{key:"componentWillReceiveProps",value:function(e){this.setState({token:e.token}),this.setState({query:e.query}),this.setState({page:0})}},{key:"componentDidUpdate",value:function(e,t){var a=this;e.query===this.state.query&&t.page===this.state.page||(!function(e){for(var t=0;t<e.length;t++)if(!(e[t]>="0"&&e[t]<="9"))return!1;return!0}(this.state.query)?v.a.get("https://api.stya.net/nim/byname?name=".concat(this.state.query,"&page=").concat(this.state.page),{headers:{"Auth-Token":this.props.token}}).then(function(e){a.setState({data:e.data.payload}),v.a.get("https://api.stya.net/nim/byname?name=".concat(a.state.query,"&page=").concat(a.state.page+1),{headers:{"Auth-Token":a.props.token}}).then(function(e){Object.keys(e.data.payload).length>0?a.setState({availNext:!0}):a.setState({availNext:!1})})}):v.a.get("https://api.stya.net/nim/byid?query=".concat(this.state.query,"&page=").concat(this.state.page),{headers:{"Auth-Token":this.props.token}}).then(function(e){a.setState({data:e.data.payload}),v.a.get("https://api.stya.net/nim/byid?query=".concat(a.state.query,"&page=").concat(a.state.page+1),{headers:{"Auth-Token":a.props.token}}).then(function(e){Object.keys(e.data.payload).length>0?a.setState({availNext:!0}):a.setState({availNext:!1})})}))}},{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(function(){return e.setState(function(e){return{test:!e.test}})},5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return Object.keys(this.state.data).length>0?l.a.createElement("div",null,l.a.createElement("h1",null,this.state.availNext),l.a.createElement("h1",null,!0),l.a.createElement("h1",null,!1),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("th",null,"nama"),l.a.createElement("th",null,"nim tpb"),l.a.createElement("th",null,"nim jurusan"),l.a.createElement("th",null,"prodi")),l.a.createElement("tbody",null,this.state.data.map(function(e){return l.a.createElement("tr",null," ",l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.nim_tpb),l.a.createElement("td",null,e.nim_jur),l.a.createElement("td",null,e.prodi))}))),l.a.createElement(C,{page:this.state.page,availNext:this.state.availNext,onChange:this.changePage})):this.state.query?0===Object.keys(this.state.data).length?l.a.createElement("h2",null,"No result"):l.a.createElement("h2",null,"Please Refresh"):l.a.createElement("h2",null,'type something like "13517" or "andika "')}}]),t}(l.a.Component),x=function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleUserInput=function(e){a.setState({query:e.target.value})};var n=a.props.location.state.token;return a.state={query:"",status:"",token:n},a.handleUserInput=a.handleUserInput.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("input",{type:"text",onChange:this.handleUserInput,placeholder:"Search"}),l.a.createElement("h1",null,"Hello, ",this.props.location.state.username),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(w,{query:this.state.query,token:this.state.token}))}}]),t}(l.a.Component),S=Object(d.e)(x);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=l.a.createElement(p.a,null,l.a.createElement("div",null,l.a.createElement(d.a,{exact:!0,path:"/",component:f}),l.a.createElement(d.a,{exact:!0,path:"/search",component:S}),l.a.createElement(d.a,{exact:!0,path:"/register",component:O})));i.a.render(q,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.323622cc.chunk.js.map