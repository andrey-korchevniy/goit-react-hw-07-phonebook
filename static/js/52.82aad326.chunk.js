"use strict";(self.webpackChunkgoit_react_hw_07_phonebook=self.webpackChunkgoit_react_hw_07_phonebook||[]).push([[52],{6260:function(n,e,t){t.d(e,{Z:function(){return H}});var r,o,i,c,s,h,a,l,d,x=t(168),u=t(6444),p=u.ZP.table(r||(r=(0,x.Z)(["\n    width: calc(100% / 4 * 3);\n    overflow: hidden;\n    border: none;\n    border-spacing: 1px;\n\n    text-align: left;\n"]))),f=u.ZP.thead(o||(o=(0,x.Z)(["\n    height: 49px;\n    padding: 4px 4px 4px 10px;\n    color: #5f6368;\n    font-size: 14px;\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);\n"]))),g=u.ZP.th(i||(i=(0,x.Z)(["\n    width: calc(100% / 6);\n    font-weight: 400;\n"]))),v=t(885),b=u.ZP.tr(c||(c=(0,x.Z)(["\n    height: 56px;\n\n    :hover {\n        background-color: #F5F5F5;\n    }\n"]))),j=u.ZP.td(s||(s=(0,x.Z)(["\n    color: #202124;\n    font-size: 14px;\n    padding-top: 4px;\n    padding-bottom: 4px;\n    text-align: left;\n"]))),w=(0,u.ZP)(j)(h||(h=(0,x.Z)(["\n    text-align: left;\n"]))),m=u.ZP.button(a||(a=(0,x.Z)(["\n    height: 40px;\n    width: 40px;\n    margin-top: 7px;\n    border: 0;\n    background-color: transparent;\n    border-radius: 50%;\n\n    :focus, :hover {\n        background-color: rgba(60,64,67,.1);\n    }\n"]))),Z=u.ZP.button(l||(l=(0,x.Z)(["\n    display: inline-block;\n    width: 120px;\n    height: 36px;\n    border: 0;\n    background-color: transparent;\n    color: blue;\n    font-weight: 600;\n    border-radius: 5px;\n    outline: none !important;\n    margin-top: 7px;\n\n    :hover, :focus, :active {\n        background-color: lightgray;\n    }\n"]))),k=(0,u.ZP)(j)(d||(d=(0,x.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n"]))),z=t(3090),C=t(8131),y=t(5264),P=t(184);y.Notify.init({position:"center-top"});var M=function(n){var e=n.id,t=n.name,r=n.number,o=n.isDeleted,i=(0,C.Nt)(e),c=(0,v.Z)(i,1)[0],s=(0,C.Y8)(),h=(0,v.Z)(s,1)[0];return(0,P.jsxs)(b,{children:[(0,P.jsx)(j,{children:t}),(0,P.jsx)(w,{children:r}),(0,P.jsxs)(k,{children:[(0,P.jsx)(m,{onClick:function(){var n=o?"Your contact has been restored":"Your contact has been moved to Trash";h({id:e,isDeleted:o=!o}),y.Notify.success(n)},children:(0,P.jsx)(z.Vl,{})}),o?(0,P.jsx)(Z,{onClick:function(){c(e),y.Notify.success("Yor contact has been deleted forever")},children:"Delete forever"}):(0,P.jsx)(P.Fragment,{})]})]})},H=function(n){var e=n.trash,t=n.filter,r=(0,C.Kd)("",{refetshOnFocus:!0}),o=r.data;if(r.isSuccess){var i=o.filter((function(n){var r=n.name,o=n.phone;return n.isDeleted===e&&(r.includes(t)||o.includes(t))}));return(0,P.jsxs)(p,{children:[(0,P.jsx)(f,{children:(0,P.jsxs)("tr",{children:[(0,P.jsx)(g,{children:"Name"}),(0,P.jsx)(g,{children:"Phone number"}),(0,P.jsx)(g,{children:"Action"})]})}),(0,P.jsx)("tbody",{children:i.map((function(n){return(0,P.jsx)(M,{id:n.id,name:n.name,number:n.phone,isDeleted:n.isDeleted},n.id)}))})]})}}},1577:function(n,e,t){t.d(e,{f:function(){return b}});var r,o,i,c,s,h=t(168),a=t(6444),l=t(5705),d=a.ZP.div(r||(r=(0,h.Z)(["\n    max-width: 725px;\n    width: 100%;\n    height: 64px;\n    display: block;\n"]))),x=(0,a.ZP)(l.l0)(o||(o=(0,h.Z)(["\n    position: relative;\n    display: flex;\n    height: 48px;\n    margin-top: 8px;\n    display: block;\n"]))),u=(0,a.ZP)(l.gN)(i||(i=(0,h.Z)(["\n    margin-left: 0px;\n    height: 42px;\n    width: calc(100% - 58px);\n    padding-left: 58px;\n    font-size: 16px;\n    background-color: #F1F3F4;\n    border: none;\n    outline:none;\n\n    :focus, :active {\n        outline:none;\n        background-color: #fff;\n        box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);\n    }\n"]))),p=a.ZP.button(c||(c=(0,h.Z)(["\n    position: absolute;\n    top: 3px;\n    left: 2px;\n    height: 40px;\n    width: 40px;\n    background-color: transparent;\n    border: 0;\n    border-radius: 50%;\n"]))),f=a.ZP.button(s||(s=(0,h.Z)(["\n    position: absolute;\n    top: 3px;\n    right: 3px;\n    height: 40px;\n    width: 40px;\n    border: 0;\n    background-color: transparent;\n    border: 0;\n    border-radius: 50%;\n\n    :focus, :hover {\n        background-color: rgba(60,64,67,.1);\n    }\n"]))),g=t(3090),v=t(184),b=function(n){var e=n.value,t=n.onSubmit,r=n.onClear;return(0,v.jsx)(d,{children:(0,v.jsx)(l.J9,{initialValues:e,children:(0,v.jsxs)(x,{children:[(0,v.jsx)(p,{children:(0,v.jsx)(g.yr,{})}),(0,v.jsx)(u,{type:"text",name:"filter",placeholder:"Search contacts",onChange:t,required:!0,value:e,autoComplete:"off"}),(0,v.jsx)(f,{type:"clear",onClick:r,children:(0,v.jsx)(g.Vl,{})})]})})})}},3090:function(n,e,t){t.d(e,{Id:function(){return o},TW:function(){return a},Vl:function(){return s},r9:function(){return h},yr:function(){return c},zm:function(){return i}});var r=t(184),o=function(){return(0,r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",children:[(0,r.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,r.jsx)("path",{d:"M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"})]})},i=function(){return(0,r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",children:[(0,r.jsx)("path",{d:"M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"}),(0,r.jsx)("path",{d:"M9 8h2v9H9zm4 0h2v9h-2z"})]})},c=function(){return(0,r.jsxs)("svg",{focusable:"false",height:"24px",viewBox:"0 0 24 24",width:"24px",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"}),(0,r.jsx)("path",{d:"M0,0h24v24H0V0z",fill:"none"})]})},s=function(){return(0,r.jsxs)("svg",{focusable:"false",height:"24px",viewBox:"0 0 24 24",width:"24px",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),(0,r.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"})]})},h=function(){return(0,r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",children:[(0,r.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,r.jsx)("path",{d:"M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"})]})},a=function(){return(0,r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",children:[(0,r.jsx)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),(0,r.jsx)("path",{d:"M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"})]})}},52:function(n,e,t){t.r(e);var r=t(885),o=t(2791),i=t(6260),c=t(1577),s=t(184);e.default=function(){var n=(0,o.useState)(""),e=(0,r.Z)(n,2),t=e[0],h=e[1];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.f,{value:t,onSubmit:function(n){h(n.currentTarget.value)},onClear:function(){h("")}}),(0,s.jsx)(i.Z,{trash:!0,filter:t})]})}}}]);
//# sourceMappingURL=52.82aad326.chunk.js.map