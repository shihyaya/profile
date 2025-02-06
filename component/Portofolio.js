import styles from '../styles/portofolio.module.scss';
import { useEffect,useRef } from 'react';
export default function Portofolio({name,subtitle,job,skill,describe,response,company,id}) {
    const skills = skill;
    const jobs = job;
    // 進入動畫
    const cardRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (cardRef.current) {
                const cardTop = cardRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (cardTop < windowHeight) {
                cardRef.current.style.opacity = '1';
                cardRef.current.style.transform = 'translateY(0)';
                cardRef.current.style.transition =
                    'opacity 1s ease-out, transform 1s ease-out';
                } else {
                cardRef.current.style.opacity = '0';
                cardRef.current.style.transform = 'translateY(100px)';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div ref={cardRef} className={`${styles.card} p-1 shadow-md h-full w-full`}>
                <div className='flex flex-col p-4 items-center  w-full h-full md:flex-row md:items-stretch'>
                    <div className='w-full h-[300px] md:h-full relative'>
                        <div className={`${styles.portofolio} h-[300px] w-full bg-contain md:bg-contain md:h-full sm:bg-auto`} style={{'backgroundImage':`url('./assets/portofolio/${id}.png')`}}></div>
                        <div className={`${styles.company} px-2`}><p className='text-white text-center'>{company}</p></div>
                    </div>
                    <div className='w-full h-full'>
                        <div className={`${styles.content} px-4 py-3 bg-primary-25  h-full`}>
                            <div className="title ">
                                <p className='text-accent my-0 py-0 font-black'>{subtitle}</p>
                                <h6 className='text-dark-100 my-0 py-0 font-black'>{name}</h6>
                                {
                                    skills.map((s,sid)=>{
                                        return (
                                            <div key={`porto_skill_${sid}`} className='text-dark-100 inline-block px-1'><p> #{s} </p></div>
                                        )
                                    })
                                }
                            </div>
                            <div className="job my-4">
                                {
                                    jobs.map((j,jid)=>{
                                        return (
                                            <div key={`porto_job_${jid}`} className='inline-block'>
                                                <p className={`${styles.chip} bg-dark-10 text-dark-100 px-3 py-1 my-2 mx-1`}>{j}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="detail">
                                <span className='text-dark-100'>{describe}</span>
                                <br/><br/>
                                <span className='text-dark-100' dangerouslySetInnerHTML={{ __html: response }}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}