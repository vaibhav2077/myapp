(this.webpackJsonpreact_client=this.webpackJsonpreact_client||[]).push([[0],{66:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),o=c(24),a=c.n(o),r=c(6),s=(c(66),c(85)),l=(c(59),c(1));function d(){var e=Object(i.useState)({color:"black",backgroundColor:"white"}),t=Object(r.a)(e,2),c=t[0],n=t[1],o=Object(i.useState)("Enter Dark Mode"),a=Object(r.a)(o,2),d=a[0],j=a[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)(s.a,{defaultActiveKey:"0",children:[Object(l.jsxs)(s.a.Item,{eventKey:"0",style:c,children:[Object(l.jsx)(s.a.Header,{children:"Accordion Item #1"}),Object(l.jsx)(s.a.Body,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),Object(l.jsxs)(s.a.Item,{eventKey:"1",style:c,children:[Object(l.jsx)(s.a.Header,{children:"Accordion Item #2"}),Object(l.jsx)(s.a.Body,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]}),Object(l.jsx)("button",{className:"btn btn-dark my-2 mx-2",onClick:function(){"black"==c.color?(n({color:"white",backgroundColor:"black"}),j("Exit Dark Mode")):(n({color:"black",backgroundColor:"white"}),j("Enter Dark Mode"))},children:d})]})}var j=c(83),b=c(80),u=c(86),m=c(82),h=c(84),x=c(44);function O(e){return Object(l.jsx)("div",{children:Object(l.jsx)(j.a,{bg:e.mode,expand:"lg",variant:e.mode,children:Object(l.jsxs)(b.a,{children:[Object(l.jsx)(j.a.Brand,{className:"d-inline-block align-top",href:"#home",children:e.title}),Object(l.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(l.jsxs)(j.a.Collapse,{id:"basic-navbar-nav",children:[Object(l.jsxs)(u.a,{className:"me-auto",children:[Object(l.jsx)(u.a.Link,{children:Object(l.jsxs)(x.b,{to:"myapp/a",style:{color:"inherit",textDecoration:"inherit"},children:[" ",e.home]})}),Object(l.jsx)(u.a.Link,{children:Object(l.jsxs)(x.b,{to:"myapp/about",style:{color:"inherit",textDecoration:"inherit"},children:[" ",e.link]})}),Object(l.jsxs)(m.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(l.jsx)(m.a.Item,{href:"#action/3.1",children:"Action"}),Object(l.jsx)(m.a.Item,{href:"#action/3.2",children:"Another action"}),Object(l.jsx)(m.a.Item,{href:"#action/3.3",children:"Something"}),Object(l.jsx)(m.a.Divider,{}),Object(l.jsx)(m.a.Item,{href:"#action/3.4",children:"Separated link"})]})]}),Object(l.jsx)(u.a,{children:Object(l.jsx)(h.a,{children:Object(l.jsx)(h.a.Check,{type:"switch",id:"darkmode-switch",label:"Dark Mode",onClick:e.toggleMode,style:{color:"light"==e.mode?"black":"white"}})})})]})]})})})}function p(e){var t=Object(i.useState)(""),c=Object(r.a)(t,2),n=c[0],o=c[1];return Object(l.jsxs)("div",{style:{color:"light"==e.mode?"black":"white"},children:[Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"my-3",children:[Object(l.jsx)("h6",{children:"Enter text to Analyze."}),Object(l.jsx)("textarea",{className:"form-control",name:"mybox",id:"mybox",cols:"100",rows:"10",value:n,onChange:function(e){o(e.target.value)}}),Object(l.jsx)("button",{className:"btn btn-dark my-2",onClick:function(){var t=n.toUpperCase();o(t),e.showAlert("Text is converted to Uppercase.")},children:"Convert To UpperCase"}),Object(l.jsx)("button",{className:"btn btn-dark my-2 mx-2",onClick:function(){var t=n.toLowerCase();o(t),e.showAlert("Text is converted to Lowercase.")},children:"Convert To LowerCase"}),Object(l.jsx)("button",{className:"btn btn-dark my-2 mx-2",onClick:function(){o(""),e.showAlert("Text is cleared.")},children:"Clear Text"}),Object(l.jsx)("button",{className:"btn btn-dark my-2 mx-2",onClick:function(){navigator.clipboard.writeText(n),e.showAlert("Content is copied to clipboard.")},children:"Copy To Clip Board"})]})}),Object(l.jsxs)("div",{className:"container my-2",children:[Object(l.jsx)("h2",{children:"Your Text Summary"}),Object(l.jsx)("p",{children:function(){for(var e=0,t=0;t<n.split(" ").length;t++){""!=n.split(" ")[t]&&e++}return e}()}),Object(l.jsxs)("p",{style:{fontSize:"18px"},children:[.008*n.split(" ").length," Minutes to Read."]}),Object(l.jsx)("h2",{children:"Preview"}),Object(l.jsx)("p",{children:n.length>0?n:"Enter text to preview here."})]})]})}O.defaultProps={title:"Title",home:"Home",link:"Link"};var v=c(81);function k(e){return e.message?Object(l.jsx)("div",{children:Object(l.jsx)(v.a,{variant:"success",children:e.message})}):Object(l.jsx)(l.Fragment,{})}var g=c(7);var y=function(){var e=Object(i.useState)("light"),t=Object(r.a)(e,2),c=t[0],n=t[1],o=Object(i.useState)(null),a=Object(r.a)(o,2),s=a[0],j=a[1],b=function(e){j(e),setTimeout((function(){j(null)}),3e3)};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)(x.a,{children:[Object(l.jsx)(O,{title:"V.R.Developers",home:"Home",link:"About Us",mode:c,toggleMode:function(){"light"==c?(n("dark"),document.body.style.backgroundColor="#383838",b("Switched to Dark Mode."),document.title="Word Counter Dark Mode"):(n("light"),document.body.style.backgroundColor="white",document.title="Word Counter Light Mode",b("Switched to Light Mode."))}}),Object(l.jsx)(k,{showAlert:b,message:s}),Object(l.jsxs)(g.c,{children:[Object(l.jsx)(g.a,{exact:!0,path:"myapp/about",element:Object(l.jsx)(d,{})}),Object(l.jsx)(g.a,{exact:!0,path:"myapp/a",element:Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsx)(p,{mode:c,showAlert:b})})})]})]})," "]})};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.7b2d4cff.chunk.js.map