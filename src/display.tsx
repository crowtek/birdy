import React, { useState, useEffect } from 'react';

export const Display: React.FC = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setOffset(offset + 1);
    }, 50);
    return () => clearInterval(interval);
    }, [offset]);


    return(
        <div className='display'>
        </div>
    );
};
