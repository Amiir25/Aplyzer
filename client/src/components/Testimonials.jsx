import React from 'react'
import Title from './Title'
import { happyClients } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  return (
    <>
    <div className='px-6 md:px-16 lg:px-24 xl:px-32'>

        <Title
        title="What People Are Saying"
        subtitle="Hear from early users who’ve boosted their job search with Aplyzer." />

        {/* Testimonials */}
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 mb-10">
            {
                happyClients.map((client) => (
                    <div key={client.id} className="flex-1 flex gap-6 items-center md:block bg-white p-6 rounded-xl shadow ">
                        <div>
                            <div className="flex-1 flex items-center gap-3">
                                <img className="w-12 h-12 rounded-full" src={client.image} alt={client.name} />
                                <div>
                                    <p className="font-playfair text-xl">{client.name}</p>
                                    <p className="text-gray-500 text-xs">{client.job}</p>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center gap-1 mt-4">
                                {
                                    Array(client.rating).fill('').map((_, i) => (
                                        <FontAwesomeIcon key={ i } icon={ faStar }
                                        className='text-amber-500' />
                                    ))
                                }
                            </div>
                        </div>

                        <p className="flex-1 text-sm md:text-md text-gray-500 max-w-90 mt-4">"{client.review}"</p>
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Testimonials;
