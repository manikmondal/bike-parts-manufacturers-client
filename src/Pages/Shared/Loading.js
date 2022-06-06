import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center ">
            <div className="w-40 h-40 border-t-4 border-b-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;