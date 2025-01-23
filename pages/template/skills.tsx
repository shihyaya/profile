import Title from '../../component/Title';
import Skill from '../../component/Skill';
const skillData = [{
    skill: 'Angular',
    icon: 'A',
    color: '#DD0031',
    num: 75,
},{
    skill: 'Vue2 + Nuxt2',
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