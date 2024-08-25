import React from "react";

const Result = ({ result }) => {
    return (
        <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
            {result ? (
                <p className="text-7xl text-green-500 font-bold">You Won</p>
            ) : (
                <p className="text-7xl text-red-500 font-bold">You Lost</p>
            )}
        </div>
    );
};

export default Result;
