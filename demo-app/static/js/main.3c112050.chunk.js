(this["webpackJsonpinjected-wallet-demo"]=this["webpackJsonpinjected-wallet-demo"]||[]).push([[0],{36:function(t,e,n){"use strict";(function(t){var a=n(4),c=n(0),r=n.n(c),s=n(15),o=n(8),i=n(7),u=n.n(i),l=(n(48),n(37)),d=n.n(l).a.init({host:"arweave.dev",port:443,protocol:"https"});e.a=function(){var e=u.a.useState(""),n=Object(o.a)(e,2),c=n[0],i=n[1],l=u.a.useState(""),p=Object(o.a)(l,2),j=p[0],f=p[1],b=u.a.useState(""),h=Object(o.a)(b,2),x=h[0],w=h[1],g=u.a.useState("0"),v=Object(o.a)(g,2),O=v[0],y=v[1],m=function(){var e=Object(s.a)(r.a.mark((function e(){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.createTransaction({data:t.from(x,"utf8"),target:null!==j&&void 0!==j?j:void 0,quantity:d.ar.arToWinston(O)},injectedWallet.publicKey);case 2:return(n=e.sent).addTag("Content-Type","text/html"),console.log(n),e.next=7,window.injectedWallet.sign(n);case 7:a=e.sent,alert("Transaction ID is: ".concat(a.txId," and status code is: ").concat(a.status.status));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var t=Object(s.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e="",!window.hasOwnProperty("injectedWallet")){t.next=8;break}return t.next=4,d.wallets.jwkToAddress(window.injectedWallet.publicKey);case 4:e=t.sent,i(e),t.next=9;break;case 8:alert("No wallet found");case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("button",{disabled:c,onClick:C,style:{marginRight:"5px"},children:"Connect Wallet"}),c&&Object(a.jsxs)("p",{children:["Injected Wallet Address: ",c]}),Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"25%",position:"absolute",left:"50%"},children:[Object(a.jsx)("input",{type:"text",placeholder:"Message",onChange:function(t){return w(t.target.value)}}),Object(a.jsx)("input",{type:"text",placeholder:"To address",onChange:function(t){return f(t.target.value)}}),Object(a.jsx)("input",{type:"text",placeholder:"Amount to send",onChange:function(t){return y(t.target.value)}}),Object(a.jsx)("button",{disabled:!c,onClick:m,children:"Create and send transaction"})]})]})}}).call(this,n(16).Buffer)},43:function(t,e,n){},48:function(t,e,n){},89:function(t,e,n){"use strict";n.r(e);var a=n(4),c=(n(7),n(35)),r=n.n(c),s=(n(43),n(36)),o=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};r.a.render(Object(a.jsx)(s.a,{}),document.getElementById("root")),o()}},[[89,1,2]]]);
//# sourceMappingURL=main.3c112050.chunk.js.map