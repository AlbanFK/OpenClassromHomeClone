import React from 'react'
import Button from '../Buttons/Button'

function HeroDesc() {
  return (
    <div className='pt-20 pb-16 w-full lg:w-7/12 xl:w-6/12'>
        <h1 className='text-[2.5rem] font-bold mb-4 leading-[50px]'>
            Des compétences d'aujourd’hui qui ont de l'avenir
        </h1>
        <p className='text-base font-medium leading-[26px]'>
            Faites un grand pas vers votre nouvelle carrière en décrochant une certification reconnue. 
            Notre différence ? Une école 100% en ligne et un modèle pédagogique unique qui seront 
            les clés de votre réussite.
        </p>
        <div className=' sm:flex gap-3 mt-8'>
            <Button text="Démarrer ma candidature"/>
            <Button text="Découvrir les formations" outline={true} customClass="mt-3 sm:mt-0"/>
        </div>
    </div>

  )
}

export default HeroDesc
