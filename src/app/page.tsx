'use client'
import HrTag from '@/components/ui/HrTag'
import { doctors } from '@/lib/common'
import basicRoutes from '@/lib/routes'
import Button from '@/widgets/Button'
import AuthWrapper from '@/Wrappers/AuthWrapper'
import Image from 'next/image'
import Link from 'next/link'
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

      {/* Card Component */}

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto !mt-20">
        <h1 className='text-2xl md:text-4xl mb-5 text-center font-bold uppercase'>Explore Our Latest Insights on Telehealth</h1>
        <HrTag />
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10 mt-10">
          <Link className="group block rounded-xl overflow-hidden focus:outline-none" href="/">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <Image
                  className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out absolute top-0 left-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1554168153-e74124abd88f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                  alt="Telehealth Blog Image"
                  fill
                />
              </div>
              <div className="grow">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                  Benefits of Virtual Consultations
                </h3>
                <p className="mt-3 text-gray-600 dark:text-neutral-400">
                  Discover how virtual consultations make healthcare accessible from the comfort of your home.
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                  Read more
                  <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </p>
              </div>
            </div>
          </Link>

          <Link className="group block rounded-xl overflow-hidden focus:outline-none" href="/">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <Image
                  className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out absolute top-0 left-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                  alt="Telehealth Blog Image"
                  fill
                />
              </div>
              <div className="grow">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                  How Telemedicine Enhances Mental Health Support
                </h3>
                <p className="mt-3 text-gray-600 dark:text-neutral-400">
                  Explore how telehealth is revolutionizing mental health treatment with convenient, confidential sessions.
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                  Read more
                  <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </p>
              </div>
            </div>
          </Link>

          <Link className="group block rounded-xl overflow-hidden focus:outline-none" href="/">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <Image
                  className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out absolute top-0 left-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                  alt="Telehealth Blog Image"
                  fill
                />
              </div>
              <div className="grow">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                  The Future of Remote Healthcare
                </h3>
                <p className="mt-3 text-gray-600 dark:text-neutral-400">
                  Discover how remote healthcare is transforming the future of medicine and accessibility for patients.
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                  Read more
                  <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </p>
              </div>
            </div>
          </Link>

          <Link className="group block rounded-xl overflow-hidden focus:outline-none" href="/">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <Image
                  className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out absolute top-0 left-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                  alt="Telehealth Blog Image"
                  fill
                />
              </div>
              <div className="grow">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                  Top Tips for Using Telehealth Effectively
                </h3>
                <p className="mt-3 text-gray-600 dark:text-neutral-400">
                  Maximize your telehealth visits with our expert tips for a smooth, productive experience.
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                  Read more
                  <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

    </AuthWrapper >
  )
}

export default Home
