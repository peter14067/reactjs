(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{11:function(t,e,a){t.exports=a(12)},12:function(t,e,a){"use strict";a.r(e);var n=a(8),l=a(2),s=a(4),o=a(5),r=a(10),c=a(6),i=a(1),u=a(9),h=a(0),d=a.n(h),b=a(7),m=a.n(b);a(17);function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(a,!0).forEach((function(e){Object(l.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var y=30,p="",E=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(r.a)(this,Object(c.a)(e).call(this,t))).Bet=function(){var t=a.state.money,e=a.state.data2,n=(a.state.num,parseInt(t+500));6==e.length?(alert("\u4e0b\u6ce8\u6210\u529f"),a.setState(f({},a.state,{num:e,money:n,data8:e,data2:[]}))):alert("\u8acb\u9078\u64c7\u5269\u4e0b\u865f\u78bc")},a.Select=function(t){if(a.state.data2.length<6){var e=t.target.id,n=a.state.data2;console.log(n),console.log(e),-1===n.indexOf(e)?(n.push(e),a.setState(f({},a.state,{data2:n}))):alert("\u4f60\u5df2\u7d93\u9078\u64c7\u904e\u4e86")}},a.Draw=function(t){var e=a.state.data,l=a.state.data8,s=a.state.money;a.state.num;if(console.log(e),console.log(l),6==e.length&&6==l.length){a.state.data4;var o=l.map((function(t){return parseInt(t,10)})),r=new Set(e),c=new Set(o),i=new Set(Object(n.a)(r).filter((function(t){return c.has(t)}))),u=Array.from(i);if(0==u.length){console.log(u.length);var h=Math.floor(s/4),d=s-h;a.setState(f({},a.state,{data4:u,cog:"\u4f60\u5c0d\u4e2d"+u.length+"\u500b\u865f\u78bc-----\u518d\u63a5\u518d\u53b2\u5427",bonus:h,money:d,num:[]}))}else if(1==u.length){console.log(u.length);var b=Math.floor(s/3),m=s-b;a.setState(f({},a.state,{data4:u,cog:"\u4f60\u5c0d\u4e2d"+u.length+"\u500b\u865f\u78bc-----\u518d\u63a5\u518d\u53b2\u5427",bonus:b,money:m,num:[]}))}else if(2==u.length){console.log(u.length);var g=Math.floor(s/2),y=s-g;a.setState(f({},a.state,{data4:u,cog:"\u4f60\u5c0d\u4e2d"+u.length+"\u500b\u865f\u78bc-----\u662f\u8086\u734e",bonus:g,money:y,num:[]}))}else 3==u.length?a.setState(f({},a.state,{data4:u,cog:"\u4f60\u5c0d\u4e2d"+u.length+"\u500b\u865f\u78bc-----\u662f\u53c3\u734e",num:[]})):4==u.length?a.setState(f({},a.state,{data4:u,cog:"\u4f60\u5c0d\u4e2d"+u.length+"\u500b\u865f\u78bc\u662f"+u.length+"\u662f\u8cb3\u734e"})):5==u.length&&a.setState(f({},a.state,{data4:u,cog:"\u4f60\u5c0d\u4e2d"+u.length+"\u500b\u865f\u78bc\u662f"+u.length+"\u662f\u982d\u734e"}))}},a.MyCounter=function(){a.state.data2;var t=a.state.data8,e=a.state.num,n=(a.state.data,a.state.data),s=a.state.data4,o=a.state.data8,r=a.state.data10,c=a.state.ltwin,i=a.state.cog,u=a.state.ltn;if(y>0){var h;if(15==y)if(0!=n.length&&a.setState(f({},a.state,{data10:n,data:[],ltn:[],ltwin:[],cog1:i})),0!=n.length&&0!=o.length&&r.length,0!=n.length&&0!=i.length&&0!=r.length&&0!=c.length&&0!=u.length&&a.setState(f({},a.state,{data10:n,ltn:[],ltwin:[],data8:[],data4:[],bonus:[],ltt:i,cog1:i,cog:[]})),0!=n.length&&0!=o.length&&0!=i.length)a.setState(f({},a.state,(h={data10:n,data:[],ltn:o,ltwin:s,data8:[],data4:[]},Object(l.a)(h,"data",[]),Object(l.a)(h,"bonus",[]),Object(l.a)(h,"ltt",i),Object(l.a)(h,"cog",[]),h)));y-=1,a.setState(f({},a.state,{time:y}))}else 6==t.length&&a.Draw(),a.setState(f({},a.state,{money:p})),console.log(e),6==e.length?a.setState(f({},a.state,{data2:[],data4:[],cog:""})):a.setState(f({},a.state,{data4:[],cog:""})),a.Ran(),a.Draw(),y=30,a.setState(f({},a.state,{time:30}));return y},a.Ran=function(){a.state.data4;for(var t=0;t<=20;t++)if(a.state.data.length<6){var e=Math.floor(10*Math.random()+1),n=a.state.data;-1===n.indexOf(e)&&(n.push(e),a.setState(f({},a.state,{data:n})))}},a.state={data:[],data2:[],data4:[],data6:[],data8:[],data10:[],num:[],money:[],bonus:[],cog:"",cog1:"",date:new Date,time:30,ltwin:[],ltt:[],ltn:[]},a.Ran=a.Ran.bind(Object(i.a)(a)),a.Draw=a.Draw.bind(Object(i.a)(a)),a.Select=a.Select.bind(Object(i.a)(a)),a.MyCounter=a.MyCounter.bind(Object(i.a)(a)),a.Bet=a.Bet.bind(Object(i.a)(a)),a}return Object(u.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){this.timerId=setInterval(this.MyCounter,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var t=this;return d.a.createElement("div",null,d.a.createElement("h1",null," \u5927\u6a02\u900f\u5c0f\u904a\u6232"),d.a.createElement("button",{type:"button",onClick:this.Draw},"\u958b\u734e"),d.a.createElement("button",{type:"button",button:!0,id:"1",onClick:function(e){return t.Select(e,t.state)}},"1"),d.a.createElement("button",{type:"button",button:!0,id:"2",onClick:function(e){return t.Select(e,t.state)}},"2"),d.a.createElement("button",{type:"button",button:!0,id:"3",onClick:function(e){return t.Select(e,t.state)}},"3"),d.a.createElement("button",{type:"button",button:!0,id:"4",onClick:function(e){return t.Select(e,t.state)}},"4"),d.a.createElement("button",{type:"button",button:!0,id:"5",onClick:function(e){return t.Select(e,t.state)}},"5"),d.a.createElement("button",{type:"button",button:!0,id:"6",onClick:function(e){return t.Select(e,t.state)}},"6"),d.a.createElement("button",{type:"button",button:!0,id:"7",onClick:function(e){return t.Select(e,t.state)}},"7"),d.a.createElement("button",{type:"button",button:!0,id:"8",onClick:function(e){return t.Select(e,t.state)}},"8"),d.a.createElement("button",{type:"button",button:!0,id:"9",onClick:function(e){return t.Select(e,t.state)}},"9"),d.a.createElement("button",{type:"button",button:!0,id:"10",onClick:function(e){return t.Select(e,t.state)}},"10"),d.a.createElement("button",{type:"button",button:!0,id:"11",onClick:function(e){return t.Select(e,t.state)}},"11"),d.a.createElement("button",{type:"button",button:!0,id:"12",onClick:function(e){return t.Select(e,t.state)}},"12"),d.a.createElement("button",{type:"button",button:!0,id:"13",onClick:function(e){return t.Select(e,t.state)}},"13"),d.a.createElement("button",{type:"button",button:!0,id:"14",onClick:function(e){return t.Select(e,t.state)}},"14"),d.a.createElement("button",{type:"button",onClick:this.Ran}),d.a.createElement("h1",null,"\u8ddd\u96e2\u4e0b\u6b21\u958b\u734e\u5012\u6578  ",this.state.time,"  \u79d2      "),d.a.createElement("h1",null,"\u7d2f\u7a4d\u734e\u91d1             ",this.state.money),d.a.createElement("br",null),d.a.createElement("h2",null,"\u8acb\u9078\u64c7\u865f\u78bc  "),d.a.createElement("h2",null,this.state.data2.sort((function(t,e){return t-e})),this.state.data2[0],"  ",this.state.data2[1],"  ",this.state.data2[2],"  ",this.state.data2[3],"  ",this.state.data2[4],"  ",this.state.data2[5]),d.a.createElement("button",{type:"button",onClick:this.Bet},"\u4e0b\u6ce8"),d.a.createElement("h2",null,"\u7576\u671f\u6a02\u900f\u865f\u78bc"),d.a.createElement("h2",null,this.state.data.sort((function(t,e){return t-e})),"(",this.state.data[0],")(",this.state.data[1],")(",this.state.data[2],")(",this.state.data[3],")(",this.state.data[4],")(",this.state.data[5],")"),d.a.createElement("h2",null,"\u73a9\u5bb6\u6240\u9078\u7684\u865f\u78bc"),d.a.createElement("h2",null,this.state.data8[0],"  ",this.state.data8[1],"  ",this.state.data8[2],"  ",this.state.data8[3],"  ",this.state.data8[4],"  ",this.state.data8[5]),d.a.createElement("h2",null,"\u4e2d\u734e\u865f\u78bc"),d.a.createElement("h2",null,"(",this.state.data4[0],")(",this.state.data4[1],")(",this.state.data4[2],")(",this.state.data4[3],")(",this.state.data4[4],")(",this.state.data4[5],")"),d.a.createElement("h3",{style:{color:"blue"}},this.state.cog),d.a.createElement("h2",null,"\u4e2d\u734e\u91d1\u984d"),d.a.createElement("h2",null,this.state.bonus),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("h3",null,"\u4e0a\u671f\u958b\u734e\u865f\u78bc"),d.a.createElement("h2",null,this.state.data.sort((function(t,e){return t-e})),"(",this.state.data10[0],")(",this.state.data10[1],")(",this.state.data10[2],")(",this.state.data10[3],")(",this.state.data10[4],")(",this.state.data10[5],")"),d.a.createElement("h3",null,"\u4e0a\u671f\u73a9\u5bb6\u6240\u9078\u865f\u78bc"),"(",this.state.ltn[0],")(",this.state.ltn[1],")(",this.state.ltn[2],")(",this.state.ltn[3],")(",this.state.ltn[4],")(",this.state.ltn[5],")",d.a.createElement("h3",null,"\u4e0a\u671f\u4e2d\u734e\u865f\u78bc"),"(",this.state.ltwin[0],")(",this.state.ltwin[1],")(",this.state.ltwin[2],")(",this.state.ltwin[3],")(",this.state.ltwin[4],")(",this.state.ltwin[5],")",d.a.createElement("h3",{style:{color:"blue"}},this.state.cog1))}}]),e}(d.a.Component);m.a.render(d.a.createElement(E,null),document.getElementById("root"))},17:function(t,e,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.64b78992.chunk.js.map