(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(2),r=n.n(l),c=(n(12),n(3)),s=n(4),i=n(6),u=n(5),m=(n(13),n(14),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).add=function(e){e.preventDefault(),fetch("http://plato.mrl.ai:8080/contacts/add",{method:"POST",body:JSON.stringify({name:a.refs.firstName.value+" "+a.refs.lastName.value,number:a.refs.phoneNum.value}),headers:{"Content-type":"application/json",API:"guffey"}}).then((function(e){return e.json()})).then((function(){a.fetchProfile(),a.fetchUsers()}))},a.delete=function(e){fetch("http://plato.mrl.ai:8080/contacts/remove",{method:"POST",body:JSON.stringify({position:e}),headers:{"Content-type":"application/json",API:"guffey"}}).then((function(e){return e.json()})).then((function(){a.fetchProfile(),a.fetchUsers()}))},a.state={profile:{},contacts:[]},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.fetchProfile(),this.fetchUsers()}},{key:"fetchProfile",value:function(){var e=this;window.fetch("http://plato.mrl.ai:8080/profile",{headers:{API:"guffey"}}).then((function(e){return e.json()})).then((function(t){e.setState({profile:t}),console.log(t)}))}},{key:"fetchUsers",value:function(){var e=this;window.fetch("http://plato.mrl.ai:8080/contacts",{headers:{API:"guffey"}}).then((function(e){return e.json()})).then((function(t){e.setState({contacts:t.contacts}),console.log(t)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h2",{className:"header mt-3"},"Contacts App"),o.a.createElement("form",{onSubmit:this.add},o.a.createElement("fieldset",null,o.a.createElement("legend",{className:"legend ml-3"},o.a.createElement("strong",null,"New Contact")),o.a.createElement("input",{ref:"firstName",type:"text",placeholder:"First Name",className:"inputBox ml-2"}),o.a.createElement("input",{ref:"lastName",type:"text",placeholder:"Last Name",className:"inputBox"}),o.a.createElement("input",{ref:"phoneNum",type:"text",placeholder:"Phone Number",className:"inputBox ml-2"}),o.a.createElement("button",{type:"submit",className:"myButton ml-2 col-3"},"Add"))),o.a.createElement("div",null,o.a.createElement("hr",null),o.a.createElement("h3",{className:"header2 ml-2"},"Your Profile:"),o.a.createElement("p",{className:"profile ml-2"},o.a.createElement("strong",null,"Name:")," ",this.state.profile.name," ",o.a.createElement("br",null),o.a.createElement("strong",null,"Total Entries:")," ",this.state.profile.count),o.a.createElement("hr",null)),o.a.createElement("div",null,o.a.createElement("h3",{className:"header2 ml-2"},"Your List of Contacts:"),this.state.contacts.map((function(t,n){return o.a.createElement("p",{className:"contacts ml-2",key:n},n+1,". ",o.a.createElement("u",null,"Name:")," ",t.name,o.a.createElement("br",null),"\xa0\xa0\xa0",o.a.createElement("u",null,"Phone #:")," ",t.number,o.a.createElement("button",{type:"submit",onClick:function(){return e.delete(n)},className:"myButton2 col-3 offset-1 ml-5",id:n},"Delete"))}))))}}]),n}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.6533347f.chunk.js.map