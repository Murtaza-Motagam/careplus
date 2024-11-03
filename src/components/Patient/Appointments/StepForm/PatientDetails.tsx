'use client';
import Button from '@/widgets/Button';
import Input from '@/widgets/Input'
import React, { useState } from 'react'
import usePatientDetail from '../hooks/usePatientDetail';
import DatePicker from '@/widgets/DatePicker';
import dynamic from 'next/dynamic';
import { genderOption } from '@/lib/constant';
const SingleSelect = dynamic(() => import('@/widgets/SingleSelect'), { ssr: false });

const PatientDetails: React.FC = () => {
  const { hookform, onsubmit } = usePatientDetail();
  const { register, handleSubmit, errors, control } = hookform;

  return (
    <form onSubmit={handleSubmit(onsubmit)} className="w-full">
      <h1 className='text-lg md:text-xl mb-2 font-semibold dark:text-gray-200'>Patient Details</h1>
      <hr />
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 mx-auto'>
        <Input
          rest={register('fullName')}
          label='Full name'
          placeholder='Enter full name'
          className='rounded-[3px]'
          type='text'
          errors={errors?.fullName?.message}
        />
        <Input
          rest={register('email')}
          label='Email'
          placeholder='Enter your email'
          className='rounded-[3px]'
          type='email'
          errors={errors?.email?.message}
        />
        <Input
          rest={register('mobNo')}
          label='Contact number'
          placeholder='Enter mobile number'
          className='rounded-[3px]'
          type='number'
          errors={errors?.mobNo?.message}
        />
        <DatePicker
          name="dob"
          label='Date of Birth'
          control={control}
          placeholder="Select Date of Birth"
        />
        {/* <SingleSelect
          label='Gender'
          options={genderOption}
          placeholder='Select Gender'
          rest={register('gender')}
          errors={errors?.gender?.message}
        /> */}
      </div>
      <Button
          type='submit'
          title='Next'
          className='rounded-sm mt-5 dark:text-white'
        />
    </form>
  )
}

export default PatientDetails
