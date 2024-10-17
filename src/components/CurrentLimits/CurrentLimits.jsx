import React from 'react';

const CurrentLimits = () => {

    return (
        <div className="bg-card p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-foreground">Current limits</h2>
            <div className="flex justify-between mt-2">
            <div>
                <span className="text-muted">Daily limit</span><br />
                <span className="text-foreground">20,000 UK</span>
            </div>
            <div>
                <span className="text-muted">Yearly limit</span><br />
                <span className="text-foreground">1,000,000 UK</span>
            </div>
            </div>
            <p className="mt-4 text-muted-foreground">
            If you want higher limits, temporarily or permanently, <a href="#" className="text-destructive">click here</a>
            </p>
        </div>
    )
}

export default CurrentLimits
