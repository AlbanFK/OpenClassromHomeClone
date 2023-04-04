import React from 'react'
import Button from '../Buttons/Button'


function FormLogin() {
    const handleSubmit = e => {
        e.preventDefault()
    }
  return (
    <div className='w-full xl:w-1/2'>
        <div className='border-solid border-b border-b-[#dad9dc]  h-[55px] bg-white lg:h-[64px] flex items-center justify-center '>
            <img src="./Oc_logo.png" alt="logo" className='w-[150px] xl:w-[200px] cursor-pointer'/>
        </div>
        <div className='py-8 px-4 max-w-[400px] mx-auto'>
            <div className='mb-4 text-center'>
                <h1 className='text-2xl font-bold'>Bienvenue</h1>
                <h2 className='font-medium'>Connexion ou création de compte</h2>
            </div>
            <form action="">
                <div className='w-full'>
                    <label className='text-sm ' htmlFor="email">E-mail</label>
                    <input className='block rounded my-2 w-full py-3 px-2 border border-solid border-slate-300 focus:outline-2 focus:outline-primary ' id='email' type="text"/>

                    <label className='text-sm ' htmlFor="password">Mot de passe</label>
                    <input className='block rounded mt-2 w-full py-3 px-2 border border-solid border-slate-300 focus:outline-2 focus:outline-primary ' id='password' type="password"/>

                    <Button text='Connexion' customClass='mt-4 w-full' handleClick={handleSubmit}/>
                </div>
                
            </form>
        </div>
    </div>

  )
}

export default FormLogin
