import{j as e,C as d,_ as i,D as C,r as _,T as v,R as I}from"./index-z0nbMM35.js";import{C as R,B as T,u as k,S as L,R as A,T as V,a as S}from"./usePagination-IYKXV6FN.js";import{C as b,j as O,T as t,P as w,E as z,k as p,h as B}from"./ResourceIcon-l9-PGcZH.js";import{u as P,C as F,R as g,D as h,A as W,M,I as N,a as H,b as $}from"./IconPopoverBase-DoAV5hxp.js";import{L as G}from"./Popover-8k1-kUWz.js";function q(s){const r=P();return e.jsxs(b,{variant:"elevation",sx:{display:"flex"},children:[e.jsx(F,{component:"img",image:s.image,alt:s.name,sx:{maxWidth:{xs:100,sm:200},minWidth:{xs:100,sm:200},objectFit:{xs:"scale-down",sm:"cover"}}}),e.jsxs(d,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between"},children:[e.jsxs(O,{children:[e.jsx(t,{variant:"h5",fontSize:{xs:20,sm:24},component:"div",display:"flex",alignItems:"center",gap:1,lineHeight:1,children:e.jsxs("div",{children:[" ",s.name,e.jsx(g,{rank:s.rank,category:"plant",color:"textSecondary",fontSize:"inherit",component:"span",ml:1})]})}),e.jsxs(t,{gutterBottom:!0,sx:{color:"text.secondary",fontSize:14},children:[s.division," | ",s.plantClass," | ",s.order]}),e.jsx(t,{variant:"body2",children:s.shortDescription})]}),e.jsx(R,{children:e.jsx(T,{onClick:()=>r({search:{c:s.name}}),children:"Читать далее"})})]})]},s.name)}const J={Аврория:()=>i(()=>import("./Аврория-Ii4hU9gF.js"),[]),Агония:()=>i(()=>import("./Агония-CWgVUBtY.js"),[]),Аримафея:()=>i(()=>import("./Аримафея-DoBqlIwj.js"),[]),Аромиял:()=>i(()=>import("./Аромиял-M_oqgdWH.js"),[]),"Бутылочное дерево":()=>i(()=>import("./Бутылочное дерево-cwfJpMtZ.js"),[]),"Ге-гинном":()=>i(()=>import("./Ге-гинном-Cl3QRWqo.js"),[]),Дакробелум:()=>i(()=>import("./Дакробелум-7b0V9E7G.js"),[]),Златоцвет:()=>i(()=>import("./Златоцвет-Dz8LZ-v0.js"),[]),Калейд:()=>i(()=>import("./Калейд-CkdF28UR.js"),[]),Корнахель:()=>i(()=>import("./Корнахель-gsQxzYbK.js"),[]),Нахема:()=>i(()=>import("./Нахема-D70w-TZy.js"),[]),"Цветок жизни":()=>i(()=>import("./Цветок жизни-CvNKatEq.js"),[])};function K(s){return e.jsxs(e.Fragment,{children:[e.jsx(d,{display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(d,{component:"img",src:s.image,maxWidth:"100%",maxHeight:"40vh"})}),e.jsx(h,{sx:{my:2}}),e.jsxs(d,{tabIndex:-1,display:"grid",gridTemplateColumns:"140px 1fr",gap:1,justifyItems:"flex-start",sx:{color:r=>r.palette.text.primary},children:[e.jsx(a,{title:"Другие имена"}),e.jsx(t,{children:s.alternativeNames.join(", ")}),e.jsx(a,{title:"Отдел"}),e.jsx(t,{children:s.division}),e.jsx(a,{title:"Класс"}),e.jsx(t,{children:s.plantClass}),e.jsx(a,{title:"Доступ"}),e.jsx(W,{rank:s.access}),e.jsx(a,{title:"Порядок"}),e.jsx(t,{children:s.order}),e.jsx(a,{title:"Семейство"}),e.jsx(t,{children:s.family}),e.jsx(a,{title:"Ранг"}),e.jsx(g,{rank:s.rank,category:"plant"}),e.jsx(a,{title:"Редкость"}),e.jsx(g,{rank:s.rarity,category:"rarity"}),e.jsx(a,{title:"Ареал"}),e.jsx(t,{children:s.habitat}),e.jsx(a,{title:"Возраст"}),e.jsx(t,{children:s.age}),e.jsx(a,{title:"Атрибут"}),e.jsx(t,{children:s.attributes.join(", ")})]}),e.jsx(h,{sx:{my:2}}),e.jsx(Q,{name:s.name}),e.jsx(h,{sx:{my:2}}),e.jsx(M,{name:s.name,source:J})]})}function a({title:s}){return e.jsxs(t,{fontWeight:"bold",children:[s,":"]})}function Q({name:s}){const{data:r,isLoading:l}=C();if(l)return e.jsx(G,{});const o=r==null?void 0:r.plantLookup.get(s);return o!=null&&o.length?e.jsx(d,{display:"flex",flexWrap:"wrap",gap:1,children:o.map(n=>e.jsxs(d,{display:"flex",flexDirection:"column",alignItems:"center",children:[e.jsx(N,{name:n.icon,title:`${n.resource} | ${n.effect}`,info:n.description,category:"resources",fontSize:"large",sx:{color:m=>m.palette.text.secondary}}),e.jsx(t,{children:n.attribute}),e.jsx(t,{children:n.rank})]},n.name))}):e.jsx(t,{color:"textSecondary",children:"Из существа нельзя получить ресурсы"})}const U=_.memo(function(){const{c:r}=H(),l=P(),{data:o}=v(),n=o==null?void 0:o.lookup.get(r);if(!n)return null;const m=()=>l({});return e.jsx($,{open:!0,onClose:m,title:n.name,content:e.jsx(K,{...n})})}),X=_.memo(function(){const{status:r,data:l,error:o}=v(),[n,m]=I("",500),[j,E]=_.useState([]),f=_.useMemo(()=>{const c=n.trim().toLowerCase();let u=(l==null?void 0:l.items)||[];return j.length&&(u=u.filter(x=>j.includes(x.rank))),c?u.filter(x=>[x.name,x.division,x.shortDescription,...x.attributes,...x.alternativeNames].join(";").toLowerCase().includes(c)):u},[l,j,n]),{paginate:D,...y}=k(f.length,4);return r==="pending"?e.jsx(w,{}):r==="error"?e.jsx(z,{message:o.message}):e.jsxs(e.Fragment,{children:[e.jsxs(p,{container:!0,spacing:{xs:1,sm:1,md:2},children:[e.jsx(p,{size:12,children:e.jsx(B,{placeholder:"Поиск",fullWidth:!0,startAdornment:e.jsx(L,{sx:{color:"action.active",mr:1,my:.5}}),onChange:c=>m(c.target.value)})}),e.jsx(p,{display:"flex",size:{sm:12,md:6},justifyContent:"flex-start",children:e.jsx(A,{ranks:j,setRanks:E})}),e.jsx(p,{size:{xs:12,sm:12,md:6},children:e.jsx(V,{...y})})]}),e.jsx(d,{sx:{width:"100%",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(400px, 100%), 1fr))",gap:2,pb:2},children:D(f).map(c=>e.jsx(q,{...c},c.name))}),e.jsx(S,{...y}),e.jsx(U,{})]})}),ne=X;export{ne as component};
