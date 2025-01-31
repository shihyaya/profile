(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[663],{4209:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/template/portofolios",function(){return s(4587)}])},3763:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var l=s(5893);function n(e){let{title:t,subtitle:s}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"mx-10 text-center",children:[(0,l.jsx)("p",{className:"text-dark-25 mb-0 font-black",children:s}),(0,l.jsx)("h4",{className:"text-dark-100 mt-0 font-black",children:t})]})})}},4587:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var l=s(5893),n=s(3763),r=s(7602),i=s.n(r),o=s(7294);function a(e){let{name:t,subtitle:s,job:n,skill:r,describe:a,response:c,id:d}=e,u=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let e=()=>{u.current&&(u.current.getBoundingClientRect().top<window.innerHeight?(u.current.style.opacity="1",u.current.style.transform="translateY(0)",u.current.style.transition="opacity 1s ease-out, transform 1s ease-out"):(u.current.style.opacity="0",u.current.style.transform="translateY(100px)"))};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{ref:u,className:"".concat(i().card," p-1 shadow-md h-full w-full"),children:(0,l.jsxs)("div",{className:"flex flex-col p-4 items-center  w-full h-full md:flex-row md:items-stretch",children:[(0,l.jsx)("div",{className:"w-full h-[300px] md:h-full",children:(0,l.jsx)("div",{className:"".concat(i().portofolio," h-[300px] w-full bg-contain md:bg-contain md:h-full sm:bg-auto"),style:{backgroundImage:"url('./assets/portofolio/".concat(d,".png')")}})}),(0,l.jsx)("div",{className:"w-full h-full",children:(0,l.jsxs)("div",{className:"".concat(i().content," px-4 py-3 bg-primary-25  h-full"),children:[(0,l.jsxs)("div",{className:"title ",children:[(0,l.jsx)("p",{className:"text-accent my-0 py-0 font-black",children:s}),(0,l.jsx)("h6",{className:"text-dark-100 my-0 py-0 font-black",children:t}),r.map((e,t)=>(0,l.jsx)("div",{className:"text-dark-100 inline-block px-1",children:(0,l.jsxs)("p",{children:[" #",e," "]})},"porto_skill_".concat(t)))]}),(0,l.jsx)("div",{className:"job my-4",children:n.map((e,t)=>(0,l.jsx)("div",{className:"inline-block",children:(0,l.jsx)("p",{className:"".concat(i().chip," bg-dark-10 text-dark-100 px-3 py-1 my-2 mx-1"),children:e})},"porto_job_".concat(t)))}),(0,l.jsxs)("div",{className:"detail",children:[(0,l.jsx)("span",{className:"text-dark-100",children:a}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("span",{className:"text-dark-100",dangerouslySetInnerHTML:{__html:c}})]})]})})]})})})}let c=[{name:"專家系統",subtitle:"養殖雲端平台",skill:["Vue2/Nuxt2","Figma","Axios","Vuetify"],job:["介面設計","程式撰寫","串接API"],describe:"搭配自動化設備，更快速即時管理養殖，提升養殖效率，確保最佳養殖環境。依照個人需求彈性設定調整，滿足不同的養殖需求與目標",response:"1. 平台維護與調整<br>2. 元件化彈性調整<br>3. 過多的數據整合<br>4. 新功能規劃與開發"},{name:"智慧水產養殖專家介紹",subtitle:"一頁式介紹網站",skill:["React/Next","Figma","Tailwind"],job:["介面設計","程式撰寫"],describe:" 一頁式系統設備與功能介紹",response:"1. 頁面規劃與設計<br>2. React學習與程式撰寫"},{name:"Nusono Cloud",subtitle:"醫療雲端平台",skill:["Angular","Figma","Echarts","Material"],job:["介面設計","程式撰寫","串接API"],describe:"使用者利用Nusono超音波與APP進行掃描後儲存資料，並上傳至Nusono Cloud，進行病患診斷以及分析",response:"1. 平台維護與調整<br>2. 遠距醫療視訊功能開發"},{name:"Pineer 掌中鴿星",subtitle:"賽鴿即時定位平台",skill:["Angular","Figma","Amcharts","Material"],job:["介面設計","程式撰寫","串接API"],describe:"網頁即時呈現GPS定位，可查看軌跡和當時飛行之資料，幫助賽鴿人員更清楚掌握鴿子的飛行狀況，以及適合的氣候與地形",response:"1. 平台功能設計與操作流程規劃<br>2. google map API串接<br>3. 訂閱制規劃"}];function d(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{id:"portfolio",className:"py-6 my-10",children:[(0,l.jsx)(n.Z,{title:"作品集",subtitle:"PORTFOLIO"}),(0,l.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-2 px-10 pt-6 items-stretch gap-2",children:c.map((e,t)=>(0,l.jsx)("div",{children:(0,l.jsx)(a,{name:e.name,subtitle:e.subtitle,skill:e.skill,job:e.job,describe:e.describe,response:e.response,id:t+1})},"portofolio_".concat(t)))})]})})}},7602:function(e){e.exports={content:"portofolio_content__lnMOD",card:"portofolio_card__ajSYC",portofolio:"portofolio_portofolio__A17e5",chip:"portofolio_chip__EouUv"}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=4209)}),_N_E=e.O()}]);