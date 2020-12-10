(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={form:"FormAddContacts_form__2MdXG",label:"FormAddContacts_label__2GkhV",button:"FormAddContacts_button__2dp95"}},21:function(e,t,n){e.exports={listItem:"ContactItem_listItem__ZX0Xm",button:"ContactItem_button__1siMh"}},24:function(e,t,n){e.exports={label:"Filter_label__3DcZT"}},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a,c=n(1),r=n(0),o=n(7),s=n.n(o),i=n(5),l=n(6),u=n(16),d=n(25),m=n(4),b=n(45),j={addItem:Object(l.b)("phonebook/add",(function(e,t){return{payload:{id:Object(b.a)(),name:e,number:t}}})),removeItem:Object(l.b)("phonebook/remove"),filter:Object(l.b)("phonebook/filter")},h=JSON.parse(localStorage.getItem("contacts"))||[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],f=Object(l.c)(h,(a={},Object(u.a)(a,j.addItem,(function(e,t){var n=t.payload;return[].concat(Object(d.a)(e),[n])})),Object(u.a)(a,j.removeItem,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),p=Object(l.c)("",Object(u.a)({},j.filter,(function(e,t){return t.payload}))),O=Object(m.c)({items:f,filter:p}),x=Object(l.a)({reducer:{contacts:O}}),v=(n(37),n(12)),C=n(13),g=n(15),N=n(14),y=n(44),_=(n(38),function(e){var t=e.message;return Object(c.jsx)("div",{className:"AlertWrapper",children:t})}),A=n(10),I=n.n(A),S=function(e){Object(g.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:"",isAdded:!1,message:""},e.handleChangeName=function(t){e.setState({name:t})},e.handleChangeNumber=function(t){e.setState({number:t})},e.handleClearForm=function(){e.setState({name:"",number:""})},e.handlesubmit=function(t){t.preventDefault();var n=e.state,a=n.name,c=n.number,r=e.props.contacts;if(!a||!c)return e.setState({isAdded:!0,message:"Fill in all the fields"}),void setTimeout((function(){e.setState({isAdded:!1})}),2e3);r.find((function(e){return e.name===a}))?(e.setState({isAdded:!0,message:"Contact already exist"}),setTimeout((function(){e.setState({isAdded:!1})}),2e3)):(e.props.addContact(a,c),e.setState({isAdded:!0,message:"Contact added successfully"}),setTimeout((function(){e.setState({isAdded:!1})}),2e3)),e.handleClearForm()},e}return Object(C.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.number,r=t.isAdded,o=t.message;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{className:I.a.form,onSubmit:this.handlesubmit,children:[Object(c.jsxs)("label",{className:I.a.label,children:["Name",Object(c.jsx)("input",{type:"text",placeholder:"Name Surname",value:n,onChange:function(t){return e.handleChangeName(t.target.value)}})]}),Object(c.jsxs)("label",{className:I.a.label,children:["Number",Object(c.jsx)("input",{type:"tel",placeholder:"Phone",value:a,onChange:function(t){return e.handleChangeNumber(t.target.value)}})]}),Object(c.jsx)("button",{className:I.a.button,type:"submit",children:"Add Contact"})]}),Object(c.jsx)(y.a,{in:r,timeout:500,classNames:"fade-alert",unmountOnExit:!0,children:Object(c.jsx)(_,{message:o})})]})}}]),n}(r.Component),k={addContact:j.addItem},F=Object(i.b)((function(e){return{contacts:e.contacts.items}}),k)(S),w=n(24),D=n.n(w),E={onChange:j.filter},J=Object(i.b)((function(e){return{filter:e.contacts.filter}}),E)((function(e){var t=e.filter,n=e.onChange;return Object(c.jsxs)("label",{className:D.a.label,children:["Find Contacts",Object(c.jsx)("input",{type:"text",placeholder:"name",value:t,onChange:function(e){n(e.target.value)}})]})})),T=n(21),X=n.n(T),G={onChangeFilter:j.filter,handleDelete:j.removeItem},L=Object(i.b)(null,G)((function(e){var t=e.el,n=e.handleDelete,a=e.onChangeFilter,r=t.name,o=t.number,s=t.id;return Object(c.jsxs)("li",{className:X.a.listItem,children:[Object(c.jsxs)("span",{children:[r,":"]})," ",Object(c.jsx)("span",{children:o}),Object(c.jsx)("button",{className:X.a.button,type:"button",onClick:function(){n(s),a("")},children:"Delete"})]})})),M=n(46),P=(n(39),function(e){var t=e.visibleContact;return Object(c.jsx)(M.a,{component:"ul",className:"contact-list",children:t.map((function(e){return Object(c.jsx)(y.a,{timeout:500,classNames:"item",children:Object(c.jsx)(L,{el:e})},e.id)}))})}),W=(n(40),function(e){var t=e.children;return Object(c.jsx)("div",{className:"ContainerWrapper",children:t})}),Z=(n(41),function(e){Object(g.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).getFiteredContact=function(){var t=e.props,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e}return Object(C.a)(n,[{key:"componentDidUpdate",value:function(e,t){if(e.contacts!==this.props.contacts){var n=JSON.stringify(this.props.contacts);localStorage.setItem("contacts",n)}}},{key:"render",value:function(){var e=this.props.contacts,t=this.getFiteredContact();return Object(c.jsxs)(W,{children:[Object(c.jsxs)("section",{children:[Object(c.jsx)(y.a,{in:!0,appear:!0,timeout:500,classNames:"fade-logo",unmountOnExit:!0,children:Object(c.jsx)("h2",{className:"logo",children:"Phonebook"})}),Object(c.jsx)(F,{})]}),Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)(y.a,{in:e.length>1,timeout:500,classNames:"fade-filter",unmountOnExit:!0,children:Object(c.jsx)(J,{})}),Object(c.jsx)(P,{visibleContact:t})]})]})}}]),n}(r.Component)),B={addItem:j.addItem},H=Object(i.b)((function(e){var t=e.contacts;return{contacts:t.items,filter:t.filter}}),B)(Z);s.a.render(Object(c.jsx)(i.a,{store:x,children:Object(c.jsx)(H,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.f739bb25.chunk.js.map