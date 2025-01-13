import React from 'react';
import { promises as fs } from 'fs';


export default async function faq() {
    const response = await fs.readFile(process.cwd() + '/public/content/contentData.json', 'utf8');
    const data = JSON.parse(response);

    return (
        <div className='flex flex-col justify-center items-center px-4 py-4 font-poppins'>
            <h1 className='font-poppins font-semibold text-3xl mb-6'>Faqs</h1>
            <div className='flex flex-wrap py-4 gap-6 justify-center'>
                {data.faqs.map((faq) => (
                    <div key={faq.id} className='flex flex-col w-full sm:w-[30em] md:w-[40em] lg:w-[45em] p-6 items-start justify-between border-2 border-white/25 gap-5 hover:border-white transition-all'>
                        <h1 className='font-poppins text-lg font-semibold'>{faq.question}</h1>
                        <p className='font-raleway text-base italic'>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );  
}
