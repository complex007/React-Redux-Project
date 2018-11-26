(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(43)},35:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(20),c=a.n(r),o=a(5),l=a(48),u=a(45),s=a(47),h=a(46),d=a(13),m=(a(35),a(15),a(16),"ROUTER/REPLACE"),p=function(e){return{type:"READ_ACTIVITIES",activities:e}},v=function(e){return function(t){if("activities"!==t.key||!t.newValue)return null;e.dispatch(p())}},f=a(7),E=a(8),y=a(10),w=a(9),g=a(11),D=(a(38),function(e,t){return{type:"SET_WEATHER_TEXT",weatherText:e,weatherEvery3hour:t}}),T=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).monthSelectionArray=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a.renderMessage=function(e,t){if(t&&e){var a=t.map(function(e,t){return i.a.createElement("td",{key:t},i.a.createElement("p",null,e.time),i.a.createElement("p",null,i.a.createElement("img",{alt:"weather-chart",src:"http://openweathermap.org/img/w/".concat(e.weather.icon,".png")}),e.weather.main),i.a.createElement("p",null,e.main.temp,"\xb0C"))});return i.a.createElement("div",{id:"message"},i.a.createElement("p",null,e),i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,a))))}},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=new Date,t=e.getMonth(),a=e.getDate();this.props.onSetMonth(e.getMonth()),this.props.onSetDay(e.getDate()),this.props.onFindWeather({selectedDay:a,selectedMonth:t})}},{key:"onChangeMonth",value:function(e){this.props.onSetMonth(e.target.options.selectedIndex)}},{key:"onChangeDate",value:function(e){this.props.onSetDay(e.target.value)}},{key:"onSeeWeather",value:function(){this.props.onFindWeather({selectedDay:this.props.weather.selectedDay,selectedMonth:this.props.weather.selectedMonth})}},{key:"getNoOfDays",value:function(e){var t=new Date;return new Date(t.getFullYear(),e+1,0).getDate()}},{key:"renderMonthSelection",value:function(e){var t=this;if(e||0===e){var a=this.monthSelectionArray[e],n=this.monthSelectionArray.map(function(e,t){return i.a.createElement("option",{value:e,key:t},e)});return i.a.createElement("select",{className:"browser-default",defaultValue:a,onChange:function(e){return t.onChangeMonth(e)}},n)}}},{key:"renderMonthDateSelection",value:function(e){var t=this;if(+e>0){for(var a=this.getNoOfDays(this.props.weather.selectedMonth),n=[],r=1;r<=a;r+=1)n.push(i.a.createElement("option",{value:r,key:r},r));return i.a.createElement("select",{className:"browser-default",defaultValue:e>a?1:e,onChange:function(e){return t.onChangeDate(e)}},n)}}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("h3",{className:"title-area"},"Forecast Weather"),i.a.createElement("div",{className:"content-area"},i.a.createElement("div",{className:"search"},i.a.createElement("div",{className:"search-group"},i.a.createElement("h5",null,"Month"),this.renderMonthSelection(this.props.weather.selectedMonth)),i.a.createElement("div",{className:"search-group"},i.a.createElement("h5",null,"day"),this.renderMonthDateSelection(this.props.weather.selectedDay)),i.a.createElement("div",{className:"search-group"},i.a.createElement("button",{className:"btn indigo waves-effect waves-light lighten-1",type:"submit",name:"submit",onClick:function(t){return e.onSeeWeather(t)}},"check weather"))),i.a.createElement("div",{className:"search-date"},this.renderMessage(this.props.weather.weatherText,this.props.weather.weatherEvery3hour))))}}]),t}(n.Component),b=Object(o.b)(function(e){return{weather:e.weather}},function(e){return{onSetMonth:function(t){e(function(e){return{type:"SET_MONTH",month:e}}(t))},onSetDay:function(t){e(function(e){return{type:"SET_DATE",day:e}}(t))},onFindWeather:function(t){e(function(e){return function(t){var a=new Request("http://api.openweathermap.org/data/2.5/forecast?id=1880252&appid=c39f3947b671b234f7f5571b40977227&units=metric",{method:"GET"}),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return fetch(a).then(function(e){return e.json()}).then(function(a){var i=e.selectedMonth,r=e.selectedDay,c=new Date((new Date).getFullYear(),i,r),o=c.getTime()/1e3,l={temp:0,weather:{}},u=[],s=0;a.list.forEach(function(e){if(e.dt>=o&&e.dt<o+86400){l.temp+=e.main.temp,s+=1,l.weather[e.weather[0].main]?l.weather[e.weather[0].main]+=1:l.weather[e.weather[0].main]=1;var t=new Date("".concat(e.dt_txt.substring(0,10),"T").concat(e.dt_txt.substring(11,20),"Z"));u.push({main:e.main,weather:e.weather[0],time:t.toLocaleString().substring(11,20)})}});var h=null,d=0;Object.keys(l.weather).forEach(function(e){l.weather[e]>d&&(d=l.weather[e],h=e)});var m={temp:l.temp?"".concat(Math.round(l.temp/s*100)/100,"\xb0"):"Not Available",weather:h||"Not Available"},p=new Intl.DateTimeFormat("sg",{weekday:"long"}),v="".concat(n[i]," ").concat(r," - ").concat(p.format(c)," (Weather: ").concat(m.weather,", Temperature: ").concat(m.temp,")");t(D(v,u))}).catch(function(){t(D("Not Available",[]))})}}(t))}}})(T),A=function(e){return i.a.createElement("div",null,e.item)},I=(a(40),function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(y.a)(this,Object(w.a)(t).call(this))).onAddActivity=function(){window.open("".concat(window.location.origin,"/activity/new"),"_blank")},e.onEditActivity=function(e){window.open("".concat(window.location.origin,"/activity/").concat(e),"_blank")},e}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.onReadActivities()}},{key:"renderList",value:function(e){var t=this;if(e&&e.length>0){var a=e.map(function(e){var a=i.a.createElement("div",{className:"message collection col s12 m6"},i.a.createElement("span",{className:"title collection-item"},"title:",e.title),i.a.createElement("span",{className:"dateInfo collection-item"},"date:",e.date.toString()));return i.a.createElement("div",{key:e.id,onClick:function(){return t.onEditActivity(e.id)}},i.a.createElement(A,{item:a}))});return i.a.createElement("div",null,a)}return i.a.createElement("p",null,"No Activities.")}},{key:"render",value:function(){var e=this,t=this.props.activities;return this.activities=t,i.a.createElement("div",null,i.a.createElement("h3",null,"ActivityList"),this.renderList(this.activities),i.a.createElement("button",{type:"submit",onClick:function(){return e.onAddActivity()}},"Add"))}}]),t}(n.Component)),S=Object(o.b)(function(e){return{activities:e.activities}},function(e){return{onReadActivities:function(){e(p())}}})(I),O=a(23),N=a.n(O),k=function(e){return{type:m,payload:e}},M=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(y.a)(this,Object(w.a)(t).call(this))).getDefaultValue=function(e,t,a){if(e&&e.id){var n=t.findIndex(function(t){return t.id===parseInt(e.id,10)});if(-1!==n&&t[n][a])return t[n][a]}return null},e}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){N.a.Datepicker.init(this.getDate),this.props.match.params&&this.props.match.params.id&&this.props.onReadActivity(parseInt(this.props.match.params.id),10)}},{key:"handleDelete",value:function(e){e.preventDefault(),this.props.onDeleteActivity(parseInt(this.match.params.id,10))}},{key:"renderDeleteBtn",value:function(e){var t=this;return e&&e.id?i.a.createElement("button",{type:"delete",onClick:function(e){return t.handleDelete(e)}},"Delete"):null}},{key:"render",value:function(){var e=this,t=this.props,a=t.activities,n=t.dispatch,r=t.match;return this.activities=a,this.dispatch=n,this.match=r,i.a.createElement("div",null,i.a.createElement("h1",null,"Activity"),i.a.createElement("form",{onSubmit:function(t){return e.props.onSubmit(t,e.match.params,e.getTitle.value,e.getDes.value,e.getDate.value)}},i.a.createElement("label",{id:"title",htmlFor:"title"},"Title",i.a.createElement("input",{type:"text",id:"titleInput",placeholder:"Title",ref:function(t){e.getTitle=t},defaultValue:this.getDefaultValue(this.match.params,this.activities,"title")})),i.a.createElement("label",{id:"desc",htmlFor:"desc"},"Description",i.a.createElement("input",{type:"text",rows:"5",cols:"28",placeholder:"Description",ref:function(t){e.getDes=t},defaultValue:this.getDefaultValue(this.match.params,this.activities,"description")})),i.a.createElement("label",{id:"date",htmlFor:"date"},"Date",i.a.createElement("input",{className:"datepicker",ref:function(t){e.getDate=t},type:"text",placeholder:"Date",defaultValue:this.getDefaultValue(this.props.match.params,this.activities,"date")})),this.renderDeleteBtn(this.match.params),i.a.createElement("button",{type:"submit"},"Confirm")))}}]),t}(n.Component),C=Object(o.b)(function(e){return{activities:e.activities}},function(e){return{onDeleteActivity:function(t){e(function(e){return{type:"DELETE_ACTIVITY",id:e}}(parseInt(t,10))),e(k("/activity"))},onSubmit:function(t,a,n,i,r){void 0!==t&&t.preventDefault&&t.preventDefault();var c={title:n,description:i,date:r};a&&a.id?(c.id=parseInt(a.id,10),e(function(e,t){return{type:"EDIT_ACTIVITY",id:e,activity:t}}(c.id,c)),e(k("/activity"))):(e(function(e){return{type:"ADD_ACTIVITY",activity:e}}(c)),e(k("/activity")))},onReadActivity:function(t){e(function(e,t){return{type:"READ_ACTIVITY",id:e,activity:t}}(t))}}})(M),j={activities:[],router:{pathname:"/"},weather:{selectedMonth:null,selectedDay:null,weatherText:"",weatherEvery3hour:[]}},_=a(6),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j.activities,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ACTIVITY":return e.concat([t.activity]);case"EDIT_ACTIVITY":var a=e.findIndex(function(e){return e.id===t.id});return e[a]=t.activity,e;case"DELETE_ACTIVITY":return e.filter(function(e){return e.id!==t.id});case"READ_ACTIVITIES":return e=t.activities;case"READ_ACTIVITY":return e=[t.activity];default:return e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j.router,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return e.pathname=t.payload,e;default:return e}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j.weather,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MONTH":return Object.assign({},e,{selectedMonth:t.month});case"SET_DATE":return Object.assign({},e,{selectedDay:t.day});case"SET_WEATHER_TEXT":return Object.assign({},e,{weatherText:t.weatherText,weatherEvery3hour:t.weatherEvery3hour});default:return e}},R=Object(_.c)({activities:V,router:x,weather:J}),Y=function(e){return function(){return function(t){return function(a){switch(a.type){case m:return e.replace(a.payload),t(a);default:return t(a)}}}}},F=function(){return function(e){return function(t){var a=localStorage.getItem("activities"),n=null,i=1;switch(t.type){case"ADD_ACTIVITY":return a&&(i=(n=JSON.parse(a)).length+1),t.activity.id=(new Date).getTime(),1===i?localStorage.setItem("activities",JSON.stringify([t.activity])):(n.push(t.activity),localStorage.setItem("activities",JSON.stringify(n))),e(t);case"EDIT_ACTIVITY":if(a&&(n=JSON.parse(a)),n){var r=n.findIndex(function(e){return e.id===t.id});-1!==r&&(n[r]=t.activity,localStorage.setItem("activities",JSON.stringify(n)))}return e(t);case"DELETE_ACTIVITY":if(a&&(n=JSON.parse(a)),n){var c=n.findIndex(function(e){return e.id===t.id});-1!==c&&(n.splice(c,1),localStorage.setItem("activities",JSON.stringify(n)))}return e(t);case"READ_ACTIVITIES":return a&&(n=JSON.parse(a)),n||(n=[]),t.activities=n,e(t);case"READ_ACTIVITY":if(a&&(n=JSON.parse(a)),t.activity=null,n){var o=n.findIndex(function(e){return e.id===t.id});-1!==o&&(t.activity=n[o])}return e(t);default:return e(t)}}}},L=a(24),W=function(e,t){return Object(_.d)(R,e,Object(_.a)(Y(t),L.a,F))},H=Object(d.a)(),B=W(j,H);window.addEventListener&&window.addEventListener("storage",v(B));var X=function(){return i.a.createElement(o.a,{store:B},i.a.createElement("div",{className:"App"},i.a.createElement("div",null,i.a.createElement(l.a,{history:H},i.a.createElement("div",null,i.a.createElement("nav",{className:"nav-bar indigo lighten-1"},i.a.createElement("div",{className:"nav-wrapper"},i.a.createElement("ul",{id:"nav-mobile",className:"left"},i.a.createElement("li",null,i.a.createElement(u.a,{to:"/weather"},"ForecastWeather")),i.a.createElement("li",null,i.a.createElement(u.a,{to:"/activity"},"Activity"))))),i.a.createElement(s.a,null,i.a.createElement(h.a,{exact:!0,path:"/",component:b}),i.a.createElement(h.a,{exact:!0,path:"/weather",component:b}),i.a.createElement(h.a,{exact:!0,path:"/activity",component:S}),i.a.createElement(h.a,{exact:!0,path:"/activity/new",component:C}),i.a.createElement(h.a,{exact:!0,path:"/activity/:id",component:C}),i.a.createElement(h.a,{component:b})))))))};c.a.render(i.a.createElement(X,null),document.getElementById("root"))}},[[26,2,1]]]);
//# sourceMappingURL=main.74861fb0.chunk.js.map