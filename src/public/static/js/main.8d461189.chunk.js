(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{21:function(e,a,t){"use strict";var r=t(2),n=t(22),p=t(20),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.Snackbar,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SNACKBAR::ADD":return Object(r.a)(Object(r.a)({},e),{},{data:[].concat(Object(p.a)(e.data),[{type:a.snackbarType,id:a.id,message:a.message}])});case"SNACKBAR::CLOSE":return Object(r.a)(Object(r.a)({},e),{},{data:e.data.filter((function(e){return e.id!==a.id}))});default:return e}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.Independent,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"DRAWER::TOGGLE":return Object(r.a)(Object(r.a)({},e),{},{drawerOpen:a.state});case"MODAL::TOGGLE":return Object(r.a)(Object(r.a)({},e),{},{modalOpen:!e.modalOpen});case"SETTINGS::SWITCH_THEME":return Object(r.a)(Object(r.a)({},e),{},{theme:"LIGHT"===e.theme?"UNICORN":"LIGHT"});case"SETTINGS::UPDATE":return Object(r.a)(Object(r.a)({},e),{},{updateAvailable:a.available});case"SETTINGS::DOWNLOAD_AVAILABLE":return Object(r.a)(Object(r.a)({},e),{},{downloadAvailable:a.downloadAvailable});case"SETTINGS::VIEWED_ANNOUNCEMENTS":return Object(r.a)(Object(r.a)({},e),{},{viewedAnnouncements:[].concat(Object(p.a)(e.viewedAnnouncements),[a.id])});case"SETTINGS::LOGIN::POP_UP":return Object(r.a)(Object(r.a)({},e),{},{loginPopUp:a.state});case"SETTINGS::ORDERS":return Object(r.a)(Object(r.a)({},e),{},{orders:a.orders});case"INDEPENDENT::COMPETE":return Object(r.a)(Object(r.a)({},e),{},{compete:a.data});default:return e}},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.Auth,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"AUTH::LOGIN":return Object(r.a)({},a.data);case"AUTH::LOGOUT":return Object(r.a)({},g.Auth);case"AUTH::WISHLIST::UPDATE":return Object(r.a)(Object(r.a)({},e),{},{wishlist:a.ids});default:return e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.Session,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SESSION::TIME":return Object(r.a)(Object(r.a)({},e),{},{time:a.time});case"SESSION::ACTIVITY":return Object(r.a)(Object(r.a)({},e),{},{activity:Object(r.a)({},a.data)});case"SESSION::ANNOUNCEMENTS":return Object(r.a)(Object(r.a)({},e),{},{announcements:a.data});default:return e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.Bag,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"BAG::ADD":return Object(r.a)(Object(r.a)({},e),{},{products:[].concat(Object(p.a)(e.products),[a.data])});case"BAG::REMOVE":return Object(r.a)(Object(r.a)({},e),{},{products:e.products.filter((function(e){return e.id!==a.id}))});case"BAG::ADD::GROUP":return Object(r.a)(Object(r.a)({},e),{},{products:[].concat(Object(p.a)(e.products),Object(p.a)(a.orders))});case"BAG::ADDRESS::ADD":return Object(r.a)(Object(r.a)({},e),{},{address:a.data});case"BAG::EMPTY":return Object(r.a)(Object(r.a)({},e),{},{products:[]});case"BAG::TAB::ADD":return Object(r.a)(Object(r.a)({},e),{},{tab:[].concat(Object(p.a)(e.tab),[a.order])});case"BAG::TAB::REMOVE":return Object(r.a)(Object(r.a)({},e),{},{tab:e.tab.filter((function(e){return e.id!==a.id}))});default:return e}},g={Snackbar:{data:[]},Independent:{modalOpen:!1,drawerOpen:!1,updateAvailable:!1,downloadAvailable:!1,theme:"UNICORN",loginPopUp:!1},Tournament:{registeredSlot:{}},Auth:{accessToken:"",refreshToken:"",userId:"",wishlist:[]},Session:{time:Date.now()-18e5,activity:{title:"Street 17 Cafe",type:"MAIN"},announcements:[]},Bag:{products:[],tab:[]}},s=Object(n.c)({Snackbar:c,Independent:o,Auth:i,Session:b,Bag:x}),u=function(e){var a=e.getState;return function(e){return function(t){var r=e(t);return localStorage.setItem("hackeearth",JSON.stringify({Auth:a().Auth,Independent:a().Independent,Bag:a().Bag})),r}}},d={};try{d=localStorage.getItem("hackeearth")?JSON.parse(localStorage.getItem("hackeearth")):{}}catch(O){console.log("Unable to read store from localstorage",O)}var l=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||n.d;a.a=Object(n.e)(s,Object(r.a)(Object(r.a)({},d),{},{Independent:Object(r.a)(Object(r.a)({},g.Independent),d.Independent),Auth:Object(r.a)(Object(r.a)({},g.Auth),d.Auth),Bag:Object(r.a)(Object(r.a)({},g.Bag),d.Bag)}),l(Object(n.a)(u)))},47:function(e,a,t){"use strict";t.d(a,"d",(function(){return n})),t.d(a,"b",(function(){return p})),t.d(a,"e",(function(){return c})),t.d(a,"c",(function(){return o})),t.d(a,"a",(function(){return i}));var r=t(21),n=function(e,a){return r.a.dispatch({type:"SNACKBAR::ADD",message:e,id:a||Date.now(),snackbarType:"success"})},p=function(e,a){return r.a.dispatch({type:"SNACKBAR::ADD",message:e,id:a||Date.now(),snackbarType:"error"})},c=function(e,a){return r.a.dispatch({type:"SNACKBAR::ADD",message:e,id:a||Date.now(),snackbarType:"warning"})},o=function(e,a){return r.a.dispatch({type:"SNACKBAR::ADD",message:e,snackbarType:"info",id:a||Date.now()})},i=function(e){return r.a.dispatch({type:"SNACKBAR::CLOSE",id:e})}},57:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(0),n=t.n(r),p=t(88),c=t(89),o=Object(p.a)((function(e){return{root:{minHeight:200,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}}));function i(e){var a=o();return n.a.createElement("div",{className:a.root},e.loadingMessage,n.a.createElement(c.a,null))}i.defaultProps={loadingMessage:"Fetching data"}},77:function(e,a,t){e.exports=t(86)},86:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),p=t(13),c=t.n(p),o=t(122),i=t(36),b=t(24),x=t(21),g=t(121),s=t(124),u=t(123),d=t(47),l=t(118);function O(e){return n.a.createElement(u.a,Object.assign({elevation:6,variant:"filled"},e))}var f=function(e){var a=e.message.match(/\[.*\]/gi);if(null===a)return e.message;var t=a[0].substr(1,a[0].length-2).split("|"),r=e.message.split(/\[.*\]/gi);return n.a.createElement("div",null,r[0]," ",n.a.createElement(l.a,{component:i.b,to:t[1],size:"small",variant:"outlined",onClick:e.onClick},t[0]))};var m=Object(b.b)((function(e){return{snackbar:e.Snackbar}}))((function(e){var a=function(e,a,t){"clickaway"!==a&&Object(d.a)(t)};return n.a.createElement("div",null,e.snackbar.data.map((function(e,t){return n.a.createElement(s.a,{open:!0,onClose:a,anchorOrigin:{vertical:"top",horizontal:"right"},key:e.id,style:{marginTop:64*t+"px"}},n.a.createElement(O,{severity:e.type,onClose:function(t,r){return a(0,r,e.id)}},n.a.createElement(f,{message:e.message,onClick:function(){return Object(d.a)(e.id)}})))})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=t(2),j=t(69),S=t(120),E=t(44),v=["none","0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 2px 2px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 4px 6px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 4px 6px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 4px 8px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 5px 8px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 6px 12px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 7px 12px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 6px 16px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 7px 16px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 8px 18px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 9px 18px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 10px 20px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 11px 20px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 12px 22px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 13px 22px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 14px 24px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 16px 28px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 18px 30px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 20px 32px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 22px 34px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 24px 36px -8px rgba(0,0,0,0.50)"],A="ONE_DARK",y="UNICORN",T={direction:"ltr",typography:{h1:{fontWeight:500,fontSize:35,letterSpacing:"-0.24px"},h2:{fontWeight:500,fontSize:29,letterSpacing:"-0.24px"},h3:{fontWeight:500,fontSize:24,letterSpacing:"-0.06px"},h4:{fontWeight:500,fontSize:20,letterSpacing:"-0.06px"},h5:{fontWeight:500,fontSize:16,letterSpacing:"-0.05px"},h6:{fontWeight:500,fontSize:14,letterSpacing:"-0.05px"},overline:{fontWeight:500}},overrides:{MuiLinearProgress:{root:{borderRadius:3,overflow:"hidden"}},MuiListItemIcon:{root:{minWidth:48}},MuiChip:{root:{backgroundColor:"rgba(0,0,0,0.075)"}}}},I=[{name:"LIGHT",overrides:{MuiInputBase:{input:{"&::placeholder":{opacity:1,color:S.a[600]}}}},palette:{type:"light",action:{active:S.a[600]},background:{default:"#f4f6f8",dark:"#f4f6f8",paper:"#fff"},primary:{main:E.a[600]},secondary:{main:"#5850EC"},text:{primary:S.a[900],secondary:S.a[600]}},shadows:["none","0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15)","0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)"]},{name:A,palette:{type:"dark",action:{active:"rgba(255, 255, 255, 0.54)",hover:"rgba(255, 255, 255, 0.04)",selected:"rgba(255, 255, 255, 0.08)",disabled:"rgba(255, 255, 255, 0.26)",disabledBackground:"rgba(255, 255, 255, 0.12)",focus:"rgba(255, 255, 255, 0.12)"},background:{default:"#1c2025",dark:"#1c2025",paper:"#282C34"},primary:{main:"#8a85ff"},secondary:{main:"#8a85ff"},text:{primary:"#e6e5e8",secondary:"#adb0bb"}},shadows:v},{name:y,palette:{type:"dark",action:{active:"rgba(255, 255, 255, 0.54)",hover:"rgba(255, 255, 255, 0.04)",selected:"rgba(255, 255, 255, 0.08)",disabled:"rgba(255, 255, 255, 0.26)",disabledBackground:"rgba(255, 255, 255, 0.12)",focus:"rgba(255, 255, 255, 0.12)"},background:{default:"#222431",dark:"#222431",paper:"#2a2d3d"},primary:{main:"#a67dff"},secondary:{main:"#a67dff"},text:{primary:"#f6f5f8",secondary:"#9699a4"}},shadows:v}];function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=I.find((function(a){return a.name===e.theme}));a||(console.warn(new Error("The theme ".concat(e.theme," is not valid"))),a=I[0]);var t=Object(j.a)(Object(h.a)(Object(h.a)({},T),a));return t}var D=t(57),k=n.a.lazy((function(){return Promise.all([t.e(4),t.e(8)]).then(t.bind(null,387))}));var w=Object(b.b)((function(e){return{theme:e.Independent.theme}}),null)((function(e){return n.a.createElement(g.a,{theme:N({theme:e.theme||"ONE_DARK"})},n.a.createElement("div",null,n.a.createElement(o.a,null),n.a.createElement(m,null),n.a.createElement(n.a.Suspense,{fallback:n.a.createElement(D.a,{isLoading:!0})},n.a.createElement(k,null))))}));"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}));var B=function(){return n.a.createElement(b.a,{store:x.a},n.a.createElement(i.a,null,n.a.createElement(w,null)))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(B,null)),document.getElementById("root"))}},[[77,2,3]]]);