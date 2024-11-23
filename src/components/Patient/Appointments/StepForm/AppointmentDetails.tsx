import DatePicker from '@/widgets/DatePicker'
import Input from '@/widgets/Input'
import React from 'react'
import useAppointmentDetails from '../hooks/useAppointmentDetails'
import SingleSelect from '@/widgets/SingleSelect'
import { appointmentOption } from '@/lib/constant'
import Button from '@/widgets/Button'
import Loader from '@/widgets/Loader'
import TextArea from '@/widgets/TextArea'

const AppointmentDetails = ({ appointmentId }: { appointmentId: Number }) => {

    const { loading, hookform, ...dt } = useAppointmentDetails({ appointmentId });
    const { register, handleSubmit, errors, control } = hookform;
    return (
        <form onSubmit={handleSubmit(dt.onsubmit)} className="w-full">
            <h1 className='text-lg md:text-xl mb-2 font-semibold dark:text-gray-200'>Appointment Details</h1>
            <hr />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 mx-auto'>
                <Input
                    rest={register('reasonForVisit')}
                    label='Reason for visit'
                    placeholder='Enter reason for visit'
                    className='rounded-[3px]'
                    type='text'
                    errors={errors?.reasonForVisit?.message}
                />
                <DatePicker
                    name="appointmentDateTime"
                    label='Date of Birth'
                    control={control}
                    placeholder="Select Date of Birth"
                />
                <SingleSelect
                    name="appointmentType"
                    control={control}
                    options={appointmentOption}
                    label="Appointment Type"
                    placeholder="Choose appointment type"
                    error={errors.appointmentType?.message}
                />
                <Input
                    rest={register('location')}
                    label='Address'
                    placeholder='Enter address'
                    className='rounded-[3px]'
                    type='text'
                    errors={errors?.location?.message}
                />
                <div className="w-full">
                    <TextArea
                        rest={register('notes')}
                        label='Additional Notes'
                        placeholder='Want to additional notes ?'
                        className='rounded-[3px]'
                    />
                </div>
            </div>
            <div className="w-full mt-10 flex items-center justify-center">
                <Button
                    type='submit'
                    title='Confirm Details'
                    variant='outline'
                    className='w-1/4 !rounded-[6px] mt-5 px-7 py-6 dark:text-white'
                    icon={loading ? <Loader /> : ''}
                />
            </div>
        </form>
    )
}

export default AppointmentDetails
