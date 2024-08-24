import React from "react";

import loader from "../assets/loader.svg";

const Loader = () => {
    return (
        <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
            <img
                src="https://images.squarespace-cdn.com/content/v1/6400a54c28f23309c062ba89/3a545d1f-e5f3-403a-a8a0-56a4a93849e9/Coin+Flip+Animation+Silver.gif"
                className="w-[300px] h-[300px] object-contain"
            />
            <p className="mt-[2px] font-epilogue font-bold text-[20px] text-white text-center">
                Flipping the coin <br /> Please wait...
            </p>
        </div>
    );
};

export default Loader;

