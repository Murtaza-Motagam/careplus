'use client'
import { statistics, theme_type } from '@/lib/constant';
import AuthWrapper from '@/Wrappers/AuthWrapper'
import { BriefcaseMedical, Cross, ShieldCheck } from 'lucide-react'
import { useTheme } from 'next-themes';
import React, { ElementType } from 'react'
import CountUp from 'react-countup';

interface Feature {
    name: string;
    description: string;
    icon?: ElementType;
}

const features: Feature[] = [
    {
        name: 'Effortless Appointment Scheduling',
        description:
            'Seamlessly book and manage appointments with user-friendly tools designed for patients and healthcare providers.',
        icon: BriefcaseMedical,
    },
    {
        name: 'Secure Patient Data',
        description: 'Ensure the highest level of data protection and HIPAA compliance for patient records with advanced security protocols.',
        icon: ShieldCheck,
    },
    {
        name: 'Reliable Medical Records Backup',
        description: 'Safeguard vital medical information with automatic backups, ensuring easy access and continuity of care.',
        icon: Cross,
    },
]

const About = () => {

    const { theme } = useTheme();

    return (
        <AuthWrapper parentClassName='!min-h-[90vh]'>
            <div className="container mx-auto">

                {/* Hero Section */}
                <div className="overflow-hidden pt-10 pb-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="lg:pr-8 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <h2 className="text-base/7 font-semibold text-primary">Careplus Telehealth</h2>
                                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
                                        Deliver Care Faster
                                    </p>
                                    <p className="mt-6 text-lg/8 dark:text-gray-400">
                                        Expedite critical processes and enhance patient outcomes with innovative healthcare solutions.
                                    </p>
                                    <dl className="mt-10 max-w-xl space-y-8 text-base/7 dark:text-gray-400 lg:max-w-none">
                                        {features.map((feature) => (
                                            <div key={feature.name} className="relative pl-9">
                                                <dt className="inline font-semibold dark:text-gray-200">
                                                    {feature.icon && <feature.icon className="absolute left-1 top-1 size-5 text-primary" />}
                                                    {feature.name}
                                                </dt>{' '}
                                                <dd className="inline">{feature.description}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                            <img
                                alt="Product screenshot"
                                src="https://images.pexels.com/photos/9951386/pexels-photo-9951386.jpeg?auto=compress&cs=tinysrgb&w=640&h=640&dpr=1"
                                className="rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
                            />
                        </div>
                    </div>
                </div>

                {/* Integration Section */}
                <div className="pb-10">
                    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="text-center text-base/7 font-semibold text-primary">Advance Future</h2>
                        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight sm:text-5xl">
                            Everything you need to know about <span className="text-primary uppercase">careplus</span>
                        </p>
                        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                            <div className="relative lg:row-span-2">
                                <div className="absolute inset-px rounded-lg lg:rounded-l-[2rem]"></div>
                                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                    <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                        <p className="mt-2 text-lg font-medium tracking-tight  max-lg:text-center">
                                            Mobile Access for Patients
                                        </p>
                                        <p className="mt-2 max-w-lg text-sm/6 max-lg:text-center dark:text-gray-300">
                                            Empower patients to manage their healthcare anytime, anywhere, with a mobile-friendly platform designed for seamless accessibility.
                                        </p>
                                    </div>
                                    <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                        <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                            <img
                                                className="size-full object-cover object-top"
                                                src="https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                            </div>
                            <div className="relative max-lg:row-start-1">
                                <div className="absolute inset-px rounded-lg max-lg:rounded-t-[2rem]"></div>
                                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                        <p className="mt-2 text-lg font-medium tracking-tight max-lg:text-center">Optimized Performance</p>
                                        <p className="mt-2 max-w-lg text-sm/6 dark:text-gray-300 max-lg:text-center">
                                            Deliver fast, reliable healthcare services with a system built for efficiency and quick response, ensuring uninterrupted care.
                                        </p>
                                    </div>
                                    <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                        <img
                                            className="w-full max-lg:max-w-xs"
                                            src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                            </div>
                            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                                <div className="absolute inset-px rounded-lg"></div>
                                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                        <p className="mt-2 text-lg font-medium tracking-tight max-lg:text-center">Integrated APIs</p>
                                        <p className="mt-2 max-w-lg text-sm/6 dark:text-gray-300 max-lg:text-center">
                                            Leverage powerful APIs to connect seamlessly with EHR systems, labs, and pharmacies, streamlining the healthcare workflow.
                                        </p>
                                    </div>
                                    <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                                        <img
                                            className="h-[min(152px,40cqw)] object-cover"
                                            src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                            </div>
                            <div className="relative lg:row-span-2">
                                <div className="absolute inset-px rounded-lg max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                                    <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                        <p className="mt-2 text-lg font-medium tracking-tight max-lg:text-center">
                                            Powerful APIs
                                        </p>
                                        <p className="mt-2 max-w-lg text-sm/6 dark:text-gray-300 max-lg:text-center">
                                            Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                                        </p>
                                    </div>
                                    <div className="relative min-h-[30rem] w-full grow">
                                        <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                                            <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                                <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                                    <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                                        NotificationSetting.jsx
                                                    </div>
                                                    <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                                                </div>
                                            </div>
                                            <div className="px-6 pb-14 pt-6">{/* Your code example */}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trusted companies Section */}
                <div className="pb-10 mt-20">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="text-center text-lg md:text-2xl font-semibold">
                            Trusted by the world&apos;s most innovative teams
                        </h2>
                        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                            <img
                                alt="Transistor"
                                src={`https://tailwindui.com/plus/img/logos/158x48/${theme === theme_type.light ? 'transistor-logo-gray-900.svg' : 'transistor-logo-white.svg'}`}
                                width={158}
                                height={48}
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            />
                            <img
                                alt="Reform"
                                src={`https://tailwindui.com/plus/img/logos/158x48/${theme === theme_type.light ? 'reform-logo-gray-900.svg' : 'reform-logo-white.svg'}`}
                                width={158}
                                height={48}
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            />
                            <img
                                alt="Tuple"
                                src={`https://tailwindui.com/plus/img/logos/158x48/${theme === theme_type.light ? 'tuple-logo-gray-900.svg' : 'tuple-logo-white.svg'}`}
                                width={158}
                                height={48}
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            />
                            <img
                                alt="SavvyCal"
                                src={`https://tailwindui.com/plus/img/logos/158x48/${theme === theme_type.light ? 'savvycal-logo-gray-900.svg' : 'savvycal-logo-white.svg'}`}
                                width={158}
                                height={48}
                                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                            />
                            <img
                                alt="Statamic"
                                src={`https://tailwindui.com/plus/img/logos/158x48/${theme === theme_type.light ? 'statamic-logo-gray-900.svg' : 'statamic-logo-white.svg'}`}
                                width={158}
                                height={48}
                                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                            />
                        </div>
                    </div>
                </div>

                {/* Statistics */}

                <section className="">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4"><span className="text-primary font-semibold">Careplus</span> Healthcare Insights at a Glance</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700 dark:text-gray-300">Discover key metrics and trends that drive better patient outcomes and operational efficiency.</p>
                        </div>
                        <div className="flex flex-wrap -m-4 text-center">
                            {statistics.map((st, ind) => {
                                return (
                                    <div key={ind} className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div className="shadow-md shadow-gray-400 px-4 py-6 rounded-2xl">
                                            {st.icon && <st.icon size={50} className='mx-auto mb-2 text-primary' /> }
                                            <h2 className="font-bold text-3xl"> <CountUp end={st.value} duration={1.5} separator=","
                                                formattingFn={(value) => `${(value / 1000).toFixed(1)}k`} /></h2>
                                            <p className="leading-relaxed">{st.title}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

            </div>
        </AuthWrapper>
    )
}

export default About
