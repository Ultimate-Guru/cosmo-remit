import React from 'react'

const RecentTransfers = () => {
  return (
            <div className="bg-card p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-foreground">Recent transfers</h2>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between p-3 bg-green-100 rounded-lg">
                  <div className="flex items-center">
                    <img src="https://openui.fly.dev/openui/24x24.svg?text=👤" alt="User Icon" className="w-8 h-8 rounded-full mr-2" />
                    <span className="font-medium text-foreground">Elizabeth Moses</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-muted-foreground">NGN 650,000</span>
                    <span className="bg-green-200 text-green-800 rounded-full px-2 ml-2">Successful</span>
                    <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 ml-2 p-1 rounded">View</button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-100 rounded-lg">
                  <div className="flex items-center">
                    <img src="https://openui.fly.dev/openui/24x24.svg?text=👤" alt="User Icon" className="w-8 h-8 rounded-full mr-2" />
                    <span className="font-medium text-foreground">Aisha Ibrahim</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-muted-foreground">NGN 850,000</span>
                    <span className="bg-green-200 text-green-800 rounded-full px-2 ml-2">Successful</span>
                    <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 ml-2 p-1 rounded">View</button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-100 rounded-lg">
                  <div className="flex items-center">
                    <img src="https://openui.fly.dev/openui/24x24.svg?text=👤" alt="User Icon" className="w-8 h-8 rounded-full mr-2" />
                    <span className="font-medium text-foreground">Murtala Muktar</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-muted-foreground">NGN 850,000</span>
                    <span className="bg-green-200 text-green-800 rounded-full px-2 ml-2">Successful</span>
                    <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 ml-2 p-1 rounded">View</button>
                  </div>
                </div>
              </div>
            </div>
        )
    }

export default RecentTransfers
