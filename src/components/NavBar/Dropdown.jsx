import React from 'react'
import {useState} from 'react'

import DropdownCard from './DropdownCard'
import { IoSchool } from "react-icons/io5";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import styles from './dropdown.module.css'



function Dropdown({hide, close}) {
    const [items, setItems] = useState([
        {
            icon: <IoSchool className='text-primary'/>,
            title: "Formations diplomantes",
            text: "Apprenez un métier d’avenir grâce à des projets concrets et un mentor individuel."
        },
        {
            icon: <BsFillFileEarmarkArrowDownFill className='text-primary'/>,
            title: "Cours en libre accèss",
            text: "Développez vos connaissances avec plus de 500 cours régulièrement mis à jour."
        }
    ])
  return (
    <div className={`${hide && `hidden`} ${styles.dropdownHeight} bg-[rgba(0,0,0,0.32)] flex flex-col fixed top-[64px] w-screen z-30`}>
        <div className={`bg-white w-full h-1/2 flex pt-8 pb-14 ${styles.scaleinvertop} ${hide && styles.scaleoutvertop}`}>
            <div className='w-11/12 mx-auto flex'>
                <div>
                    <p className='text-2xl font-bold'>Nos formations</p>
                    <p className='text-xs font-normal mt-1 text-mygray'>100% en ligne et à votre rythme.</p>
                    <p className='text-sm font-medium cursor-pointer underline text-primary mt-2'>Comparez nos formations</p>
                </div>
                {items.map((item) => {
                    return(
                    <DropdownCard key={item.title} title={item.title} icon={item.icon} text={item.text}/>
                    )
                })}
            </div>
        </div>
        <div className='grow' onClick={() => close(true)}></div>
    </div>
  )
}

export default Dropdown
