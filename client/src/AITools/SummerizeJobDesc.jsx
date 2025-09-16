import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SummerizeJobDesc = () => {

    const [desc, setDesc] = useState();
    const [summary, setSummary] = useState();
    const [popup, setPopup] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    // Summarize
    const summarize = async () => {
        if (!desc) {
            setPopup('Job description not provided!');
            setShowPopup(true);
            setTimeout(() => { setShowPopup(false) }, 3000);
            return;
        }

        setPopup('Job description summarized successfully!');
        setShowPopup(true);
        setTimeout(() => { setShowPopup(false) }, 3000);

        try {
            const res = await axios.post('http://localhost:3000/ai-tools/summarize-job-description', {
                description: desc
            });
            // setSummary(res.data.summary);
            console.log(res.data.summary);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
        {/* Logo */}
        <button className='px-6 md:px-12 lg:px-24 xl:px-32 py-2'>
            <Link>
                <img src="/aplyzer.png" alt="Logo Image"
                className="w-80"/>
            </Link>
        </button>

        <div className='px-6 md:px-12 lg:px-24 xl:px-32 my-20'>
            <h1 className='text-2xl md:text-4xl font-bold mb-20'>AI Job Description Summarizer</h1>
            
            <div className='flex flex-col gap-8 md:flex-row'>
                {/* Text area */}
                <div className='flex-1 '>
                    <h2 className='text-lg md:text-xl mb-4 font-medium text-gray-700'>Job Description</h2>
                    <textarea
                    rows='10'
                    placeholder='Paste job descriptions here...'
                    value={desc}
                    onChange={ (e) => setDesc(e.target.value) }
                    className='border border-gray-400 rounded w-full p-1 mb-4' />

                    <button
                    onClick={summarize}
                    className='block border border-blue-500 py-1 px-2 rounded bg-gradient-to-r cursor-pointer
                    hover:from-blue-900 hover:to-blue-500 hover:text-white hover:border-white
                    hover:opacity-90 active:opacity-100'>
                        Summarize
                    </button>
                </div>

                {/* Summary */}
                <div className='flex-2'>
                    <h2 className='text-lg md:text-xl mb-4 font-medium text-gray-700'>Summary</h2>
                    <div className='border border-gray-400 rounded p-1 whitespace-pre-wrap'>
                        {/* {
                            summary ?
                            <pre>{ summary }</pre>
                            :
                            <p>
                                Your summarized job description will appear here.
                            </p>
                        } */}
                    </div>
                </div>
            </div>

            {/* Popup message */}
            <p className={`
            ${ showPopup ?
                'fixed top-10 left-1/2 -translate-x-1/2 w-fit py-2 px-4 mx-auto text-white md:text-xl font-medium rounded'
                :
                'hidden' }
            ${ popup.includes('not') ? 'bg-red-600' : 'bg-green-600' }`}>
                { popup }
            </p>
        </div>
        </>
    )
}

export default SummerizeJobDesc