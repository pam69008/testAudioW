import React from 'react';

export const Results = ({formData}) => {
    return (
        <div>
        
            <h1 className="text-center p-4">{formData.firstName} {formData.lastName}</h1>
        </div>
    )
}