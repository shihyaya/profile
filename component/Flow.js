import styles from '../styles/flow.module.scss';
import { useEffect,useRef } from 'react';
import Image from "next/image";
export default function Flow({step,title}) {
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
        <div ref={cardRef} className='relative'>
            <div className={`${styles.flows_box} border-accent border-2 border-solid flex flex-col items-center justify-center py-4 px-3 h-full xl:py-8 lg:py-6 md:py-4`}>
                <Image src={`./assets/flow/${step}.png`}
                    className="bg-no-repeat bg-contain"
                    alt={title}
                    width={120}
                    height={120}
                    priority={true}>
                </Image>
                <span className='text-dark-100 my-4 font-black text-center'>{title}</span>
            </div>
            <div className={`${styles.step}`}><p className='position-center p-0 m-0'>{step}</p></div>
        </div>
    )
}