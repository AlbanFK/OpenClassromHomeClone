import React from 'react'
import { BiLinkExternal } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

function Footer() {
  return (
    <div className='w-full bg-white min-h-[400px]'>
        <div className='sm:flex w-11/12 middle_md:w-8/12 lg:w-11/12 mx-auto pt-6 pb-10'>
            <div className='w-1/2 lg:flex'>
                <div className='w-full lg:w-1/2'>
                    <p className='font-medium mt-4 lg:mt-0 mb-4'>OpenClassrooms</p>
                    <p className='mb-4'>Qui sommes-nous ?</p>
                    <p className='mb-4'>Financements</p>
                    <p className='mb-4'>Experience de formation</p>
                    <p className='mb-4'>Forum</p>
                    <p className='mb-4 flex items-center'>Blog <BiLinkExternal className='ml-2'/> </p>
                    <p className='mb-4 flex items-center'>Presse <BiLinkExternal className='ml-2'/> </p>
                </div>
                <div className='w-full lg:w-1/2'>
                    <p className='font-medium mb-4 mt-4 lg:mt-0'>Opportunités</p>
                    <p className='mb-4 flex items-center'>Nous rejoindre <BiLinkExternal className='ml-2'/> </p>
                    <p className='mb-4 flex items-center'>Devenir mentor <BiLinkExternal className='ml-2'/> </p>
                    <p className='mb-4 flex items-center'>Devenir coach carrière <BiLinkExternal className='ml-2'/> </p>
                    <p className='font-medium mb-4 mt-4 lg:mt-0'>Aide</p>
                    <p className='font-medium mb-4 flex '>
                        <span className=' mr-4 py-3'>
                            <HiMail className='text-3xl'/>
                        </span>
                        <span className='pl-4 py-3 border-solid border-l border-b-[#dad9dc]'>FAQ</span>
                    </p>
                </div>
            </div>
            <div className='w-1/2 flex flex-col-reverse lg:flex-row fle'>
                <div className='w-full lg:w-1/2'>
                    <p className='font-medium mb-4 mt-4 lg:mt-0'>Pour les entreprises</p>
                    <p className='mb-4'>Formation, reconversion et alternances</p>
                    <p className='font-medium mb-4 mt-4 lg:mt-0'>En plus</p>
                    <p className='mb-4 flex items-center'>Boutique <BiLinkExternal className='ml-2'/> </p>
                    <p className='mb-4'>Mentions légales</p>
                    <p className='mb-4'>Conditions générales d'utilisation</p>
                    <p className='mb-4'>Politique de protection des données personnelles</p>
                    <p className='mb-4'>Cookies</p>
                    <p className='mb-4'>Accessibilité</p>


                </div>
                <div className='w-full lg:w-1/2 '>
                    <div className='flex justify-evenly'>
                        <div className='w-10 h-10 py-2 px-2.5 flex items-center justify-center text-xl border border-solid border-black rounded-full'>
                            <FaFacebookF/>
                        </div>
                        <div className='w-10 h-10 py-2 px-2.5 flex items-center justify-center text-xl border border-solid border-black rounded-full'>
                            <FaTwitter/>
                        </div>
                        <div className='w-10 h-10 py-2 px-2.5 flex items-center justify-center text-xl border border-solid border-black rounded-full'>
                            <FaLinkedinIn/>
                        </div>
                        <div className='w-10 h-10 py-2 px-2.5 flex items-center justify-center text-xl border border-solid border-black rounded-full'>
                            <ImInstagram/>
                        </div>
                        <div className='w-10 h-10 py-2 px-2.5 flex items-center justify-center text-xl border border-solid border-black rounded-full'>
                            <FaYoutube/>
                        </div>
                    </div>
                    <img className='mt-12 w-3/5 h-auto' src="https://static.oc-static.com/email/template_mail/download_on_appStore_fr.png" alt="" />
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Footer
