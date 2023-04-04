import React from 'react'
import {useState} from 'react'

import SavoirTitle from './SavoirTitle'
import SavoirCard from './SavoirCard'

function Savoir() {
    const [items, setItems] = useState([
        {
            image: "https://openclassrooms.com/modules/sdzv4-main/latest/images/online_study-011feaaa33df196e1ae0.svg",
            title: "Apprenez où que vous soyez",
            text: "Accédez à votre formation 100% en ligne au bureau, à la maison, en ville, à la montagne... Partout !"
        },
        {
            image: "https://openclassrooms.com/modules/sdzv4-main/latest/images/mentoring-d3132f53ba0a521499a9.svg",
            title: "Un mentor pour vous accompagner",
            text: "Bénéficiez chaque semaine des conseils d'un expert du métier qui vous aide à progresser tout au long de votre formation."
        },
        {
            image: "https://openclassrooms.com/modules/sdzv4-main/latest/images/job_ready-7cd674ffd711044da492.svg",
            title: "Travaillez sur des projets professionnalisants",
            text: "Réalisez des projets concrets, issus de scénarios métiers, directement applicables en entreprise."
        }
    ])
  return (
        <div className='w-11/12 middle_md:w-8/12 lg:w-11/12 mx-auto pt-16'>
            <SavoirTitle/>
            <div className='md:flex mt-12 w-full gap-6'>
                {items.map((item) => {
                    return(
                    <SavoirCard key={item.title} title={item.title} image={item.image} text={item.text}/>
                    )
                })}
            </div>
        </div>
  )
}

export default Savoir
