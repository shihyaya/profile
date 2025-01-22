import { Skills } from "./skills";
const About = () => (
    <>
        <div className="py-6 mb-20 mt-10 sm:mt-0">
            <div className="grid grid-cols-12 w-full my-10 items-center">
                <div className="col-span-4 lg:col-span-2 md:col-span-2 sm:col-span-4">
                    <div className="img_box pl-10">
                        <img src='./assets/shihya.jpg' className="bg-cover bg-no-repeat h-[120px] lg:h-[200px] md:h-[160px] sm:h-[140px]"></img>
                    </div>
                    
                </div>
                <div className="col-span-8 lg:col-span-10 md:col-span-10 sm:col-span-8">
                    <div className="about px-10">
                        <h6 className="text-accent my-0">前端工程師</h6>
                        <h2 className="text-dark-100 my-0 mb-4">Hi, 我是徐詩雅</h2>
                        <h6 className="text-dark-100">擅長於設計/規劃系統頁面和功能，再撰寫前端程式，並與後端工程師溝通合作串接api，勇於嘗試與學習，期望撰寫出創新、合乎使用的系統，持續突破自我，幫助公司帶來更大的效益。</h6>
                    </div>
                </div>
            </div>
            <Skills></Skills>
        </div>
        
    </>
);
export { About };