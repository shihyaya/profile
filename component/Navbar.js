import { useEffect, useState } from 'react';
import styles from '../styles/navbar.module.scss';
import Link from 'next/link';
export default function Navbar(){
    const [navbar,setNavbar] = useState(false);
    useEffect(()=>{
        if(window.scrollY>=80) {
            setNavbar(true);
        }else {
            setNavbar(false);
        }
        window.addEventListener('scroll',()=>{
            // console.log(window);
            if(window.scrollY>=80) {
                setNavbar(true);
            }else {
                setNavbar(false);
            }
        })
    },[])
    
    return(
        <>
            <nav className={`${navbar ? styles.active:''} navbar fixed w-full px-10 top-0 left-0`}>
                <div className="container flex justify-between items-center mx-auto flex-col sm:flex-row">
                    <div className="logo text-accent"><h3><Link href='/'>YA</Link></h3></div>
                    <ul className="flex gap-[24px] text-m">
                        <li className='text-dark-100 hover:text-accent'><Link href='/'>ABOUT</Link></li>
                        <li className='text-dark-100 hover:text-accent'><Link href='/#experience'>EXPERIENCE</Link></li>
                        <li className='text-dark-100 hover:text-accent'><Link href='/#portfolio'>PORTFOLIO</Link></li>
                    </ul>
                </div>
            </nav>  
        </>
    )
}