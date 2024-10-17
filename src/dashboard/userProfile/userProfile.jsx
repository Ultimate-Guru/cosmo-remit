/* eslint-disable no-unused-vars */
import React from 'react'
import imgAssets from '../../assets/img/imgAssets'

const UserProfile = () => {
    return (
        <>
            <div className="bg-background text-primary-foreground h-screen flex-row items-center justify-center p-6 rounded-lg shadow-md">
                {/* <div className="max-w-md mx-auto bg-card p-6 rounded-lg shadow-md"> */}
                <div className="flex items-center mb-6">
                    <img className="w-16 h-16 rounded-full" src={imgAssets.kabir} alt="User profile picture" />
                    <div className="flex flex-row items-end ml-6">
                        <h2 className="text-4xl font-semibold">Kabir Akinola</h2>
                        <div className='bg-red-600 text-white rounded-xl hover:scale-110'>
                            <button className="text-destructive-foreground  px-6 py-2 rounded">Edit profile</button>
                        </div>
                    </div>
                </div>
                <h3 className="text-md font-medium text-muted-foreground">Personal details</h3>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <strong className='text-gray-400 text-xl'>First name</strong><p className="mb-5 my-3 text-muted-foreground text-2xl"> Kabir</p>
                        <strong className='text-gray-400 text-xl'>Last name</strong><p className="mb-5 my-3 text-muted-foreground text-2xl"> Akinola</p>
                    </div>
                    <div>
                        <strong className='text-gray-400 text-xl'>Country of residence</strong><p className="mb-5 my-3 text-muted-foreground text-2xl">United Kingdom</p>
                        <strong className='text-gray-400 text-xl'>Email address</strong><p className="mb-5 my-3 text-muted-foreground text-2xl"> Kabirakinola@gmail.com</p>
                    </div>
                    <div>
                        <h3 className="text-md font-medium text-muted-foreground">Transaction limits</h3>
                        <div className="mt-4">
                            <p className="text-muted-foreground mb-2"><strong>Daily limit</strong> 20,000 UK</p>
                            <p className="text-muted-foreground mb-2"><strong>Yearly limit</strong> 1,000,000 UK</p>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default UserProfile
