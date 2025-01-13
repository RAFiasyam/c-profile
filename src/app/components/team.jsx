import React from 'react';
import { promises as fs } from 'fs';

export default async function team() {
    const response = await fs.readFile(process.cwd() + '/public/content/contentData.json', 'utf8');
    const data = JSON.parse(response);

    return (
        <div className='flex flex-col justify-center items-center py-4 px-4'>
            <h1 className='font-poppins font-semibold text-3xl mb-6'>Our Teams</h1>
            <div className='flex flex-wrap gap-6 justify-center'>
                {data.teams.map((team) => (
                    <div
                        key={team.id}
                        className='p-4 flex flex-col items-center border-2 border-white/25 gap-3 hover:border-white transition-all duration-300 ease-in-out w-full sm:w-[20em] md:w-[18em] lg:w-[20em]'
                    >
                        <img
                            src={team.photo}
                            alt=""
                            className='w-24 h-24 rounded-full object-cover'
                        />
                        <div className='flex flex-col items-center'>
                            <h1 className='font-poppins text-center font-semibold text-base'>{team.name}</h1>
                            <p className='font-raleway italic'>{team.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}