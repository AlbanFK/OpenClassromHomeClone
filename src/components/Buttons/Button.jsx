import React from 'react'
import styles from './style.module.css'

function Button({outline, text, customClass, handleClick}) {
  return (
    <button className={`border-solid border border-primary py-2 px-4 rounded font-bold block ${customClass}
        ${styles.animation}  ${outline ? `text-primary hover:bg-[rgba(116,81,235,0.2)] 
        active:bg-[rgba(116,81,235,0.4)]` : `text-white bg-primary active:bg-[hsl(254,79%,75%)] 
        hover:drop-shadow-md`}`}
        onClick={handleClick}
    >
        {text}
    </button>
  )
}

export default Button
