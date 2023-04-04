import React from 'react'
import StorieTitle from './StorieTitle'

function StorieBody() {
  return (
    <div className='w-full lg:w-7/12 xl:w-6/12 py-8'>
        <div className='hidden lg:block mb-6'>
            <StorieTitle/>
        </div>
        <div className='min-h-[200px]'>
            <h5 className='text-xl font-bold'>CHLOE</h5>
            <h6 className='font-bold text-base mb-2'>Conseiller emploi et évolution professionnelle</h6>
            <span>
                «Ma formation m’a beaucoup plu parce qu’elle était très adaptée à mes contraintes de temps 
                et d’organisation ! Tout est fait à distance, mais je me sentais quand même très accompagnée, 
                parce que toutes les semaines, j’avais rendez-vous avec mon mentor. Chez OpenClassrooms, 
                on est suivi tout le temps.»
            </span>
        </div>
    </div>
  )
}

export default StorieBody
