(this["webpackJsonpswisheats-react"]=this["webpackJsonpswisheats-react"]||[]).push([[0],{50:function(e,n,t){},51:function(e,n,t){},57:function(e,n,t){},76:function(e,n,t){},78:function(e,n,t){"use strict";t.r(n),t.d(n,"ThemeContext",(function(){return me}));var r=t(1),a=t(5),c=t(15),o=t(0),u=t.n(o),i=t(17),s=t.n(i),l=t(20),d=t(4),b=t(39),j=t.n(b),h=(t(48),t(49),t(50),t(13)),f=t(7),m=(t(51),t(8));function O(){var e=Object(m.a)([""]);return O=function(){return e},e}function p(){var e=Object(m.a)(["\n  display: block;\n  padding: 1rem;\n  transition: 250ms ease background-color;\n  color: ",";\n  &:hover {\n    cursor: pointer;\n    color: ",";\n    background-color: ",";\n  }\n"]);return p=function(){return e},e}function g(){var e=Object(m.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  background: ",";\n  min-height: 50px;\n  font-size: 0.9em;\n  font-weight: 500;\n  list-style: none;\n"]);return g=function(){return e},e}var x=d.b.div(g(),(function(e){return e.theme.backgroundColour})),v=Object(d.b)(l.b)(p(),(function(e){return e.theme.textColour}),(function(e){return e.theme.textColour}),(function(e){return e.theme.uiBackgroundColour})),w=Object(d.b)(v)(O());var k=function(e){Object(h.a)(e);var n=Object(o.useContext)(me).dispatch;return Object(r.jsxs)(x,{className:"btn-group",children:[Object(r.jsxs)("div",{className:"navbar",children:[Object(r.jsx)(v,{to:"/",children:"Home"}),Object(r.jsx)(v,{to:"/restaurant/search",children:"Search Restaurant"})]}),Object(r.jsx)(w,{onClick:function(){n({type:"toggleTheme"})},children:"Toggle Theme"})]})};function C(){var e=Object(m.a)(["\n"]);return C=function(){return e},e}function y(){var e=Object(m.a)(["\nborder: 1px solid black;\nborder-radius: 25px;\npadding-left: 1rem;\n&:focus {\n    outline: none;\n    box-shadow: none;\n}\n"]);return y=function(){return e},e}function B(){var e=Object(m.a)(["\ncolor: ",";\nbackground: ","\nfont-size: 1rem;\nborder: none;\nfont-weight: 500;\n&:focus {\n    outline: none;\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);;\n}\n"]);return B=function(){return e},e}function S(){var e=Object(m.a)(["\ncolor: ",";\nbackground: ","\npadding-top: 1rem;\npadding-left: 1rem;\npadding-right: 1rem;\npadding-botton: 1rem;\nfont-size: 1.2rem;\nborder: none;\nfont-weight: 500;\n&:focus {\n    outline: none;\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);;\n}\n"]);return S=function(){return e},e}function T(){var e=Object(m.a)(["\ncolor: ",";\nbackground: ","\npadding: 0.5rem;\nfont-size: 2rem;\n"]);return T=function(){return e},e}function N(){var e=Object(m.a)(["\ncolor: ",";\nbackground: ",";\npadding: 0.5rem;\nfont-size: 3rem;\n"]);return N=function(){return e},e}function E(){var e=Object(m.a)(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\njustify-content: space-around;\nalign-items: center;\nbackground: ",";\nmargin: 2rem;\nborder-radius: 15px;\nbox-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);\n"]);return E=function(){return e},e}function I(){var e=Object(m.a)(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\njustify-content: center;\nalign-items: center;\nbackground: ",";\nmin-height: 200px;\nmargin: 2rem;\nborder-radius: 15px;\nbox-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);\n"]);return I=function(){return e},e}function _(){var e=Object(m.a)(["\ndisplay: flex;\nwidth: 100%;\nheight: 100vh;\njustify-content: center;\nalign-items: center;\nlist-style: none;\noverflow: auto;\nbackground: ",";\n"]);return _=function(){return e},e}var H=d.b.div(_(),(function(e){return e.theme.containerBackgroundColour})),F=d.b.div(I(),(function(e){return e.theme.backgroundColour})),P=(d.b.form(E(),(function(e){return e.theme.backgroundColour})),d.b.div(N(),(function(e){return e.theme.mainHeading}),(function(e){return e.theme.backgroundColor}))),q=d.b.div(T(),(function(e){return e.theme.subHeading}),(function(e){return e.theme.backgroundColor})),z=d.b.button(S(),(function(e){return e.theme.uiColour}),(function(e){return e.theme.uiBackgroundColour})),J=d.b.button(B(),(function(e){return e.theme.textColour}),(function(e){return e.theme.uiBackgroundColour})),R=d.b.input(y()),A=Object(d.b)(R).attrs({type:"password"})(C());var L=function(e){return Object(h.a)(e),Object(r.jsxs)("div",{children:[Object(r.jsx)("header",{children:Object(r.jsx)(k,{})}),Object(r.jsxs)(H,{children:[Object(r.jsx)("main",{children:Object(r.jsxs)(F,{children:[Object(r.jsx)(P,{children:"Hello World!"}),Object(r.jsx)(q,{children:"Welcome to Swish Eats"})]})}),Object(r.jsx)("footer",{})]})]})},M=t(18);t(57);function W(){var e=Object(m.a)(["\n    width: 100%;\n    display: flex;\n    background: ",";\n    margin-left: 1rem;\n"]);return W=function(){return e},e}var G=d.b.div(W(),(function(e){return e.theme.backgroundColor}));var U=function(e){return Object(h.a)(e),Object(r.jsx)(G,{children:Object(r.jsx)(J,{className:"UI-Button",onClick:function(){return window.history.back()},children:"Go back"})})},Z=t(16),$=t.n(Z),D=t(19);function K(e){if(!e.message)throw new Error("Error object not detected.");alert(e.message)}var Q=function(){var e=Object(D.a)($.a.mark((function e(n,t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""==n||""==t?K(new Error("Please enter valid input fields.")):(console.log({email:n,password:t}),localStorage.setItem("token","<fake token>"),window.location.href="/");case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();function V(){var e=Object(m.a)(["\n    width: 100%;\n    display: flex;\n    background: ",";\n"]);return V=function(){return e},e}var X=d.b.div(V(),(function(e){return e.theme.backgroundColor}));var Y=function(e){Object(h.a)(e);var n=Object(o.useState)({email:"",password:""}),t=Object(c.a)(n,2),u=t[0],i=t[1],s=u.email,l=u.password,d=function(e){return i(Object(a.a)(Object(a.a)({},u),{},Object(M.a)({},e.target.name,e.target.value)))};return Object(r.jsxs)(H,{children:[Object(r.jsx)("header",{}),Object(r.jsx)("main",{children:Object(r.jsxs)(F,{className:"Login-Form",children:[Object(r.jsx)(X,{className:"Form-Header",children:Object(r.jsx)(U,{})}),Object(r.jsx)(q,{className:"Login-Heading",children:"Login"}),Object(r.jsx)(R,{type:"text",placeholder:"Email",name:"email",onChange:d}),Object(r.jsx)(A,{placeholder:"Password",name:"password",textContentType:"password",onChange:d}),Object(r.jsx)(z,{className:"Primary-Button",onClick:function(){return Q(s,l)},children:"Confirm"})]})}),Object(r.jsx)("footer",{})]})},ee=t(26).default;function ne(e){return new Promise((function(n,t){try{if(!e)throw new Error("Please enter valid query.");var r,a;!function(e){return!/[a-zA-Z]/g.test(e)&&!!e.value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)}(e)?(r=e,console.log("The query detected as a name. It was ".concat(e,"."))):(a=e,console.log("The query detected as phonenumber. It was ".concat(e,"."))),console.log("c85af31b612644d7762c27c205a7967f"),console.log("e254af2027msheae8ddc4566b7acp18990djsnda923272f615");var c={method:"GET",url:"https://documenu.p.rapidapi.com/restaurants/search/fields",params:{exact:"false",restaurant_name:r,restaurant_phone:a},headers:{"x-api-key":"c85af31b612644d7762c27c205a7967f","x-rapidapi-key":"e254af2027msheae8ddc4566b7acp18990djsnda923272f615","x-rapidapi-host":"documenu.p.rapidapi.com"}};ee.request(c).then((function(e){var t=e.data.data;if(0==t.length)K(new Error("No restaurant found with that ".concat(a?"phone number":"name",".")));else if(t.length>1){var r=t.filter((function(e,n,t){return t.findIndex((function(n){return n.restaurant_name===e.restaurant_name&&n.restaurant_website===e.restaurant_website}))===n}));console.log("multiple matches detected."),n(r)}else n(t)})).catch((function(e){K(e)}))}catch(o){K(o)}}))}t(76);var te=t(21),re=t(26),ae=function(){var e=Object(D.a)($.a.mark((function e(n){var t;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.post("".concat("http://nomnom.tech","/api/restaurant/create"),n);case 3:t=e.sent,console.log(t.data),alert("created!"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),K(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}();function ce(){var e=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: ",";\n    background: ","\n    padding: 0.5rem;\n    border: none;\n    border-radius: 15px;\n    &:focus {\n        outline: none;\n        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);;\n    }\n"]);return ce=function(){return e},e}function oe(){var e=Object(m.a)(["\ndisplay: flex;\nflex-direction: row;\nwidth: 100%;\njustify-content: center;\nalign-items: center;\nbackground: ",";\nmargin: 2rem;\nborder-radius: 25px;\n"]);return oe=function(){return e},e}var ue=d.b.div(oe(),(function(e){return e.theme.backgroundColour})),ie=d.b.button(ce(),(function(e){return e.theme.textColour}),(function(e){return e.theme.backgroundColour}));var se=function(e){Object(h.a)(e);var n=Object(o.useState)({data:[],loading:!0}),t=Object(c.a)(n,2),u=t[0],i=t[1],s=Object(o.useState)({show:!1,restaurant:null}),l=Object(c.a)(s,2),d=l[0],b=l[1],j=Object(o.useState)({query:""}),f=Object(c.a)(j,2),m=f[0],O=f[1],p=m.query,g=Object(o.useState)({documenuId:null,tables:null,password:null}),x=Object(c.a)(g,2),v=x[0],w=x[1],C=function(){var e=Object(D.a)($.a.mark((function e(n){var t;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i({data:[],loading:!0}),e.next=3,ne(n);case 3:t=e.sent,i({loading:!1,data:t}),console.log(t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),y=function(e){b({show:!d.show,restaurant:e})},B=function(){var e=Object(D.a)($.a.mark((function e(n){var t;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.tables||K(new Error("Please enter a value for number of tables.")),t=localStorage.getItem("token"),ae({documenuId:n.restaurant_id,tables:v.tables,password:t});case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsx)("header",{children:Object(r.jsx)(k,{})}),Object(r.jsxs)(H,{children:[Object(r.jsx)("main",{className:"Restaurant-Search-Main",children:Object(r.jsxs)(F,{children:[Object(r.jsxs)(ue,{children:[Object(r.jsx)(R,{className:"Restaurant-Search-Bar",type:"text",placeholder:"name or phonenumber",name:"query",onChange:function(e){return O(Object(a.a)(Object(a.a)({},p),{},Object(M.a)({},e.target.name,e.target.value)))}}),Object(r.jsx)(z,{className:"Primary-Button Search-Bar-Button",onClick:function(){return C(p)},children:"Search"})]}),Object(r.jsx)("div",{children:!u.loading&&Array.isArray(u.data)&&u.data.length>=1&&u.data.map((function(e,n){return Object(r.jsxs)(ie,{restaurant_id:e.restaurant_id,onClick:function(){return y(e)},children:[Object(r.jsx)("p",{children:e.restaurant_name}),Object(r.jsx)("p",{children:e.restaurant_website})]},e.restaurant_id)}))})]})}),Object(r.jsxs)(te.a,{show:d.show,onHide:y,children:[Object(r.jsx)(te.a.Header,{closeButton:!0,children:Object(r.jsx)(te.a.Title,{children:d.restaurant&&d.restaurant.restaurant_name})}),Object(r.jsxs)(te.a.Body,{children:["Enter the number of tables at ",d.restaurant&&d.restaurant.restaurant_name,":",Object(r.jsx)(R,{className:"Modal-Table-Input",type:"text",placeholder:"number of tables",name:"tables",onChange:function(e){return w(Object(a.a)(Object(a.a)({},v),{},Object(M.a)({},e.target.name,e.target.value)))}})]}),Object(r.jsxs)(te.a.Footer,{children:[Object(r.jsx)(z,{variant:"secondary",className:"Primary-Button",onClick:y,children:"Close"}),Object(r.jsx)(z,{variant:"primary",className:"Primary-Button",onClick:function(){return B(d.restaurant)},children:"Create"})]})]}),Object(r.jsx)("footer",{})]})]})};var le=function(e){Object(h.a)(e);var n=Object(o.useState)(null),t=Object(c.a)(n,2),a=t[0],u=t[1];return Object(o.useEffect)((function(){var e=localStorage.getItem("token");u(e)}),[]),a?Object(r.jsxs)("div",{children:[Object(r.jsx)(f.a,{exact:!0,path:"/",component:L}),Object(r.jsx)(f.a,{path:"/restaurant/search",component:se})]}):Object(r.jsx)("div",{children:Object(r.jsx)(f.a,{path:"*",component:Y})})};var de=Object(f.e)((function(e){var n=e.history;return Object(o.useEffect)((function(){var e=n.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),null})),be={easeOutBack:"cubic-bezier(0.34, 1.56, 0.64, 1)",colorWhite:"rgb(255, 255, 255)",colorBlack:"rgb(0, 0, 0)"},je={dark:Object(a.a)(Object(a.a)({id:"dark"},be),{},{containerBackgroundColour:"#FF9954",backgroundColour:"black",textColour:"white",uiColour:"white",mainHeadingColour:"white",subHeadingColour:"white",uiBackgroundColour:"#FF7518"}),light:Object(a.a)(Object(a.a)({id:"light"},be),{},{containerBackgroundColour:"#FF9954",backgroundColour:"white",textColour:"black",uiColour:"white",mainHeadingColour:"black",subHeadingColour:"black",uiBackgroundColour:"#FF7518"})},he={currentTheme:localStorage.getItem("theme")&&"dark"==JSON.parse(localStorage.getItem("theme"))?je.dark:je.light};function fe(e,n){switch(n.type){case"setTheme":return Object(a.a)(Object(a.a)({},e),{},{currentTheme:n.value});case"updateTheme":return Object(a.a)(Object(a.a)({},e),{},{currentTheme:Object(a.a)(Object(a.a)({},je[e.currentTheme.id]),n.value)});case"toggleTheme":var t="dark"===e.currentTheme.id?"light":"dark";return Object(a.a)(Object(a.a)({},e),{},{currentTheme:je[t]});default:throw new Error("problem with toggling theme dark and light.")}}var me=Object(o.createContext)();function Oe(){j.a.init({duration:2e3});var e=Object(o.useReducer)(fe,he),n=Object(c.a)(e,2),t=n[0],i=n[1],s=t.currentTheme;return Object(o.useEffect)((function(){"dark"!=s.id&&"light"!=s.id||localStorage.setItem("theme",JSON.stringify(s.id))}),[t]),Object(r.jsx)(u.a.StrictMode,{children:Object(r.jsx)(d.a,{theme:s,children:Object(r.jsx)(me.Provider,{value:Object(a.a)(Object(a.a)({},t),{},{dispatch:i}),children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)(de,{}),Object(r.jsx)(le,{})]})})})})}s.a.render(Object(r.jsx)(Oe,{}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.b247fb95.chunk.js.map