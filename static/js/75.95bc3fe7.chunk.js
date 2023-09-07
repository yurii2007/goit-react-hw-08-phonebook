"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[75],{1075:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r,a,o,s,i,d,l=t(4942),c=t(1413),p=t(9439),x=t(2791),u=t(3855),h=t(3634),m=t(2286),f=t(168),b=t(5867),g=b.zo.div(r||(r=(0,f.Z)(["\n  position: relative;\n  input {\n    padding: 15px 20px;\n    outline: none;\n    background: transparent;\n    border-radius: 5px;\n    color: #212121;\n    border: 1px solid#212121;\n    font-size: 1em;\n  }\n  span {\n    position: absolute;\n    left: 0;\n    font-size: 0.9em;\n    transform: translateX(14px) translateY(-7.5px);\n    padding: 0 6px 1px 5px;\n    border-radius: 2px;\n    background: #e8e8e8;\n    letter-spacing: 1px;\n    border: 1px solid #212121;\n    color: #212121;\n  }\n"]))),v=b.zo.form(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),j=b.zo.button(o||(o=(0,f.Z)(["\nborder: none;\nbackground-color: rgb(195, 176, 145);\nborder-radius: 0.9em;\npadding: 0.8em 1.2em 0.8em 1em;\ntransition: all ease-in-out 0.2s;\nfont-size: 16px;\nwidth: 160px;\nspan {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #fff;\n    font-weight: 600;\n   }\n   &:hover,\n   &:focus {\n    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);\n   }\n   &:active {\n    transform: translate(2px,2px);\n   }\n"]))),w=t(3329),y=function(){var n=(0,x.useState)({name:"",number:""}),e=(0,p.Z)(n,2),t=e[0],r=e[1],a=(0,u.v9)(m.Af),o=(0,u.I0)(),s=function(n){var e=n.target,a=e.name,o=e.value;r((0,c.Z)((0,c.Z)({},t),{},(0,l.Z)({},a,o)))};return(0,w.jsxs)(v,{onSubmit:function(n){if(n.preventDefault(),a.find((function(n){return n.name.toLowerCase()===t.name.toLowerCase()})))return alert("".concat(t.name," is already in contacts"));o((0,h.uK)(t)),r({name:"",number:""})},children:[(0,w.jsxs)(g,{children:[(0,w.jsx)("input",{placeholder:"Name",value:t.name,onChange:s,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,w.jsx)("span",{children:"Name :"})]}),(0,w.jsxs)(g,{children:[(0,w.jsx)("input",{placeholder:"Number",value:t.number,onChange:s,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,w.jsx)("span",{children:"Number :"})]}),(0,w.jsx)(j,{type:"submit",children:(0,w.jsxs)("span",{children:[(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,w.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,w.jsx)("path",{fill:"currentColor",d:"M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"})]}),"Add Contact"]})})]})},z=b.zo.input(s||(s=(0,f.Z)(["\n  border-radius: 5px;\n  background-color: #e9e9f7;\n  padding: 5px;\n  color: #020403;\n  border: 1px solid #dadaf7;\n  &:focus-visible {\n    outline: 1px solid #aeaed6;\n  }\n"]))),k=b.zo.button(i||(i=(0,f.Z)(["\n  width: 150px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  background: red;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);\n  background: #e62222;\n  &,\n  span {\n    transition: 200ms;\n  }\n  .text {\n    transform: translateX(35px);\n    color: white;\n    font-weight: bold;\n  }\n  .icon {\n    position: absolute;\n    border-left: 1px solid #c41b1b;\n    transform: translateX(110px);\n    width: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  svg {\n    width: 15px;\n    fill: #eee;\n  }\n  &:hover {\n    background: #ff3636;\n  }\n  &:hover .text {\n    color: transparent;\n  }\n  &:hover .icon {\n    width: 150px;\n    border-left: none;\n    transform: translateX(0);\n  }\n  &:focus {\n    outline: none;\n  }\n  &:active .icon svg {\n    transform: scale(0.8);\n  }\n"]))),Z=b.zo.li(d||(d=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px;\n"]))),C=t(1634),A=function(){var n=(0,u.I0)();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("h3",{children:"Find contacts by name"}),(0,w.jsx)(z,{type:"text",name:"filter",onChange:function(e){n((0,C.M)(e.target.value))}})]})},N=function(){var n=(0,u.v9)(m.Af),e=(0,u.v9)(m.DI),t=(0,u.I0)();(0,x.useEffect)((function(){t((0,h.yF)())}),[t]);return 0===n.length?(0,w.jsx)("p",{children:"You didn't have any contacts yet"}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(A,{}),(0,w.jsx)("ul",{children:e.map((function(n){var e=n.id,r=n.name,a=n.number;return(0,w.jsxs)(Z,{children:[r,": ",a,(0,w.jsxs)(k,{onClick:function(){return n=e,void t((0,h.GK)(n));var n},type:"button",children:[(0,w.jsx)("span",{className:"text",children:"Delete"}),(0,w.jsx)("span",{className:"icon",children:(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,w.jsx)("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"})})})]})]},e)}))})]})},F=function(){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("h1",{children:"Phonebook"}),(0,w.jsx)(y,{}),(0,w.jsx)(N,{})]})}}}]);
//# sourceMappingURL=75.95bc3fe7.chunk.js.map