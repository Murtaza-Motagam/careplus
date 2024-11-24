'use client'
import Details from '@/components/common/Details'
import AuthWrapper from '@/Wrappers/AuthWrapper'
import { BriefcaseBusiness, BriefcaseMedical, Calendar, ChevronRight, Cross, Edit2Icon, EditIcon, HandHeart, Heart, MailIcon, MapPin, PhoneIcon, Receipt, User2Icon } from 'lucide-react'
import React, { useState } from 'react'
import usePatientProfile from './hooks/usePatientProfile'
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"
import AddDetailModal from './AddDetailModal'
import PersonalDetails from './fields/PersonalDetails'
import { backendUrl, profileDetailContainer } from '@/lib/constant'
import TextToImage from '@/widgets/TextToImage'
import BasicDetails from './fields/BasicDetails'
import { dateTimeDisplay } from '@/lib/common'
import PageLoader from '@/widgets/PageLoader'
import BoxDrawer from '@/widgets/BoxDrawer'

export const patientProfileDetails = {
  medicalDetails: 'medicalDetails',
  lifeStyleDetails: 'lifeStyleDetails',
  insuranceDetails: 'insuranceDetails',
}

const Profile = () => {

  const { patientDetail, getPatient, loading, ...dt } = usePatientProfile();
  const [openPdetail, setOpenPdetail] = useState<boolean>(false);
  const [openBdetail, setOpenBdetail] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('');

  const closePersonalDetail = () => {
    setOpenPdetail(false);
  }

  const closeBasicDetail = () => {
    setOpenBdetail(false);
  }

  const handleDetailOpen = (type: any) => {
    dt?.setDetailModal((prevType) => ({
      ...prevType,
      [type]: true
    }));
    setModalType(type);
  }

  const handleDetailClose = (type: any) => {
    dt?.setDetailModal((prevType) => ({
      ...prevType,
      [type]: false
    }));
    setModalType('');
  }

  if (loading) {
    return (
      <PageLoader />
    )
  }

  else {

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
                      <h1 className='text-lg md:text-xl text-left dark:text-gray-200 font-semibold'>Profile Details</h1>
                      {/* Modal open for personal detail */}
                      <span onClick={() => setOpenPdetail(true)} className=' rounded-full cursor-pointer hover:text-primary'>
                        <Edit2Icon size={15} />
                      </span>
                    </div>
                    <AddDetailModal title='Fill Personal Detail'>
                      <PersonalDetails reloadFunc={getPatient} closeModal={closePersonalDetail} detail={patientDetail} />
                    </AddDetailModal>
                  </Dialog>
                  <div className="w-20 h-20 rounded-full shadow-md shadow-gray-600 overflow-hidden">
                    {patientDetail?.personalInfo?.profileImg ? (
                      <img
                        src={`${backendUrl}${patientDetail?.personalInfo?.profileImg}`}
                        alt='profile'
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <TextToImage className='w-full h-full text-3xl' nameText={patientDetail?.fullName || patientDetail?.emailId} />
                    )}
                  </div>
                  <h1 className='my-5 text-base md:text-xl font-semibold'>{patientDetail?.personalInfo?.fullName || ''}</h1>
                  <div className="w-full grid grid-cols-1 gap-5 border-t pt-7 dark:text-gray-300">
                    {patientDetail?.emailId && (
                      <div className="flex text-base items-center gap-x-3 ">
                        <MailIcon size={22} className='text-primary' />
                        <span>{patientDetail?.emailId}</span>
                      </div>
                    )}
                    {patientDetail?.personalInfo?.mobNo && (
                      <div className="flex text-base items-center gap-x-3 ">
                        <PhoneIcon size={22} className='text-primary' />
                        <span>{patientDetail?.personalInfo?.mobNo && `+91 - ${patientDetail?.personalInfo?.mobNo}` || 'Not added'}</span>
                      </div>
                    )}
                    {patientDetail?.personalInfo?.address && (
                      <div className="col-span-1">
                        <div className="flex text-base items-center gap-x-3 ">
                          <MapPin size={22} className='text-primary' />
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
                        <h1 className='text-lg md:text-xl text-left dark:text-gray-200 font-semibold'>Overview</h1>
                        {/* Modal open for basic detail */}
                        <span onClick={() => setOpenBdetail(true)} className=' rounded-full cursor-pointer hover:text-primary'>
                          <Edit2Icon size={15} />
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Details detail={patientDetail?.personalInfo?.gender} icon={<User2Icon size={15} className='text-primary' />} heading='Gender' />
                        <Details detail={dateTimeDisplay(patientDetail?.personalInfo?.dateOfBirth)} icon={<Calendar size={15} className='text-primary' />} heading='Date of birth' />
                        <Details detail={patientDetail?.personalInfo?.city} icon={<MapPin size={15} className='text-primary' />} heading='City' />
                        <Details detail={patientDetail?.personalInfo?.state} icon={<MapPin size={15} className='text-primary' />} heading='State' />
                        <Details detail='India' icon={<MapPin size={15} className='text-primary' />} heading='Country' />
                        <Details detail={patientDetail?.personalInfo?.occupation} icon={<BriefcaseBusiness size={15} className='text-primary' />} heading='Occupation' />
                        <Details detail={patientDetail?.personalInfo?.maritalStatus} icon={<Heart size={15} className='text-primary' />} heading='Marital Status' />
                      </div>
                    </div>

                    {/* Cards */}
                    <div className="border-t pt-5">
                      <h1 className='text-lg md:text-xl text-left mb-5 dark:text-gray-200 font-semibold'>Other Details</h1>
                      <div className="w-full grid grid-cols-3 gap-5">
                        {profileDetailContainer.map((dt, ind) => {
                          return (
                            <div onClick={() => handleDetailOpen(dt.type)} key={ind} className="flex items-center justify-between gap-x-3 w-full border p-5 rounded-[6px] cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                              <div className="flex items-center justify-start gap-x-3 dark:text-gray-200">
                                {dt.icon && <span><dt.icon className='text-primary' /></span>}
                                <span>{dt.name}</span>
                              </div>
                              <span><ChevronRight className='text-primary' /></span>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Basic details modal  */}
                    <AddDetailModal title='Fill basic details'>
                      <BasicDetails reloadFunc={getPatient} closeModal={closeBasicDetail} detail={patientDetail} />
                    </AddDetailModal>
                  </Dialog>

                  {/* Detail Modals */}

                  <BoxDrawer
                    open={dt.detailModal.medicalDetails}
                    onClose={() => handleDetailClose(modalType)}
                    type={patientProfileDetails.medicalDetails}
                  />

                  <BoxDrawer
                    open={dt.detailModal.lifeStyleDetails}
                    onClose={() => handleDetailClose(modalType)}
                    type={patientProfileDetails.lifeStyleDetails}
                  />

                  <BoxDrawer
                    open={dt.detailModal.insuranceDetails}
                    onClose={() => handleDetailClose(modalType)}
                    type={patientProfileDetails.insuranceDetails}
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </AuthWrapper>
    )
  }
}

export default Profile
