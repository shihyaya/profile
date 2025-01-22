import Title from "@/component/Title";
import Experience from '@/component/Experience'
const exData=[{
    company: '艾滴科技股份有限公司',
    job: '前端工程師',
    startDate: '2023/08',
    endDate:'',
    describe: '1. 網頁設計：網站功能與頁面規劃設計。<br>2. 網頁前端程式撰寫：依據頁面規劃與設計，使用Vue或React框架製作。<br>3. API串接：與後端API進行串接(Axios)。',
    skills: '使用技能：Vue、React、Html、Javascript、Css/Sass、Figma'
},{
    company: '迅易醫材股份有限公司',
    job: '前端工程師',
    startDate: '2021/09',
    endDate:'2023/07',
    describe: '1. 網頁設計：網站功能與頁面規劃設計。<br>2. 網頁前端程式撰寫：依據頁面規劃與設計，使用Angular框架製作。<br>3. API串接：與後端API進行串接。',
    skills: '使用技能：Angular、Html、Javascript、Css/Sass、Figma'
},{
    company: '亞梭傢俬國際股份有限公司',
    job: '網頁設計師',
    startDate: '2019/04',
    endDate:'2021/04',
    describe: '1. 網頁規劃與製作：根據不同活動製作與規劃網頁與圖片。<br>2. 協助網站平台轉移及APP規劃：網頁的規劃與轉移，亦包含會員轉移的活動規劃協助。<br>3. 美編設計：網路圖片與活動頁設計、FB廣告圖與EDM製作。<br>4. O2O導流活動規劃與協助：協助將客人導流至門市體驗，並與門市協同合作導流至線上購買',
    skills: '使用技能：Angular、Html、Javascript、Css/Sass、Figma'
},]
const Experiences = () => (
    <>
        <div className="py-6 my-10">
            <Title title="工作經歷" subtitle="EXPERIENCE"></Title>
                <div className="px-10 mt-6 mb-10 h-full">
                    {
                        exData.map((ex,i)=>{
                            return (
                                <Experience company={ex.company} job={ex.job} startDate={ex.startDate} endDate={ex.endDate} describe={ex.describe} skills={ex.skills} key={`experience_${i}`}></Experience>
                            )
                        })
                    }
                </div>
                
        </div>
    </>
);
export {Experiences};