(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{152:function(e,a,n){"use strict";var t=n(21),l={login:function(e){t.a.dispatch({type:"AUTH::LOGIN",data:e})},getData:function(){return t.a.getState().Auth},logout:function(){t.a.dispatch({type:"AUTH::LOGOUT"})},isUserLoggedIn:function(){return""!==t.a.getState().Auth.accessToken},updateWishList:function(e){return t.a.dispatch({type:"AUTH::WISHLIST::UPDATE",ids:e}),e}};a.a=l},165:function(e,a,n){"use strict";var t=n(2),l=n(131),r=n(152),i=new l.QueryResponseCache({size:250,ttl:36e5});var s=new l.Environment({network:l.Network.create((function(e,a,n){var l=e.text,s="mutation"===e.operationKind,o="query"===e.operationKind,u=n&&n.force,c=i.get(l,a);if(o&&null!==c&&!u)return c;var d={};if(r.a.isUserLoggedIn()){var g=r.a.getData();d={authorization:"Bearer "+g.accessToken,refreshToken:g.refreshToken}}return fetch("https://www.street17cafe.in/graphql",{method:"POST",headers:Object(t.a)({"content-type":"application/json"},d),body:JSON.stringify({query:e.text,variables:a})}).then((function(e){return e.json()})).then((function(n){if(o&&n&&i.set(l,a,n),!s||"AppMutation"===e.name&&"ApplyVoucherMutation"===e.name||i.clear(),n.errors)throw n.errors;return n}))})),store:new l.Store(new l.RecordSource)});a.a=s},166:function(e,a,n){"use strict";var t=n(152),l=n(47);a.a=function(e){try{e.length>0?function(e){if(void 0===e)return Object(l.b)("Unknow error occured",Date.now());for(var a=0;a<e.length;a++)void 0!==e[a].message&&("Unauthorized"===e[a].message?(console.log("Now will logout user"),Object(l.b)("Hi! you're not logged in [Register now|/account/auth/register]",Date.now()),t.a.logout()):Object(l.b)(e[a].message,Date.now()))}(e):void 0!==e.message&&Object(l.b)(e.message,Date.now())}catch(a){Object(l.b)("Unknown error occured",Date.now())}}},169:function(e,a,n){"use strict";var t=n(0),l=n.n(t),r=n(150),i=n(165),s=n(166),o=n(57),u=n(226),c=n.n(u),d=n(88),g=n(45),m=Object(d.a)({container:{height:"100px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},icon:{color:g.a[700],fontSize:56}});var p=function(e){var a=m();return l.a.createElement("div",{className:a.container},l.a.createElement(c.a,{className:a.icon}),"Error occured")};a.a=function(e){return l.a.createElement(r.QueryRenderer,Object.assign({environment:i.a,render:function(a){var n=a.error,t=a.props;return n?e.error?e.error(n):(Object(s.a)(n),l.a.createElement(p,null)):t?e.component(t):e.loading||l.a.createElement(o.a,{isLoading:!0,loadingMessage:e.loadingMessage})}},e))}},299:function(e,a,n){"use strict";var t=function(){var e=[{kind:"Literal",name:"limit",value:15},{kind:"Literal",name:"page",value:1}],a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},n=[a,{alias:null,args:null,kind:"ScalarField",name:"team",storageKey:null}];return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"defaultPairingQuery",selections:[{args:e,kind:"FragmentSpread",name:"RefetchPairing_teams"}],type:"Query"},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"defaultPairingQuery",selections:[{alias:null,args:[{fields:e,kind:"ObjectValue",name:"paginate"}],concreteType:"PairingPayload",kind:"LinkedField",name:"getPairing",plural:!1,selections:[{alias:null,args:null,concreteType:"Pairing",kind:"LinkedField",name:"docs",plural:!0,selections:[{alias:null,args:null,concreteType:"Team",kind:"LinkedField",name:"team1",plural:!1,selections:n,storageKey:null},{alias:null,args:null,concreteType:"Team",kind:"LinkedField",name:"team2",plural:!1,selections:n,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"winner",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},a],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"totalPages",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"totalDocs",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"limit",storageKey:null}],storageKey:null}]},params:{id:null,metadata:{},name:"defaultPairingQuery",operationKind:"query",text:"query defaultPairingQuery {\n  ...RefetchPairing_teams_3Fdv3d\n}\n\nfragment RefetchPairing_teams_3Fdv3d on Query {\n  getPairing(paginate: {page: 1, limit: 15}) {\n    docs {\n      team1 {\n        id\n        team\n      }\n      team2 {\n        id\n        team\n      }\n      winner\n      createdAt\n      id\n    }\n    page\n    totalPages\n    totalDocs\n    limit\n  }\n}\n"}}}();t.hash="9c6c05246d12f2f68b10f081583aeba4",e.exports=t},300:function(e,a,n){"use strict";var t=function(){var e=[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"team",storageKey:null}];return{argumentDefinitions:[{defaultValue:1,kind:"LocalArgument",name:"page",type:"Int"},{defaultValue:15,kind:"LocalArgument",name:"limit",type:"Int"}],kind:"Fragment",metadata:null,name:"RefetchPairing_teams",selections:[{alias:null,args:[{fields:[{kind:"Variable",name:"limit",variableName:"limit"},{kind:"Variable",name:"page",variableName:"page"}],kind:"ObjectValue",name:"paginate"}],concreteType:"PairingPayload",kind:"LinkedField",name:"getPairing",plural:!1,selections:[{alias:null,args:null,concreteType:"Pairing",kind:"LinkedField",name:"docs",plural:!0,selections:[{alias:null,args:null,concreteType:"Team",kind:"LinkedField",name:"team1",plural:!1,selections:e,storageKey:null},{alias:null,args:null,concreteType:"Team",kind:"LinkedField",name:"team2",plural:!1,selections:e,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"winner",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"totalPages",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"totalDocs",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"limit",storageKey:null}],storageKey:null}],type:"Query"}}();t.hash="a7f5c258d8b30ce2f8153c0b7b083add",e.exports=t},301:function(e,a,n){"use strict";var t=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"page",type:"Int!"},{defaultValue:null,kind:"LocalArgument",name:"limit",type:"Int!"}],a=[{kind:"Variable",name:"limit",variableName:"limit"},{kind:"Variable",name:"page",variableName:"page"}],n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},t=[n,{alias:null,args:null,kind:"ScalarField",name:"team",storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"RefetchPairingQuery",selections:[{args:a,kind:"FragmentSpread",name:"RefetchPairing_teams"}],type:"Query"},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"RefetchPairingQuery",selections:[{alias:null,args:[{fields:a,kind:"ObjectValue",name:"paginate"}],concreteType:"PairingPayload",kind:"LinkedField",name:"getPairing",plural:!1,selections:[{alias:null,args:null,concreteType:"Pairing",kind:"LinkedField",name:"docs",plural:!0,selections:[{alias:null,args:null,concreteType:"Team",kind:"LinkedField",name:"team1",plural:!1,selections:t,storageKey:null},{alias:null,args:null,concreteType:"Team",kind:"LinkedField",name:"team2",plural:!1,selections:t,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"winner",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},n],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"totalPages",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"totalDocs",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"limit",storageKey:null}],storageKey:null}]},params:{id:null,metadata:{},name:"RefetchPairingQuery",operationKind:"query",text:"query RefetchPairingQuery(\n  $page: Int!\n  $limit: Int!\n) {\n  ...RefetchPairing_teams_4nkfPD\n}\n\nfragment RefetchPairing_teams_4nkfPD on Query {\n  getPairing(paginate: {page: $page, limit: $limit}) {\n    docs {\n      team1 {\n        id\n        team\n      }\n      team2 {\n        id\n        team\n      }\n      winner\n      createdAt\n      id\n    }\n    page\n    totalPages\n    totalDocs\n    limit\n  }\n}\n"}}}();t.hash="053bdfffe24e8073fb8107a514fd3f5f",e.exports=t},389:function(e,a,n){"use strict";n.r(a);var t,l=n(169),r=n(0),i=n.n(r),s=void 0!==t?t:t=n(299),o=n(150),u=n(139),c=n(135),d=n(88),g=n(392),m=n(363),p=n(362),f=n(57),y=n(47),k=Object(d.a)((function(e){return{loadingContainer:{position:"relative",overflow:"hidden",margin:0,width:"100%"},loader:{position:"absolute",width:"100%",height:"100%",zIndex:1,background:"rgba(0, 0, 0, .3)",top:0,left:0}}}));function h(e){var a=e.result,n=Object(c.a)(e,["result"]),t=i.a.useState(15),l=Object(u.a)(t,2),r=l[0],s=l[1],o=i.a.useState(!1),d=Object(u.a)(o,2),h=d[0],b=d[1],v=k();function P(e,a){b(!0),n.relay.refetch({page:e,limit:a},null,(function(e){b(!1),e&&(console.error(e),Object(y.b)("Unable to fetch ".concat(e)))}))}return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{className:v.loadingContainer+" "+n.resultContainerClass,container:n.container,spacing:n.spacing},a.docs.map((function(e){return n.render(e)})),(h||n.loading)&&i.a.createElement("div",{className:v.loader},i.a.createElement(f.a,{isLoading:!0}))),i.a.createElement(m.a,null),i.a.createElement(g.a,{rowsPerPageOptions:[15,30,50],component:"div",count:a.totalDocs,rowsPerPage:r,page:a.page-1,onChangePage:function(e,a){return P(a+1,r)},onChangeRowsPerPage:function(e){s(e.target.value),P(a.page,e.target.value)}}))}h.defaultProps={render:function(){},container:!1,spacing:0,loading:!1};var b=h,v=(n(364),n(368),n(386)),P=n(116),F=n(352);var w=Object(d.a)((function(e){return{heading:{fontWeight:300},date:{display:"flex",flexDirection:"row-reverse",background:"rgba(0, 0, 0, .05)"}}}));var S,K,T=function(e){var a=w();return i.a.createElement(p.a,{item:!0,xs:6,sm:6,md:4,lg:3},i.a.createElement(P.a,null,i.a.createElement(v.a,{p:1},i.a.createElement(F.a,{variant:"h4",className:a.heading,component:"center"},e.data.team1.team),i.a.createElement(F.a,{variant:"body2",color:"textSecondary",component:"center"},"v/s"),i.a.createElement(F.a,{variant:"h4",component:"center",className:a.heading,gutterBottom:!0},e.data.team2.team),i.a.createElement("center",null,"TIE"!==e.data.winner?"".concat("TEAM1"===e.data.winner?e.data.team1.team:e.data.team2.team," won the match"):"It was a draw")),i.a.createElement(m.a,null),i.a.createElement(v.a,{p:1,className:a.date},i.a.createElement(F.a,{variant:"caption",color:"textSecondary"},function(e){var a=new Date(+e).toString(),n=[a.substr(16,2),a.substr(19,2)],t=n[0],l=n[1];return a.substr(4,11)+" at "+(+t>12?+t-12:t)+":"+l+" "+(+t>12?"PM":"AM")}(e.data.createdAt)))))};var E=Object(o.createRefetchContainer)((function(e){return console.log(e),console.log(e),i.a.createElement(b,{headCells:[{id:"team",label:"Team Name"},{id:"wins",label:"Wins"},{id:"losses",label:"Losses"},{id:"tie",label:"Ties"},{id:"score",label:"Scores"},{id:"action",label:"Action"}],relay:e.relay,title:"Teams Participating",result:e.teams.getPairing,render:function(e){return i.a.createElement(T,{key:e.createdAt,data:e})},container:!0,spacing:1})}),{teams:void 0!==S?S:S=n(300)},void 0!==K?K:K=n(301));a.default=function(e){return i.a.createElement(l.a,{query:s,component:function(e){return i.a.createElement(E,{teams:e})}})}}}]);