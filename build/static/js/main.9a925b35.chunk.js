(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(23)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(4),c=a.n(o),i=(a(17),a(2)),r=a(5),l=a(6),d=a(9),k=a(7),u=a(10),m=(a(18),a(19),function(e){return s.a.createElement("div",null,s.a.createElement("img",{src:"close.png",className:"icon-close",onClick:e.delete}),s.a.createElement("li",{className:e.checked,onClick:e.click},s.a.createElement("p",null,e.task)))}),h=function(e){return s.a.createElement("div",{id:"myDIV",className:"header"},s.a.createElement("h2",null,"My To Do List"),s.a.createElement("input",{onChange:e.change,type:"text",id:"myInput",placeholder:"Todo Name",value:e.taskName,onKeyPress:e.enterPressed}),s.a.createElement("span",{onClick:e.click,className:"addBtn"},"Add"))},f=a(8),p=function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(d.a)(this,Object(k.a)(t).call(this,e))).completeTask=function(e,t){var n=a.props.cookies,s=Object(i.a)(a.state.todods);s[t].checked="checked";var o=JSON.stringify(s);n.set("tasks",o),a.setState({todods:s})},a.addTodo=function(e){var t=a.props.cookies,n=Object(i.a)(a.state.todods);if(a.state.taskName){console.log(t.get("tasks")),n.unshift({task:e,checked:""});var s=JSON.stringify(n);t.set("tasks",s),a.setState({todods:n}),a.setState({taskName:""})}},a.changeTaskName=function(e){var t=e.target.value;a.setState({taskName:t})};var n=e.cookies;return a.state={todods:n.get("tasks")?n.get("tasks"):[],taskName:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"keyPressed",value:function(e){"Enter"===e.key&&this.addTodo(this.state.taskName)}},{key:"deleteTask",value:function(e,t){var a=this.props.cookies,n=Object(i.a)(this.state.todods);n.splice(t,1);var s=JSON.stringify(n);a.set("tasks",s),this.setState({todods:n})}},{key:"render",value:function(){var e=this,t=this.state.todods.map(function(t,a){return s.a.createElement(m,{task:t.task,click:function(t){e.completeTask(t,a)},checked:t.checked,delete:function(t){e.deleteTask(t,a)}})});return s.a.createElement("div",{className:"App"},s.a.createElement(h,{change:function(t){e.changeTaskName(t)},taskName:this.state.taskName,click:function(t){e.addTodo(e.state.taskName)},enterPressed:function(t){return e.keyPressed(t)}}),s.a.createElement("ul",null,t))}}]),t}(n.Component),v=Object(f.a)(p);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.9a925b35.chunk.js.map