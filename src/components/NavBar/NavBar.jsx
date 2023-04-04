import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { BiSearchAlt2, BiMenu } from "react-icons/bi";
import Button from '../Buttons/Button';
import Dropdown from './Dropdown';
import SideMenu from './SideMenu';

function NavBar() {
    const [onHide, setOnHide] = useState(true)
    const [onHideMenu, setOnHideMenu] = useState(true)
    const navigate = useNavigate()

    const handleClick = () => {
        setOnHide(!onHide)
        console.log(onHide);
    }

  return (
    <>
        <div className='border-solid border-b border-b-[#dad9dc]  h-[55px] bg-white lg:h-[64px]'>
            <div className='w-11/12 middle_md:w-8/12 lg:w-11/12 gap-4 flex items-center justify-between h-full mx-auto'>
                    <BiMenu className='text-2xl lg:hidden' onClick={() => setOnHideMenu(!onHideMenu)}/>
                    <div className='py-2'>
                        <img src="https://github.com/AlbanFK/OpenClassromHomeClone/blob/main/public/OC_logo.png?raw=true" alt="logo" className='w-[150px] xl:w-[200px] cursor-pointer'/>
                    </div>
                    <nav className='grow flex items-center h-full justify-end lg:justify-between  '>
                        <div className='hidden lg:flex'>
                            <button className={`flex items-center px-4 xl:px-6 py-2 border-solid 
                                xl:border-r border-b-[#f6f5f6] hover:text-primary 
                                ${!onHide && `text-primary`}`}
                                onClick={handleClick}
                            >
                                Formations 
                                {onHide ? 
                                    <MdKeyboardArrowDown className='text-2xl ml-1'/> : 
                                    <MdKeyboardArrowUp className='text-2xl ml-1'/>
                                }
                                
                                
                            </button>
                            <button className='px-2 xl:px-6 py-2 hover:text-primary'>
                                Pour les entreprises
                            </button>
                        </div>
                        <button className='mr-3'>
                            <BiSearchAlt2 className='text-2xl lg:text-3xl justify-self-end hover:text-primary'/>
                        </button>
                    </nav>
                    <Button outline={true} text='Se connecter' customClass='hidden lg:block' handleClick={()=> navigate('/login')}/>
            </div>
        </div>
        <Dropdown hide={onHide} close={setOnHide}/>
        <SideMenu hideMenu={onHideMenu} close={setOnHideMenu}/>
    </>
    
  )
}

export default NavBar
