import{a as l,g as p,r as d,u,j as g,s as C,i as f,e as m}from"./index-B_c5xwaP.js";function y(s){return l("MuiCardActions",s)}p("MuiCardActions",["root","spacing"]);const A=s=>{const{classes:t,disableSpacing:a}=s;return m({root:["root",!a&&"spacing"]},y,t)},x=C("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:a}=s;return[t.root,!a.disableSpacing&&t.spacing]}})({display:"flex",alignItems:"center",padding:8,variants:[{props:{disableSpacing:!1},style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),R=d.forwardRef(function(t,a){const o=u({props:t,name:"MuiCardActions"}),{disableSpacing:n=!1,className:r,...i}=o,e={...o,disableSpacing:n},c=A(e);return g.jsx(x,{className:f(c.root,r),ownerState:e,ref:a,...i})});export{R as C};
