import React from 'react'
import Button from '../Buttons/Button'


function CandidatureDesc() {
  return (
    <div className='pt-20 pb-16 w-full lg:w-7/12 xl:w-6/12'>
        <h2 className='text-[2rem] font-bold mb-4 leading-[50px]'>
            Prêt à donner un nouvel élan à votre carrière ?
        </h2>
        <p className='text-base font-medium leading-[26px]'>
            Mettez à jour vos connaissances, développez de nouvelles compétences, obtenez une certification 
            reconnue… Quel que soit votre projet de carrière, nous sommes là pour vous conseiller et vous 
            accompagner. Apprenez un métier qui a de l'avenir avec la référence de l'éducation en ligne.
        </p>
        <div className='flex gap-3 mt-8'>
            <Button text="Démarrer ma candidature"/>
        </div>
    </div>
  )
}

export default CandidatureDesc
