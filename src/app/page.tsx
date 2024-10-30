'use client'
import HrTag from '@/components/ui/HrTag'
import { doctors } from '@/lib/common'
import basicRoutes from '@/lib/routes'
import Button from '@/widgets/Button'
import AuthWrapper from '@/Wrappers/AuthWrapper'
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {

  const router = useRouter();

  return (
    <AuthWrapper>
      {/* Hero */}
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 h-[50vh] md:h-[70vh]">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">

          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              Connect with care.
              <span className="bg-clip-text bg-gradient-to-tl text-primary" > CAREPLUS</span>
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-neutral-400">Expanding Access, Enhancing Convenience, <br />and Improving Patient Outcomes in a Digital Era.</p>
          </div>

          <div className="mt-8 gap-3 flex justify-center">
            <Button
              title='Book Consultation'
              className='dark:text-white rounded-full pl-4'
              icon={<svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>}
              onClick={() => router.push(basicRoutes.consultation)}
            />
            <Button
              title='Explore platform'
              variant='link'
              className='dark:text-white rounded-full pl-4'
              onClick={() => router.push(basicRoutes.aboutUs)}
            />
          </div>
        </div>
      </div>

      {/* Doctor List */}

      <div className="container md:max-w-5xl px-10 mx-auto mb-10 ">
        <h1 className='text-2xl md:text-4xl mb-5 text-center font-bold uppercase'>Our <span className='text-primary'>Team</span> of doctors</h1>
        <HrTag />
        <ul role="list" className="divide-y divide-gray-100 grid grid-cols-1 md:grid-cols-3 !my-3 gap-5 place-items-center">
          {doctors.map((person) => (
            <li key={person.position} className="flex w-full justify-between gap-x-6 py-5 p-2 shadow-md shadow-gray-400 rounded-xl">
              <div className="flex min-w-0 gap-x-4">
                <img alt="" src={person.imageUrl} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm/6 font-semibold dark:text-gray-50">{person.name}</p>
                  <p className="mt-1 truncate text-xs/5 dark:text-gray-400">{person.position}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </AuthWrapper >
  )
}

export default Home
