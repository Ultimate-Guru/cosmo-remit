/* eslint-disable no-unused-vars */
import React from 'react'
import imgAssets from '../../assets/img/imgAssets'

const UserProfile = () => {
    return (
        <>
            <div className="bg-background text-primary-foreground h-screen flex flex-col items-center justify-center p-6 rounded-lg shadow-md">
                <div className="max-w-md mx-auto bg-card p-6 rounded-lg shadow-md">
                    {/* Profile Section */}
                    <div className="flex items-center mb-6">
                        <img className="w-16 h-16 rounded-full" src={imgAssets.kabir} alt="User profile picture" />
                        <div className="ml-6">
                            <h2 className="text-4xl font-semibold">Kabir Akinola</h2>
                            <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-xl hover:scale-110 transition-transform">
                                Edit Profile
                            </button>
                        </div>
                    </div>

                    {/* Personal Details Section */}
                    <h3 className="text-xl font-bold text-muted-foreground">Personal Details</h3>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <strong className="text-gray-400 text-xl">First Name</strong>
                            <p className="mb-5 my-3 text-muted-foreground text-2xl">Kabir</p>
                            <strong className="text-gray-400 text-xl">Last Name</strong>
                            <p className="mb-5 my-3 text-muted-foreground text-2xl">Akinola</p>
                        </div>
                        <div>
                            <strong className="text-gray-400 text-xl">Country of Residence</strong>
                            <p className="mb-5 my-3 text-muted-foreground text-2xl">United Kingdom</p>
                            <strong className="text-gray-400 text-xl">Email Address</strong>
                            <p className="mb-5 my-3 text-muted-foreground text-2xl">Kabirakinola@gmail.com</p>
                        </div>
                    </div>

                    {/* Transaction Limits Section */}
                    <h3 className="text-xl font-bold text-muted-foreground mt-8">Transaction Limits</h3>
                    <div className="mt-4 flex flex-row gap-10">
                        <div>
                            <strong className="text-gray-400 text-md">Daily Limit</strong>
                            <p className="text-muted-foreground mb-5 my-3 text-2xl">20,000 UK</p>
                        </div>
                        <div>
                            <strong className="text-gray-400 text-md">Yearly Limit</strong>
                            <p className="text-muted-foreground mb-5 my-3 text-2xl">1,000,000 UK</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserProfile;