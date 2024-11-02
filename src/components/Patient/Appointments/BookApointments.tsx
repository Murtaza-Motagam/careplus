'use client';
import { appointmentStepper } from '@/lib/constant'
import AuthWrapper from '@/Wrappers/AuthWrapper'
import React from 'react'
import useAppointment from './hooks/useAppointment';
import PatientDetails from './StepForm/PatientDetails';
import ChooseDoctor from './StepForm/ChooseDoctor';
import AppointmentDetails from './StepForm/AppointmentDetails';
import Confirmation from './StepForm/Confirmation';
import Payment from './StepForm/Payment';

const BookApointments = () => {

    const { activeStep, setActiveStep, hookform, onsubmit } = useAppointment();

    return (
        <AuthWrapper>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                {/* Stepper */}
                <div className="col-span-2 p-10 border-r border-gray-400">
                    <ol className="relative border-s border-gray-200 dark:border-gray-700">
                        {appointmentStepper.map((st) => {
                            return (
                                <li key={st.index} className="mb-10 ms-6 cursor-pointer">
                                    <span className={`absolute flex items-center justify-center w-8 h-8 ${activeStep >= st.index && 'bg-green-500 text-white'} rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 hover:opacity-70`}>
                                        {activeStep > st.index ? (
                                            <svg className="w-3.5 h-3.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                            </svg>
                                        ) : st.index}
                                    </span>
                                    <h3 className={`font-bold leading-tight ${activeStep === st.index ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-200'}`}>{st.name}</h3>
                                    <p className={`text-sm ${activeStep === st.index ? 'text-black dark:text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>{st.subtext}</p>
                                </li>
                            )
                        })}
                    </ol>

                </div>
                {/* Form */}
                <form onSubmit={hookform.handleSubmit(onsubmit)} className="col-span-10 mt-10 mx-10">
                    {activeStep === 1 && <PatientDetails hookform={hookform}/>}
                    {activeStep === 2 && <ChooseDoctor />}
                    {activeStep === 3 && <AppointmentDetails />}
                    {activeStep === 4 && <Confirmation />}
                    {activeStep === 5 && <Payment />}
                </form>
            </div>
        </AuthWrapper>
    )
}

export default BookApointments
