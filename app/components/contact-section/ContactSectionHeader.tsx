"use client"
import { EmailIcon } from './EmailIcon';
import { LinkedInIcon } from './LinkedInIcon';

export const ContactSectionHeader = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className='my-8'>
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text dark:text-white text-center font-sans font-bold">
          Contact Me
        </h1>
      </div>
      <div className='my-8'>
        <p className="dark:text-neutral-200 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          {"Let's connect and explore how we can collaborate together!"}
        </p>
      </div>
      <div className='my-8'>
        <p className="dark:text-neutral-200 max-w-lg mx-auto my-2 flex justify-center relative z-10">
          <LinkedInIcon />
          |
          <EmailIcon />
        </p>
      </div>
    </div>
  )
}
