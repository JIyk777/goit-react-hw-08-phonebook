"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[199],{199:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,o,s,i,c=t(791),l=t(933),u=t(168),d=t(444),p=d.ZP.button(r||(r=(0,u.Z)(["\n  padding: 10px;\n  border-radius: 30px;\n  margin-top: 16px;\n  border: 0;\n  background-color: #ffd700;\n  cursor: pointer;\n  &:hover,\n  &focus {\n    background-color: #ffff00;\n  }\n"]))),x=d.ZP.input(a||(a=(0,u.Z)(["\n  border-radius: 20px;\n  padding: 5px 20px;\n"]))),f=d.ZP.span(o||(o=(0,u.Z)(["\n  margin-bottom: 10px;\n  text-align: center;\n  font-size: 18px;\n  font-weight: 700;\n"]))),m=t(734),h=t(434),b=function(n){return n.myContacts.contacts.items},g=function(n){return n.myContacts.filter},j=t(184),v=function(){var n=(0,h.v9)(b),e=(0,h.I0)();return(0,j.jsxs)(l.x,{as:"form",display:"flex",flexDirection:"column",width:"300px",ml:"auto",mr:"auto",onSubmit:function(t){t.preventDefault();var r,a,o=t.currentTarget;r=o.elements.name.value,a=o.elements.number.value,n.map((function(n){return n.name})).includes(r)?alert("".concat(r," is already in contacts.")):e((0,m.uK)({name:r,number:a})),o.reset()},children:[(0,j.jsxs)(l.x,{as:"label",display:"flex",flexDirection:"column",p:"5px 0",children:[(0,j.jsx)(f,{children:"Name"}),(0,j.jsx)(x,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Please enter name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,j.jsxs)(l.x,{as:"label",display:"flex",flexDirection:"column",p:"5px 0",children:[(0,j.jsx)(f,{children:"Phone"}),(0,j.jsx)(x,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:"Please enter phone",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,j.jsx)(p,{type:"submit",children:"Add Contact"})]})},y=d.ZP.button(s||(s=(0,u.Z)(["\n  padding: 10px;\n  border-radius: 50%;\n  border: 0;\n  background-color: #ffd700;\n  cursor: pointer;\n  &:hover,\n  &focus {\n    background-color: #ffff00;\n  }\n"]))),k=function(){var n=(0,h.v9)(g),e=(0,h.v9)(b),t=(0,h.I0)(),r=n.toLowerCase(),a=e.filter((function(n){return n.name.toLowerCase().includes(r)}));return 0!==a.length&&(0,j.jsx)(l.x,{as:"ul",display:"flex",flexDirection:"column",width:"300px",ml:"auto",mr:"auto",p:0,children:a.map((function(n){return(0,j.jsxs)(l.x,{as:"li",display:"flex",justifyContent:"space-between",alignItems:"center",p:"5px 10px",children:[(0,j.jsx)("span",{children:n.name}),(0,j.jsx)("span",{children:n.number}),(0,j.jsx)(y,{type:"button",onClick:function(){return t((0,m.km)(n.id))},children:"Del"})]},n.id)}))})},C=d.ZP.input(i||(i=(0,u.Z)(["\n  border-radius: 20px;\n  padding: 5px 20px;\n"]))),Z=t(538),w=function(){var n=(0,h.v9)(g),e=(0,h.I0)();return(0,j.jsx)("label",{children:(0,j.jsx)(C,{type:"text",value:n,onChange:function(n){e((0,Z.M6)(n.currentTarget.value))},placeholder:"Please enter name"})})},P=function(){var n=(0,h.I0)();return(0,c.useEffect)((function(){n((0,m.yF)())}),[n]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h1",{children:"Phonebook"}),(0,j.jsx)(v,{}),(0,j.jsx)("h2",{children:"Contacts"}),(0,j.jsx)(w,{}),(0,j.jsx)(k,{})]})}}}]);
//# sourceMappingURL=199.ea8d92b5.chunk.js.map