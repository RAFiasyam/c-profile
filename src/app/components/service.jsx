import React from 'react';
import { promises as fs } from 'fs';

export default async function services() {
    const response = await fs.readFile(process.cwd() + '/public/content/contentData.json', 'utf8');
    const data = JSON.parse(response);

    return (
        <div className='flex flex-col justify-center items-center py-4'>
            <h1 className='font-poppins font-semibold text-3xl'>Services</h1>
            <div className='flex flex-wrap gap-4 px-4 py-4 justify-center'>
                {data.services.map((service) => (
                    <div
                        key={service.id}
                        className='p-4 flex flex-col border-2 border-white/25 gap-5 hover:border-white transition-all duration-300 ease-in-out w-full sm:w-1/2 lg:w-1/3  xl:w-1/4'
                    >
                        <span className='text-3xl'>{service.icon}</span>
                        <h1 className='font-poppins text-lg font-medium'>{service.title}</h1>
                        <p className='font-raleway text-base opacity-40 w-full'>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
