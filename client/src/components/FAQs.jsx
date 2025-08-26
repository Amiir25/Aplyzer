import React, { useState } from 'react'
import Title from './Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown, faArrowCircleUp, faArrowDown, faArrowUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faqs } from '../assets/assets';

const FAQs = () => {

    const [openFaqId, setOpenFaqId] = useState(null);

    return (
        <>
        <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        
            <Title
            title="Got Questions? We've Got Answers."
            subtitle="Everything you need to know about using Aplyzer to upgrade your job search." />

            {/* FAQS */}
            <div className='overflow-hidden w-[80vw] mx-auto'>
                {
                    faqs.slice(0, 5).map(faq => {
                        
                        let isOpen = openFaqId === faq.id;

                        return (
                            <div key={ faq.id } className='my-4'>
                                <button 
                                onClick={ () => setOpenFaqId(isOpen ? null : faq.id) }
                                className='md:text-xl font-medium border border-gray-500 px-3 py-4 rounded-2xl w-full text-left'>
                                    { faq.question }
                                    <FontAwesomeIcon icon={ faChevronDown }
                                    className={`float-right text-sm transition-transform duration-200
                                    ${ isOpen ? 'rotate-180' : 'rotate-0' } `} />
                                </button>
                                <div 
                                className={
                                    `overflow-hidden max-h-0 ${isOpen && 'max-h-40 px-2 py-4 border-b-2 border-[#02A9EB] rounded-3xl'} transition-all duration-200 shadow-lg`
                                    }>
                                    <p>{ faq.answer }</p>
                                </div>
                            </div>
                        )
                    })
                }

                <button className='w-44 py-2 mt-4 md:text-xl font-medium border border-blue-500 rounded-lg
                bg-gradient-to-r hover:from-blue-900 hover:to-blue-500 hover:text-white hover:border-white
                hover:opacity-90 cursor-pointer active:opacity-100'>
                    Check all FAQs
                </button>
            </div>

        </div>
        </>
    )
}

export default FAQs
