'use client';
import Button from '@/widgets/Button';
import Input from '@/widgets/Input'
import React from 'react'

interface PatientDetailsProps {
  hookform: {
    register: any;
    errors: any;
  };
}

const PatientDetails: React.FC<PatientDetailsProps> = ({ hookform }) => {
  const { register, errors } = hookform;

  return (
    <div className="w-full">
      <h1 className='text-lg md:text-xl mb-2 font-semibold'>Patient Details</h1>
      <hr />
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
        <Input
          rest={register('fullName')}
          placeholder='Enter full name'
          className='rounded-[3px]'
          type='text'
          errors={errors?.fullName?.message}
        />
        <Button
          type='button'
          title='Next'
          // onClick={handleNext}
          className='w-full rounded-sm dark:text-white'
        />
      </div>
    </div>
  )
}

export default PatientDetails
