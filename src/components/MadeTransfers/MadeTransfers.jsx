import React from 'react'

const MadeTransfers = () => {
  return (
    <div className="bg-card p-4 rounded-lg shadow-md">
        <div className="flex items-center">
            <div className="bg-destructive text-white rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-lg">20</span>
            </div>
            <div className="ml-4">
                <h2 className="text-lg font-semibold">Transfers made</h2>
            </div>
        </div>
    </div>
  )
}

export default MadeTransfers
