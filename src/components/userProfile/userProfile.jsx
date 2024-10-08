import React from 'react'
import imgAssets from '../../assets/img/imgAssets'

const userProfile = () => {
  return (
    <>
      <div className="bg-background text-primary-foreground">
            <div className="min-h-screen flex items-center justify-center">
                <div className="max-w-md mx-auto bg-card p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-6">
                        <img className="w-16 h-16 rounded-full" src={imgAssets.kabir} alt="User profile picture" />
                        <div className="ml-6">
                            <h2 className="text-lg font-semibold">Kabir Akinola</h2>
                            <button className="bg-destructive text-destructive-foreground hover:bg-destructive/80 px-4 py-2 rounded">Edit profile</button>
                        </div>
                    </div>
                    <h3 className="text-md font-medium text-muted-foreground">Personal details</h3>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-muted-foreground mb-2"><strong>First name</strong> Kabir</p>
                            <p className="text-muted-foreground mb-2"><strong>Last name</strong> Akinola</p>
                            <p className="text-muted-foreground mb-2"><strong>Country of residence</strong> United Kingdom</p>
                            <p className="text-muted-foreground mb-2"><strong>Email address</strong> Kabirakinola@gmail.com</p>
                        </div>
                        <div>
                            <h3 className="text-md font-medium text-muted-foreground">Transaction limits</h3>
                            <div className="mt-4">
                                <p className="text-muted-foreground mb-2"><strong>Daily limit</strong> 20,000 UK</p>
                                <p className="text-muted-foreground mb-2"><strong>Yearly limit</strong> 1,000,000 UK</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default userProfile
