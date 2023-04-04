import React from 'react'
import FormLogin from './FormLogin'
import BannerLogin from './BannerLogin'

function Login() {
  return (
    <div className='flex w-screen'>
      <FormLogin/>
      <BannerLogin/>
    </div>
  )
}

export default Login
