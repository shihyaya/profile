import styles from '../styles/experience.module.scss';
import { useEffect, useRef } from 'react';
export default function Experience({company,job,startDate,endDate,describe,skills}) {
    // 進入動畫
    const cardRef = useRef(null);
    // console.log(cardRef);
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
            <div ref={cardRef} className="card flex items-stretch h-full pt-4 relative">
                <div className="left h-full absolute">
                    <div className={`${styles.line} bg-accent position-center top-4`}></div>
                    <div className={`${styles.circle} bg-white border-accent border-4 border-solid h-full`}></div>
                </div>
                <div className="right px-6">
                    <p className="text-dark-25 py-0 my-0 font-normal">{startDate} ~ {endDate}</p>
                    <h6 className='text-dark-100 font-black py-0 my-0'>{company}</h6>
                    <h5 className='text-accent font-black  py-0 my-0 mb-2'>{job}</h5>
                    <span className='text-dark-100' dangerouslySetInnerHTML={{ __html: describe }}></span>
                    <br/><span className='text-dark-100 mt-2'>{skills}</span>
                </div>
            </div>
        </>
    )
};