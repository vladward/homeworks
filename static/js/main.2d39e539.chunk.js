(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={App:"App_App__2KKAY",headerLinks:"App_headerLinks__24FEL",headerLinks_container:"App_headerLinks_container__A7mKS",coub:"App_coub__1JT8A",button1:"App_button1__ma-PG",button2:"App_button2__3uUYh",button3:"App_button3__3e4SX",error:"App_error__10FAW",error_text:"App_error_text__Jnwgl",error_text2:"App_error_text2__1we87"}},,function(e,t,n){e.exports={message:"Message_message__2jg2R",avatar:"Message_avatar__O69tM",content:"Message_content__24bLy",angle:"Message_angle__1tuRs",text:"Message_text__1Ax_3",name:"Message_name__CoKe_",time:"Message_time__2Gowr"}},,,,,function(e,t,n){e.exports={input:"SuperInputText_input__gCIMD",superInput:"SuperInputText_superInput__82hIh",errorInput:"SuperInputText_errorInput__1khZH",error:"SuperInputText_error__3FWj1"}},,function(e,t,n){e.exports={default:"SuperButton_default__3TDDZ",red:"SuperButton_red__JNu6f",button:"SuperButton_button__MBtlB",blink:"SuperButton_blink__3p7qD"}},function(e,t,n){e.exports={wrapper:"styles_wrapper__liU1W",main:"styles_main__2Cj2F",buttons:"styles_buttons__3fosy"}},function(e,t,n){e.exports={label:"SuperCheckbox_label__3l72s",checkbox:"SuperCheckbox_checkbox__3Pmkl",spanClassName:"SuperCheckbox_spanClassName__3q7GM"}},,,function(e,t,n){e.exports={affair:"Affair_affair__mh-LS",low:"Affair_low__4_Mxk",high:"Affair_high__16ibk",middle:"Affair_middle__3xaSR"}},function(e,t,n){e.exports={blue:"HW4_blue__1fLZF",column:"HW4_column__1P97m",testSpanError:"HW4_testSpanError__3mjlK"}},,,function(e,t,n){e.exports={someClass:"Affairs_someClass__1l-3x"}},function(e,t,n){e.exports={someClass:"Greeting_someClass__11yQN",error:"Greeting_error__3NOpL"}},function(e,t,n){e.exports={span:"styles_span__3FSIW"}},,,,,,function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(16),s=n.n(c),o=n(9),i=(n(34),n(8)),j=n.n(i),l=n(2),u=n(0);var b=function(){return Object(u.jsxs)("div",{className:j.a.error,children:[Object(u.jsx)("div",{className:j.a.error_text}),Object(u.jsxs)("div",{className:j.a.error_text2,children:[Object(u.jsx)("h1",{children:"404"}),Object(u.jsx)("h3",{children:"Page not found!"}),Object(u.jsx)(o.b,{to:_e.PRE_JUNIOR,children:"Go Home"})]})]})},d=n(3),O=n(5),h=n(7),x=["options","onChange","onChangeOption"],p=function(e){var t=e.options,n=e.onChange,r=e.onChangeOption,a=Object(h.a)(e,x),c=t?t.map((function(e,t){return Object(u.jsx)("option",{value:e,children:e},t)})):[];return Object(u.jsx)("select",Object(O.a)(Object(O.a)({onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)},value:t},a),{},{children:c}))},_=["type","name","options","value","onChange","onChangeOption"],m=function(e){e.type;var t=e.name,n=e.options,r=e.value,a=e.onChange,c=e.onChangeOption,s=Object(h.a)(e,_),o=function(e){a&&a(e),c&&c(e.currentTarget.value)},i=n?n.map((function(e,n){return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(O.a)({type:"radio",name:t,checked:r===e,value:e,onChange:o},s)),e]},t+"-"+n)})):[];return Object(u.jsx)(u.Fragment,{children:i})},f=["x","y","z"];var v=function(){var e=Object(r.useState)(f[1]),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 7",Object(u.jsx)("div",{children:Object(u.jsx)(p,{style:{width:"85px",height:"30px",color:"rosybrown",backgroundColor:"bisque"},options:f,value:n,onChangeOption:a})}),Object(u.jsx)("div",{children:Object(u.jsx)(m,{name:"radio",options:f,value:n,onChangeOption:a})}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},g=n(17),C=n.n(g),N=function(e){var t=e.red,n=e.className,r=Object(h.a)(e,["red","className"]),a="".concat(C.a.button," ").concat(t?C.a.red:C.a.default," ").concat(n);return Object(u.jsx)("button",Object(O.a)({className:a},r))},k=n(18),y=n.n(k),S=n(13);var w=function(){var e=Object(S.c)((function(e){return e.users})),t=Object(S.b)(),n=e.map((function(e,t){return Object(u.jsxs)("div",{className:y.a.main,children:[Object(u.jsx)("div",{children:e.name}),Object(u.jsx)("div",{children:e.age})]},t)}));return Object(u.jsxs)("div",{children:["homeworks 8",Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:y.a.wrapper,children:[n,Object(u.jsxs)("div",{className:y.a.buttons,children:[Object(u.jsx)("div",{children:Object(u.jsx)(N,{onClick:function(){return t({type:"SORT-UP"})},children:"sort up"})}),Object(u.jsx)("div",{children:Object(u.jsx)(N,{onClick:function(){return t({type:"SORT-DAWN"})},children:"sort dawn"})}),Object(u.jsx)("div",{children:Object(u.jsx)(N,{onClick:function(){return t({type:"SORT-AGE",payload:18})},children:"sort age"})})]})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},A=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(v,{}),Object(u.jsx)(w,{})]})},I=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"JuniorPlus page in development"})})},R=n(10),U=n.n(R);var P=function(e){return Object(u.jsxs)("div",{className:U.a.message,children:[Object(u.jsx)("img",{src:e.avatar,alt:"avatar",className:U.a.avatar}),Object(u.jsx)("div",{className:U.a.angle}),Object(u.jsxs)("div",{className:U.a.content,children:[Object(u.jsx)("div",{className:U.a.name,children:e.name}),Object(u.jsx)("div",{className:U.a.text,children:e.message}),Object(u.jsx)("div",{className:U.a.time,children:e.time})]})]})},J="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",T="Some Name",E="some message",F="22:00";var L=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 1",Object(u.jsx)(P,{avatar:J,name:T,message:E,time:F}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},B=n(22),M=n.n(B);var W=function(e){var t=e.affair.priority,n=M.a[t];return Object(u.jsxs)("div",{className:M.a.affair,children:[Object(u.jsx)("label",{className:n,children:e.affair.name}),Object(u.jsx)("label",{className:n,children:e.affair.priority}),Object(u.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})},D=n(26),G=n.n(D);var K=function(e){var t=e.data.map((function(t){return Object(u.jsx)(W,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(u.jsxs)("div",{children:[t,Object(u.jsxs)("div",{className:G.a.someClass,children:[Object(u.jsx)("button",{onClick:function(){return e.changeFilter("all")},children:"All"}),Object(u.jsx)("button",{onClick:function(){return e.changeFilter("high")},children:"High"}),Object(u.jsx)("button",{onClick:function(){return e.changeFilter("middle")},children:"Middle"}),Object(u.jsx)("button",{onClick:function(){return e.changeFilter("low")},children:"Low"})]})]})},H=n(43),q=[{_id:Object(H.a)(),name:"React",priority:"high"},{_id:Object(H.a)(),name:"anime",priority:"low"},{_id:Object(H.a)(),name:"games",priority:"low"},{_id:Object(H.a)(),name:"work",priority:"high"},{_id:Object(H.a)(),name:"html & css",priority:"middle"}];var Z=function(){var e=Object(r.useState)(q),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(d.a)(c,2),o=s[0],i=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,o);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(K,{data:j,changeFilter:function(e){i(e)},deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},X=n(14),Y=n(27),z=n.n(Y),Q=function(e){var t=e.error.length?z.a.error:"",n=function(){e.addUserCallBack()};return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"input",value:e.name,onChange:function(t){e.setNameCallback(t.currentTarget.value)},className:t,onKeyPress:function(e){13===e.charCode&&n()}}),Object(u.jsx)("button",{disabled:!!e.error.length,onClick:n,children:"add"}),Object(u.jsx)("span",{children:e.totalUsers}),Object(u.jsx)("div",{children:Object(u.jsx)("span",{className:t,children:e.error})})]})},$=function(e){e.users;var t=e.addUserCallback,n=e.totalUsers,a=Object(r.useState)(""),c=Object(d.a)(a,2),s=c[0],o=c[1],i=Object(r.useState)(""),j=Object(d.a)(i,2),l=j[0],b=j[1];return Object(u.jsx)(Q,{name:s,setNameCallback:function(e){""!==e.trim()?(o(e),b("")):(o(""),b("Name is invalid"))},addUserCallBack:function(){""!==s.trim()?(alert("Hello ".concat(s," !")),t(s.trim()),o(""),b("")):b("Name is invalid")},error:l,totalUsers:n})};var V=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],c=n.length;return console.log(n),Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)($,{users:n,addUserCallback:function(e){var t={_id:Object(H.a)(),name:e},r=[].concat(Object(X.a)(n),[t]);a(r)},totalUsers:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},ee=n(15),te=n.n(ee),ne=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(h.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(te.a.error," ").concat(o||""),l="".concat(te.a.input," ").concat(c?te.a.errorInput:te.a.superInput," ").concat(s);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(O.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:l},i)),c&&Object(u.jsx)("span",{className:j,children:c})]})},re=n(23),ae=n.n(re),ce=n(19),se=n.n(ce),oe=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(h.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(se.a.checkbox," ").concat(r||"");return Object(u.jsxs)("label",{className:se.a.label,children:[Object(u.jsx)("input",Object(O.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(u.jsx)("span",{className:se.a.spanClassName,children:a})]})};var ie=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(r.useState)(!1),i=Object(d.a)(o,2),j=i[0],l=i[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:ae.a.column,children:[Object(u.jsx)(ne,{value:n,onChangeText:a,onEnter:s,error:c}),Object(u.jsx)(ne,{className:ae.a.blue}),Object(u.jsx)(N,{children:"default"}),Object(u.jsx)(N,{red:!0,onClick:s,children:"delete "}),Object(u.jsx)(N,{disabled:!0,children:"disabled"}),Object(u.jsx)(oe,{checked:j,onChangeChecked:l,children:"some text "}),Object(u.jsx)(oe,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},je=n(28),le=n.n(je),ue=["autoFocus","onBlur","onEnter","spanProps"],be=["children","onDoubleClick","className"],de=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,c=Object(h.a)(e,ue),s=Object(r.useState)(!1),o=Object(d.a)(s,2),i=o[0],j=o[1],l=a||{},b=l.children,x=l.onDoubleClick,p=l.className,_=Object(h.a)(l,be),m="".concat(le.a.span," ").concat(p," ? className : ''");return Object(u.jsx)(u.Fragment,{children:i?Object(u.jsx)(ne,Object(O.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()},style:{border:"1px solid rosybrown",color:"rosybrown"}},c)):Object(u.jsxs)("span",Object(O.a)(Object(O.a)({onDoubleClick:function(e){j(!0),x&&x(e)},className:m,style:{color:"rosybrown"}},_),{},{children:["\u270e",b||c.value]}))})};function Oe(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function he(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}Oe("test",{x:"A",y:1});he("test",{x:"",y:0});var xe=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 6",Object(u.jsx)("div",{children:Object(u.jsx)(de,{value:n,onChangeText:a,spanProps:{children:n?void 0:"enter text..."}})}),Object(u.jsx)(N,{onClick:function(){Oe("editable-span-value",n)},children:"save"}),Object(u.jsx)(N,{onClick:function(){var e=he("editable-span-value",n);a(e)},children:"restore"}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var pe=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(L,{}),Object(u.jsx)(Z,{}),Object(u.jsx)(V,{}),Object(u.jsx)(ie,{}),Object(u.jsx)(xe,{})]})},_e={PRE_JUNIOR:"/pre-junior",JUNIOR:"/junior",JUNIOR_PLUS:"/junior-plus"};var me=function(){return Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{path:"/",element:Object(u.jsx)(l.a,{to:_e.PRE_JUNIOR})}),Object(u.jsx)(l.b,{path:_e.PRE_JUNIOR,element:Object(u.jsx)(pe,{})}),Object(u.jsx)(l.b,{path:_e.JUNIOR,element:Object(u.jsx)(A,{})}),Object(u.jsx)(l.b,{path:_e.JUNIOR_PLUS,element:Object(u.jsx)(I,{})}),Object(u.jsx)(l.b,{path:"*",element:Object(u.jsx)(b,{})})]})};var fe=function(){return Object(u.jsx)("div",{className:j.a.headerLinks,children:Object(u.jsxs)("div",{className:j.a.headerLinks_container,children:[Object(u.jsx)(o.b,{className:j.a.button1,to:_e.PRE_JUNIOR,children:"Pre-Junior"}),Object(u.jsx)(o.b,{className:j.a.button2,to:_e.JUNIOR,children:"Junior"}),Object(u.jsx)(o.b,{className:j.a.button3,to:_e.JUNIOR_PLUS,children:"Junior-Plus"}),Object(u.jsx)("div",{className:j.a.coub})]})})};var ve=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(fe,{}),Object(u.jsx)(me,{})]})};var ge=function(){return Object(u.jsxs)("div",{className:j.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(ve,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=n(24),Ne=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}],ke=Object(Ce.a)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SORT-UP":var n=Object(X.a)(e);return n.sort((function(e,t){return t.age-e.age}));case"SORT-DAWN":var r=Object(X.a)(e);return r.sort((function(e,t){return t.age-e.age})).reverse();case"SORT-AGE":return e.filter((function(e){return e.age>t.payload})).sort((function(e,t){return e.age-t.age}));default:return e}}}),ye=Object(Ce.b)(ke);s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(S.a,{store:ye,children:Object(u.jsx)(ge,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[42,1,2]]]);
//# sourceMappingURL=main.2d39e539.chunk.js.map