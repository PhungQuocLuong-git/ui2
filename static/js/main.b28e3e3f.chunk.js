(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,n,r){"use strict";r.r(n);var t=r(1),a=r(5),s=r.n(a),c=r(2),u=(r(4),r(0));var l=function(e){var n=e.winnerPos,r=e.onClick,t=e.k,a=e.value,s=n;return Object(u.jsx)("button",{onClick:r,className:-1!==s.indexOf(t)?"square win":"square",children:a})};var o=function(e){for(var n=e.LEN,r=e.winnerPos,t=e.squares,a=e.onClick,s=[],c=0;c<n;c++)s.push(c);return Object(u.jsx)("div",{children:s.map((function(e){return Object(u.jsx)("div",{className:"board-row",children:s.map((function(s){return function(e){return Object(u.jsx)(l,{k:e,winnerPos:r,value:t[e],onClick:function(){return a(e)}},e)}(n*e+s)}))},e+"abc")}))})};var i=function(e){var n,r=Object(t.useState)(5),a=Object(c.a)(r,2),s=a[0],l=a[1],i=Object(t.useState)([{squares:Array(s*s).fill(null),latestCheck:[]}]),j=Object(c.a)(i,2),b=j[0],h=j[1],m=Object(t.useState)(0),d=Object(c.a)(m,2),O=d[0],f=d[1],v=Object(t.useState)(!0),g=Object(c.a)(v,2),p=g[0],x=g[1],k=Object(t.useState)(0),C=Object(c.a)(k,2),N=C[0],y=C[1],q=Object(t.useState)(!0),S=Object(c.a)(q,2),w=S[0],P=S[1],z=Object(t.useState)([]),A=Object(c.a)(z,2),E=A[0],G=A[1],J=function(e,n,r){if(r&&r.length>0){console.log("lasf",r,e);var t=e[r[1]*n+r[0]];console.log("asf",t);for(var a={arr:[r[1]*n+r[0]],num:0},s=r[0]+1;s<n&&e[r[1]*n+s]===t;s++)a.num=a.num+1,a.arr.push(r[1]*n+s);for(var c=r[0]-1;c>=0&&e[r[1]*n+c]===t;c--)a.num=a.num+1,a.arr.push(r[1]*n+c);if(a.num>=4)return console.log("dong",a,t),[t,a.arr];for(var u={arr:[r[1]*n+r[0]],num:0},l=r[1]+1;l<n&&e[l*n+r[0]]===t;l++)u.num=u.num+1,u.arr.push(l*n+r[0]);for(var o=r[1]-1;o>=0&&e[o*n+r[0]]===t;o--)u.num=u.num+1,u.arr.push(o*n+r[0]);if(u.num>=4)return console.log("dong",u,t),[t,u.arr];for(var i={arr:[r[1]*n+r[0]],num:0},j=1;j<n&&!(r[0]+j>n-1||r[1]+j>n-1)&&e[(r[1]+j)*n+r[0]+j]===t;j++)i.num=i.num+1,i.arr.push((r[1]+j)*n+r[0]+j);for(var b=1;b<n&&!(r[0]-b<0||r[1]-b<0)&&e[(r[1]-b)*n+r[0]-b]===t;b++)i.num=i.num+1,i.arr.push((r[1]-b)*n+r[0]-b);if(i.num>=4)return console.log("dong",i,t),[t,i.arr];for(var h={arr:[r[1]*n+r[0]],num:0},m=1;m<n&&!(r[0]+m>n-1||r[1]-m<0)&&e[(r[1]-m)*n+r[0]+m]===t;m++)h.num=h.num+1,h.arr.push((r[1]-m)*n+r[0]+m);for(var d=1;d<n&&!(r[0]-d<0||r[1]+d>n-1)&&e[(r[1]+d)*n+r[0]-d]===t;d++)h.num=h.num+1,h.arr.push((r[1]+d)*n+r[0]-d);if(h.num>=4)return console.log("dong",h,t),[t,h.arr]}return null},L=function(e){var n;f(n=e),x(n%2===0),y(e),G([])},X=b[O],B=J(X.squares,s,X.latestCheck),D=b.map((function(e,n){var r=n?"Go to move #"+n+". Position :("+e.latestCheck.toString()+")":"Go to game start";return Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:function(){L(n)},className:N===n?"bold-text":"",children:r})},n)}));B?(n="Winner: "+B[0],0===E.length&&G(B[1])):n=b.length<=s*s?"Next player: "+(p?"X":"O"):"The game result is a draw ";var I=function(e){e.target.value>=5?l(e.target.value):alert("size should not be less than 5 value")};return Object(u.jsxs)("div",{className:"game",children:[Object(u.jsxs)("div",{className:"menu",children:[Object(u.jsx)("button",{className:"button-play-again",onClick:function(){f(0),G([]),h([{squares:Array(s*s).fill(null),latestCheck:[]}])},children:"Play again"}),1===b.length?Object(u.jsxs)("div",{className:"set",children:[Object(u.jsx)("label",{children:"Set size of the board"}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"number",value:s,onChange:I})})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Size of the board"}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"number",value:s,onChange:I,readOnly:!0})})]})]}),Object(u.jsxs)("div",{className:"game-board",children:[Object(u.jsx)("div",{className:"status-game",children:n}),Object(u.jsx)(o,{squares:X.squares,winnerPos:E,onClick:function(e){return function(e){var n=b.slice(0,O+1),r=n[n.length-1],t=r.squares.slice();J(t,s,r.latestCheck)||t[e]||(t[e]=p?"X":"O",h(n.concat([{squares:t,latestCheck:[e%s,Math.floor(e/s)]}])),f(n.length),x(!p),y(N+1))}(e)},LEN:s})]}),Object(u.jsxs)("div",{className:"game-info",children:[Object(u.jsx)("button",{onClick:function(){P(!w)},children:w?"Ascending":"Descending"}),Object(u.jsx)("ol",{children:w?D:D.reverse()})]})]})};s.a.render(Object(u.jsx)(i,{}),document.getElementById("root"))},4:function(e,n,r){}},[[11,1,2]]]);
//# sourceMappingURL=main.b28e3e3f.chunk.js.map