import Title from '../../component/Title';
import Flow from '../../component/Flow';
const flowData = ['需求確立','規劃設計','前端程式/ api串接','使用者回饋','維護調整']
export default function Flows() {
    return (
        <>
            <div className="py-6 my-10">
                <Title title="工作流程" subtitle="FLOWS"></Title>
                <div className='grid grid-cols-2 px-10 pt-6 items-start justify-between gap-x-1 gap-y-2 xl:gap-x-20 lg:gap-x-10 md:gap-3 sm:gap-x-2 sm:grid-cols-5'>
                    {
                        flowData.map((flow,i)=>{
                            return (
                                <Flow step={i+1} title={flow} key={`flow_${i}`}></Flow>
                            )
                        })
                    }
                </div>
                
                
            </div>
            
        </>
    )
}
// const Flows = () => (
//     <>
//         <div className="py-6 my-10">
//             <Title title="工作流程" subtitle="FLOWS"></Title>
//             <div className='grid grid-cols-2 px-10 pt-6 items-start justify-between gap-x-1 gap-y-2 xl:gap-x-20 lg:gap-x-6 md:gap-4 sm:gap-x-2 sm:grid-cols-5'>
//                 {
//                     flowData.map((flow,i)=>{
//                         return (
//                             <Flow step={i+1} title={flow} key={`flow_${i}`}></Flow>
//                         )
//                     })
//                 }
//             </div>
            
            
//         </div>
        
//     </>
// );
// export {Flows};