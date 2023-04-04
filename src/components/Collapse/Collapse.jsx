import React from 'react'
import {useState} from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function Collapse({title, items}) {
    const [onHide, setOnHide] = useState(false)
  return (
    <div className='w-full my-2  px-4 pb-4 border-solid border-b border-b-[#dad9dc]  '>
        <span className='w-full flex items-center font-medium py-2 active:bg-[rgba(39,26,56,0.16)]'
            onClick={()=>setOnHide(!onHide)}
        >
            {title} 
            {onHide ? 
                <MdKeyboardArrowDown className='text-2xl ml-2'/> : 
                <MdKeyboardArrowUp className='text-2xl ml-2'/>
            }
        </span>
        {!onHide && 
            <>
                {items.map((item) => {
                    return(
                        <p className='py-4 active:text-primary'>{item}</p>
                    )
                })}
            </>
        }
    </div>
  )
}

export default Collapse
