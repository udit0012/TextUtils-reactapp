(this["webpackJsonplogin-registration-app"]=this["webpackJsonplogin-registration-app"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),o=a.n(c),n=a(15),s=a.n(n),r=(a(22),a(9)),l=(a(23),a(0));function d(e){return Object(l.jsxs)("div",{className:"container mt-5",children:[Object(l.jsx)("h1",{className:"my-3 mx-1 text-".concat(e.mode),children:"About Us"}),Object(l.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(l.jsxs)("div",{className:"accordion-item bg-".concat("dark"===e.mode?"light":"dark"," border-1 border-").concat(e.mode),children:[Object(l.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(l.jsx)("button",{className:"accordion-button text-".concat(e.mode," bg-").concat("dark"===e.mode?"light":"dark"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:Object(l.jsx)("strong",{children:"Analyze Your Text"})})}),Object(l.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(l.jsx)("div",{className:"accordion-body text-".concat(e.mode),children:"Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or."})})]}),Object(l.jsxs)("div",{className:"accordion-item bg-".concat("dark"===e.mode?"light":"dark"," border-1 border-").concat(e.mode),children:[Object(l.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(l.jsx)("button",{className:"accordion-button text-".concat(e.mode," bg-").concat("dark"===e.mode?"light":"dark"," collapsed"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:Object(l.jsx)("strong",{children:"Free to Use"})})}),Object(l.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(l.jsx)("div",{className:"accordion-body text-".concat(e.mode),children:"TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit."})})]}),Object(l.jsxs)("div",{className:"accordion-item bg-".concat("dark"===e.mode?"light":"dark"," border-1 border-").concat(e.mode),children:[Object(l.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(l.jsx)("button",{className:"accordion-button text-".concat(e.mode," bg-").concat("dark"===e.mode?"light":"dark"," collapsed"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:Object(l.jsx)("strong",{children:"Browser Compatible"})})}),Object(l.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(l.jsx)("div",{className:"accordion-body text-".concat(e.mode),children:"This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, et"})})]})]})]})}function i(e){return Object(l.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(l.jsx)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:Object(l.jsx)("strong",{children:e.alert.message})})})}var b=a(8);function h(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(b.b,{className:"navbar-brand",to:"/",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(b.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(b.b,{className:"nav-link active","aria-current":"page",to:"/about",children:"About"})})]}),Object(l.jsxs)("div",{className:"form-check form-switch",children:[Object(l.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(l.jsxs)("label",{className:"form-check-label text-light",htmlFor:"flexSwitchCheckDefault",children:["dark"===e.mode?"Dark":"Light"," Mode"]})]})]})]})})}function j(e){var t=Object(c.useState)(""),a=Object(r.a)(t,2),o=a[0],n=a[1],s=Object(c.useState)(0),d=Object(r.a)(s,2),i=d[0],b=d[1];return Object(c.useEffect)((function(){var e=o.split(" ").filter((function(e){return 0!==e.length}));b(""===o?0:e.length),console.log("aur bhai")}),[o,i]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container mt-4",style:{color:"dark"===e.mode?"black":"white"},children:[Object(l.jsx)("h1",{className:"mb-3",children:"Enter the text to analyze below"}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("textarea",{className:"form-control border-1 border-".concat(e.mode),style:{background:"transparent",color:"dark"===e.mode?"black":"white"},value:o,onChange:function(e){n(e.target.value)},id:"exampleFormControlTextarea1",rows:"8",children:"    "})}),Object(l.jsx)("button",{disabled:0===o.length,type:"button",className:"btn btn-".concat(e.mode," mx-1 my-1"),onClick:function(){n(o.toUpperCase()),e.showAlert("Text has been changed to Uppercase","success")},children:"Convert to Uppercase"}),Object(l.jsx)("button",{disabled:0===o.length,type:"button",className:"btn btn-".concat(e.mode," mx-1 my-1"),onClick:function(){n(o.toLowerCase()),e.showAlert("Text has been changed to Lowercase","success")},children:"Convert to Lowercase"}),Object(l.jsx)("button",{disabled:0===o.length,type:"button",className:"btn btn-".concat(e.mode," mx-1 my-1"),onClick:function(){n(""),e.showAlert("Text has been Cleared","success")},children:"Clear text"}),Object(l.jsx)("button",{disabled:0===o.length,type:"button",className:"btn btn-".concat(e.mode," mx-1 my-1"),onClick:function(){for(var e=0,t=0;t<o.length;t++)"a"!==o[t]&&"e"!==o[t]&&"i"!==o[t]&&"o"!==o[t]&&"u"!==o[t]&&"A"!==o[t]&&"E"!==o[t]&&"I"!==o[t]&&"O"!==o[t]&&"U"!==o[t]||e++;alert("Your text has "+e+" vowels")},children:"Count number of vowels"})]}),Object(l.jsxs)("div",{className:"container mt-3",style:{color:"dark"===e.mode?"black":"white"},children:[Object(l.jsx)("h2",{children:"Words and Characters Count"}),Object(l.jsxs)("p",{children:[o.split(" ").filter((function(e){return 0!==e.length})).length," words and ",o.length," characters"]}),Object(l.jsxs)("p",{children:[(.008*i).toFixed(4)," minutes to read above sentence "]}),Object(l.jsx)("h2",{children:"Text Preview"}),Object(l.jsx)("p",{children:o})]})]})}h.defaultProps={title:"Set title here"};var m=a(2);var u=function(){var e=Object(c.useState)("dark"),t=Object(r.a)(e,2),a=t[0],o=t[1],n=Object(c.useState)(null),s=Object(r.a)(n,2),u=s[0],x=s[1],g=function(e,t){x({message:e,type:t}),setTimeout((function(){x(null)}),2e3)};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(b.a,{children:[Object(l.jsx)(h,{title:"MytextUtils",mode:a,toggleMode:function(){"dark"===a?(o("light"),document.body.style.backgroundColor="black",g("Dark Mode has been enabled","success")):(o("dark"),document.body.style.backgroundColor="white",g("Light Mode has been enabled","success"))}}),Object(l.jsx)(i,{alert:u}),Object(l.jsx)("div",{children:Object(l.jsxs)(m.c,{children:[Object(l.jsx)(m.a,{path:"/about",children:Object(l.jsx)(d,{mode:a,showAlert:g})}),Object(l.jsx)(m.a,{path:"/",children:Object(l.jsx)(j,{mode:a,showAlert:g})})]})})]})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,o=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),o(e),n(e),s(e)}))};s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.a69e184a.chunk.js.map