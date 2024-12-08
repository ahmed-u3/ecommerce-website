import React from 'react';

const Skeleton = ({ className }) => {
    return (
        <div
        className={`animate-pulse bg-gray-300 rounded ${className}`}
        ></div>
    );
    };

export default Skeleton;