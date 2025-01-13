import React from 'react';
import { promises as fs } from 'fs';

export default async function testimonials() {
    const response = await fs.readFile(process.cwd() + '/public/content/contentData.json', 'utf8');
    const data = JSON.parse(response);

    return (
        <div className='flex flex-col justify-center items-center py-4 px-4'>
            <h1 className='font-poppins font-semibold text-3xl mb-6'>Testimonials</h1>
            <div className='flex flex-wrap gap-6 justify-center'>
                {data.testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className='flex flex-col w-full sm:w-[30em] lg:w-[35em] p-6 items-start justify-between border-2 border-white/25 gap-5 hover:border-white transition-all'
                    >
                        <p className='font-raleway'>{testimonial.feedback}</p>
                        <div className='flex flex-row gap-4'>
                            <h1 className='font-poppins text-base font-semibold'>{testimonial.name}</h1>
                            <p>|</p>
                            <h5 className=''>Rating: {testimonial.rating}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
    