import Button from '@/widgets/Button'
import Input from '@/widgets/Input'
import Link from 'next/link'
import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="mt-autow-full border-t-2">
            <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    <div className="col-span-full lg:col-span-1">
                        <Link href='/' className="flex-none text-xl font-semibold focus:outline-none focus:opacity-80">Support</Link>
                        <div className="mt-3 grid space-y-3">
                            <p><Link href='/' className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200">Help Center</Link></p>
                            <p><Link href='/' className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200">FAQ</Link></p>
                            <p><Link href='/' className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200">Privacy Policy</Link></p>
                            <p><Link href='/' className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200">Terms and condition</Link></p>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-semibold">Product</h4>
                        <div className="mt-3 grid space-y-3">
                            <p><Link href='/' className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200">Services</Link></p>
                            <p><Link href='/' className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200">Virtual Consultations</Link></p>
                            <p><Link href='/' className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200">Patient Portal</Link></p>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-semibold">Company</h4>
                        <div className="mt-3 grid space-y-3">
                            <p><Link href='/' className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200">About us</Link></p>
                            <p><Link href='/' className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200">Blog</Link></p>
                            <p>
                                <Link href='/' className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200">Careers</Link>
                                <span className="inline-block ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">We're hiring</span>
                            </p>
                            <p><Link href='/' className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200">Partnerships</Link></p>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <h4 className="font-semibold">Stay up to date</h4>
                        <form>
                            <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 rounded-lg p-2">
                                <div className="w-full">
                                    <label htmlFor="hero-input" className="sr-only">Subscribe</label>
                                    <Input
                                        placeholder='Enter your email'
                                        type='email'
                                    />
                                </div>
                                <Button title='Subscribe' className='rounded-lg mt-1.5 dark:text-gray-200'/>
                            </div>
                            <p className="mt-3 text-sm text-gray-400">New UI kits or big discounts. Never spam.</p>
                        </form>
                    </div>
                </div>

                <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-400 dark:text-neutral-400">© 2024 Careplus.</p>
                    </div>

                    <div>
                        <Link href='/' className="size-10 cursor-pointer rounded-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none">
                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                        </Link>
                        <Link href='/' className="size-10 cursor-pointer rounded-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none">
                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                            </svg>
                        </Link>
                        <Link href='/' className="size-10 cursor-pointer rounded-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none">
                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.017 4.382A3.323 3.323 0 0 1 .64 6.575v.041A3.288 3.288 0 0 0 3.277 9.7a3.203 3.203 0 0 1-.865.115c-.213 0-.418-.02-.62-.057a3.283 3.283 0 0 0 3.066 2.277A6.588 6.588 0 0 1 .78 13.58 6.32 6.32 0 0 1 0 13.545 9.29 9.29 0 0 0 5.026 15z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
