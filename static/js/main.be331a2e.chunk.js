(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(48)},45:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),l=a.n(o),i=a(3),s=a(4),u=a(7),c=a(6),h=a(5),m=a(8),p=a(2),d=a.n(p);a(45);var g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={data:[],page:0,prevPage:0,availNext:!0,query:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({token:e.token}),this.setState({query:e.query}),this.setState({page:0}),this.setState({prevPage:0}),console.log("marimas")}},{key:"componentDidUpdate",value:function(e){var t=this;e.query!==this.state.query&&(!function(e){for(var t=0;t<e.length;t++)if(!(e[t]>="0"&&e[t]<="9"))return!1;return!0}(this.state.query)?d.a.get("https://api.stya.net/nim/byname?name=".concat(this.state.query,"&page=").concat(this.state.page),{headers:{"Auth-Token":this.props.token}}).then(function(e){return t.setState({data:e.data.payload})}):d.a.get("https://api.stya.net/nim/byid?query=".concat(this.state.query,"&page=").concat(this.state.page),{headers:{"Auth-Token":this.props.token}}).then(function(e){return t.setState({data:e.data.payload})})),console.log("lolo")}},{key:"render",value:function(){return this.state.data?r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("th",null,"nama"),r.a.createElement("th",null,"nim tpb"),r.a.createElement("th",null,"nim jurusan"),r.a.createElement("th",null,"prodi")),r.a.createElement("tbody",null,this.state.data.map(function(e){return r.a.createElement("tr",null," ",r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.nim_tpb),r.a.createElement("td",null,e.nim_jur),r.a.createElement("td",null,e.prodi))})))):r.a.createElement("h2",null,"Please Refresh")}}]),t}(r.a.Component),y=a(21),k=a.n(y).a.stringify({username:"bmusuko",password:"gorengtoba12"}),b={"Content-Type":"application/x-www-form-urlencoded"};localStorage.getItem("token")?d.a.get("https://api.stya.net/nim/byid?query=1",{headers:{"Auth-Token":localStorage.getItem("token")}}).then(function(e){2!==e.data.code&&d.a.post("https://api.stya.net/nim/login",k,b).then(function(e){return localStorage.setItem("token",e.data.token)})}):d.a.post("https://api.stya.net/nim/login",k,b).then(function(e){return localStorage.setItem("token",e.data.token)});var f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).handleUserInput=function(e){a.setState({query:e.target.value})},a.state={query:"",status:"",token:localStorage.getItem("token")},a.handleUserInput=a.handleUserInput.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",onChange:this.handleUserInput,placeholder:"Search"}),r.a.createElement("h1",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(g,{query:this.state.query,token:localStorage.getItem("token")}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.be331a2e.chunk.js.map