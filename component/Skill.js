import styles from '../styles/skill.module.scss';
import { useState, useEffect } from 'react';
export default function Skill({skill,icon,color,num}) {
    const [isVisible, setIsVisible] = useState(false);
    const [percent,setPercent] = useState(0);
    const [percentText,setPercentText] = useState(0);
    useEffect(() => {
        setIsVisible(true); // 当组件挂载后，触发动画效果
        // percentage bar animation
        setTimeout(()=>{
            setPercent(num);
        },500)
        // percentage text animation
        const timeInterval = setInterval(()=>{
            setPercentText((pre)=>{
                if(pre !== num) {
                    return pre+1;
                }else {
                    clearInterval(timeInterval);// 要清除
                    return num;
                }
                
            });
        },30)
    }, []);
    return (
        <>
            <div className={`flex items-center w-full justify-center p-1 card-animation ${
                isVisible ? 'card-animation-enter' : ''}`}>
                <div className={`${styles.img_box} relative m-1 hidden sm:block`} style={{'borderColor':color}}>
                    <span className='position-center pt-0 mt-0 font-black' style={{'color':color}}>{icon}</span>
                </div>
                <div className="skill flex flex-col items-center justify-around px-2 w-full my-4">
                    <div className="top flex items-center w-full my-1 px-1">
                        <span className='w-full text-dark-100 font-black text-sm md:text-base'>{skill}</span>
                        <span className='text-accent font-black'>{percentText}%</span>
                    </div>
                    <div className={`${styles.progress} w-full bg-dark-10 relative`}>
                        <div className={`${styles.percentage} position top-0 left-0 bg-accent`} style={{'width':percent+'%'}}></div>
                    </div>
                </div>
            </div>
        </>
    )
}