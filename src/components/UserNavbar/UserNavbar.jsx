import React from 'react'

const UserNavbar = () => {
    return (
        <div className="flex items-center p-4 bg-background border-b border-border">
            <div className="flex items-center space-x-2">
                <img className="w-8 h-8 rounded-full" src="https://placehold.co/32x32" alt="User Avatar" />
                <span className="text-foreground font-semibold">Kabir Akinola</span>
                <button className="focus:outline-none">
                    <img undefinedhidden="true" alt="Dropdown Icon" src="https://openui.fly.dev/openui/24x24.svg?text=▼" />
                </button>
            </div>
            <button className="ml-auto focus:outline-none">
                <img undefinedhidden="true" alt="Notification Bell" src="https://openui.fly.dev/openui/24x24.svg?text=🔔" />
            </button>
        </div>
    )
}

export default UserNavbar
