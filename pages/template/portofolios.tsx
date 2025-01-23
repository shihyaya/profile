import Title from "@/component/Title";
import Portofolio from "@/component/Portofolio";

const portofolioData = [{
    name:'專家系統',
    subtitle:'養殖雲端平台',
    skill:['Vue2/Nuxt2','Figma','Axios'],
    job:['介面設計','程式撰寫','串接API'],
    describe:'搭配自動化設備，更快速即時管理養殖，提升養殖效率，確保最佳養殖環境。依照個人需求彈性設定調整，滿足不同的養殖需求與目標',
    response:'1. 平台維護與調整<br>2. 元件化彈性調整<br>3. 過多的數據整合<br>4. 新功能規劃與開發'
},{
    name:'智慧水產養殖專家介紹',
    subtitle:'一頁式介紹網站',
    skill:['React/Next','Figma'],
    job:['介面設計','程式撰寫'],
    describe:' 一頁式系統設備與功能介紹',
    response:'1. 頁面規劃與設計<br>2. React學習與程式撰寫'
},{
    name:'Nusono Cloud',
    subtitle:'醫療雲端平台',
    skill:['Angular','Figma','Echarts'],
    job:['介面設計','程式撰寫','串接API'],
    describe:'使用者利用Nusono超音波與APP進行掃描後儲存資料，並上傳至Nusono Cloud，進行病患診斷以及分析',
    response:'1. 平台維護與調整<br>2. 遠距醫療視訊功能開發'
},{
    name:'Pineer 掌中鴿星',
    subtitle:'賽鴿即時定位平台',
    skill:['Angular','Figma','Amcharts'],
    job:['介面設計','程式撰寫','串接API'],
    describe:'網頁即時呈現GPS定位，可查看軌跡和當時飛行之資料，幫助賽鴿人員更清楚掌握鴿子的飛行狀況，以及適合的氣候與地形',
    response:'1. 平台功能設計與操作流程規劃<br>2. google map api串接<br>3.訂閱制規劃'
},]
export default function Portofolios() {
    return (
        <>
            <div id="portofolio" className="py-6 my-10">
                <Title title="作品集" subtitle="PORTOFOLIO"></Title>
                <div className='grid grid-cols-1 lg:grid-cols-2 px-10 pt-6 items-stretch gap-2'>
                    {
                        portofolioData.map((portofolio,i)=>{
                            return (
                                <div key={`portofolio_${i}`}>
                                    <Portofolio name={portofolio.name} subtitle={portofolio.subtitle} skill={portofolio.skill} job={portofolio.job} describe={portofolio.describe} response={portofolio.response} id={i+1}></Portofolio>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
// const Portofolios = () =>(
//     <>
//         <div id="portofolio" className="py-6 my-10">
//             <Title title="作品集" subtitle="PORTOFOLIO"></Title>
//             <div className='grid grid-cols-1 lg:grid-cols-2 px-10 pt-6 items-stretch gap-2'>
//                 {
//                     portofolioData.map((portofolio,i)=>{
//                         return (
//                             <div key={`portofolio_${i}`}>
//                                 <Portofolio name={portofolio.name} subtitle={portofolio.subtitle} skill={portofolio.skill} job={portofolio.job} describe={portofolio.describe} response={portofolio.response} id={i+1}></Portofolio>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     </>
// )
// export { Portofolios };