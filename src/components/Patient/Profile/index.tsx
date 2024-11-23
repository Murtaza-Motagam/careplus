'use client'
import Details from '@/components/common/Details'
import AuthWrapper from '@/Wrappers/AuthWrapper'
import { BriefcaseBusiness, BriefcaseMedical, Calendar, ChevronRight, Edit2Icon, EditIcon, Heart, MailIcon, MapPin, PhoneIcon, Receipt, User2Icon } from 'lucide-react'
import React, { useState } from 'react'
import usePatientProfile from './hooks/usePatientProfile'
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"
import AddDetailModal from './AddDetailModal'
import PersonalDetails from './fields/PersonalDetails'
import { backendUrl } from '@/lib/constant'
import TextToImage from '@/widgets/TextToImage'
import BasicDetails from './fields/BasicDetails'
import { dateTimeDisplay } from '@/lib/common'

const Profile = () => {

  const { patientDetail, getPatient } = usePatientProfile();
  const [openPdetail, setOpenPdetail] = useState<boolean>(false);
  const [openBdetail, setOpenBdetail] = useState<boolean>(false);

  const closePersonalDetail = () => {
    setOpenPdetail(false);
  }

  const closeBasicDetail = () => {
    setOpenBdetail(false);
  }


  return (
    <AuthWrapper parentClassName='min-h-[68vh]'>
      <div className="w-full gap-5">
        {/* Main profile */}
        <div className="mx-8">
          {/* Profile image and basic information */}
          <div className="w-full">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-4 mt-5 flex flex-col items-center p-3 border-r">
                <Dialog open={openPdetail} onOpenChange={setOpenPdetail}>
                  <div className="w-full flex items-center justify-between mb-5">
                    <h1 className='text-lg md:text-xl text-left dark:text-gray-200 uppercase font-semibold'>Profile Details</h1>
                    {/* Modal open for personal detail */}
                    <span onClick={() => setOpenPdetail(true)} className=' rounded-full cursor-pointer hover:text-gray-600'>
                      <Edit2Icon size={15} />
                    </span>
                  </div>
                  <AddDetailModal title='Fill Personal Detail'>
                    <PersonalDetails reloadFunc={getPatient} closeModal={closePersonalDetail} detail={patientDetail} />
                  </AddDetailModal>
                </Dialog>
                <div className="w-20 h-20 rounded-full shadow-md shadow-gray-600 border-4 border-blue-800 dark:border-white overflow-hidden">
                  {patientDetail?.personalInfo?.profileImg ? (
                    <img
                      src={`${backendUrl}/${patientDetail?.personalInfo?.profileImg}`}
                      alt='profile'
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <TextToImage className='w-full h-full text-3xl' nameText={patientDetail?.fullName || patientDetail?.emailId} />
                  )}
                </div>
                <h1 className='my-5 text-base md:text-xl font-semibold'>{patientDetail?.personalInfo?.fullName || ''}</h1>
                <div className="w-full grid grid-cols-1 gap-5 border-t pt-7 dark:text-gray-300">
                  <div className="flex text-base items-center gap-x-3 ">
                    <MailIcon size={22} />
                    <span>{patientDetail?.emailId}</span>
                  </div>
                  {patientDetail?.personalInfo?.mobNo && (
                    <div className="flex text-base items-center gap-x-3 ">
                      <PhoneIcon size={22} />
                      <span>{patientDetail?.personalInfo?.mobNo && `+91 - ${patientDetail?.personalInfo?.mobNo}` || 'Not added'}</span>
                    </div>
                  )}
                  {patientDetail?.personalInfo?.address && (
                    <div className="col-span-1">
                      <div className="flex text-base items-center gap-x-3 ">
                        <MapPin size={22} />
                        <span>{patientDetail?.personalInfo?.address || 'Not added'}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Overview section */}
              <div className="col-span-8">
                <Dialog open={openBdetail} onOpenChange={setOpenBdetail}>
                  <div className=" dark:shadow-md rounded-lg p-6">
                    {/* Patient Overview  */}
                    <div className="w-full flex items-center justify-between mb-5">
                      <h1 className='text-lg md:text-xl text-left dark:text-gray-200 uppercase font-semibold'>Patient Overview</h1>
                      {/* Modal open for basic detail */}
                      <span onClick={() => setOpenBdetail(true)} className=' rounded-full cursor-pointer dark:hover:text-gray-600'>
                        <Edit2Icon size={15} />
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Details detail={patientDetail?.personalInfo?.gender} icon={<User2Icon size={15} />} heading='Gender' />
                      <Details detail={dateTimeDisplay(patientDetail?.personalInfo?.dateOfBirth)} icon={<Calendar size={15} />} heading='Date of birth' />
                      <Details detail={patientDetail?.personalInfo?.city} icon={<MapPin size={15} />} heading='City' />
                      <Details detail={patientDetail?.personalInfo?.state} icon={<MapPin size={15} />} heading='State' />
                      <Details detail='India' icon={<MapPin size={15} />} heading='Country' />
                      <Details detail={patientDetail?.personalInfo?.occupation} icon={<BriefcaseBusiness size={15} />} heading='Occupation' />
                      <Details detail={patientDetail?.personalInfo?.maritalStatus} icon={<Heart size={15} />} heading='Marital Status' />
                    </div>
                  </div>

                  {/* Cards */}
                  <div className="w-full grid grid-cols-3 gap-5 border-t pt-8">
                    <div className="flex items-center justify-between gap-x-3 w-full border p-5 rounded-[6px] cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                      <div className="flex items-center justify-start gap-x-3 dark:text-gray-200">
                        <span><Calendar /></span>
                        <span>Total Appointments</span>
                      </div>
                      <span><ChevronRight /></span>
                    </div>

                    <div className="flex items-center justify-between gap-x-3 w-full border p-5 rounded-[6px] cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                      <div className="flex items-center justify-start gap-x-3 dark:text-gray-200">
                        <span><BriefcaseMedical /></span>
                        <span>Certified Doctors</span>
                      </div>
                      <span><ChevronRight /></span>
                    </div>

                    <div className="flex items-center justify-between gap-x-3 w-full border p-5 rounded-[6px] cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                      <div className="flex items-center justify-start gap-x-3 dark:text-gray-200">
                        <span><Receipt /></span>
                        <span>Billings</span>
                      </div>
                      <span><ChevronRight /></span>
                    </div>
                  </div>

                  {/* Basic details modal  */}
                  <AddDetailModal title='Fill basic details'>
                    <BasicDetails reloadFunc={getPatient} closeModal={closeBasicDetail} detail={patientDetail} />
                  </AddDetailModal>
                </Dialog>

              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthWrapper>
  )
}

export default Profile
