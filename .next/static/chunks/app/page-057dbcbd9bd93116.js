(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4835:function(e,t,n){Promise.resolve().then(n.bind(n,5523)),Promise.resolve().then(n.bind(n,3386))},5523:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return homepage}});var a=n(7437),r=n(2265),s=n(713),l=n(3839),i=n(1396),c=n.n(i),d=n(2898);let o=(0,d.Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),u=(0,d.Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);var f=n(7158),x=n(992),p=n(6212),m=n(8700),h=n(7832),g=n(5431),idealist=e=>{let{data:t,formSearch:n,setListPage:r,onSearchSubmit:s,setFormSearch:l}=e;return(0,a.jsxs)("div",{className:"flex flex-col items-center py-6",children:[(0,a.jsx)("h1",{className:(0,x.cn)("\n          text-center text-4xl font-bold\n          p-10\n        "),children:"Daftar Ide"}),(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),s()},className:"flex justify-center gap-2",children:[(0,a.jsx)(h.I,{placeholder:"Search",value:n,onChange:e=>l(e.target.value)}),(0,a.jsx)(m.Button,{type:"submit",children:(0,a.jsx)(o,{})})]}),(0,a.jsx)("div",{className:"\n            flex flex-wrap justify-center gap-4\n            p-5 my-4\n            md:w-[1000px] md:justify-start\n          ",children:null==t?void 0:t.items.map(e=>{var t,n;return(0,a.jsxs)(g.Zb,{className:"w-full max-w-[300px]",children:[(0,a.jsx)("img",{className:"object-contain w-[300px] h-[300px]",src:p.Z.files.getUrl(e,e.images[0]),width:400,height:400,alt:"Picture of the author"}),(0,a.jsxs)(g.Ol,{children:[(0,a.jsx)(g.ll,{children:e.title}),(0,a.jsx)(g.SZ,{children:null===(n=e.expand)||void 0===n?void 0:null===(t=n.user)||void 0===t?void 0:t.fullname})]}),(0,a.jsx)(g.aY,{children:e.abstract}),(0,a.jsx)(g.eW,{className:"flex justify-center",children:(0,a.jsx)(m.Button,{asChild:!0,children:(0,a.jsx)(c(),{href:"/idea/".concat(e.id),children:"Selengkapnya"})})})]},e.id)})}),(0,a.jsxs)("div",{className:"flex justify-center items-center gap-2",children:[(0,a.jsx)(m.Button,{onClick:()=>{((null==t?void 0:t.page)||1)>1&&r(((null==t?void 0:t.page)||1)-1)},children:(0,a.jsx)(u,{})}),(0,a.jsxs)("p",{children:["Page ",null==t?void 0:t.page," of ",null==t?void 0:t.totalPages]}),(0,a.jsx)(m.Button,{onClick:()=>{((null==t?void 0:t.page)||1)<((null==t?void 0:t.totalPages)||1)&&r(((null==t?void 0:t.page)||1)+1)},children:(0,a.jsx)(f.Z,{})})]})]})},summary=e=>{let{data:t}=e;return(0,a.jsxs)("div",{className:(0,x.cn)("\n          flex flex-col gap-2 items-center justify-center\n          bg-primary\n          min-h-[calc(100vh-80px)] p-10\n        "),children:[(0,a.jsxs)("h1",{className:(0,x.cn)("\n          text-center text-6xl text-white font-black\n          p-5\n        "),children:["JAMBORE NASIONAL ",(0,a.jsx)("br",{})," AMKI MUDA"]}),(0,a.jsx)("h2",{className:(0,x.cn)("\n          text-center text-3xl text-white font-semibold\n          p-2\n        "),children:"#InspirasiMembangunNegeri"}),(0,a.jsx)(m.Button,{asChild:!0,variant:"secondary",className:"m-6 w-fit",children:(0,a.jsx)(c(),{href:"/profile/ideas/create",children:"Daftarkan Karya Anda Disini"})}),(0,a.jsx)("div",{className:"\n          w-full mt-5\n          flex items-center justify-center flex-wrap gap-4\n        ",children:(0,a.jsx)(g.Zb,{className:"w-full max-w-[200px]",children:(0,a.jsxs)(g.Ol,{className:"items-center",children:[(0,a.jsx)(g.ll,{children:(null==t?void 0:t.totalItems)||0}),(0,a.jsx)(g.SZ,{children:"Jumlah Ide"})]})})})]})},j=n(5160),v=n(6172),homepage=()=>{let{toast:e}=(0,l.pm)(),[t,n]=(0,r.useState)(""),[i,c]=(0,r.useState)(""),[d,o]=(0,r.useState)(1),{data:u}=(0,s.ZP)({arg:{page:d,perPage:8,options:t?{filter:'title ~ "'.concat(t,'"'),expand:"user"}:{expand:"user"}}},j.Gk,{onError:t=>{t instanceof v.Ug?e({variant:"destructive",title:"Terjadi Kesalahan",description:JSON.stringify(t.response,null,2)}):e({variant:"destructive",title:"Terjadi Kesalahan",description:"Tolong coba lagi setelah beberapa saat."})}});return(0,a.jsxs)("main",{className:"p-y-4",children:[(0,a.jsx)(summary,{data:u}),(0,a.jsx)(idealist,{data:u,formSearch:i,setListPage:o,setFormSearch:c,onSearchSubmit:()=>{n(i)}})]})}},5431:function(e,t,n){"use strict";n.d(t,{Ol:function(){return i},SZ:function(){return d},Zb:function(){return l},aY:function(){return o},eW:function(){return u},ll:function(){return c}});var a=n(7437),r=n(2265),s=n(992);let l=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",n),...r})});l.displayName="Card";let i=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",n),...r})});i.displayName="CardHeader";let c=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)("h3",{ref:t,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",n),...r})});c.displayName="CardTitle";let d=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",n),...r})});d.displayName="CardDescription";let o=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",n),...r})});o.displayName="CardContent";let u=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",n),...r})});u.displayName="CardFooter"},7832:function(e,t,n){"use strict";n.d(t,{I:function(){return l}});var a=n(7437),r=n(2265),s=n(992);let l=r.forwardRef((e,t)=>{let{className:n,type:r,...l}=e;return(0,a.jsx)("input",{type:r,className:(0,s.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...l})});l.displayName="Input"},5160:function(e,t,n){"use strict";n.d(t,{Gk:function(){return GetListIdeas},S$:function(){return PostCreateIdeas},V2:function(){return PostUpdateIdeas},nl:function(){return GetIdeaDetail}});var a=n(6212);let PostCreateIdeas=async(e,t)=>{let{arg:n}=t;return await a.Z.collection("ideas").create(n.data)},PostUpdateIdeas=async(e,t)=>{let{arg:n}=t;return await a.Z.collection("ideas").update(n.record_id,n.data)},GetListIdeas=e=>{let{arg:t}=e;return a.Z.collection("ideas").getList(t.page,t.perPage,t.options)},GetIdeaDetail=e=>{let{arg:t}=e;return a.Z.collection("ideas").getOne(t.record_id,{expand:"user"})}}},function(e){e.O(0,[826,804,815,386,971,864,744],function(){return e(e.s=4835)}),_N_E=e.O()}]);