import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import Collapse from '../Collapse/Collapse';




function SideMenu({hideMenu, close}) {
    const navigate = useNavigate()
    const [onHide, setOnHide] = useState(false)
    const [navlinks, setnavlinks] = useState(["Formations diplomantes", "Cours en libre accès", "Comparez nos formations"])
    

  return (
    <div className={`${hideMenu && `hidden`} h-screen bg-[rgba(0,0,0,0.32)] fixed top-0 w-screen z-30 flex`}>
      <div className='bg-white h-full w-2/3 sm:w-1/2 '>
        <div className='border-solid border-b w-full border-b-[#dad9dc]  h-[55px] bg-white lg:h-[64px] flex items-center  '>
            <img src="./Oc_logo.png" alt="logo" className='mx-4 w-[150px] xl:w-[200px] cursor-pointer'/>
        </div>
        <Collapse title='Formations' items={navlinks}/>
        
        <div className='w-full my-2 py-2 px-4 pb-4 border-solid border-b border-b-[#dad9dc] active:text-primary'>
            <span>Pour les entreprises</span>
        </div>
        <div className='w-full my-2 mt-4 py-2 px-4 active:text-primary' onClick={() => navigate('/login')}>
            <span>Se connecter</span>
        </div>
      </div>
       
      <div className='grow' onClick={() => close(true)}></div>
    </div>
  )
}

export default SideMenu
