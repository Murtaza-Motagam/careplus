import React from 'react'
import usePersonalDetail from './hooks/usePersonalDetail'
import Input from '@/widgets/Input';
import Uploader from '@/widgets/Uploader';
import Button from '@/widgets/Button';
import { DialogClose } from '@/components/ui/dialog';

interface PersonalDetailProps {
  reloadFunc: () => void;
  closeModal: () => void;
  detail?: any;
}

const PersonalDetails: React.FC<PersonalDetailProps> = ({ reloadFunc, closeModal, detail }) => {

  const { hookform, ...dt } = usePersonalDetail({ reloadFunc, closeModal, detail });
  const { register, control } = hookform
  return (
    <div className='!w-full grid grid-cols-1 gap-y-3'>
      <Uploader name='profileImg' control={control} className='mb-4' />
      <Input
        rest={register('firstName')}
        label='First Name'
        placeholder='Enter your first name'
        type='text'
        showInline
      />
      <Input
        rest={register('lastName')}
        label='Last name'
        placeholder='Enter your last name'
        type='text'
        showInline
      />
      <Input
        rest={register('mobNo')}
        label='Mobile Number'
        placeholder='Enter your mobile number'
        type='number'
        showInline
      />
      <Input
        rest={register('address')}
        label='Address'
        placeholder='Enter your address'
        type='text'
        showInline
      />
      <Button title='Save' onClick={hookform.handleSubmit(dt.onSubmitPersonalDetail)} className='dark:text-white mt-4' />
    </div>
  )
}

export default PersonalDetails
