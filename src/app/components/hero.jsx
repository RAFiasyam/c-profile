import React from 'react';
import { promises as fs } from 'fs';

export default async function hero() {
    const response = await fs.readFile(process.cwd() + '/public/content/contentData.json', 'utf8');
    const data = JSON.parse(response);

    return (
        <div
            className='bg-cover bg-center h-screen'
            style={{ backgroundImage: `url(${data.company.imagePath})` }}
        >
            <div className="flex flex-col items-center justify-center text-center h-full bg-black bg-opacity-50 px-4 sm:px-6 md:px-8 gap-6">
                <h1 className="font-poppins text-white font-bold text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                    {data.company.name}
                </h1>
                <p className="font-raleway text-white text-sm sm:text-base md:text-lg lg:text-1xl w-full sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%]">
                    {data.company.description}
                </p>
            </div>
        </div>
    );
}