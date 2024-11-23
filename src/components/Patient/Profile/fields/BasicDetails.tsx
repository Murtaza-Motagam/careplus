import Input from '@/widgets/Input';
import SingleSelect from '@/widgets/SingleSelect';
import React from 'react'
import useBasicDetail from './hooks/useBasicDetail';
import { citiesOption, genderOption, maritalOption, statesOption } from '@/lib/constant';
import Button from '@/widgets/Button';
import DatePicker from '@/widgets/DatePicker';

interface PersonalDetailProps {
    reloadFunc: () => void;
    closeModal: () => void;
    detail?: any;
}

const BasicDetails: React.FC<PersonalDetailProps> = ({ reloadFunc, closeModal, detail }) => {
    const { hookform, ...dt } = useBasicDetail({ reloadFunc, closeModal, detail });
    const { register, control } = hookform

    return (
        <div className='!w-full grid grid-cols-1 gap-y-3'>
            <SingleSelect
                name="genderNm"
                control={control}
                options={genderOption}
                label="Gender"
                placeholder="Select your gender"
                dropdownClasses='w-[400px]'
            />
            <DatePicker
                name="dateOfBirth"
                label='Date of Birth'
                control={control}
                placeholder="Select Date of Birth"
            />
            <SingleSelect
                name="stateNm"
                control={control}
                options={statesOption}
                label="State"
                placeholder="Select your state"
                dropdownClasses='w-[400px]'
            />
            <SingleSelect
                name="cityNm"
                control={control}
                options={citiesOption}
                label="City"
                placeholder="Select your city"
                dropdownClasses='w-[400px]'
            />
            <Input
                rest={register('occupation')}
                label='Occupation'
                placeholder='Enter your occupation'
                type='text'
                showInline
            />
            <SingleSelect
                name="maritalStatusNm"
                control={control}
                options={maritalOption}
                label="Marital Status"
                placeholder="Select your marital status"
                dropdownClasses='w-[400px]'
            />
            <Button title='Save' onClick={hookform.handleSubmit(dt.onSubmitBasicDetails)} className='dark:text-white mt-4' />
        </div>
    )
}

export default BasicDetails
