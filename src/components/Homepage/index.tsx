'use client'
import HrTag from '@/components/ui/HrTag'
import {  hotelCards } from '@/lib/common'
import PageLoaderPrimary from '@/widgets/PageLoaderPrimary'
import AuthWrapper from '@/Wrappers/AuthWrapper'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Home = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  return (
    <AuthWrapper>
      {loading ? (
        <PageLoaderPrimary />
      ) : (
        <div>
          {/* Hero */}

          {/* Card Component */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto !mt-20">
            <h1 className='text-2xl md:text-4xl mb-5 text-center font-bold uppercase'>Explore Our Latest Insights on Travel and Hospitality</h1>
            <HrTag />
            <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10 mt-10">
              {hotelCards.map((card, index) => {
                return (
                  <Link key={index} className="group block rounded-xl overflow-hidden focus:outline-none" href="/">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                      <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                        <Image
                          className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out absolute top-0 left-0 object-cover rounded-xl"
                          src={card.image}
                          alt="Telehealth Blog Image"
                          fill
                        />
                      </div>
                      <div className="grow">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                          {card.title}
                        </h3>
                        <p className="mt-3 text-gray-600 dark:text-neutral-400">
                          {card.description}
                        </p>
                        <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-primary decoration-2 group-hover:underline group-focus:underline font-medium">
                          Read more
                          <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </p>
                      </div>
                    </div>
                  </Link>
                )
              })}

            </div>
          </div>
        </div>
      )}
    </AuthWrapper >
  )
}

export default Home
