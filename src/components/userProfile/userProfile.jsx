import React from 'react'
import imgAssets from '../../assets/img/imgAssets'

const UserProfile = () => {
  return (
    <>
        <div className="bg-background text-primary-foreground h-screen flex-row items-center justify-center p-16 rounded-lg shadow-md">
                <div className="flex flex-row gap-6 ml-6 items-center mb-6">
                    <img className="w-16 h-16 rounded-full" src={imgAssets.kabir} alt="User profile picture" />
                        <h2 className="text-2xl font-semibold">Kabir Akinola</h2>
                        <button className="text-destructive-foreground px-6 py-2 ml-[30%]  bg-red-600 text-white rounded-xl hover:scale-110">Edit profile</button>
                </div>
                <h3 className="text-xl font-bold text-muted-foreground">Personal details</h3>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <strong className='text-gray-400 text-md'>First name</strong><p  className="mb-5 my-3 text-muted-foreground text-2xl"> Kabir</p>
                        <strong className='text-gray-400 text-md'>Last name</strong><p  className="mb-5 my-3 text-muted-foreground text-2xl"> Akinola</p>                        
                    </div>
                    <div>
                    <strong className='text-gray-400 text-md'>Country of residence</strong><p  className="mb-5 my-3 text-muted-foreground text-2xl">United Kingdom</p>
                    <strong className='text-gray-400 text-md'>Email address</strong><p  className="mb-5 my-3 text-muted-foreground text-2xl"> Kabirakinola@gmail.com</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-muted-foreground">Transaction limits</h3>
                        <div className="mt-4 flex flex-row gap-10">
                            <div><strong className='text-gray-400 text-md'>Daily limit</strong><p className="text-muted-foreground mb-5 my-3 text-2xl">20,000 UK</p></div>
                            <div><strong className='text-gray-400 text-md'>Yearly limit</strong><p className="text-muted-foreground mb-5 my-3 text-2xl">1,000,000 UK</p></div>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default UserProfile
