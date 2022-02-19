(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[7],{142:function(a,e,t){"use strict";var c=t(10),r=t(2),n=t(3),s=t(4),o=t.n(s),i=t(0),d=t(7),l=t(1),b=["as","bsPrefix","className"],j=["className"],f=["xxl","xl","lg","md","sm","xs"];var O=i.forwardRef((function(a,e){var t=function(a){var e=a.as,t=a.bsPrefix,c=a.className,s=Object(n.a)(a,b);t=Object(d.a)(t,"col");var i=[],l=[];return f.forEach((function(a){var e,c,r,n=s[a];delete s[a],"object"===typeof n&&null!=n?(e=n.span,c=n.offset,r=n.order):e=n;var o="xs"!==a?"-".concat(a):"";e&&i.push(!0===e?"".concat(t).concat(o):"".concat(t).concat(o,"-").concat(e)),null!=r&&l.push("order".concat(o,"-").concat(r)),null!=c&&l.push("offset".concat(o,"-").concat(c))})),[Object(r.a)(Object(r.a)({},s),{},{className:o.a.apply(void 0,[c].concat(i,l))}),{as:e,bsPrefix:t,spans:i}]}(a),s=Object(c.a)(t,2),i=s[0],O=i.className,u=Object(n.a)(i,j),x=s[1],p=x.as,m=void 0===p?"div":p,v=x.bsPrefix,g=x.spans;return Object(l.jsx)(m,Object(r.a)(Object(r.a)({},u),{},{ref:e,className:o()(O,!g.length&&v)}))}));O.displayName="Col",e.a=O},90:function(a,e,t){"use strict";t.r(e);var c=t(2),r=t(0),n=t(142),s=t(3),o=t(4),i=t.n(o),d=t(7),l=t(25),b=t(64),j=t(1),f=["bsPrefix","className","variant","as"],O=r.forwardRef((function(a,e){var t=a.bsPrefix,r=a.className,n=a.variant,o=a.as,l=void 0===o?"img":o,b=Object(s.a)(a,f),O=Object(d.a)(t,"card-img");return Object(j.jsx)(l,Object(c.a)({ref:e,className:i()(n?"".concat(O,"-").concat(n):O,r)},b))}));O.displayName="CardImg";var u=O,x=t(65),p=["bsPrefix","className","as"],m=r.forwardRef((function(a,e){var t=a.bsPrefix,n=a.className,o=a.as,l=void 0===o?"div":o,b=Object(s.a)(a,p),f=Object(d.a)(t,"card-header"),O=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return Object(j.jsx)(x.a.Provider,{value:O,children:Object(j.jsx)(l,Object(c.a)(Object(c.a)({ref:e},b),{},{className:i()(n,f)}))})}));m.displayName="CardHeader";var v=m,g=["bsPrefix","className","bg","text","border","body","children","as"],y=Object(b.a)("h5"),h=Object(b.a)("h6"),N=Object(l.a)("card-body"),P=Object(l.a)("card-title",{Component:y}),S=Object(l.a)("card-subtitle",{Component:h}),C=Object(l.a)("card-link",{Component:"a"}),k=Object(l.a)("card-text",{Component:"p"}),w=Object(l.a)("card-footer"),B=Object(l.a)("card-img-overlay"),T=r.forwardRef((function(a,e){var t=a.bsPrefix,r=a.className,n=a.bg,o=a.text,l=a.border,b=a.body,f=a.children,O=a.as,u=void 0===O?"div":O,x=Object(s.a)(a,g),p=Object(d.a)(t,"card");return Object(j.jsx)(u,Object(c.a)(Object(c.a)({ref:e},x),{},{className:i()(r,p,n&&"bg-".concat(n),o&&"text-".concat(o),l&&"border-".concat(l)),children:b?Object(j.jsx)(N,{children:f}):f}))}));T.displayName="Card",T.defaultProps={body:!1};var R=Object.assign(T,{Img:u,Title:P,Subtitle:S,Body:N,Link:C,Text:k,Header:v,Footer:w,ImgOverlay:B}),I=t(10),V=t(38),z=["as","bsPrefix","variant","size","active","className"],F=r.forwardRef((function(a,e){var t=a.as,r=a.bsPrefix,n=a.variant,o=a.size,l=a.active,b=a.className,f=Object(s.a)(a,z),O=Object(d.a)(r,"btn"),u=Object(V.b)(Object(c.a)({tagName:t},f)),x=Object(I.a)(u,2),p=x[0],m=x[1].tagName;return Object(j.jsx)(m,Object(c.a)(Object(c.a)(Object(c.a)({},p),f),{},{ref:e,className:i()(b,O,l&&"active",n&&"".concat(O,"-").concat(n),o&&"".concat(O,"-").concat(o),f.href&&f.disabled&&"disabled")}))}));F.displayName="Button",F.defaultProps={variant:"primary",active:!1,disabled:!1};var H=F,J=["bsPrefix","bg","pill","text","className","as"],L=r.forwardRef((function(a,e){var t=a.bsPrefix,r=a.bg,n=a.pill,o=a.text,l=a.className,b=a.as,f=void 0===b?"span":b,O=Object(s.a)(a,J),u=Object(d.a)(t,"badge");return Object(j.jsx)(f,Object(c.a)(Object(c.a)({ref:e},O),{},{className:i()(l,u,n&&"rounded-pill",o&&"text-".concat(o),r&&"bg-".concat(r))}))}));L.displayName="Badge",L.defaultProps={bg:"primary",pill:!1};var A=L,D=t(19),E=t(161),M={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}};e.default=function(a){var e,t,s=Object(r.useContext)(D.a),o=a.project;return Object(j.jsx)(n.a,{children:Object(j.jsxs)(R,{style:Object(c.a)(Object(c.a)({},M.cardStyle),{},{backgroundColor:s.cardBackground,borderColor:s.cardBorderColor}),text:s.bsSecondaryVariant,children:[Object(j.jsx)(R.Img,{variant:"top",src:null===o||void 0===o?void 0:o.image}),Object(j.jsxs)(R.Body,{children:[Object(j.jsx)(R.Title,{style:M.cardTitleStyle,children:o.title}),Object(j.jsx)(R.Text,{style:M.cardTextStyle,children:(t=o.bodyText,Object(j.jsx)(E.a,{children:t}))})]}),Object(j.jsx)(R.Body,{children:null===o||void 0===o||null===(e=o.links)||void 0===e?void 0:e.map((function(a){return Object(j.jsx)(H,{style:M.buttonStyle,variant:"outline-"+s.bsSecondaryVariant,onClick:function(){return window.open(a.href,"_blank")},children:a.text},a.href)}))}),o.tags&&Object(j.jsx)(R.Footer,{style:{backgroundColor:s.cardFooterBackground},children:o.tags.map((function(a){return Object(j.jsx)(A,{pill:!0,bg:s.bsSecondaryVariant,text:s.bsPrimaryVariant,style:M.badgeStyle,children:a},a)}))})]})})}}}]);
//# sourceMappingURL=7.6e3aac64.chunk.js.map