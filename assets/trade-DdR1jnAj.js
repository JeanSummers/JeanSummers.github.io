import{c as p,j as e,r as u,u as b,a as c,b as v,P as m,B as l,d as y,I as d}from"./index-CFGERTp2.js";import{P as z,E as I,G as h,T as s,C,a as w,I as M}from"./PageLoader-8XAVz2Yt.js";import{G as S}from"./ResourceIcon-DfJS213U.js";import{u as g}from"./shallow-DEu4kAmO.js";import{L as k}from"./LinearProgress-UkNgXDgM.js";const W=p(e.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"})),H=p(e.jsx("path",{d:"M19 13H5v-2h14z"})),E=p(e.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"})),P=p(e.jsx("path",{d:"M6.99 11 3 15l3.99 4v-3H14v-2H6.99zM21 9l-3.99-4v3H10v2h7.01v3z"})),T=u.memo(function(){const{status:o,error:t}=b(),r=c(g(n=>n.buying.map(a=>a.id))),i=c(g(n=>n.selling.map(a=>a.id))),x=v();return o==="pending"?e.jsx(z,{}):o==="error"?e.jsx(I,{message:t.message}):e.jsx(e.Fragment,{children:e.jsxs(h,{container:!0,spacing:2,children:[e.jsx(h,{size:12,children:e.jsx(m,{children:e.jsxs(l,{p:4,position:"relative",children:[e.jsx(V,{}),e.jsx(k,{sx:{position:"absolute",bottom:0,left:0,width:"100%",transition:"opacity 400ms linear",opacity:x?1:0}})]})})}),e.jsx(h,{size:{xs:12,sm:12,md:6},children:e.jsx(m,{children:e.jsxs(l,{p:2,display:"flex",flexDirection:"column",gap:2,children:[e.jsx(s,{variant:"h4",children:"Продажа"}),i.map(n=>e.jsx(f,{id:n},n))]})})}),e.jsx(h,{size:{xs:12,sm:12,md:6},children:e.jsx(m,{children:e.jsxs(l,{p:2,display:"flex",flexDirection:"column",gap:2,children:[e.jsx(s,{variant:"h4",children:"Покупка"}),r.map(n=>e.jsx(f,{id:n},n))]})})})]})})}),f=u.memo(function({id:o}){const t=c(n=>n.buying.find(a=>a.id===o)||n.selling.find(a=>a.id===o)),r=c(n=>n.changeCount),i=c(n=>n.remove),x=c(n=>n.swap);if(t)return e.jsx(C,{variant:"outlined",sx:{display:"flex"},children:e.jsxs(l,{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",children:[e.jsxs(w,{children:[e.jsxs(s,{variant:"h5",fontSize:{xs:20,sm:24},component:"div",display:"flex",alignItems:"center",gap:1,children:[e.jsx(S,{name:t.icon,category:"resources",sx:{color:n=>n.palette.text.secondary}})," ",t.name,e.jsx(s,{color:"textSecondary",fontSize:"inherit",children:t.source})]}),e.jsxs(l,{display:"flex",gap:1,alignItems:"center",children:[e.jsxs(s,{sx:{color:"text.secondary"},children:[t.attribute," ",t.rank]}),e.jsx(d,{size:"small",onClick:()=>i(o),children:e.jsx(E,{})}),e.jsx(d,{size:"small",edge:"start",onClick:()=>x(o),children:e.jsx(P,{})})]})]}),e.jsxs(l,{mr:2,minWidth:100+10*(1+Math.floor(Math.log10(t.count))),children:[e.jsx(d,{color:"primary",size:"small",onClick:()=>r(t.id,Math.max(1,t.count-1)),children:e.jsx(H,{})}),e.jsx(M,{value:t.count,type:"number",sx:{width:30+10*(1+Math.floor(Math.log10(t.count))),"& input":{textAlign:"center"},"& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":{"-webkit-appearance":"none",margin:0},"& input[type=number]":{"-moz-appearance":"textfield"}},onChange:n=>r(t.id,Math.min(1e3,Math.max(1,parseInt(n.target.value)||0)))}),e.jsx(d,{color:"primary",size:"small",onClick:()=>r(t.id,Math.min(1e4,t.count+1)),children:e.jsx(W,{})})]})]})})}),V=u.memo(function(){const o=y(i=>i.data),t=c(i=>i.buying.length+i.selling.length<1);if(!o||t)return e.jsx(s,{fontSize:"large",children:"Выберите предметы для обмена в окне ресурсов"});const r=o.score;return r<0?e.jsxs(s,{fontSize:"large",children:["Сделка ",e.jsx(s,{color:"error",fontWeight:"bold",component:"span",children:"не выгодна"})," продавцу. Добавьте товаров как минимум порядка ",e.jsx(s,{fontWeight:"bold",component:"span",children:o.rank})," чтобы рассчитывать на результат."]}):r<2?e.jsxs(s,{fontSize:"large",children:["Сделка ",e.jsx(s,{color:"info",fontWeight:"bold",component:"span",children:"уравновешена"}),". Продавец не получит существенной выгоды, но скорее всего согласится на обмен."]}):r<5?e.jsxs(s,{fontSize:"large",children:["Сделка ",e.jsx(s,{color:"success",fontWeight:"bold",component:"span",children:"выгодна"})," продавцу. Взамен вам могут предложить дополнительные услуги или товары порядка ",e.jsx(s,{fontWeight:"bold",component:"span",children:o.rank})," ранга."]}):r<9?e.jsxs(s,{fontSize:"large",children:["Сделка ",e.jsx(s,{color:"success",fontWeight:"bold",component:"span",children:"крайне выгодна"})," продавцу. Взамен вам могут предложить дополнительные услуги или товары порядка ",e.jsx(s,{fontWeight:"bold",component:"span",children:o.rank})," ранга."]}):e.jsxs(s,{fontSize:"large",children:["Сделка ",e.jsx(s,{color:"warning",fontWeight:"bold",component:"span",children:"крайне не выгодна"})," для вас. Ваш убыток в сумме превышает ",e.jsx(s,{fontWeight:"bold",component:"span",children:o.rank})," ранг. Вы уверены, что хотите подарить эти товары собеседнику?"]})}),R=T;export{R as component};
