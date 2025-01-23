import Skills from "./skills";
export default function About() {
    return (
        <>
            <div className="py-6 mb-20 mt-10 sm:mt-0">
                <div className="grid grid-cols-12 w-full my-10 items-center gap-0">
                    <div className="col-span-4 xl:col-span-2 lg:col-span-3 md:col-span-3 sm:col-span-4">
                        <div className="img_box pl-10">
                            <img src='./assets/shihya.jpg' className="bg-cover bg-no-repeat bg-contain"></img>
                        </div>
                        
                    </div>
                    <div className="col-span-8 xl:col-span-10 lg:col-span-9 md:col-span-9 sm:col-span-8">
                        <div className="about px-10">
                            <h6 className="text-accent my-0">前端工程師</h6>
                            <h2 className="text-dark-100 my-0 mb-4 text-2xl md:text-4xl sm:text-3xl">Hi, 我是徐詩雅</h2>
                            <h6 className="text-dark-100 text-base md:text-lg">擅長於設計/規劃系統頁面和功能，再撰寫前端程式，並與後端工程師溝通合作串接api，勇於嘗試與學習，期望撰寫出創新、合乎使用的系統，持續突破自我，幫助公司帶來更大的效益。</h6>
                        </div>
                    </div>
                </div>
                <Skills></Skills>
            </div>
            
        </>
    )
}
// const About = () => (
//     <>
//         <div className="py-6 mb-20 mt-10 sm:mt-0">
//             <div className="grid grid-cols-12 w-full my-10 items-center gap-0">
//                 <div className="col-span-4 xl:col-span-2 lg:col-span-3 md:col-span-3 sm:col-span-4">
//                     <div className="img_box pl-10">
//                         <img src='./assets/shihya.jpg' className="bg-cover bg-no-repeat bg-contain"></img>
//                     </div>
                    
//                 </div>
//                 <div className="col-span-8 xl:col-span-10 lg:col-span-9 md:col-span-9 sm:col-span-8">
//                     <div className="about px-10">
//                         <h6 className="text-accent my-0">前端工程師</h6>
//                         <h2 className="text-dark-100 my-0 mb-4 text-2xl md:text-4xl sm:text-3xl">Hi, 我是徐詩雅</h2>
//                         <h6 className="text-dark-100 text-base md:text-lg">擅長於設計/規劃系統頁面和功能，再撰寫前端程式，並與後端工程師溝通合作串接api，勇於嘗試與學習，期望撰寫出創新、合乎使用的系統，持續突破自我，幫助公司帶來更大的效益。</h6>
//                     </div>
//                 </div>
//             </div>
//             <Skills></Skills>
//         </div>
        
//     </>
// );
// export { About };