import Title from '../../component/Title';
import Skill from '../../component/Skill';
const skillData = [{
    skill: 'Angular',
    icon: 'A',
    color: '#DD0031',
    num: 70,
},{
    skill: 'Vue',
    icon: 'V',
    color: '#00DC82',
    num: 65,
},{
    skill: 'React',
    icon: 'R',
    color: '#087EA4',
    num: 30,
},{
    skill: 'Javascript',
    icon: 'J',
    color: '#F7D900',
    num: 70,
},{
    skill: 'Html',
    icon: 'H',
    color: '#DE4B26',
    num: 80,
},{
    skill: 'Css/ Scss/ Sass',
    icon: 'C',
    color: '#653196',
    num: 75,
},{
    skill: 'Figma',
    icon: 'F',
    color: '#000000',
    num: 70,
},{
    skill: 'Illustrator',
    icon: 'AI',
    color: '#F79700',
    num: 80,
},]
export default function Skills() {
    return (
        <>
            <Title title="工作技能" subtitle="SKILLS"></Title>
            <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 px-10 items-center'>
                {
                    skillData.map((skill,i)=>{
                        return (
                            <Skill skill={skill.skill} icon={skill.icon} color={skill.color} num={skill.num} key={`skill_${i}`}></Skill>
                        )
                    })
                }
            </div>
            <div className='px-10 py-4'>
                <h6 className='text-accent font-bold'>前端技術：</h6><span className='text-dark-100'>可獨立完成系統網站規劃、前端程式撰寫，RWD響應設計，及串接後端API。</span>
                <br />
                <h6 className='text-accent font-bold'>後端技術：</h6><span className='text-dark-100'>1. 略懂資料庫CRUD運作與後端API，曾使用GCP架設網站，運用Vue+MySQL+Express API完成小型包含CRUD的測試網站。<br />2. 目前正在學習ASP.NET Core MVC、ASP.NET Core Web API 、LINQ。</span>
            </div>
        </>
    )
}
// const Skills = () => (
//     <>
//         <Title title="工作技能" subtitle="SKILLS"></Title>
//         <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 px-10 items-center'>
//             {
//                 skillData.map((skill,i)=>{
//                     return (
//                         <Skill skill={skill.skill} icon={skill.icon} color={skill.color} num={skill.num} key={`skill_${i}`}></Skill>
//                     )
//                 })
//             }
//         </div>
//     </>
// );
// export {Skills};