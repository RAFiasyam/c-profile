import React from 'react';
import { promises as fs } from 'fs';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

export default async function Footer() {
  const response = await fs.readFile(process.cwd() + '/public/content/contentData.json', 'utf8');
  const data = JSON.parse(response);

  const contact = data.company.contact;
  const socials = data.company.socials;

  return (
    <div className='container mx-auto flex flex-col py-4 md:px-4'>
      <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-8  px-4 md:px-0'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-lg font-poppins'>Follow us on</h3>
          <button className='opacity-100 hover:opacity-35'>
            <a
              href={socials.facebook}
              className='font-poppins text-base flex flex-row gap-2 hover:gap-4 transition-all duration-300 ease-in-out'
            >
              Facebook
              <ArrowUpRightIcon className='w-4' />
            </a>
          </button>
          <button className='opacity-100 hover:opacity-35'>
            <a
              href={socials.linkedin}
              className='font-poppins text-base flex flex-row gap-2 hover:gap-4 transition-all duration-300 ease-in-out'
            >
              Linkedin
              <ArrowUpRightIcon className='w-4' />
            </a>
          </button>
          <button className='opacity-100 hover:opacity-35'>
            <a
              href={socials.instagram}
              className='font-poppins text-base flex flex-row gap-2 hover:gap-4 transition-all duration-300 ease-in-out'
            >
              Instagram
              <ArrowUpRightIcon className='w-4' />
            </a>
          </button>
        </div>
        <div className='flex flex-col gap-4'>
          <div>
            <p className='text-base font-poppins'>Contact Email</p>
            <p className='text-sm opacity-35 font-raleway'>{contact.email}</p>
          </div>
          <div>
            <p className='text-base font-poppins'>Phone</p>
            <p className='text-sm opacity-35 font-raleway'>{contact.phone}</p>
          </div>
          <div>
            <p className='text-base font-poppins'>Address</p>
            <p className='text-sm opacity-35 font-raleway'>{contact.address}</p>
          </div>
        </div>
      </div>
      <p className='font-raleway text-xs text-center md:text-left mt-4'>
        © {data.company.founded} Global Vehicle Shipping. All rights reserved.
      </p>
    </div>
  );
}
